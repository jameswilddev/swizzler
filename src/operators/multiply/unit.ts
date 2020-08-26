import { float, vec2, vec3, vec4, multiply } from "../..";
import { Scenario } from "../../scenario/unit";

export const multiplyScenarios: ReadonlyArray<Scenario> = [
  [
    "multiply float float",
    "float",
    multiply(float(102 / 255), float(75 / 255)),
    [7650 / 65025],
  ],
  [
    "multiply vec2 float",
    "vec2",
    multiply(vec2(float(175 / 255), float(202 / 255)), float(102 / 255)),
    [17850 / 65025, 20604 / 65025],
  ],
  [
    "multiply vec3 float",
    "vec3",
    multiply(
      vec3(float(175 / 255), float(202 / 255), float(247 / 255)),
      float(102 / 255)
    ),
    [17850 / 65025, 20604 / 65025, 25194 / 65025],
  ],
  [
    "multiply vec4 float",
    "vec4",
    multiply(
      vec4(
        float(175 / 255),
        float(202 / 255),
        float(247 / 255),
        float(144 / 255)
      ),
      float(102 / 255)
    ),
    [17850 / 65025, 20604 / 65025, 25194 / 65025, 14688 / 65025],
  ],
  [
    "multiply float vec2",
    "vec2",
    multiply(float(102 / 255), vec2(float(175 / 255), float(202 / 255))),
    [17850 / 65025, 20604 / 65025],
  ],
  [
    "multiply float vec3",
    "vec3",
    multiply(
      float(102 / 255),
      vec3(float(175 / 255), float(202 / 255), float(247 / 255))
    ),
    [17850 / 65025, 20604 / 65025, 25194 / 65025],
  ],
  [
    "multiply float vec4",
    "vec4",
    multiply(
      float(102 / 255),
      vec4(
        float(175 / 255),
        float(202 / 255),
        float(247 / 255),
        float(144 / 255)
      )
    ),
    [17850 / 65025, 20604 / 65025, 25194 / 65025, 14688 / 65025],
  ],

  [
    "multiply vec2 vec2",
    "vec2",
    multiply(
      vec2(float(102 / 255), float(142 / 255)),
      vec2(float(74 / 255), float(88 / 255))
    ),
    [7548 / 65025, 12496 / 65025],
  ],
  [
    "multiply vec3 vec3",
    "vec3",
    multiply(
      vec3(float(102 / 255), float(142 / 255), float(133 / 255)),
      vec3(float(74 / 255), float(88 / 255), float(29 / 255))
    ),
    [7548 / 65025, 12496 / 65025, 3857 / 65025],
  ],
  [
    "multiply vec4 vec4",
    "vec4",
    multiply(
      vec4(
        float(102 / 255),
        float(142 / 255),
        float(133 / 255),
        float(250 / 255)
      ),
      vec4(float(74 / 255), float(88 / 255), float(29 / 255), float(140 / 255))
    ),
    [7548 / 65025, 12496 / 65025, 3857 / 65025, 35000 / 65025],
  ],
];
