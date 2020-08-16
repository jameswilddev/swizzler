import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, sqrt } from "../../..";

export const sqrtScenarios: ReadonlyArray<Scenario> = [
  ["sqrt float", sqrt(float(0.3)), [0.5477225575]],
  [
    "sqrt vec2",
    sqrt(vec2(float(0.3), float(0.7))),
    [0.5477225575, 0.83666002653],
  ],
  [
    "sqrt vec3",
    sqrt(vec3(float(0.3), float(0.7), float(0.2))),
    [0.5477225575, 0.83666002653, 0.4472135955],
  ],
  [
    "sqrt vec4",
    sqrt(vec4(float(0.3), float(0.7), float(0.2), float(0.9))),
    [0.5477225575, 0.83666002653, 0.4472135955, 0.94868329805],
  ],
];
