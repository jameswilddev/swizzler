import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, log2 } from "../../..";

export const log2Scenarios: ReadonlyArray<Scenario> = [
  ["log2 float", log2(float(1.6)), [0.67807190511]],
  [
    "log2 vec2",
    log2(vec2(float(1.6), float(1.3))),
    [0.67807190511, 0.37851162325],
  ],
  [
    "log2 vec3",
    log2(vec3(float(1.6), float(1.3), float(1.9))),
    [0.67807190511, 0.37851162325, 0.92599941855],
  ],
  [
    "log2 vec4",
    log2(vec4(float(1.6), float(1.3), float(1.9), float(1.4))),
    [0.67807190511, 0.37851162325, 0.92599941855, 0.48542682717],
  ],
];
