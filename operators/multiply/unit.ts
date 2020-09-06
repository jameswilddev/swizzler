import {
  float,
  vec2,
  vec3,
  vec4,
  mat2,
  mat3,
  mat4,
  int,
  ivec2,
  ivec3,
  ivec4,
  multiply,
} from "../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
  mat2Scenario,
  mat3Scenario,
  mat4Scenario,
  intScenario,
  ivec2Scenario,
  ivec3Scenario,
  ivec4Scenario,
} from "../../unit";

floatScenario(
  "multiply float float",
  multiply(float(0.4), float(0.2941176470588235)),
  0.1176470588235294
);

vec2Scenario(
  "multiply vec2 float",
  multiply(
    vec2(float(0.6862745098039216), float(0.792156862745098)),
    float(0.4)
  ),
  [0.2745098039215686, 0.316878123798539]
);

vec3Scenario(
  "multiply vec3 float",
  multiply(
    vec3(
      float(0.6862745098039216),
      float(0.792156862745098),
      float(0.9686274509803922)
    ),
    float(0.4)
  ),
  [0.2745098039215686, 0.316878123798539, 0.3874509803921569]
);

vec4Scenario(
  "multiply vec4 float",
  multiply(
    vec4(
      float(0.6862745098039216),
      float(0.792156862745098),
      float(0.9686274509803922),
      float(0.5647058823529412)
    ),
    float(0.4)
  ),
  [
    0.2745098039215686,
    0.316878123798539,
    0.3874509803921569,
    0.2258823529411765,
  ]
);

vec2Scenario(
  "multiply float vec2",
  multiply(
    float(0.4),
    vec2(float(0.6862745098039216), float(0.792156862745098))
  ),
  [0.2745098039215686, 0.316878123798539]
);

vec3Scenario(
  "multiply float vec3",
  multiply(
    float(0.4),
    vec3(
      float(0.6862745098039216),
      float(0.792156862745098),
      float(0.9686274509803922)
    )
  ),
  [0.2745098039215686, 0.316878123798539, 0.3874509803921569]
);

vec4Scenario(
  "multiply float vec4",
  multiply(
    float(0.4),
    vec4(
      float(0.6862745098039216),
      float(0.792156862745098),
      float(0.9686274509803922),
      float(0.5647058823529412)
    )
  ),
  [
    0.2745098039215686,
    0.316878123798539,
    0.3874509803921569,
    0.2258823529411765,
  ]
);

vec2Scenario(
  "multiply vec2 vec2",
  multiply(
    vec2(float(0.4), float(0.5568627450980392)),
    vec2(float(0.2901960784313725), float(0.3450980392156863))
  ),
  [0.116078431372549, 0.1921722414455978]
);

vec3Scenario(
  "multiply vec3 vec3",
  multiply(
    vec3(float(0.4), float(0.5568627450980392), float(0.5215686274509804)),
    vec3(
      float(0.2901960784313725),
      float(0.3450980392156863),
      float(0.1137254901960784)
    )
  ),
  [0.116078431372549, 0.1921722414455978, 0.0593156478277586]
);

vec4Scenario(
  "multiply vec4 vec4",
  multiply(
    vec4(
      float(0.4),
      float(0.5568627450980392),
      float(0.5215686274509804),
      float(0.9803921568627451)
    ),
    vec4(
      float(0.2901960784313725),
      float(0.3450980392156863),
      float(0.1137254901960784),
      float(0.5490196078431373)
    )
  ),
  [
    0.116078431372549,
    0.1921722414455978,
    0.0593156478277586,
    0.5382545174932718,
  ]
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

vec2Scenario(
  "multiply mat2 vec2",
  multiply(
    mat2(float(0.14), float(0.07), float(0.11), float(0.58)),
    vec2(float(0.36), float(0.11))
  ),
  [0.0625, 0.089]
);

vec3Scenario(
  "multiply mat3 vec3",
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
    vec3(float(0.36), float(0.11), float(0.07))
  ),
  [0.1241, 0.1002, 0.385]
);

vec4Scenario(
  "multiply mat4 vec4",
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
    vec4(float(0.36), float(0.11), float(0.07), float(0.64))
  ),
  [0.3609, 0.1386, 0.5578, 0.4228]
);

vec2Scenario(
  "multiply vec2 mat2",
  multiply(
    vec2(float(0.36), float(0.11)),
    mat2(float(0.14), float(0.07), float(0.11), float(0.58))
  ),
  [0.0581, 0.1034]
);

vec3Scenario(
  "multiply vec3 mat3",
  multiply(
    vec3(float(0.36), float(0.11), float(0.07)),
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
    )
  ),
  [0.1218, 0.1181, 0.3687]
);

vec4Scenario(
  "multiply vec4 mat4",
  multiply(
    vec4(float(0.36), float(0.11), float(0.07), float(0.64)),
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
    )
  ),
  [0.301, 0.4765, 0.7015, 0.3827]
);

intScenario("multiply int int", multiply(int(27), int(4)), 108);

ivec2Scenario("multiply ivec2 int", multiply(ivec2(int(27), int(73)), int(3)), [
  81,
  219,
]);

ivec3Scenario(
  "multiply ivec3 int",
  multiply(ivec3(int(27), int(73), int(41)), int(3)),
  [81, 219, 123]
);

ivec4Scenario(
  "multiply ivec4 int",
  multiply(ivec4(int(27), int(73), int(41), int(4)), int(3)),
  [81, 219, 123, 12]
);

ivec2Scenario("multiply int ivec2", multiply(int(3), ivec2(int(27), int(73))), [
  81,
  219,
]);

ivec3Scenario(
  "multiply int ivec3",
  multiply(int(3), ivec3(int(27), int(73), int(41))),
  [81, 219, 123]
);

ivec4Scenario(
  "multiply int ivec4",
  multiply(int(3), ivec4(int(27), int(73), int(41), int(4))),
  [81, 219, 123, 12]
);

ivec2Scenario(
  "multiply ivec2 ivec2",
  multiply(ivec2(int(27), int(100)), ivec2(int(4), int(2))),
  [108, 200]
);

ivec3Scenario(
  "multiply ivec3 ivec3",
  multiply(ivec3(int(27), int(100), int(41)), ivec3(int(4), int(2), int(5))),
  [108, 200, 205]
);

ivec4Scenario(
  "multiply ivec4 ivec4",
  multiply(
    ivec4(int(27), int(100), int(41), int(3)),
    ivec4(int(4), int(2), int(5), int(8))
  ),
  [108, 200, 205, 24]
);
