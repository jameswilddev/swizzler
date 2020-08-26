import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, cos } from "../../..";

export const cosScenarios: ReadonlyArray<Scenario> = [
  ["cos float", "float", cos(float(0.9)), [0.6216099682706644]],
  [
    "cos vec2",
    "vec2",
    cos(vec2(float(0.9), float(-0.6))),
    [0.6216099682706644, 0.8253356149096783],
  ],
  [
    "cos vec3",
    "vec3",
    cos(vec3(float(0.9), float(-0.6), float(0.8))),
    [0.6216099682706644, 0.8253356149096783, 0.6967067093471654],
  ],
  [
    "cos vec4",
    "vec4",
    cos(vec4(float(0.9), float(-0.6), float(0.8), float(0.1))),
    [0.6216099682706644, 0.8253356149096783, 0.6967067093471654, 0.99500417],
  ],
];
