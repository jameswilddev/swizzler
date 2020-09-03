import { float, vec2, vec3, vec4, mat2, mat3, mat4, multiply } from "../..";
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

mat2Scenario(
  "multiply float mat2",
  multiply(float(0.4), mat2(float(0.6), float(0.8), float(0.2), float(0.9))),
  [0.24, 0.32, 0.08, 0.36]
);

mat3Scenario(
  "multiply float mat3",
  multiply(
    float(0.4),
    mat3(
      float(0.6),
      float(0.8),
      float(0.2),
      float(0.9),
      float(0.1),
      float(0.5),
      float(0.4),
      float(0.3),
      float(0.7)
    )
  ),
  [0.24, 0.32, 0.08, 0.36, 0.04, 0.2, 0.16, 0.12, 0.28]
);

mat4Scenario(
  "multiply float mat4",
  multiply(
    float(0.4),
    mat4(
      float(0.6),
      float(0.8),
      float(0.2),
      float(0.9),
      float(0.1),
      float(0.5),
      float(0.4),
      float(0.3),
      float(0.7),
      float(0.23),
      float(0.78),
      float(0.32),
      float(0.65),
      float(0.84),
      float(0.55),
      float(0.92)
    )
  ),
  [
    0.24,
    0.32,
    0.08,
    0.36,
    0.04,
    0.2,
    0.16,
    0.12,
    0.28,
    0.092,
    0.312,
    0.128,
    0.26,
    0.336,
    0.22,
    0.368,
  ]
);

mat2Scenario(
  "multiply mat2 float",
  multiply(mat2(float(0.6), float(0.8), float(0.2), float(0.9)), float(0.4)),
  [0.24, 0.32, 0.08, 0.36]
);

mat3Scenario(
  "multiply mat3 float",
  multiply(
    mat3(
      float(0.6),
      float(0.8),
      float(0.2),
      float(0.9),
      float(0.1),
      float(0.5),
      float(0.4),
      float(0.3),
      float(0.7)
    ),
    float(0.4)
  ),
  [0.24, 0.32, 0.08, 0.36, 0.04, 0.2, 0.16, 0.12, 0.28]
);

mat4Scenario(
  "multiply mat4 float",
  multiply(
    mat4(
      float(0.6),
      float(0.8),
      float(0.2),
      float(0.9),
      float(0.1),
      float(0.5),
      float(0.4),
      float(0.3),
      float(0.7),
      float(0.23),
      float(0.78),
      float(0.32),
      float(0.65),
      float(0.84),
      float(0.55),
      float(0.92)
    ),
    float(0.4)
  ),
  [
    0.24,
    0.32,
    0.08,
    0.36,
    0.04,
    0.2,
    0.16,
    0.12,
    0.28,
    0.092,
    0.312,
    0.128,
    0.26,
    0.336,
    0.22,
    0.368,
  ]
);

mat2Scenario(
  "multiply mat2 mat2",
  multiply(
    mat2(float(0.14), float(0.07), float(0.11), float(0.58)),
    mat2(float(0.36), float(0.37), float(0.54), float(0.06))
  ),
  [0.0911, 0.2398, 0.0822, 0.0726]
);

mat3Scenario(
  "multiply mat3 mat3",
  multiply(
    mat3(
      float(0.14),
      float(0.07),
      float(0.91),
      float(0.11),
      float(0.58),
      float(0.21),
      float(0.88),
      float(0.16),
      float(0.49)
    ),
    mat3(
      float(0.36),
      float(0.37),
      float(0.07),
      float(0.54),
      float(0.06),
      float(0.73),
      float(0.11),
      float(0.73),
      float(0.2)
    )
  ),
  [0.1527, 0.251, 0.4396, 0.7246, 0.1894, 0.8617, 0.2717, 0.4631, 0.3514]
);

mat4Scenario(
  "multiply mat4 mat4",
  multiply(
    mat4(
      float(0.14),
      float(0.07),
      float(0.91),
      float(0.28),
      float(0.11),
      float(0.58),
      float(0.21),
      float(0.56),
      float(0.88),
      float(0.16),
      float(0.49),
      float(0.52),
      float(0.37),
      float(0.06),
      float(0.27),
      float(0.35)
    ),
    mat4(
      float(0.36),
      float(0.37),
      float(0.07),
      float(0.64),
      float(0.54),
      float(0.06),
      float(0.73),
      float(0.23),
      float(0.11),
      float(0.73),
      float(0.2),
      float(0.33),
      float(0.4),
      float(0.82),
      float(0.19),
      float(0.08)
    )
  ),
  [
    0.3895,
    0.2894,
    0.6124,
    0.5684,
    0.8097,
    0.2032,
    0.9238,
    0.6449,
    0.3938,
    0.4829,
    0.4405,
    0.6591,
    0.343,
    0.5388,
    0.6509,
    0.698,
  ]
);
