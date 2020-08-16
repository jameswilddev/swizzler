import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, log } from "../../..";

export const logScenarios: ReadonlyArray<Scenario> = [
  ["log float", log(float(1.3)), [0.262364]],
  ["log vec2", log(vec2(float(1.3), float(1.1))), [0.262364, 0.0953102]],
  [
    "log vec3",
    log(vec3(float(1.3), float(1.1), float(1.8))),
    [0.262364, 0.0953102, 0.587787],
  ],
  [
    "log vec4",
    log(vec4(float(1.3), float(1.1), float(1.8), float(1.4))),
    [0.262364, 0.0953102, 0.587787, 0.336472],
  ],
];
