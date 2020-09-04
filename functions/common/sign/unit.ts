import { float, vec2, vec3, vec4, add, multiply, sign } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "sign float negative decimal",
  add(multiply(sign(float(-1.3)), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  "sign float negative integer",
  add(multiply(sign(float(-1)), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  "sign float negative unit interval",
  add(multiply(sign(float(-0.3)), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  "sign float zero",
  add(multiply(sign(float(0)), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  "sign float positive unit interval",
  add(multiply(sign(float(0.3)), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  "sign float positive integer",
  add(multiply(sign(float(1)), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  "sign float positive float",
  add(multiply(sign(float(1.3)), float(0.25)), float(0.5)),
  0.75
);

vec2Scenario(
  "sign vec2 a",
  add(multiply(sign(vec2(float(-1.3), float(1))), float(0.25)), float(0.5)),
  [0.25, 0.75]
);

vec2Scenario(
  "sign vec2 b",
  add(multiply(sign(vec2(float(1.3), float(-1))), float(0.25)), float(0.5)),
  [0.75, 0.25]
);

vec2Scenario(
  "sign vec2 c",
  add(multiply(sign(vec2(float(0.3), float(0))), float(0.25)), float(0.5)),
  [0.75, 0.5]
);

vec2Scenario(
  "sign vec2 d",
  add(multiply(sign(vec2(float(-0.3), float(0))), float(0.25)), float(0.5)),
  [0.25, 0.5]
);

vec3Scenario(
  "sign vec3 a",
  add(
    multiply(sign(vec3(float(-1.3), float(1), float(-1))), float(0.25)),
    float(0.5)
  ),
  [0.25, 0.75, 0.25]
);

vec3Scenario(
  "sign vec3 b",
  add(
    multiply(sign(vec3(float(1.3), float(0), float(0.3))), float(0.25)),
    float(0.5)
  ),
  [0.75, 0.5, 0.75]
);

vec3Scenario(
  "sign vec3 c",
  add(
    multiply(sign(vec3(float(0.3), float(0), float(-0.3))), float(0.25)),
    float(0.5)
  ),
  [0.75, 0.5, 0.25]
);

vec4Scenario(
  "sign vec4 a",
  add(
    multiply(
      sign(vec4(float(-1.3), float(0.3), float(0), float(1.3))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.25, 0.75, 0.5, 0.75]
);

vec4Scenario(
  "sign vec4 b",
  add(
    multiply(
      sign(vec4(float(-1), float(-0.3), float(1), float(1.3))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.25, 0.25, 0.75, 0.75]
);
