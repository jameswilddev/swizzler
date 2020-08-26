import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, exp2 } from "../../..";

export const exp2Scenarios: ReadonlyArray<Scenario> = [
  ["exp2 float", "float", exp2(float(-0.5)), [0.70710678118]],
  [
    "exp2 vec2",
    "vec2",
    exp2(vec2(float(-0.5), float(-0.3))),
    [0.70710678118, 0.81225239635],
  ],
  [
    "exp2 vec3",
    "vec3",
    exp2(vec3(float(-0.5), float(-0.3), float(-0.9))),
    [0.70710678118, 0.81225239635, 0.53588673126],
  ],
  [
    "exp2 vec4",
    "vec4",
    exp2(vec4(float(-0.5), float(-0.3), float(-0.9), float(-0.7))),
    [0.70710678118, 0.81225239635, 0.53588673126, 0.61557220667],
  ],
];
