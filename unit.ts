import { transpile } from "typescript";
import gl = require("gl");
import {
  float,
  vec4,
  divide,
  compileTypeScript,
  compileJavascript,
  compileGlsl,
  Expression,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  Mat2Primitive,
  Mat3Primitive,
  Mat4Primitive,
  IntPrimitive,
  Ivec2Primitive,
  Ivec3Primitive,
  Ivec4Primitive,
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
  getColumn,
  x,
  y,
  z,
  w,
} from ".";
import { AnyPrimitive } from "./primitive";
import { conditional } from "./operators/conditional";

function typeScriptAndJavascript(
  expression: Expression<AnyPrimitive>,
  expected: ReadonlyArray<null | number | boolean>,
  exact: boolean
): void {
  it("executes as TypeScript", () => {
    const compiledTypeScript = compileTypeScript("return ", expression);
    const wrappedInFunctionForTranspilation = `function unusedName() { ${compiledTypeScript} }`;
    const transpiledToJavascript = transpile(wrappedInFunctionForTranspilation);
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
          if (exact) {
            expect(actual).toBe(scalar);
          } else {
            expect(actual).toBeCloseTo(scalar, 3);
          }
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
            if (exact) {
              expect(actualValue).toBe(expectedValue);
            } else {
              expect(actualValue).toBeCloseTo(expectedValue, 3);
            }
            break;
        }
      }
    }
  });

  it("executes as Javascript", () => {
    const actual = new Function(compileJavascript("return ", expression))();

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
          if (exact) {
            expect(actual).toBe(scalar);
          } else {
            expect(actual).toBeCloseTo(scalar, 3);
          }
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
            if (exact) {
              expect(actualValue).toBe(expectedValue);
            } else {
              expect(actualValue).toBeCloseTo(expectedValue, 3);
            }
            break;
        }
      }
    }
  });
}

const glContext = gl(1, 1);

const arrayBuffer = glContext.createBuffer();

if (arrayBuffer === null) {
  throw new Error("Failed to create an array buffer.");
}

glContext.bindBuffer(glContext.ARRAY_BUFFER, arrayBuffer);
glContext.bufferData(
  glContext.ARRAY_BUFFER,
  new Float32Array([-1, -1, 0, 1, -1, 1, 0, 1, 1, 1, 0, 1, 1, -1, 0, 1]),
  glContext.STATIC_DRAW
);

const elementArrayBuffer = glContext.createBuffer();

if (elementArrayBuffer === null) {
  throw new Error("Failed to create an element array buffer.");
}

glContext.bindBuffer(glContext.ELEMENT_ARRAY_BUFFER, elementArrayBuffer);
glContext.bufferData(
  glContext.ELEMENT_ARRAY_BUFFER,
  new Uint8Array([0, 1, 2, 2, 3, 0]),
  glContext.STATIC_DRAW
);

const maybeVertexShader = glContext.createShader(glContext.VERTEX_SHADER);

if (maybeVertexShader === null) {
  throw new Error("Failed to create a vertex shader.");
}

const vertexShader = maybeVertexShader;

glContext.shaderSource(
  vertexShader,
  "attribute vec4 position; void main() { gl_Position = position; }"
);
glContext.compileShader(vertexShader);

if (!glContext.getShaderParameter(vertexShader, glContext.COMPILE_STATUS)) {
  throw new Error(
    `Failed to compile the vertex shader; ${glContext.getShaderInfoLog(
      vertexShader
    )}`
  );
}

