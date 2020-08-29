import { float, vec2, vec3, vec4, add, multiply, ceil } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "ceil float negative decimal",
  add(multiply(ceil(float(-1.3)), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  "ceil float negative integer",
  add(multiply(ceil(float(-1)), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  "ceil float negative unit interval",
  add(multiply(ceil(float(-0.3)), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  "ceil float zero",
  add(multiply(ceil(float(0)), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  "ceil float positive unit interval",
  add(multiply(ceil(float(0.3)), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  "ceil float positive integer",
  add(multiply(ceil(float(1)), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  "ceil float positive float",
  add(multiply(ceil(float(1.3)), float(0.25)), float(0.5)),
  1
);

vec2Scenario(
  "ceil vec2 a",
  add(multiply(ceil(vec2(float(-1.3), float(1))), float(0.25)), float(0.5)),
  [0.25, 0.75]
);

vec2Scenario(
  "ceil vec2 b",
  add(multiply(ceil(vec2(float(1.3), float(-1))), float(0.25)), float(0.5)),
  [1, 0.25]
);

vec2Scenario(
  "ceil vec2 c",
  add(multiply(ceil(vec2(float(0.3), float(0))), float(0.25)), float(0.5)),
  [0.75, 0.5]
);

vec2Scenario(
  "ceil vec2 d",
  add(multiply(ceil(vec2(float(-0.3), float(0))), float(0.25)), float(0.5)),
  [0.5, 0.5]
);

vec3Scenario(
  "ceil vec3 a",
  add(
    multiply(ceil(vec3(float(-1.3), float(1), float(-1))), float(0.25)),
    float(0.5)
  ),
  [0.25, 0.75, 0.25]
);

vec3Scenario(
  "ceil vec3 b",
  add(
    multiply(ceil(vec3(float(1.3), float(0), float(0.3))), float(0.25)),
    float(0.5)
  ),
  [1, 0.5, 0.75]
);

vec3Scenario(
  "ceil vec3 c",
  add(
    multiply(ceil(vec3(float(0.3), float(0), float(-0.3))), float(0.25)),
    float(0.5)
  ),
  [0.75, 0.5, 0.5]
);

vec4Scenario(
  "ceil vec4 a",
  add(
    multiply(
      ceil(vec4(float(-1.3), float(0.3), float(0), float(1.3))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.25, 0.75, 0.5, 1]
);

vec4Scenario(
  "ceil vec4 b",
  add(
    multiply(
      ceil(vec4(float(-1), float(-0.3), float(1), float(1.3))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.25, 0.5, 0.75, 1]
);
