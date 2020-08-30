import {
  compileGlsl,
  reference,
  float,
  vec2,
  vec4,
  add,
  multiply,
  x,
  y,
  z,
  w,
} from "../..";
import { conditional } from "../../operators/conditional";
import { glslScenario } from "../../unit";

describe("compileGlsl", () => {
  it("float reference", () => {
    glslScenario(
      `precision mediump float;

      void main(void) {
        float a = 0.3;
        ${compileGlsl([
          [
            "gl_FragColor = ",
            add(
              vec4(float(0.2), float(0.1), float(0.4), float(0.5)),
              reference("float", "a")
            ),
          ],
        ])}
      }`,
      [127.5, 102, 178.5, 204]
    );
  });

  it("vec2 reference", () => {
    glslScenario(
      `precision mediump float;

      void main(void) {
        vec2 a = vec2(0.2, 0.1);
        ${compileGlsl([
          [
            "gl_FragColor = ",
            vec4(add(reference("vec2", "a"), float(0.3)), float(0), float(0)),
          ],
        ])}
      }`,
      [127.5, 102, 0, 0]
    );
  });

  it("vec3 reference", () => {
    glslScenario(
      `precision mediump float;

      void main(void) {
        vec3 a = vec3(0.2, 0.1, 0.4);
        ${compileGlsl([
          [
            "gl_FragColor = ",
            vec4(add(reference("vec3", "a"), float(0.3)), float(0)),
          ],
        ])}
      }`,
      [127.5, 102, 178.5, 0]
    );
  });

  it("vec4 reference", () => {
    glslScenario(
      `precision mediump float;

      void main(void) {
        vec4 a = vec4(0.2, 0.1, 0.4, 0.5);
        ${compileGlsl([
          ["gl_FragColor = ", add(reference("vec4", "a"), float(0.3))],
        ])}
      }`,
      [127.5, 102, 178.5, 204]
    );
  });

  it("mat2 reference", () => {
    glslScenario(
      `precision mediump float;

      void main(void) {
        mat2 a = mat2(0.2, 0.1, 0.4, 0.5);
        ${compileGlsl([
          ["gl_FragColor = ", add(vec4(reference("mat2", "a")), float(0.3))],
        ])}
      }`,
      [127.5, 102, 178.5, 204]
    );
  });

  // todo mat3 reference
  // todo mat4 reference

  it("bool reference false", () => {
    glslScenario(
      `precision mediump float;

      void main(void) {
        bool a = false;
        ${compileGlsl([
          [
            "gl_FragColor = ",
            conditional(
              reference("bool", "a"),
              vec4(float(0.3), float(0.9), float(0.1), float(0.2)),
              vec4(float(0.4), float(0.5), float(0.8), float(0.7))
            ),
          ],
        ])};
      }`,
      [102, 127.5, 204, 178.5]
    );
  });

  it("bool reference true", () => {
    glslScenario(
      `precision mediump float;

      void main(void) {
        bool a = true;
        ${compileGlsl([
          [
            "gl_FragColor = ",
            conditional(
              reference("bool", "a"),
              vec4(float(0.4), float(0.5), float(0.8), float(0.7)),
              vec4(float(0.3), float(0.9), float(0.1), float(0.2))
            ),
          ],
        ])};
      }`,
      [102, 127.5, 204, 178.5]
    );
  });

  it("bvec2 reference", () => {
    glslScenario(
      `precision mediump float;

      void main(void) {
        bvec2 a = bvec2(false, true);
        ${compileGlsl([
          [
            "gl_FragColor = ",
            vec4(
              conditional(
                x(reference("bvec2", "a")),
                vec2(float(0.3), float(0.9)),
                vec2(float(0.4), float(0.5))
              ),
              conditional(
                y(reference("bvec2", "a")),
                vec2(float(0.8), float(0.7)),
                vec2(float(0.1), float(0.2))
              )
            ),
          ],
        ])};
      }`,
      [102, 127.5, 204, 178.5]
    );
  });

  it("bvec3 reference", () => {
    glslScenario(
      `precision mediump float;

      void main(void) {
        bvec3 a = bvec3(false, true, false);
        ${compileGlsl([
          [
            "gl_FragColor = ",
            vec4(
              conditional(
                x(reference("bvec3", "a")),
                vec2(float(0.3), float(0.9)),
                vec2(float(0.4), float(0.5))
              ),
              conditional(y(reference("bvec3", "a")), float(0.8), float(0.1)),
              conditional(z(reference("bvec3", "a")), float(0.2), float(0.7))
            ),
          ],
        ])};
      }`,
      [102, 127.5, 204, 178.5]
    );
  });

  it("bvec4 reference", () => {
    glslScenario(
      `precision mediump float;

      void main(void) {
        bvec4 a = bvec4(false, true, true, false);
        ${compileGlsl([
          [
            "gl_FragColor = ",
            vec4(
              conditional(x(reference("bvec4", "a")), float(0.3), float(0.9)),
              conditional(y(reference("bvec4", "a")), float(0.5), float(0.4)),
              conditional(z(reference("bvec4", "a")), float(0.8), float(0.1)),
              conditional(w(reference("bvec4", "a")), float(0.2), float(0.7))
            ),
          ],
        ])};
      }`,
      [229.5, 127.5, 204, 178.5]
    );
  });

  it("can compile to multiple variable assignments", () => {
    glslScenario(
      `precision mediump float;

      void main(void) {
        ${compileGlsl([
          ["float resultA = ", add(float(0.6), float(0.2))],
          ["vec2 resultB = ", add(vec2(float(0.3), float(0.5)), float(0.2))],
          ["float resultC = ", multiply(float(0.75), float(0.3))],
        ])}
        gl_FragColor = vec4(resultA, resultB, resultC);
      }`,
      [204, 127.5, 178.5, 57.375]
    );
  });
});