export function glslScenario(
  glsl: string,
  expected: readonly [
    null | number,
    null | number,
    null | number,
    null | number
  ]
): void {
  let fragmentShader: null | WebGLShader = null;
  let program: null | WebGLProgram = null;
  try {
    fragmentShader = glContext.createShader(glContext.FRAGMENT_SHADER);
    if (fragmentShader === null) {
      fail("Failed to create a fragment shader.");
    } else {
      glContext.shaderSource(fragmentShader, glsl);
      glContext.compileShader(fragmentShader);

      if (
        !glContext.getShaderParameter(fragmentShader, glContext.COMPILE_STATUS)
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

          if (!glContext.getProgramParameter(program, glContext.LINK_STATUS)) {
            fail(
              `Failed to link the program; ${glContext.getProgramInfoLog(
                program
              )}`
            );
          } else {
            glContext.useProgram(program);

            const position = glContext.getAttribLocation(program, "position");

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
              for (let i = 0; i < 4; i++) {
                const expectedValue = expected[i];

                if (expectedValue !== null) {
                  expect([
                    Math.floor(expectedValue),
                    Math.ceil(expectedValue),
                  ]).toContain(actual[i]);
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
}

function glsl(
  descriptionSuffix: string,
  expression: Expression<Vec4Primitive>,
  expected: readonly [
    null | number,
    null | number,
    null | number,
    null | number
  ]
): void {
  it(`executes as GLSL${descriptionSuffix}`, () => {
    glslScenario(
      `precision mediump float;void main(void) {${compileGlsl(
        "gl_FragColor=",
        expression
      )};}`,
      expected
    );
  });
}

export function floatScenario(
  description: string,
  expression: Expression<FloatPrimitive>,
  expected: number
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, [expected], false);
    glsl("", vec4(expression, float(0), float(0), float(0)), [
      expected * 255,
      0,
      0,
      0,
    ]);
  });
}

export function vec2Scenario(
  description: string,
  expression: Expression<Vec2Primitive>,
  expected: readonly [number, number]
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, expected, false);
    glsl("", vec4(expression, float(0), float(0)), [
      expected[0] * 255,
      expected[1] * 255,
      0,
      0,
    ]);
  });
}

export function vec3Scenario(
  description: string,
  expression: Expression<Vec3Primitive>,
  expected: readonly [number, number, number]
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, expected, false);
    glsl("", vec4(expression, float(0)), [
      expected[0] * 255,
      expected[1] * 255,
      expected[2] * 255,
      0,
    ]);
  });
}

export function vec4Scenario(
  description: string,
  expression: Expression<Vec4Primitive>,
  expected: readonly [number, number, number, number]
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, expected, false);
    glsl("", expression, [
      expected[0] * 255,
      expected[1] * 255,
      expected[2] * 255,
      expected[3] * 255,
    ]);
  });
}

export function mat2Scenario(
  description: string,
  expression: Expression<Mat2Primitive>,
  expected: readonly [number, number, number, number]
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, expected, false);
    glsl("", vec4(expression), [
      expected[0] * 255,
      expected[1] * 255,
      expected[2] * 255,
      expected[3] * 255,
    ]);
  });
}

export function mat3Scenario(
  description: string,
  expression: Expression<Mat3Primitive>,
  expected: readonly [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ]
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, expected, false);
    glsl(" a", vec4(getColumn(expression, 0), float(0)), [
      expected[0] * 255,
      expected[1] * 255,
      expected[2] * 255,
      0,
    ]);
    glsl(" b", vec4(getColumn(expression, 1), float(0)), [
      expected[3] * 255,
      expected[4] * 255,
      expected[5] * 255,
      0,
    ]);
    glsl(" c", vec4(getColumn(expression, 2), float(0)), [
      expected[6] * 255,
      expected[7] * 255,
      expected[8] * 255,
      0,
    ]);
  });
}

export function mat4Scenario(
  description: string,
  expression: Expression<Mat4Primitive>,
  expected: readonly [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ]
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, expected, false);
    glsl(" a", getColumn(expression, 0), [
      expected[0] * 255,
      expected[1] * 255,
      expected[2] * 255,
      expected[3] * 255,
    ]);
    glsl(" b", getColumn(expression, 1), [
      expected[4] * 255,
      expected[5] * 255,
      expected[6] * 255,
      expected[7] * 255,
    ]);
    glsl(" c", getColumn(expression, 2), [
      expected[8] * 255,
      expected[9] * 255,
      expected[10] * 255,
      expected[11] * 255,
    ]);
    glsl(" d", getColumn(expression, 3), [
      expected[12] * 255,
      expected[13] * 255,
      expected[14] * 255,
      expected[15] * 255,
    ]);
  });
}

