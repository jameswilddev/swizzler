import { transpile } from "typescript";
import gl = require("gl");
import {
  float,
  vec2,
  vec3,
  vec4,
  bvec2,
  bvec3,
  bvec4,
  Expression,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  compileJavascript,
  compileTypeScript,
  compileGlsl,
  bool,
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
  conditional,
  x,
  y,
  z,
  w,
} from ".";

type Scenario =
  | readonly [string, Expression<FloatPrimitive>, readonly [number]]
  | readonly [string, Expression<Vec2Primitive>, readonly [number, number]]
  | readonly [
      string,
      Expression<Vec3Primitive>,
      readonly [number, number, number]
    ]
  | readonly [
      string,
      Expression<Vec4Primitive>,
      readonly [number, number, number, number]
    ]
  | readonly [string, Expression<BoolPrimitive>, readonly [boolean]]
  | readonly [string, Expression<Bvec2Primitive>, readonly [boolean, boolean]]
  | readonly [
      string,
      Expression<Bvec3Primitive>,
      readonly [boolean, boolean, boolean]
    ]
  | readonly [
      string,
      Expression<Bvec4Primitive>,
      readonly [boolean, boolean, boolean, boolean]
    ];

const scenarios: ReadonlyArray<Scenario> = [
  ["float literal", float(0.7), [0.7]],
  ["vec2 float", vec2(float(0.7)), [0.7, 0.7]],
  ["vec2 float float", vec2(float(0.7), float(0.3)), [0.7, 0.3]],
  ["vec3 float", vec3(float(0.7)), [0.7, 0.7, 0.7]],
  [
    "vec3 float float float",
    vec3(float(0.7), float(0.3), float(0.5)),
    [0.7, 0.3, 0.5],
  ],
  [
    "vec3 vec2 float",
    vec3(vec2(float(0.7), float(0.3)), float(0.5)),
    [0.7, 0.3, 0.5],
  ],
  [
    "vec3 float vec2",
    vec3(float(0.7), vec2(float(0.3), float(0.5))),
    [0.7, 0.3, 0.5],
  ],
  ["vec4 float", vec4(float(0.7)), [0.7, 0.7, 0.7, 0.7]],
  [
    "vec4 float float float float",
    vec4(float(0.7), float(0.3), float(0.5), float(0.2)),
    [0.7, 0.3, 0.5, 0.2],
  ],
  [
    "vec4 vec2 float float",
    vec4(vec2(float(0.7), float(0.3)), float(0.5), float(0.2)),
    [0.7, 0.3, 0.5, 0.2],
  ],
  [
    "vec4 float vec2 float",
    vec4(float(0.7), vec2(float(0.3), float(0.5)), float(0.2)),
    [0.7, 0.3, 0.5, 0.2],
  ],
  [
    "vec4 float float vec2",
    vec4(float(0.7), float(0.3), vec2(float(0.5), float(0.2))),
    [0.7, 0.3, 0.5, 0.2],
  ],
  [
    "vec4 vec2 vec2",
    vec4(vec2(float(0.7), float(0.3)), vec2(float(0.5), float(0.2))),
    [0.7, 0.3, 0.5, 0.2],
  ],
  [
    "vec4 vec3 float",
    vec4(vec3(float(0.7), float(0.3), float(0.5)), float(0.2)),
    [0.7, 0.3, 0.5, 0.2],
  ],
  [
    "vec4 float vec3",
    vec4(float(0.7), vec3(float(0.3), float(0.5), float(0.2))),
    [0.7, 0.3, 0.5, 0.2],
  ],
  ["true", bool(true), [true]],
  ["false", bool(false), [false]],
  ["bvec2 false", bvec2(bool(false)), [false, false]],
  ["bvec2 true", bvec2(bool(true)), [true, true]],
  ["bvec2 true false", bvec2(bool(true), bool(false)), [true, false]],
  ["bvec2 false true", bvec2(bool(false), bool(true)), [false, true]],
  ["bvec3 false", bvec3(bool(false)), [false, false, false]],
  ["bvec3 true", bvec3(bool(true)), [true, true, true]],
  [
    "bvec3 true false false ",
    bvec3(bool(true), bool(false), bool(false)),
    [true, false, false],
  ],
  [
    "bvec3 false true false",
    bvec3(bool(false), bool(true), bool(false)),
    [false, true, false],
  ],
  [
    "bvec3 false false true",
    bvec3(bool(false), bool(false), bool(true)),
    [false, false, true],
  ],
  [
    "bvec3 (true false) false",
    bvec3(bvec2(bool(true), bool(false)), bool(false)),
    [true, false, false],
  ],
  [
    "bvec3 (false true) false",
    bvec3(bvec2(bool(false), bool(true)), bool(false)),
    [false, true, false],
  ],
  [
    "bvec3 (false false) true",
    bvec3(bvec2(bool(false), bool(false)), bool(true)),
    [false, false, true],
  ],
  [
    "bvec3 true (false false)",
    bvec3(bool(true), bvec2(bool(false), bool(false))),
    [true, false, false],
  ],
  [
    "bvec3 false (true false)",
    bvec3(bool(false), bvec2(bool(true), bool(false))),
    [false, true, false],
  ],
  [
    "bvec3 false (false true)",
    bvec3(bool(false), bvec2(bool(false), bool(true))),
    [false, false, true],
  ],
  ["bvec4 false", bvec4(bool(false)), [false, false, false, false]],
  ["bvec4 true", bvec4(bool(true)), [true, true, true, true]],
  [
    "bvec4 true false false false",
    bvec4(bool(true), bool(false), bool(false), bool(false)),
    [true, false, false, false],
  ],
  [
    "bvec4 false true false false",
    bvec4(bool(false), bool(true), bool(false), bool(false)),
    [false, true, false, false],
  ],
  [
    "bvec4 false false true false",
    bvec4(bool(false), bool(false), bool(true), bool(false)),
    [false, false, true, false],
  ],
  [
    "bvec4 false false false true",
    bvec4(bool(false), bool(false), bool(false), bool(true)),
    [false, false, false, true],
  ],
  [
    "bvec4 (true false) false false",
    bvec4(bvec2(bool(true), bool(false)), bool(false), bool(false)),
    [true, false, false, false],
  ],
  [
    "bvec4 (false true) false false",
    bvec4(bvec2(bool(false), bool(true)), bool(false), bool(false)),
    [false, true, false, false],
  ],
  [
    "bvec4 (false false) true false",
    bvec4(bvec2(bool(false), bool(false)), bool(true), bool(false)),
    [false, false, true, false],
  ],
  [
    "bvec4 (false false) false true",
    bvec4(bvec2(bool(false), bool(false)), bool(false), bool(true)),
    [false, false, false, true],
  ],
  [
    "bvec4 true (false false) false",
    bvec4(bool(true), bvec2(bool(false), bool(false)), bool(false)),
    [true, false, false, false],
  ],
  [
    "bvec4 false (true false) false",
    bvec4(bool(false), bvec2(bool(true), bool(false)), bool(false)),
    [false, true, false, false],
  ],
  [
    "bvec4 false (false true) false",
    bvec4(bool(false), bvec2(bool(false), bool(true)), bool(false)),
    [false, false, true, false],
  ],
  [
    "bvec4 false (false false) true",
    bvec4(bool(false), bvec2(bool(false), bool(false)), bool(true)),
    [false, false, false, true],
  ],
  [
    "bvec4 true false (false false)",
    bvec4(bool(true), bool(false), bvec2(bool(false), bool(false))),
    [true, false, false, false],
  ],
  [
    "bvec4 false true (false false)",
    bvec4(bool(false), bool(true), bvec2(bool(false), bool(false))),
    [false, true, false, false],
  ],
  [
    "bvec4 false false (true false)",
    bvec4(bool(false), bool(false), bvec2(bool(true), bool(false))),
    [false, false, true, false],
  ],
  [
    "bvec4 false false (false true)",
    bvec4(bool(false), bool(false), bvec2(bool(false), bool(true))),
    [false, false, false, true],
  ],
  [
    "bvec4 (true false) (false false)",
    bvec4(bvec2(bool(true), bool(false)), bvec2(bool(false), bool(false))),
    [true, false, false, false],
  ],
  [
    "bvec4 (false true) (false false)",
    bvec4(bvec2(bool(false), bool(true)), bvec2(bool(false), bool(false))),
    [false, true, false, false],
  ],
  [
    "bvec4 (false false) (true false)",
    bvec4(bvec2(bool(false), bool(false)), bvec2(bool(true), bool(false))),
    [false, false, true, false],
  ],
  [
    "bvec4 (false false) (false true)",
    bvec4(bvec2(bool(false), bool(false)), bvec2(bool(false), bool(true))),
    [false, false, false, true],
  ],
  [
    "bvec4 (true false false) false",
    bvec4(bvec3(bool(true), bool(false), bool(false)), bool(false)),
    [true, false, false, false],
  ],
  [
    "bvec4 (false true false) false",
    bvec4(bvec3(bool(false), bool(true), bool(false)), bool(false)),
    [false, true, false, false],
  ],
  [
    "bvec4 (false false true) false",
    bvec4(bvec3(bool(false), bool(false), bool(true)), bool(false)),
    [false, false, true, false],
  ],
  [
    "bvec4 (false false false) true",
    bvec4(bvec3(bool(false), bool(false), bool(false)), bool(true)),
    [false, false, false, true],
  ],
  [
    "bvec4 true (false false false)",
    bvec4(bool(true), bvec3(bool(false), bool(false), bool(false))),
    [true, false, false, false],
  ],
  [
    "bvec4 false (true false false)",
    bvec4(bool(false), bvec3(bool(true), bool(false), bool(false))),
    [false, true, false, false],
  ],
  [
    "bvec4 false (false true false)",
    bvec4(bool(false), bvec3(bool(false), bool(true), bool(false))),
    [false, false, true, false],
  ],
  [
    "bvec4 false (false false true)",
    bvec4(bool(false), bvec3(bool(false), bool(false), bool(true))),
    [false, false, false, true],
  ],
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
                          const expandedExpected = [...expected].map((item) => {
                            switch (item) {
                              case true:
                                return 255;

                              case false:
                                return 0;

                              default:
                                return Math.floor(item * 255);
                            }
                          });

                          while (expandedExpected.length < 4) {
                            expandedExpected.push(0);
                          }

                          expect([...actual]).toEqual(expandedExpected);
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
