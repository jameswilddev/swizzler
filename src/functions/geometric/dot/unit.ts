import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, dot } from "../../..";

export const dotScenarios: ReadonlyArray<Scenario> = [
  ["dot float", dot(float(75 / 255), float(108 / 255)), [8100 / 65025]],
  [
    "dot vec2",
    dot(
      vec2(float(108 / 255), float(240 / 255)),
      vec2(float(75 / 255), float(33 / 255))
    ),
    [0.246366782006920415224913494809688],
  ],
  [
    "dot vec3",
    dot(
      vec3(float(108 / 255), float(240 / 255), float(55 / 255)),
      vec3(float(75 / 255), float(33 / 255), float(40 / 255))
    ),
    [0.2801999231064975009611687812379853902],
  ],
  [
    "dot vec4",
    dot(
      vec4(
        float(108 / 255),
        float(240 / 255),
        float(55 / 255),
        float(67 / 255)
      ),
      vec4(float(75 / 255), float(33 / 255), float(40 / 255), float(80 / 255))
    ),
    [0.362629757785467128027681660899653979],
  ],
];
