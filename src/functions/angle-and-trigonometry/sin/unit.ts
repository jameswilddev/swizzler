import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, sin } from "../../..";

export const sinScenarios: ReadonlyArray<Scenario> = [
  ["sin float", sin(float(0.9)), [0.7833269096274834]],
  [
    "sin vec2",
    sin(vec2(float(0.9), float(0.6))),
    [0.7833269096274834, 0.5646424733950354],
  ],
  [
    "sin vec3",
    sin(vec3(float(0.9), float(0.6), float(0.8))),
    [0.7833269096274834, 0.5646424733950354, 0.7173560908995228],
  ],
  [
    "sin vec4",
    sin(vec4(float(0.9), float(0.6), float(0.8), float(0.1))),
    [
      0.7833269096274834,
      0.5646424733950354,
      0.7173560908995228,
      0.09983341664682815,
    ],
  ],
];
