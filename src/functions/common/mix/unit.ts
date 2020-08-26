import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, mix } from "../../..";

export const mixScenarios: ReadonlyArray<Scenario> = [
  [
    "mix float float float",
    "float",
    mix(float(0.4), float(0.9), float(0.7)),
    [0.75],
  ],
  [
    "mix vec2 vec2 vec2",
    "vec2",
    mix(
      vec2(float(0.4), float(0.1)),
      vec2(float(0.9), float(0.4)),
      vec2(float(0.7), float(0.25))
    ),
    [0.75, 0.175],
  ],
  [
    "mix vec2 vec2 float",
    "vec2",
    mix(vec2(float(0.4), float(0.1)), vec2(float(0.9), float(0.4)), float(0.7)),
    [0.75, 0.31],
  ],
  [
    "mix vec3 vec3 vec3",
    "vec3",
    mix(
      vec3(float(0.4), float(0.1), float(0.4)),
      vec3(float(0.9), float(0.4), float(0.6)),
      vec3(float(0.7), float(0.25), float(0.3))
    ),
    [0.75, 0.175, 0.46],
  ],
  [
    "mix vec3 vec3 float",
    "vec3",
    mix(
      vec3(float(0.4), float(0.1), float(0.4)),
      vec3(float(0.9), float(0.4), float(0.6)),
      float(0.7)
    ),
    [0.75, 0.31, 0.54],
  ],
  [
    "mix vec4 vec4 vec4",
    "vec4",
    mix(
      vec4(float(0.4), float(0.1), float(0.4), float(0.8)),
      vec4(float(0.9), float(0.4), float(0.6), float(0.9)),
      vec4(float(0.7), float(0.25), float(0.3), float(0.5))
    ),
    [0.75, 0.175, 0.46, 0.85],
  ],
  [
    "mix vec4 vec4 float",
    "vec4",
    mix(
      vec4(float(0.4), float(0.1), float(0.4), float(0.8)),
      vec4(float(0.9), float(0.4), float(0.6), float(0.9)),
      float(0.7)
    ),
    [0.75, 0.31, 0.54, 0.87],
  ],
];
