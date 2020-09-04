import { float, vec2, vec3, vec4, add, multiply, max } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "max float first greater",
  add(multiply(max(float(0.7), float(0.3)), float(0.25)), float(0.5)),
  0.675
);

floatScenario(
  "max float equal",
  add(multiply(max(float(0.5), float(0.5)), float(0.25)), float(0.5)),
  0.625
);

floatScenario(
  "max float second greater",
  add(multiply(max(float(0.3), float(0.7)), float(0.25)), float(0.5)),
  0.675
);

vec2Scenario(
  "max vec2 vec2 a",
  add(
    multiply(
      max(vec2(float(0.3), float(0.5)), vec2(float(0.7), float(0.5))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.675, 0.625]
);

vec2Scenario(
  "max vec2 vec2 b",
  add(
    multiply(
      max(vec2(float(0.7), float(0.5)), vec2(float(0.3), float(0.5))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.675, 0.625]
);

vec2Scenario(
  "max vec2 float a",
  add(
    multiply(max(vec2(float(0.3), float(0.7)), float(0.5)), float(0.25)),
    float(0.5)
  ),
  [0.625, 0.675]
);

vec2Scenario(
  "max vec2 float b",
  add(
    multiply(max(vec2(float(0.7), float(0.5)), float(0.5)), float(0.25)),
    float(0.5)
  ),
  [0.675, 0.625]
);

vec3Scenario(
  "max vec3 vec3",
  add(
    multiply(
      max(
        vec3(float(0.7), float(0.5), float(0.4)),
        vec3(float(0.3), float(0.5), float(0.6))
      ),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.675, 0.625, 0.65]
);

vec3Scenario(
  "max vec3 float",
  add(
    multiply(
      max(vec3(float(0.7), float(0.5), float(0.4)), float(0.5)),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.675, 0.625, 0.625]
);

vec4Scenario(
  "max vec4 vec4",
  add(
    multiply(
      max(
        vec4(float(0.7), float(0.5), float(0.4), float(0.8)),
        vec4(float(0.3), float(0.5), float(0.6), float(0.2))
      ),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.675, 0.625, 0.65, 0.7]
);

vec4Scenario(
  "max vec4 float",
  add(
    multiply(
      max(vec4(float(0.7), float(0.5), float(0.4), float(0.8)), float(0.5)),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.675, 0.625, 0.625, 0.7]
);
