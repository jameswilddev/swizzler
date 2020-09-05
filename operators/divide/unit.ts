import { float, vec2, vec3, vec4, mat2, mat3, mat4, divide } from "../..";
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
  "divide float float",
  divide(float(75 / 255), float(102 / 255)),
  0.73529411764705882352941176470588
);

vec2Scenario(
  "divide vec2 float",
  divide(vec2(float(75 / 255), float(89 / 255)), float(102 / 255)),
  [0.73529411764705882352941176470588, 0.87254901960784313725490196078431]
);

vec3Scenario(
  "divide vec3 float",
  divide(
    vec3(float(75 / 255), float(89 / 255), float(14 / 255)),
    float(102 / 255)
  ),
  [
    0.73529411764705882352941176470588,
    0.87254901960784313725490196078431,
    0.13725490196078431372549019607843,
  ]
);

vec4Scenario(
  "divide vec4 float",
  divide(
    vec4(float(75 / 255), float(89 / 255), float(14 / 255), float(55 / 255)),
    float(102 / 255)
  ),
  [
    0.73529411764705882352941176470588,
    0.87254901960784313725490196078431,
    0.13725490196078431372549019607843,
    0.53921568627450980392156862745098,
  ]
);

vec2Scenario(
  "divide float vec2",
  divide(float(33 / 255), vec2(float(75 / 255), float(89 / 255))),
  [0.44, 0.37078651685393258426966292134831]
);

vec3Scenario(
  "divide float vec3",
  divide(
    float(33 / 255),
    vec3(float(75 / 255), float(89 / 255), float(65 / 255))
  ),
  [0.44, 0.37078651685393258426966292134831, 0.50769230769230769230769230769231]
);

vec4Scenario(
  "divide float vec4",
  divide(
    float(33 / 255),
    vec4(float(75 / 255), float(89 / 255), float(65 / 255), float(55 / 255))
  ),
  [
    0.44,
    0.37078651685393258426966292134831,
    0.50769230769230769230769230769231,
    0.6,
  ]
);

vec2Scenario(
  "divide vec2 vec2",
  divide(
    vec2(float(75 / 255), float(31 / 255)),
    vec2(float(102 / 255), float(88 / 255))
  ),
  [0.73529411764705882352941176470588, 0.35227272727272727272727272727273]
);

vec3Scenario(
  "divide vec3 vec3",
  divide(
    vec3(float(75 / 255), float(31 / 255), float(14 / 255)),
    vec3(float(102 / 255), float(88 / 255), float(80 / 255))
  ),
  [
    0.73529411764705882352941176470588,
    0.35227272727272727272727272727273,
    0.175,
  ]
);

vec4Scenario(
  "divide vec4 vec4",
  divide(
    vec4(float(75 / 255), float(31 / 255), float(14 / 255), float(55 / 255)),
    vec4(float(102 / 255), float(88 / 255), float(80 / 255), float(99 / 255))
  ),
  [
    0.73529411764705882352941176470588,
    0.35227272727272727272727272727273,
    0.175,
    0.55555555555555555555555555555556,
  ]
);

mat2Scenario(
  "divide float mat2",
  divide(
    float(0.4),
    mat2(
      float(1.666666666666667),
      float(1.25),
      float(5),
      float(1.111111111111111)
    )
  ),
  [0.24, 0.32, 0.08, 0.36]
);

mat3Scenario(
  "divide float mat3",
  divide(
    float(0.4),
    mat3(
      float(1.666666666666667),
      float(1.25),
      float(5),
      float(1.111111111111111),
      float(10),
      float(2),
      float(2.5),
      float(3.333333333333333),
      float(1.428571428571429)
    )
  ),
  [0.24, 0.32, 0.08, 0.36, 0.04, 0.2, 0.16, 0.12, 0.28]
);

mat4Scenario(
  "divide float mat4",
  divide(
    float(0.4),
    mat4(
      float(1.666666666666667),
      float(1.25),
      float(5),
      float(1.111111111111111),
      float(10),
      float(2),
      float(2.5),
      float(3.333333333333333),
      float(1.428571428571429),
      float(4.347826086956522),
      float(1.282051282051282),
      float(3.125),
      float(1.538461538461538),
      float(1.19047619047619),
      float(1.818181818181818),
      float(1.08695652173913)
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
  "divide mat2 float",
  divide(mat2(float(0.6), float(0.8), float(0.2), float(0.9)), float(2.5)),
  [0.24, 0.32, 0.08, 0.36]
);

mat3Scenario(
  "divide mat3 float",
  divide(
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
    float(2.5)
  ),
  [0.24, 0.32, 0.08, 0.36, 0.04, 0.2, 0.16, 0.12, 0.28]
);

mat4Scenario(
  "divide mat4 float",
  divide(
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
    float(2.5)
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
  "divide mat2 mat2",
  divide(
    mat2(float(0.6), float(0.8), float(0.2), float(0.9)),
    mat2(float(2.4), float(4.2), float(2.7), float(1.9))
  ),
  [0.25, 0.1904761904761905, 0.0740740740740741, 0.4736842105263158]
);

mat3Scenario(
  "divide mat3 mat3",
  divide(
    mat3(
      float(0.6),
      float(0.8),
      float(0.2),
      float(0.9),
      float(0.2),
      float(0.4),
      float(0.7),
      float(2.4),
      float(0.58)
    ),
    mat3(
      float(2.4),
      float(4.2),
      float(2.7),
      float(1.9),
      float(0.5),
      float(1.8),
      float(3.1),
      float(5.2),
      float(3.2)
    )
  ),
  [
    0.25,
    0.1904761904761905,
    0.0740740740740741,
    0.4736842105263158,
    0.4,
    0.2222222222222222,
    0.2258064516129032,
    0.4615384615384615,
    0.18125,
  ]
);

mat4Scenario(
  "divide mat4 mat4",
  divide(
    mat4(
      float(0.6),
      float(0.8),
      float(0.2),
      float(0.9),
      float(0.2),
      float(0.4),
      float(0.7),
      float(2.4),
      float(0.58),

      float(2.1),
      float(0.75),
      float(0.48),
      float(0.71),
      float(3.2),
      float(1.4),
      float(2.8)
    ),
    mat4(
      float(2.4),
      float(4.2),
      float(2.7),
      float(1.9),
      float(0.5),
      float(1.8),
      float(3.1),
      float(5.2),
      float(3.2),

      float(2.5),
      float(1.44),
      float(0.67),
      float(0.8),
      float(4.8),
      float(1.8),
      float(3.7)
    )
  ),
  [
    0.25,
    0.1904761904761905,
    0.0740740740740741,
    0.4736842105263158,
    0.4,
    0.2222222222222222,
    0.2258064516129032,
    0.4615384615384615,
    0.18125,
    0.84,
    0.5208333333333333,
    0.7164179104477612,
    0.8875,
    0.6666666666666667,
    0.7777777777777778,
    0.7567567567567568,
  ]
);

xit("conditional int", () => {});
