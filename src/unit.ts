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
import { addScenarios } from "./operators/add/unit";
import { subtractScenarios } from "./operators/subtract/unit";
import { multiplyScenarios } from "./operators/multiply/unit";
import { divideScenarios } from "./operators/divide/unit";
import { negateScenarios } from "./operators/negate/unit";
import { conditionalScenarios } from "./operators/conditional/unit";
import { notScenarios } from "./operators/not/unit";
import { andScenarios } from "./operators/and/unit";
import { orScenarios } from "./operators/or/unit";
import { xorScenarios } from "./operators/xor/unit";
import { swizzleScenarios } from "./swizzles/unit";
import { crossScenarios } from "./functions/geometric/cross/unit";
import { distanceScenarios } from "./functions/geometric/distance/unit";
import { dotScenarios } from "./functions/geometric/dot/unit";
import { lengthScenarios } from "./functions/geometric/length/unit";
import { normalizeScenarios } from "./functions/geometric/normalize/unit";
import { reflectScenarios } from "./functions/geometric/reflect/unit";
import { refractScenarios } from "./functions/geometric/refract/unit";
import { faceforwardScenarios } from "./functions/geometric/faceforward/unit";
import { expScenarios } from "./functions/exponential/exp/unit";
import { exp2Scenarios } from "./functions/exponential/exp2/unit";
import { inversesqrtScenarios } from "./functions/exponential/inversesqrt/unit";
import { sqrtScenarios } from "./functions/exponential/sqrt/unit";
import { logScenarios } from "./functions/exponential/log/unit";
import { log2Scenarios } from "./functions/exponential/log2/unit";
import { acosScenarios } from "./functions/angle-and-trigonometry/acos/unit";
import { asinScenarios } from "./functions/angle-and-trigonometry/asin/unit";
import { atanScenarios } from "./functions/angle-and-trigonometry/atan/unit";
import { cosScenarios } from "./functions/angle-and-trigonometry/cos/unit";
import { degreesScenarios } from "./functions/angle-and-trigonometry/degrees/unit";
import { radiansScenarios } from "./functions/angle-and-trigonometry/radians/unit";
import { sinScenarios } from "./functions/angle-and-trigonometry/sin/unit";
import { tanScenarios } from "./functions/angle-and-trigonometry/tan/unit";
import { absScenarios } from "./functions/common/abs/unit";
import { ceilScenarios } from "./functions/common/ceil/unit";
import { floorScenarios } from "./functions/common/floor/unit";
import { fractScenarios } from "./functions/common/fract/unit";
import { stepScenarios } from "./functions/common/step/unit";
import { maxScenarios } from "./functions/common/max/unit";
import { minScenarios } from "./functions/common/min/unit";
import { signScenarios } from "./functions/common/sign/unit";
import { clampScenarios } from "./functions/common/clamp/unit";
import { mixScenarios } from "./functions/common/mix/unit";
import { smoothstepScenarios } from "./functions/common/smoothstep/unit";
import { modScenarios } from "./functions/common/mod/unit";
import { powScenarios } from "./functions/exponential/pow/unit";
import { mat2Scenarios } from "./constructors/mat2/unit";

const scenarios: ReadonlyArray<Scenario> = [
  ...literalsScenarios,
  ...vec2Scenarios,
  ...vec3Scenarios,
  ...vec4Scenarios,
  ...bvec2Scenarios,
  ...bvec3Scenarios,
  ...bvec4Scenarios,
  ...addScenarios,
  ...subtractScenarios,
  ...multiplyScenarios,
  ...divideScenarios,
  ...negateScenarios,
  ...conditionalScenarios,
  ...notScenarios,
  ...andScenarios,
  ...orScenarios,
  ...xorScenarios,
  ...swizzleScenarios,
  ...crossScenarios,
  ...distanceScenarios,
  ...dotScenarios,
  ...lengthScenarios,
  ...normalizeScenarios,
  ...reflectScenarios,
  ...refractScenarios,
  ...faceforwardScenarios,
  ...expScenarios,
  ...exp2Scenarios,
  ...inversesqrtScenarios,
  ...sqrtScenarios,
  ...logScenarios,
  ...log2Scenarios,
  ...acosScenarios,
  ...asinScenarios,
  ...atanScenarios,
  ...cosScenarios,
  ...degreesScenarios,
  ...radiansScenarios,
  ...sinScenarios,
  ...tanScenarios,
  ...absScenarios,
  ...ceilScenarios,
  ...floorScenarios,
  ...fractScenarios,
  ...stepScenarios,
  ...maxScenarios,
  ...minScenarios,
  ...signScenarios,
  ...clampScenarios,
  ...mixScenarios,
  ...smoothstepScenarios,
  ...modScenarios,
  ...powScenarios,
  ...mat2Scenarios,
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
                /^function unusedName\(\) { (.*) }\s*$/
              ) as RegExpMatchArray)[1];
              const func = new Function(unwrappedFunctionBody);
              const actual = func();

              if (expected.length === 1) {
                const scalar = expected[0];

                switch (scalar) {
                  case false:
                    expect(actual).toBeFalse();
                    break;

                  case true:
                    expect(actual).toBeTrue();
                    break;

                  case null:
                    break;

                  default:
                    expect(actual).toBeCloseTo(scalar, 3);
                    break;
                }
              } else {
                expect(actual.length).toEqual(expected.length);

                for (let i = 0; i < actual.length; i++) {
                  const expectedValue = expected[i];
                  const actualValue = actual[i];

                  switch (expectedValue) {
                    case false:
                      expect(actualValue).toBeFalse();
                      break;

                    case true:
                      expect(actualValue).toBeTrue();
                      break;

                    case null:
                      break;

                    default:
                      expect(actualValue).toBeCloseTo(expectedValue, 3);
                      break;
                  }
                }
              }
            });

            it("executes as Javascript", () => {
              const actual = new Function(compileJavascript(expression))();

              if (expected.length === 1) {
                const scalar = expected[0];

                switch (scalar) {
                  case false:
                    expect(actual).toBeFalse();
                    break;

                  case true:
                    expect(actual).toBeTrue();
                    break;

                  case null:
                    break;

                  default:
                    expect(actual).toBeCloseTo(scalar, 3);
                    break;
                }
              } else {
                expect(actual.length).toEqual(expected.length);

                for (let i = 0; i < actual.length; i++) {
                  const expectedValue = expected[i];
                  const actualValue = actual[i];

                  switch (expectedValue) {
                    case false:
                      expect(actualValue).toBeFalse();
                      break;

                    case true:
                      expect(actualValue).toBeTrue();
                      break;

                    case null:
                      break;

                    default:
                      expect(actualValue).toBeCloseTo(expectedValue, 3);
                      break;
                  }
                }
              }
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

                              case null:
                                break;

                              default:
                                expect(actualValue).toBeCloseTo(
                                  expectedValue * 255,
                                  0
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
