import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, multiply, ceil } from "../../..";

export const ceilScenarios: ReadonlyArray<Scenario> = [
  [
    "ceil float negative decimal",
    "float",
    add(multiply(ceil(float(-1.3)), float(0.25)), float(0.5)),
    [0.25],
  ],
  [
    "ceil float negative integer",
    "float",
    add(multiply(ceil(float(-1)), float(0.25)), float(0.5)),
    [0.25],
  ],
  [
    "ceil float negative unit interval",
    "float",
    add(multiply(ceil(float(-0.3)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "ceil float zero",
    "float",
    add(multiply(ceil(float(0)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "ceil float positive unit interval",
    "float",
    add(multiply(ceil(float(0.3)), float(0.25)), float(0.5)),
    [0.75],
  ],
  [
    "ceil float positive integer",
    "float",
    add(multiply(ceil(float(1)), float(0.25)), float(0.5)),
    [0.75],
  ],
  [
    "ceil float positive float",
    "float",
    add(multiply(ceil(float(1.3)), float(0.25)), float(0.5)),
    [1],
  ],
  [
    "ceil vec2 a",
    "vec2",
    add(multiply(ceil(vec2(float(-1.3), float(1))), float(0.25)), float(0.5)),
    [0.25, 0.75],
  ],
  [
    "ceil vec2 b",
    "vec2",
    add(multiply(ceil(vec2(float(1.3), float(-1))), float(0.25)), float(0.5)),
    [1, 0.25],
  ],
  [
    "ceil vec2 c",
    "vec2",
    add(multiply(ceil(vec2(float(0.3), float(0))), float(0.25)), float(0.5)),
    [0.75, 0.5],
  ],
  [
    "ceil vec2 d",
    "vec2",
    add(multiply(ceil(vec2(float(-0.3), float(0))), float(0.25)), float(0.5)),
    [0.5, 0.5],
  ],
  [
    "ceil vec3 a",
    "vec3",
    add(
      multiply(ceil(vec3(float(-1.3), float(1), float(-1))), float(0.25)),
      float(0.5)
    ),
    [0.25, 0.75, 0.25],
  ],
  [
    "ceil vec3 b",
    "vec3",
    add(
      multiply(ceil(vec3(float(1.3), float(0), float(0.3))), float(0.25)),
      float(0.5)
    ),
    [1, 0.5, 0.75],
  ],
  [
    "ceil vec3 c",
    "vec3",
    add(
      multiply(ceil(vec3(float(0.3), float(0), float(-0.3))), float(0.25)),
      float(0.5)
    ),
    [0.75, 0.5, 0.5],
  ],
  [
    "ceil vec4 a",
    "vec4",
    add(
      multiply(
        ceil(vec4(float(-1.3), float(0.3), float(0), float(1.3))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.25, 0.75, 0.5, 1],
  ],
  [
    "ceil vec4 b",
    "vec4",
    add(
      multiply(
        ceil(vec4(float(-1), float(-0.3), float(1), float(1.3))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.25, 0.5, 0.75, 1],
  ],
];
