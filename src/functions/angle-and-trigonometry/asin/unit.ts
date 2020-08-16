import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, asin } from "../../..";

export const asinScenarios: ReadonlyArray<Scenario> = [
  ["asin float", asin(float(0.5)), [0.523599]],
  [
    "asin vec2",
    asin(vec2(float(0.5), float(0.6))),
    [0.523599, 0.6435011087932844],
  ],
  [
    "asin vec3",
    asin(vec3(float(0.5), float(0.6), float(0.4))),
    [0.523599, 0.6435011087932844, 0.411517],
  ],
  [
    "asin vec4",

    asin(vec4(float(0.5), float(0.6), float(0.4), float(0.2))),
    [0.523599, 0.6435011087932844, 0.411517, 0.201358],
  ],
];
