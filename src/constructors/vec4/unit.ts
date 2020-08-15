import { vec2, vec3, vec4, float } from "../..";
import { Scenario } from "../../scenario/unit";

export const vec4Scenarios: ReadonlyArray<Scenario> = [
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
];
