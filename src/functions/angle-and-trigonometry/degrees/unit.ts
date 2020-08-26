import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, degrees } from "../../..";

export const degreesScenarios: ReadonlyArray<Scenario> = [
  ["degrees float", "float", degrees(float(0.015)), [0.859]],
  [
    "degrees vec2",
    "vec2",
    degrees(vec2(float(0.015), float(0.011))),
    [0.859, 0.63],
  ],
  [
    "degrees vec3",
    "vec3",
    degrees(vec3(float(0.015), float(0.011), float(0.017))),
    [0.859, 0.63, 0.974],
  ],
  [
    "degrees vec4",
    "vec4",
    degrees(vec4(float(0.015), float(0.011), float(0.017), float(0.014))),
    [0.859, 0.63, 0.974, 0.802],
  ],
];