export function intScenario(
  description: string,
  expression: Expression<IntPrimitive>,
  expected: number
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, [expected], true);
    glsl(
      "",
      divide(vec4(expression, float(0), float(0), float(0)), float(255)),
      [expected, 0, 0, 0]
    );
  });
}

export function ivec2Scenario(
  description: string,
  expression: Expression<Ivec2Primitive>,
  expected: readonly [number, number]
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, expected, true);
    glsl("", divide(vec4(expression, float(0), float(0)), float(255)), [
      ...expected,
      0,
      0,
    ]);
  });
}

export function ivec3Scenario(
  description: string,
  expression: Expression<Ivec3Primitive>,
  expected: readonly [number, number, number]
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, expected, true);
    glsl("", divide(vec4(expression, float(0)), float(255)), [...expected, 0]);
  });
}

export function ivec4Scenario(
  description: string,
  expression: Expression<Ivec4Primitive>,
  expected: readonly [number, number, number, number]
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, expected, true);
    glsl("", divide(vec4(expression), float(255)), expected);
  });
}

function convertBoolToGlsl(bool: null | boolean): null | number {
  switch (bool) {
    case false:
      return 0;

    case true:
      return 255;

    case null:
      return null;
  }
}

export function boolScenario(
  description: string,
  expression: Expression<BoolPrimitive>,
  expected: boolean
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, [expected], true);
    glsl(
      "",
      vec4(
        conditional(expression, float(1), float(0)),
        float(0),
        float(0),
        float(0)
      ),
      [convertBoolToGlsl(expected), 0, 0, 0]
    );
  });
}

export function bvec2Scenario(
  description: string,
  expression: Expression<Bvec2Primitive>,
  expected: readonly [null | boolean, null | boolean]
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, expected, true);
    glsl(
      "",
      vec4(
        conditional(x(expression), float(1), float(0)),
        conditional(y(expression), float(1), float(0)),
        float(0),
        float(0)
      ),
      [convertBoolToGlsl(expected[0]), convertBoolToGlsl(expected[1]), 0, 0]
    );
  });
}

export function bvec3Scenario(
  description: string,
  expression: Expression<Bvec3Primitive>,
  expected: readonly [null | boolean, null | boolean, null | boolean]
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, expected, true);
    glsl(
      "",
      vec4(
        conditional(x(expression), float(1), float(0)),
        conditional(y(expression), float(1), float(0)),
        conditional(z(expression), float(1), float(0)),
        float(0)
      ),
      [
        convertBoolToGlsl(expected[0]),
        convertBoolToGlsl(expected[1]),
        convertBoolToGlsl(expected[2]),
        0,
      ]
    );
  });
}

export function bvec4Scenario(
  description: string,
  expression: Expression<Bvec4Primitive>,
  expected: readonly [
    null | boolean,
    null | boolean,
    null | boolean,
    null | boolean
  ]
): void {
  describe(description, () => {
    typeScriptAndJavascript(expression, expected, true);
    glsl(
      "",
      vec4(
        conditional(x(expression), float(1), float(0)),
        conditional(y(expression), float(1), float(0)),
        conditional(z(expression), float(1), float(0)),
        conditional(w(expression), float(1), float(0))
      ),
      [
        convertBoolToGlsl(expected[0]),
        convertBoolToGlsl(expected[1]),
        convertBoolToGlsl(expected[2]),
        convertBoolToGlsl(expected[3]),
      ]
    );
  });
}

// This is needed for coverage.
Expression;
