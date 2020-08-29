import { float, vec2, vec3, vec4, subtract } from "../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../unit";

floatScenario(
  "subtract float float",
  subtract(float(102 / 255), float(75 / 255)),
  27 / 255
);

vec2Scenario(
  "subtract vec2 float",
  subtract(vec2(float(175 / 255), float(202 / 255)), float(102 / 255)),
  [73 / 255, 100 / 255]
);

vec3Scenario(
  "subtract vec3 float",
  subtract(
    vec3(float(175 / 255), float(202 / 255), float(247 / 255)),
    float(102 / 255)
  ),
  [73 / 255, 100 / 255, 145 / 255]
);

vec4Scenario(
  "subtract vec4 float",
  subtract(
    vec4(
      float(175 / 255),
      float(202 / 255),
      float(247 / 255),
      float(144 / 255)
    ),
    float(102 / 255)
  ),
  [73 / 255, 100 / 255, 145 / 255, 42 / 255]
);

vec2Scenario(
  "subtract float vec2",
  subtract(float(140 / 255), vec2(float(75 / 255), float(89 / 255))),
  [65 / 255, 51 / 255]
);

vec3Scenario(
  "subtract float vec3",
  subtract(
    float(140 / 255),
    vec3(float(75 / 255), float(89 / 255), float(42 / 255))
  ),
  [65 / 255, 51 / 255, 98 / 255]
);

vec4Scenario(
  "subtract float vec4",
  subtract(
    float(140 / 255),
    vec4(float(75 / 255), float(89 / 255), float(42 / 255), float(31 / 255))
  ),
  [65 / 255, 51 / 255, 98 / 255, 109 / 255]
);

vec2Scenario(
  "subtract vec2 vec2",
  subtract(
    vec2(float(102 / 255), float(142 / 255)),
    vec2(float(74 / 255), float(88 / 255))
  ),
  [28 / 255, 54 / 255]
);

vec3Scenario(
  "subtract vec3 vec3",
  subtract(
    vec3(float(102 / 255), float(142 / 255), float(133 / 255)),
    vec3(float(74 / 255), float(88 / 255), float(29 / 255))
  ),
  [28 / 255, 54 / 255, 104 / 255]
);

vec4Scenario(
  "subtract vec4 vec4",
  subtract(
    vec4(
      float(102 / 255),
      float(142 / 255),
      float(133 / 255),
      float(250 / 255)
    ),
    vec4(float(74 / 255), float(88 / 255), float(29 / 255), float(140 / 255))
  ),
  [28 / 255, 54 / 255, 104 / 255, 110 / 255]
);
