import { float, vec2, vec3, vec4, mat2, mat3, mat4, add } from "../..";
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
  "add float float",
  add(float(75 / 255), float(102 / 255)),
  177 / 255
);

vec2Scenario(
  "add vec2 float",
  add(vec2(float(75 / 255), float(89 / 255)), float(102 / 255)),
  [177 / 255, 191 / 255]
);

vec3Scenario(
  "add vec3 float",
  add(
    vec3(float(75 / 255), float(89 / 255), float(14 / 255)),
    float(102 / 255)
  ),
  [177 / 255, 191 / 255, 116 / 255]
);

vec4Scenario(
  "add vec4 float",
  add(
    vec4(float(75 / 255), float(89 / 255), float(14 / 255), float(55 / 255)),
    float(102 / 255)
  ),
  [177 / 255, 191 / 255, 116 / 255, 157 / 255]
);

vec2Scenario(
  "add float vec2",
  add(float(102 / 255), vec2(float(75 / 255), float(89 / 255))),
  [177 / 255, 191 / 255]
);

vec3Scenario(
  "add float vec3",
  add(
    float(102 / 255),
    vec3(float(75 / 255), float(89 / 255), float(14 / 255))
  ),
  [177 / 255, 191 / 255, 116 / 255]
);

vec4Scenario(
  "add float vec4",
  add(
    float(102 / 255),
    vec4(float(75 / 255), float(89 / 255), float(14 / 255), float(55 / 255))
  ),
  [177 / 255, 191 / 255, 116 / 255, 157 / 255]
);

vec2Scenario(
  "add vec2 vec2",
  add(
    vec2(float(75 / 255), float(89 / 255)),
    vec2(float(102 / 255), float(88 / 255))
  ),
  [177 / 255, 177 / 255]
);

vec3Scenario(
  "add vec3 vec3",
  add(
    vec3(float(75 / 255), float(89 / 255), float(14 / 255)),
    vec3(float(102 / 255), float(88 / 255), float(80 / 255))
  ),
  [177 / 255, 177 / 255, 94 / 255]
);

vec4Scenario(
  "add vec4 vec4",
  add(
    vec4(float(75 / 255), float(89 / 255), float(14 / 255), float(55 / 255)),
    vec4(float(102 / 255), float(88 / 255), float(80 / 255), float(99 / 255))
  ),
  [177 / 255, 177 / 255, 94 / 255, 154 / 255]
);

mat2Scenario(
  "add mat2 mat2",
  add(
    mat2(float(0.14), float(0.07), float(0.91), float(0.28)),
    mat2(float(0.36), float(0.37), float(0.07), float(0.64))
  ),
  [0.5, 0.44, 0.98, 0.92]
);

mat3Scenario(
  "add mat3 mat3",
  add(
    mat3(
      float(0.14),
      float(0.07),
      float(0.91),
      float(0.28),
      float(0.11),
      float(0.58),
      float(0.21),
      float(0.56),
      float(0.88)
    ),
    mat3(
      float(0.36),
      float(0.37),
      float(0.07),
      float(0.64),
      float(0.54),
      float(0.06),
      float(0.73),
      float(0.23),
      float(0.11)
    )
  ),
  [0.5, 0.44, 0.98, 0.92, 0.65, 0.64, 0.94, 0.79, 0.99]
);

mat4Scenario(
  "add mat4 mat4",
  add(
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
    0.5,
    0.44,
    0.98,
    0.92,
    0.65,
    0.64,
    0.94,
    0.79,
    0.99,
    0.89,
    0.69,
    0.85,
    0.77,
    0.88,
    0.46,
    0.43,
  ]
);

mat2Scenario(
  "add float mat2",
  add(float(0.14), mat2(float(0.36), float(0.27), float(0.07), float(0.64))),
  [0.5, 0.41, 0.21, 0.78]
);

mat3Scenario(
  "add float mat3",
  add(
    float(0.14),
    mat3(
      float(0.36),
      float(0.27),
      float(0.07),
      float(0.64),
      float(0.54),
      float(0.06),
      float(0.73),
      float(0.23),
      float(0.11)
    )
  ),
  [0.5, 0.41, 0.21, 0.78, 0.68, 0.2, 0.87, 0.37, 0.25]
);

mat4Scenario(
  "add float mat4",
  add(
    float(0.14),
    mat4(
      float(0.36),
      float(0.27),
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
    0.5,
    0.41,
    0.21,
    0.78,
    0.68,
    0.2,
    0.87,
    0.37,
    0.25,
    0.87,
    0.34,
    0.47,
    0.54,
    0.96,
    0.33,
    0.22,
  ]
);

mat2Scenario(
  "add mat2 float",
  add(mat2(float(0.36), float(0.27), float(0.07), float(0.64)), float(0.14)),
  [0.5, 0.41, 0.21, 0.78]
);

mat3Scenario(
  "add mat3 float",
  add(
    mat3(
      float(0.36),
      float(0.27),
      float(0.07),
      float(0.64),
      float(0.54),
      float(0.06),
      float(0.73),
      float(0.23),
      float(0.11)
    ),
    float(0.14)
  ),
  [0.5, 0.41, 0.21, 0.78, 0.68, 0.2, 0.87, 0.37, 0.25]
);

mat4Scenario(
  "add mat4 float",
  add(
    mat4(
      float(0.36),
      float(0.27),
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
    ),
    float(0.14)
  ),
  [
    0.5,
    0.41,
    0.21,
    0.78,
    0.68,
    0.2,
    0.87,
    0.37,
    0.25,
    0.87,
    0.34,
    0.47,
    0.54,
    0.96,
    0.33,
    0.22,
  ]
);
