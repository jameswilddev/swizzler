import { add, float, vec2, vec3, vec4, negate } from "../..";
import { Scenario } from "../../scenario/unit";

export const negateScenarios: ReadonlyArray<Scenario> = [
  ["negate positive float", add(negate(float(0.3)), float(0.5)), [0.2]],
  ["negate negative float", add(negate(float(-0.3)), float(0.5)), [0.8]],
  [
    "negate vec2",
    add(negate(vec2(float(0.3), float(-0.1))), float(0.5)),
    [0.2, 0.6],
  ],
  [
    "negate vec3",
    add(negate(vec3(float(0.3), float(-0.1), float(0.2))), float(0.5)),
    [0.2, 0.6, 0.3],
  ],
  [
    "negate vec4",
    add(
      negate(vec4(float(0.3), float(-0.1), float(-0.2), float(0.4))),
      float(0.5)
    ),
    [0.2, 0.6, 0.7, 0.1],
  ],
];
