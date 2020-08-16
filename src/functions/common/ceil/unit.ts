import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, multiply, ceil } from "../../..";

export const ceilScenarios: ReadonlyArray<Scenario> = [
  [
    "ceil float negative decimal",
    add(multiply(ceil(float(-1.3)), float(0.25)), float(0.5)),
    [0.25],
  ],
  [
    "ceil float negative integer",
    add(multiply(ceil(float(-1)), float(0.25)), float(0.5)),
    [0.25],
  ],
  [
    "ceil float negative unit interval",
    add(multiply(ceil(float(-0.3)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "ceil float zero",
    add(multiply(ceil(float(0)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "ceil float positive unit interval",
    add(multiply(ceil(float(0.3)), float(0.25)), float(0.5)),
    [0.75],
  ],
  [
    "ceil float positive integer",
    add(multiply(ceil(float(1)), float(0.25)), float(0.5)),
    [0.75],
  ],
  [
    "ceil float positive float",
    add(multiply(ceil(float(1.3)), float(0.25)), float(0.5)),
    [1],
  ],
  [
    "ceil vec2 a",
    add(multiply(ceil(vec2(float(-1.3), float(1))), float(0.25)), float(0.5)),
    [0.25, 0.75],
  ],
  [
    "ceil vec2 b",
    add(multiply(ceil(vec2(float(1.3), float(-1))), float(0.25)), float(0.5)),
    [1, 0.25],
  ],
  [
    "ceil vec2 c",
    add(multiply(ceil(vec2(float(0.3), float(0))), float(0.25)), float(0.5)),
    [0.75, 0.5],
  ],
  [
    "ceil vec2 d",
    add(multiply(ceil(vec2(float(-0.3), float(0))), float(0.25)), float(0.5)),
    [0.5, 0.5],
  ],
  [
    "ceil vec3 a",
    add(
      multiply(ceil(vec3(float(-1.3), float(1), float(-1))), float(0.25)),
      float(0.5)
    ),
    [0.25, 0.75, 0.25],
  ],
  [
    "ceil vec3 b",
    add(
      multiply(ceil(vec3(float(1.3), float(0), float(0.3))), float(0.25)),
      float(0.5)
    ),
    [1, 0.5, 0.75],
  ],
  [
    "ceil vec3 c",
    add(
      multiply(ceil(vec3(float(0.3), float(0), float(-0.3))), float(0.25)),
      float(0.5)
    ),
    [0.75, 0.5, 0.5],
  ],
  [
    "ceil vec4 a",
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
