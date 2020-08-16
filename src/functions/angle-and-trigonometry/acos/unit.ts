import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, acos } from "../../..";

export const acosScenarios: ReadonlyArray<Scenario> = [
  ["acos float", acos(float(0.9)), [0.451027]],
  [
    "acos vec2",
    acos(vec2(float(0.9), float(0.6))),
    [0.451027, 0.9272952180016123],
  ],
  [
    "acos vec3",
    acos(vec3(float(0.9), float(0.6), float(0.8))),
    [0.451027, 0.9272952180016123, 0.6435011087932843],
  ],
  [
    "acos vec4",
    acos(vec4(float(0.9), float(0.6), float(0.8), float(0.75))),
    [0.451027, 0.9272952180016123, 0.6435011087932843, 0.7227342478134157],
  ],
];
