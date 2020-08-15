import { transpile } from "typescript";
import gl = require("gl");
import {
  float,
  vec4,
  Expression,
  Vec4Primitive,
  compileJavascript,
  compileTypeScript,
  compileGlsl,
  conditional,
  x,
  y,
  z,
  w,
} from ".";
import { Scenario } from "./scenario/unit";
import { literalsScenarios } from "./literals/unit";
import { vec2Scenarios } from "./constructors/vec2/unit";
import { vec3Scenarios } from "./constructors/vec3/unit";
import { vec4Scenarios } from "./constructors/vec4/unit";
import { bvec2Scenarios } from "./constructors/bvec2/unit";
import { bvec3Scenarios } from "./constructors/bvec3/unit";
import { bvec4Scenarios } from "./constructors/bvec4/unit";

const scenarios: ReadonlyArray<Scenario> = [
  ...literalsScenarios,
  ...vec2Scenarios,
  ...vec3Scenarios,
  ...vec4Scenarios,
  ...bvec2Scenarios,
  ...bvec3Scenarios,
  ...bvec4Scenarios,
];

const glContext = gl(1, 1);
const vertexShader = glContext.createShader(glContext.VERTEX_SHADER);

if (vertexShader === null) {
  throw new Error("Failed to create a vertex shader.");
} else {
  const arrayBuffer = glContext.createBuffer();
  if (arrayBuffer === null) {
    throw new Error("Failed to create an array buffer.");
  } else {
    glContext.bindBuffer(glContext.ARRAY_BUFFER, arrayBuffer);
    glContext.bufferData(
      glContext.ARRAY_BUFFER,
      new Float32Array([-1, -1, 0, 1, -1, 1, 0, 1, 1, 1, 0, 1, 1, -1, 0, 1]),
      glContext.STATIC_DRAW
    );

    const elementArrayBuffer = glContext.createBuffer();
    if (elementArrayBuffer === null) {
      throw new Error("Failed to create an element array buffer.");
    } else {
      glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, elementArrayBuffer);
      glContext.bufferData(
        glContext.ELEMENT_ARRAY_BUFFER,
        new Uint8Array([0, 1, 2, 2, 3, 0]),
        glContext.STATIC_DRAW
      );

      glContext.shaderSource(
        vertexShader,
        "attribute vec4 position; void main() { gl_Position = position; }"
      );
      glContext.compileShader(vertexShader);

      if (
        !glContext.getShaderParameter(vertexShader, glContext.COMPILE_STATUS)
      ) {
        throw new Error(
          `Failed to compile the vertex shader; ${glContext.getShaderInfoLog(
            vertexShader
          )}`
        );
      } else {
        for (const scenario of scenarios) {
          const description = scenario[0];
          const expression = scenario[1];
          const expected = scenario[2];

          describe(description, () => {
            // todo: reuse
            it("executes as TypeScript", () => {
              const compiledTypeScript = compileTypeScript(expression);
              const wrappedInFunctionForTranspilation = `function unusedName() { ${compiledTypeScript} }`;
              const transpiledToJavascript = transpile(
                wrappedInFunctionForTranspilation
              );
              const unwrappedFunctionBody = (transpiledToJavascript.match(
                /^function unusedName\(\) { (.*) }\r\n$/
              ) as RegExpMatchArray)[1];
              const func = new Function(unwrappedFunctionBody);
              const actual = func();

              expect(actual).toEqual(
                expected.length === 1 ? expected[0] : expected
              );
            });

            it("executes as Javascript", () => {
              const actual = new Function(compileJavascript(expression))();

              expect(actual).toEqual(
                expected.length === 1 ? expected[0] : expected
              );
            });

            it("executes as GLSL", () => {
              let expandedExpression: Expression<Vec4Primitive>;

              switch (expression.primitive) {
                case "float":
                  expandedExpression = vec4(
                    expression,
                    float(0),
                    float(0),
                    float(0)
                  );
                  break;

                case "vec2":
                  expandedExpression = vec4(expression, float(0), float(0));
                  break;

                case "vec3":
                  expandedExpression = vec4(expression, float(0));
                  break;

                case "vec4":
                  expandedExpression = expression;
                  break;

                case "bool":
                  expandedExpression = vec4(
                    conditional(expression, float(1), float(0)),
                    float(0),
                    float(0),
                    float(0)
                  );
                  break;

                case "bvec2":
                  expandedExpression = vec4(
                    conditional(x(expression), float(1), float(0)),
                    conditional(y(expression), float(1), float(0)),
                    float(0),
                    float(0)
                  );
                  break;

                case "bvec3":
                  expandedExpression = vec4(
                    conditional(x(expression), float(1), float(0)),
                    conditional(y(expression), float(1), float(0)),
                    conditional(z(expression), float(1), float(0)),
                    float(0)
                  );
                  break;

                case "bvec4":
                  expandedExpression = vec4(
                    conditional(x(expression), float(1), float(0)),
                    conditional(y(expression), float(1), float(0)),
                    conditional(z(expression), float(1), float(0)),
                    conditional(w(expression), float(1), float(0))
                  );
                  break;
              }

              const compiledGlsl = compileGlsl(expandedExpression);
              let fragmentShader: null | WebGLShader = null;
              let program: null | WebGLProgram = null;
              try {
                fragmentShader = glContext.createShader(
                  glContext.FRAGMENT_SHADER
                );
                if (fragmentShader === null) {
                  fail("Failed to create a fragment shader.");
                } else {
                  glContext.shaderSource(fragmentShader, compiledGlsl);
                  glContext.compileShader(fragmentShader);

                  if (
                    !glContext.getShaderParameter(
                      fragmentShader,
                      glContext.COMPILE_STATUS
                    )
                  ) {
                    fail(
                      `Failed to compile the fragment shader; ${glContext.getShaderInfoLog(
                        fragmentShader
                      )}`
                    );
                  } else {
                    program = glContext.createProgram();

                    if (program === null) {
                      fail("Failed to create a program.");
                    } else {
                      glContext.attachShader(program, vertexShader);
                      glContext.attachShader(program, fragmentShader);

                      glContext.linkProgram(program);

                      if (
                        !glContext.getProgramParameter(
                          program,
                          glContext.LINK_STATUS
                        )
                      ) {
                        fail(
                          `Failed to link the program; ${glContext.getProgramInfoLog(
                            program
                          )}`
                        );
                      } else {
                        glContext.useProgram(program);

                        const position = glContext.getAttribLocation(
                          program,
                          "position"
                        );

                        glContext.enableVertexAttribArray(position);

                        glContext.vertexAttribPointer(
                          position,
                          4,
                          glContext.FLOAT,
                          false,
                          0,
                          0
                        );

                        glContext.drawElements(
                          glContext.TRIANGLES,
                          6,
                          glContext.UNSIGNED_BYTE,
                          0
                        );

                        const actual = new Uint8Array(4);

                        glContext.readPixels(
                          0,
                          0,
                          1,
                          1,
                          glContext.RGBA,
                          glContext.UNSIGNED_BYTE,
                          actual
                        );

                        const error = glContext.getError();

                        if (error !== glContext.NO_ERROR) {
                          fail(`GL error ${error}.`);
                        } else {
                          for (
                            let index = 0;
                            index < expected.length;
                            index++
                          ) {
                            const expectedValue = expected[index];
                            const actualValue = actual[index];

                            switch (expectedValue) {
                              case false:
                                expect(actualValue).toEqual(0);
                                break;

                              case true:
                                expect(actualValue).toEqual(255);
                                break;

                              default:
                                expect(actualValue).toBeCloseTo(
                                  expectedValue * 255,
                                  1
                                );
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } finally {
                glContext.deleteProgram(program);
                glContext.deleteShader(fragmentShader);
              }
            });
          });
        }
      }
    }
  }
}
