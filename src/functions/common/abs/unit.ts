import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, abs } from "../../..";

export const absScenarios: ReadonlyArray<Scenario> = [
  ["abs float negative", "float", abs(float(-0.5)), [0.5]],
  ["abs float positive", "float", abs(float(0.5)), [0.5]],
  ["abs vec2", "vec2", abs(vec2(float(-0.5), float(0.3))), [0.5, 0.3]],
  [
    "abs vec3",
    "vec3",
    abs(vec3(float(-0.5), float(-0.3), float(0.9))),
    [0.5, 0.3, 0.9],
  ],
  [
    "abs vec4",
    "vec4",
    abs(vec4(float(-0.5), float(-0.3), float(0.9), float(-0.7))),
    [0.5, 0.3, 0.9, 0.7],
  ],
];
