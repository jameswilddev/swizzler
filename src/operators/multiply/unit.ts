import { float, vec2, vec3, vec4, multiply } from "../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../unit";

floatScenario(
  "multiply float float",
  multiply(float(102 / 255), float(75 / 255)),
  7650 / 65025
);

vec2Scenario(
  "multiply vec2 float",
  multiply(vec2(float(175 / 255), float(202 / 255)), float(102 / 255)),
  [17850 / 65025, 20604 / 65025]
);

vec3Scenario(
  "multiply vec3 float",
  multiply(
    vec3(float(175 / 255), float(202 / 255), float(247 / 255)),
    float(102 / 255)
  ),
  [17850 / 65025, 20604 / 65025, 25194 / 65025]
);

vec4Scenario(
  "multiply vec4 float",
  multiply(
    vec4(
      float(175 / 255),
      float(202 / 255),
      float(247 / 255),
      float(144 / 255)
    ),
    float(102 / 255)
  ),
  [17850 / 65025, 20604 / 65025, 25194 / 65025, 14688 / 65025]
);

vec2Scenario(
  "multiply float vec2",
  multiply(float(102 / 255), vec2(float(175 / 255), float(202 / 255))),
  [17850 / 65025, 20604 / 65025]
);

vec3Scenario(
  "multiply float vec3",
  multiply(
    float(102 / 255),
    vec3(float(175 / 255), float(202 / 255), float(247 / 255))
  ),
  [17850 / 65025, 20604 / 65025, 25194 / 65025]
);

vec4Scenario(
  "multiply float vec4",
  multiply(
    float(102 / 255),
    vec4(float(175 / 255), float(202 / 255), float(247 / 255), float(144 / 255))
  ),
  [17850 / 65025, 20604 / 65025, 25194 / 65025, 14688 / 65025]
);

vec2Scenario(
  "multiply vec2 vec2",
  multiply(
    vec2(float(102 / 255), float(142 / 255)),
    vec2(float(74 / 255), float(88 / 255))
  ),
  [7548 / 65025, 12496 / 65025]
);

vec3Scenario(
  "multiply vec3 vec3",
  multiply(
    vec3(float(102 / 255), float(142 / 255), float(133 / 255)),
    vec3(float(74 / 255), float(88 / 255), float(29 / 255))
  ),
  [7548 / 65025, 12496 / 65025, 3857 / 65025]
);

vec4Scenario(
  "multiply vec4 vec4",
  multiply(
    vec4(
      float(102 / 255),
      float(142 / 255),
      float(133 / 255),
      float(250 / 255)
    ),
    vec4(float(74 / 255), float(88 / 255), float(29 / 255), float(140 / 255))
  ),
  [7548 / 65025, 12496 / 65025, 3857 / 65025, 35000 / 65025]
);
