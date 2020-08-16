import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, multiply, floor } from "../../..";

export const floorScenarios: ReadonlyArray<Scenario> = [
  [
    "floor float negative decimal",
    add(multiply(floor(float(-1.3)), float(0.25)), float(0.5)),
    [0],
  ],
  [
    "floor float negative integer",
    add(multiply(floor(float(-1)), float(0.25)), float(0.5)),
    [0.25],
  ],
  [
    "floor float negative unit interval",
    add(multiply(floor(float(-0.3)), float(0.25)), float(0.5)),
    [0.25],
  ],
  [
    "floor float zero",
    add(multiply(floor(float(0)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "floor float positive unit interval",
    add(multiply(floor(float(0.3)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "floor float positive integer",
    add(multiply(floor(float(1)), float(0.25)), float(0.5)),
    [0.75],
  ],
  [
    "floor float positive float",
    add(multiply(floor(float(1.3)), float(0.25)), float(0.5)),
    [0.75],
  ],
  [
    "floor vec2 a",
    add(multiply(floor(vec2(float(-1.3), float(1))), float(0.25)), float(0.5)),
    [0, 0.75],
  ],
  [
    "floor vec2 b",
    add(multiply(floor(vec2(float(1.3), float(-1))), float(0.25)), float(0.5)),
    [0.75, 0.25],
  ],
  [
    "floor vec2 c",
    add(multiply(floor(vec2(float(0.3), float(0))), float(0.25)), float(0.5)),
    [0.5, 0.5],
  ],
  [
    "floor vec2 d",
    add(multiply(floor(vec2(float(-0.3), float(0))), float(0.25)), float(0.5)),
    [0.25, 0.5],
  ],
  [
    "floor vec3 a",
    add(
      multiply(floor(vec3(float(-1.3), float(1), float(-1))), float(0.25)),
      float(0.5)
    ),
    [0, 0.75, 0.25],
  ],
  [
    "floor vec3 b",
    add(
      multiply(floor(vec3(float(1.3), float(0), float(0.3))), float(0.25)),
      float(0.5)
    ),
    [0.75, 0.5, 0.5],
  ],
  [
    "floor vec3 c",
    add(
      multiply(floor(vec3(float(0.3), float(0), float(-0.3))), float(0.25)),
      float(0.5)
    ),
    [0.5, 0.5, 0.25],
  ],
  [
    "floor vec4 a",
    add(
      multiply(
        floor(vec4(float(-1.3), float(0.3), float(0), float(1.3))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0, 0.5, 0.5, 0.75],
  ],
  [
    "floor vec4 b",
    add(
      multiply(
        floor(vec4(float(-1), float(-0.3), float(1), float(1.3))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.25, 0.25, 0.75, 0.75],
  ],
];
