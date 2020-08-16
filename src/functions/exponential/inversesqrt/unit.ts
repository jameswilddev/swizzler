import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, inversesqrt } from "../../..";

export const inversesqrtScenarios: ReadonlyArray<Scenario> = [
  ["inversesqrt float", inversesqrt(float(2.4)), [0.64549722436]],
  [
    "inversesqrt vec2",
    inversesqrt(vec2(float(2.4), float(3.6))),
    [0.64549722436, 0.52704627669],
  ],
  [
    "inversesqrt vec3",
    inversesqrt(vec3(float(2.4), float(3.6), float(1.8))),
    [0.64549722436, 0.52704627669, 0.7453559925],
  ],
  [
    "inversesqrt vec4",
    inversesqrt(vec4(float(2.4), float(3.6), float(1.8), float(2.7))),
    [0.64549722436, 0.52704627669, 0.7453559925, 0.60858061945],
  ],
];
