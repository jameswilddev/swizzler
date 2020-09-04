import { float, vec2, vec3, vec4, add, multiply, min } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "min float first greater",
  add(multiply(min(float(0.7), float(0.3)), float(0.25)), float(0.5)),
  0.575
);

floatScenario(
  "min float equal",
  add(multiply(min(float(0.5), float(0.5)), float(0.25)), float(0.5)),
  0.625
);

floatScenario(
  "min float second greater",
  add(multiply(min(float(0.3), float(0.7)), float(0.25)), float(0.5)),
  0.575
);

vec2Scenario(
  "min vec2 vec2 a",
  add(
    multiply(
      min(vec2(float(0.3), float(0.5)), vec2(float(0.7), float(0.5))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.575, 0.625]
);

vec2Scenario(
  "min vec2 vec2 b",
  add(
    multiply(
      min(vec2(float(0.7), float(0.5)), vec2(float(0.3), float(0.5))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.575, 0.625]
);

vec2Scenario(
  "min vec2 float a",
  add(
    multiply(min(vec2(float(0.3), float(0.7)), float(0.5)), float(0.25)),
    float(0.5)
  ),
  [0.575, 0.625]
);

vec2Scenario(
  "min vec2 float b",
  add(
    multiply(min(vec2(float(0.7), float(0.5)), float(0.5)), float(0.25)),
    float(0.5)
  ),
  [0.625, 0.625]
);

vec3Scenario(
  "min vec3 vec3",
  add(
    multiply(
      min(
        vec3(float(0.7), float(0.5), float(0.4)),
        vec3(float(0.3), float(0.5), float(0.6))
      ),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.575, 0.625, 0.6]
);

vec3Scenario(
  "min vec3 float",
  add(
    multiply(
      min(vec3(float(0.7), float(0.5), float(0.4)), float(0.5)),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.625, 0.625, 0.6]
);

vec4Scenario(
  "min vec4 vec4",
  add(
    multiply(
      min(
        vec4(float(0.7), float(0.5), float(0.4), float(0.8)),
        vec4(float(0.3), float(0.5), float(0.6), float(0.2))
      ),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.575, 0.625, 0.6, 0.55]
);

vec4Scenario(
  "min vec4 float",
  add(
    multiply(
      min(vec4(float(0.7), float(0.5), float(0.4), float(0.8)), float(0.5)),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.625, 0.625, 0.6, 0.625]
);
