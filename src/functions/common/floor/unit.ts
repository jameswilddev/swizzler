import { float, vec2, vec3, vec4, add, multiply, floor } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "floor float negative decimal",
  add(multiply(floor(float(-1.3)), float(0.25)), float(0.5)),
  0
);

floatScenario(
  "floor float negative integer",
  add(multiply(floor(float(-1)), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  "floor float negative unit interval",
  add(multiply(floor(float(-0.3)), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  "floor float zero",
  add(multiply(floor(float(0)), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  "floor float positive unit interval",
  add(multiply(floor(float(0.3)), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  "floor float positive integer",
  add(multiply(floor(float(1)), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  "floor float positive float",
  add(multiply(floor(float(1.3)), float(0.25)), float(0.5)),
  0.75
);

vec2Scenario(
  "floor vec2 a",
  add(multiply(floor(vec2(float(-1.3), float(1))), float(0.25)), float(0.5)),
  [0, 0.75]
);

vec2Scenario(
  "floor vec2 b",
  add(multiply(floor(vec2(float(1.3), float(-1))), float(0.25)), float(0.5)),
  [0.75, 0.25]
);

vec2Scenario(
  "floor vec2 c",
  add(multiply(floor(vec2(float(0.3), float(0))), float(0.25)), float(0.5)),
  [0.5, 0.5]
);

vec2Scenario(
  "floor vec2 d",
  add(multiply(floor(vec2(float(-0.3), float(0))), float(0.25)), float(0.5)),
  [0.25, 0.5]
);

vec3Scenario(
  "floor vec3 a",
  add(
    multiply(floor(vec3(float(-1.3), float(1), float(-1))), float(0.25)),
    float(0.5)
  ),
  [0, 0.75, 0.25]
);

vec3Scenario(
  "floor vec3 b",
  add(
    multiply(floor(vec3(float(1.3), float(0), float(0.3))), float(0.25)),
    float(0.5)
  ),
  [0.75, 0.5, 0.5]
);

vec3Scenario(
  "floor vec3 c",
  add(
    multiply(floor(vec3(float(0.3), float(0), float(-0.3))), float(0.25)),
    float(0.5)
  ),
  [0.5, 0.5, 0.25]
);

vec4Scenario(
  "floor vec4 a",
  add(
    multiply(
      floor(vec4(float(-1.3), float(0.3), float(0), float(1.3))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0, 0.5, 0.5, 0.75]
);

vec4Scenario(
  "floor vec4 b",
  add(
    multiply(
      floor(vec4(float(-1), float(-0.3), float(1), float(1.3))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.25, 0.25, 0.75, 0.75]
);
