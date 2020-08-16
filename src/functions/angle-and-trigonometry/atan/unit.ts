import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, atan } from "../../..";

export const atanScenarios: ReadonlyArray<Scenario> = [
  ["atan float", atan(float(0.9)), [0.7328151017865066]],
  [
    "atan vec2",
    atan(vec2(float(0.9), float(0.6))),
    [0.7328151017865066, 0.5404195002705842],
  ],
  [
    "atan vec3",
    atan(vec3(float(0.9), float(0.6), float(0.8))),
    [0.7328151017865066, 0.5404195002705842, 0.674741],
  ],
  [
    "atan vec4",

    atan(vec4(float(0.9), float(0.6), float(0.8), float(0.1))),
    [0.7328151017865066, 0.5404195002705842, 0.674741, 0.09966865249116204],
  ],
];
