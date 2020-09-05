import { float, vec2, vec3, vec4, mat2, mat3, mat4, subtract } from "../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
  mat2Scenario,
  mat3Scenario,
  mat4Scenario,
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

mat2Scenario(
  "subtract float mat2",
  subtract(float(0.8), mat2(float(0.1), float(0.3), float(0.4), float(0.2))),
  [0.7, 0.5, 0.4, 0.6]
);

mat3Scenario(
  "subtract float mat3",
  subtract(
    float(0.8),
    mat3(
      float(0.1),
      float(0.3),
      float(0.4),
      float(0.2),
      float(0.7),
      float(0.6),
      float(0.5),
      float(0.55),
      float(0.35)
    )
  ),
  [0.7, 0.5, 0.4, 0.6, 0.1, 0.2, 0.3, 0.25, 0.45]
);

mat4Scenario(
  "subtract float mat4",
  subtract(
    float(0.8),
    mat4(
      float(0.1),
      float(0.3),
      float(0.4),
      float(0.2),
      float(0.7),
      float(0.6),
      float(0.5),
      float(0.55),
      float(0.35),
      float(0.45),
      float(0.05),
      float(0.15),
      float(0.425),
      float(0.475),
      float(0.075),
      float(0.125)
    )
  ),
  [
    0.7,
    0.5,
    0.4,
    0.6,
    0.1,
    0.2,
    0.3,
    0.25,
    0.45,
    0.35,
    0.75,
    0.65,
    0.375,
    0.325,
    0.725,
    0.675,
  ]
);

mat2Scenario(
  "subtract mat2 float",
  subtract(mat2(float(0.2), float(0.7), float(0.6), float(0.5)), float(0.1)),
  [0.1, 0.6, 0.5, 0.4]
);

mat3Scenario(
  "subtract mat3 float",
  subtract(
    mat3(
      float(0.2),
      float(0.7),
      float(0.6),
      float(0.5),
      float(0.55),
      float(0.35),
      float(0.45),
      float(0.175),
      float(0.15)
    ),
    float(0.1)
  ),
  [0.1, 0.6, 0.5, 0.4, 0.45, 0.25, 0.35, 0.075, 0.05]
);

mat4Scenario(
  "subtract mat4 float",
  subtract(
    mat4(
      float(0.2),
      float(0.7),
      float(0.6),
      float(0.5),
      float(0.55),
      float(0.35),
      float(0.45),
      float(0.175),
      float(0.15),
      float(0.425),
      float(0.175),
      float(0.3),
      float(0.4),
      float(0.475),
      float(0.275),
      float(0.125)
    ),
    float(0.1)
  ),
  [
    0.1,
    0.6,
    0.5,
    0.4,
    0.45,
    0.25,
    0.35,
    0.075,
    0.05,
    0.325,
    0.075,
    0.2,
    0.3,
    0.375,
    0.175,
    0.025,
  ]
);

mat2Scenario(
  "subtract mat2 mat2",
  subtract(
    mat2(float(0.2), float(0.7), float(0.6), float(0.5)),
    mat2(float(0.12), float(0.24), float(0.34), float(0.12))
  ),
  [0.08, 0.46, 0.26, 0.38]
);

mat3Scenario(
  "subtract mat3 mat3",
  subtract(
    mat3(
      float(0.2),
      float(0.7),
      float(0.6),
      float(0.5),
      float(0.55),
      float(0.35),
      float(0.45),
      float(0.175),
      float(0.15)
    ),
    mat3(
      float(0.12),
      float(0.24),
      float(0.34),
      float(0.12),
      float(0.52),
      float(0.16),
      float(0.38),
      float(0.02),
      float(0.08)
    )
  ),
  [0.08, 0.46, 0.26, 0.38, 0.03, 0.19, 0.07, 0.155, 0.07]
);

mat4Scenario(
  "subtract mat4 mat4",
  subtract(
    mat4(
      float(0.2),
      float(0.7),
      float(0.6),
      float(0.5),
      float(0.55),
      float(0.35),
      float(0.45),
      float(0.175),
      float(0.15),
      float(0.425),
      float(0.175),
      float(0.3),
      float(0.4),
      float(0.475),
      float(0.275),
      float(0.125)
    ),
    mat4(
      float(0.12),
      float(0.24),
      float(0.34),
      float(0.12),
      float(0.52),
      float(0.16),
      float(0.38),
      float(0.02),
      float(0.08),
      float(0.311),
      float(0.05),
      float(0.12),
      float(0.05),
      float(0.31),
      float(0.15),
      float(0.06)
    )
  ),
  [
    0.08,
    0.46,
    0.26,
    0.38,
    0.03,
    0.19,
    0.07,
    0.155,
    0.07,
    0.114,
    0.125,
    0.18,
    0.35,
    0.165,
    0.125,
    0.065,
  ]
);

xit("subtract int", () => {});
