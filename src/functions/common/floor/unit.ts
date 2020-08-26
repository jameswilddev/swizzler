import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, multiply, floor } from "../../..";

export const floorScenarios: ReadonlyArray<Scenario> = [
  [
    "floor float negative decimal",
    "float",
    add(multiply(floor(float(-1.3)), float(0.25)), float(0.5)),
    [0],
  ],
  [
    "floor float negative integer",
    "float",
    add(multiply(floor(float(-1)), float(0.25)), float(0.5)),
    [0.25],
  ],
  [
    "floor float negative unit interval",
    "float",
    add(multiply(floor(float(-0.3)), float(0.25)), float(0.5)),
    [0.25],
  ],
  [
    "floor float zero",
    "float",
    add(multiply(floor(float(0)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "floor float positive unit interval",
    "float",
    add(multiply(floor(float(0.3)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "floor float positive integer",
    "float",
    add(multiply(floor(float(1)), float(0.25)), float(0.5)),
    [0.75],
  ],
  [
    "floor float positive float",
    "float",
    add(multiply(floor(float(1.3)), float(0.25)), float(0.5)),
    [0.75],
  ],
  [
    "floor vec2 a",
    "vec2",
    add(multiply(floor(vec2(float(-1.3), float(1))), float(0.25)), float(0.5)),
    [0, 0.75],
  ],
  [
    "floor vec2 b",
    "vec2",
    add(multiply(floor(vec2(float(1.3), float(-1))), float(0.25)), float(0.5)),
    [0.75, 0.25],
  ],
  [
    "floor vec2 c",
    "vec2",
    add(multiply(floor(vec2(float(0.3), float(0))), float(0.25)), float(0.5)),
    [0.5, 0.5],
  ],
  [
    "floor vec2 d",
    "vec2",
    add(multiply(floor(vec2(float(-0.3), float(0))), float(0.25)), float(0.5)),
    [0.25, 0.5],
  ],
  [
    "floor vec3 a",
    "vec3",
    add(
      multiply(floor(vec3(float(-1.3), float(1), float(-1))), float(0.25)),
      float(0.5)
    ),
    [0, 0.75, 0.25],
  ],
  [
    "floor vec3 b",
    "vec3",
    add(
      multiply(floor(vec3(float(1.3), float(0), float(0.3))), float(0.25)),
      float(0.5)
    ),
    [0.75, 0.5, 0.5],
  ],
  [
    "floor vec3 c",
    "vec3",
    add(
      multiply(floor(vec3(float(0.3), float(0), float(-0.3))), float(0.25)),
      float(0.5)
    ),
    [0.5, 0.5, 0.25],
  ],
  [
    "floor vec4 a",
    "vec4",
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
    "vec4",
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
