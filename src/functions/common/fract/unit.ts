import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, multiply, fract } from "../../..";

export const fractScenarios: ReadonlyArray<Scenario> = [
  [
    "fract float negative decimal",
    add(multiply(fract(float(-1.3)), float(0.25)), float(0.5)),
    [0.675],
  ],
  [
    "fract float negative integer",
    add(multiply(fract(float(-1)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "fract float negative unit interval",
    add(multiply(fract(float(-0.3)), float(0.25)), float(0.5)),
    [0.675],
  ],
  [
    "fract float zero",
    add(multiply(fract(float(0)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "fract float positive unit interval",
    add(multiply(fract(float(0.3)), float(0.25)), float(0.5)),
    [0.575],
  ],
  [
    "fract float positive integer",
    add(multiply(fract(float(1)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "fract float positive float",
    add(multiply(fract(float(1.3)), float(0.25)), float(0.5)),
    [0.575],
  ],
  [
    "fract vec2 a",
    add(multiply(fract(vec2(float(-1.3), float(1))), float(0.25)), float(0.5)),
    [0.675, 0.5],
  ],
  [
    "fract vec2 b",
    add(multiply(fract(vec2(float(1.3), float(-1))), float(0.25)), float(0.5)),
    [0.575, 0.5],
  ],
  [
    "fract vec2 c",
    add(multiply(fract(vec2(float(0.3), float(0))), float(0.25)), float(0.5)),
    [0.575, 0.5],
  ],
  [
    "fract vec2 d",
    add(multiply(fract(vec2(float(-0.3), float(0))), float(0.25)), float(0.5)),
    [0.675, 0.5],
  ],
  [
    "fract vec3 a",
    add(
      multiply(fract(vec3(float(-1.3), float(1), float(-1))), float(0.25)),
      float(0.5)
    ),
    [0.675, 0.5, 0.5],
  ],
  [
    "fract vec3 b",
    add(
      multiply(fract(vec3(float(1.3), float(0), float(0.3))), float(0.25)),
      float(0.5)
    ),
    [0.575, 0.5, 0.575],
  ],
  [
    "fract vec3 c",
    add(
      multiply(fract(vec3(float(0.3), float(0), float(-0.3))), float(0.25)),
      float(0.5)
    ),
    [0.575, 0.5, 0.675],
  ],
  [
    "fract vec4 a",
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
