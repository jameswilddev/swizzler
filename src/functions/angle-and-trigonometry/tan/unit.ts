import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, tan } from "../../..";

export const tanScenarios: ReadonlyArray<Scenario> = [
  ["tan float", "float", tan(float(0.3)), [0.30933624960962325]],
  [
    "tan vec2",
    "vec2",
    tan(vec2(float(0.3), float(0.4))),
    [0.30933624960962325, 0.4227932187381618],
  ],
  [
    "tan vec3",
    "vec3",
    tan(vec3(float(0.3), float(0.4), float(0.1))),
    [0.30933624960962325, 0.4227932187381618, 0.10033467208545055],
  ],
  [
    "tan vec4",
    "vec4",
    tan(vec4(float(0.3), float(0.4), float(0.1), float(0.2))),
    [
      0.30933624960962325,
      0.4227932187381618,
      0.10033467208545055,
      0.2027100355086725,
    ],
  ],
];
