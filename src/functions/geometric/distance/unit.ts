import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, distance } from "../../..";

export const distanceScenarios: ReadonlyArray<Scenario> = [
  [
    "distance float lesser greater",
    distance(float(75 / 255), float(108 / 255)),
    [33 / 255],
  ],
  [
    "distance float greater lesser",
    distance(float(108 / 255), float(75 / 255)),
    [33 / 255],
  ],
  [
    "distance vec2",
    distance(
      vec2(float(108 / 255), float(240 / 255)),
      vec2(float(75 / 255), float(33 / 255))
    ),
    [0.822015],
  ],
  [
    "distance vec3",
    distance(
      vec3(float(108 / 255), float(240 / 255), float(55 / 255)),
      vec3(float(75 / 255), float(33 / 255), float(40 / 255))
    ),
    [0.824117],
  ],
  [
    "distance vec4",
    distance(
      vec4(
        float(108 / 255),
        float(240 / 255),
        float(55 / 255),
        float(67 / 255)
      ),
      vec4(float(75 / 255), float(33 / 255), float(40 / 255), float(80 / 255))
    ),
    [0.825693],
  ],
];
