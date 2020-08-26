import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, subtract, exp } from "../../..";

export const expScenarios: ReadonlyArray<Scenario> = [
  [
    "exp float",
    "float",
    subtract(exp(float(0.7)), float(1.5)),
    [0.51375270747],
  ],
  [
    "exp vec2",
    "vec2",
    subtract(exp(vec2(float(0.7), float(0.6))), float(1.5)),
    [0.51375270747, 0.32211880039],
  ],
  [
    "exp vec3",
    "vec3",
    subtract(exp(vec3(float(0.7), float(0.6), float(0.8))), float(1.5)),
    [0.51375270747, 0.32211880039, 0.72554092849],
  ],
  [
    "exp vec4",
    "vec4",
    subtract(
      exp(vec4(float(0.7), float(0.6), float(0.8), float(0.5))),
      float(1.5)
    ),
    [0.51375270747, 0.32211880039, 0.72554092849, 0.1487212707],
  ],
];
