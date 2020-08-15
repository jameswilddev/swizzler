import { vec2, vec3, float } from "../..";
import { Scenario } from "../../scenario/unit";

export const vec3Scenarios: ReadonlyArray<Scenario> = [
  ["vec3 float", vec3(float(0.7)), [0.7, 0.7, 0.7]],
  [
    "vec3 float float float",
    vec3(float(0.7), float(0.3), float(0.5)),
    [0.7, 0.3, 0.5],
  ],
  [
    "vec3 vec2 float",
    vec3(vec2(float(0.7), float(0.3)), float(0.5)),
    [0.7, 0.3, 0.5],
  ],
  [
    "vec3 float vec2",
    vec3(float(0.7), vec2(float(0.3), float(0.5))),
    [0.7, 0.3, 0.5],
  ],
];
