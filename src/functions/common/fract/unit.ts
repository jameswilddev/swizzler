import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, multiply, fract } from "../../..";

export const fractScenarios: ReadonlyArray<Scenario> = [
  [
    "fract float negative decimal",
    "float",
    add(multiply(fract(float(-1.3)), float(0.25)), float(0.5)),
    [0.675],
  ],
  [
    "fract float negative integer",
    "float",
    add(multiply(fract(float(-1)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "fract float negative unit interval",
    "float",
    add(multiply(fract(float(-0.3)), float(0.25)), float(0.5)),
    [0.675],
  ],
  [
    "fract float zero",
    "float",
    add(multiply(fract(float(0)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "fract float positive unit interval",
    "float",
    add(multiply(fract(float(0.3)), float(0.25)), float(0.5)),
    [0.575],
  ],
  [
    "fract float positive integer",
    "float",
    add(multiply(fract(float(1)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "fract float positive float",
    "float",
    add(multiply(fract(float(1.3)), float(0.25)), float(0.5)),
    [0.575],
  ],
  [
    "fract vec2 a",
    "vec2",
    add(multiply(fract(vec2(float(-1.3), float(1))), float(0.25)), float(0.5)),
    [0.675, 0.5],
  ],
  [
    "fract vec2 b",
    "vec2",
    add(multiply(fract(vec2(float(1.3), float(-1))), float(0.25)), float(0.5)),
    [0.575, 0.5],
  ],
  [
    "fract vec2 c",
    "vec2",
    add(multiply(fract(vec2(float(0.3), float(0))), float(0.25)), float(0.5)),
    [0.575, 0.5],
  ],
  [
    "fract vec2 d",
    "vec2",
    add(multiply(fract(vec2(float(-0.3), float(0))), float(0.25)), float(0.5)),
    [0.675, 0.5],
  ],
  [
    "fract vec3 a",
    "vec3",
    add(
      multiply(fract(vec3(float(-1.3), float(1), float(-1))), float(0.25)),
      float(0.5)
    ),
    [0.675, 0.5, 0.5],
  ],
  [
    "fract vec3 b",
    "vec3",
    add(
      multiply(fract(vec3(float(1.3), float(0), float(0.3))), float(0.25)),
      float(0.5)
    ),
    [0.575, 0.5, 0.575],
  ],
  [
    "fract vec3 c",
    "vec3",
    add(
      multiply(fract(vec3(float(0.3), float(0), float(-0.3))), float(0.25)),
      float(0.5)
    ),
    [0.575, 0.5, 0.675],
  ],
  [
    "fract vec4 a",
    "vec4",
    add(
      multiply(
        fract(vec4(float(-1.3), float(0.3), float(0), float(1.3))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.675, 0.575, 0.5, 0.575],
  ],
  [
    "fract vec4 b",
    "vec4",
    add(
      multiply(
        fract(vec4(float(-1), float(-0.3), float(1), float(1.3))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.5, 0.675, 0.5, 0.575],
  ],
];
