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
  subtract,
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
  "subtract float float",
  subtract(float(0.4), float(0.2941176470588235)),
  0.1058823529411765
);

vec2Scenario(
  "subtract vec2 float",
  subtract(
    vec2(float(0.6862745098039216), float(0.792156862745098)),
    float(0.4)
  ),
  [0.2862745098039216, 0.392156862745098]
);

vec3Scenario(
  "subtract vec3 float",
  subtract(
    vec3(
      float(0.6862745098039216),
      float(0.792156862745098),
      float(0.9686274509803922)
    ),
    float(0.4)
  ),
  [0.2862745098039216, 0.392156862745098, 0.5686274509803922]
);

vec4Scenario(
  "subtract vec4 float",
  subtract(
    vec4(
      float(0.6862745098039216),
      float(0.792156862745098),
      float(0.9686274509803922),
      float(0.5647058823529412)
    ),
    float(0.4)
  ),
  [
    0.2862745098039216,
    0.392156862745098,
    0.5686274509803922,
    0.1647058823529412,
  ]
);

vec2Scenario(
  "subtract float vec2",
  subtract(
    float(0.5490196078431373),
    vec2(float(0.2941176470588235), float(0.3490196078431373))
  ),
  [0.2549019607843137, 0.2]
);

vec3Scenario(
  "subtract float vec3",
  subtract(
    float(0.5490196078431373),
    vec3(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.1647058823529412)
    )
  ),
  [0.2549019607843137, 0.2, 0.3843137254901961]
);

vec4Scenario(
  "subtract float vec4",
  subtract(
    float(0.5490196078431373),
    vec4(
      float(0.2941176470588235),
      float(0.3490196078431373),
      float(0.1647058823529412),
      float(0.1215686274509804)
    )
  ),
  [0.2549019607843137, 0.2, 0.3843137254901961, 0.4274509803921569]
);

vec2Scenario(
  "subtract vec2 vec2",
  subtract(
    vec2(float(0.4), float(0.5568627450980392)),
    vec2(float(0.2901960784313725), float(0.3450980392156863))
  ),
  [0.1098039215686275, 0.2117647058823529]
);

vec3Scenario(
  "subtract vec3 vec3",
  subtract(
    vec3(float(0.4), float(0.5568627450980392), float(0.5215686274509804)),
    vec3(
      float(0.2901960784313725),
      float(0.3450980392156863),
      float(0.1137254901960784)
    )
  ),
  [0.1098039215686275, 0.2117647058823529, 0.407843137254902]
);

vec4Scenario(
  "subtract vec4 vec4",
  subtract(
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
    0.1098039215686275,
    0.2117647058823529,
    0.407843137254902,
    0.4313725490196078,
  ]
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

intScenario("subtract int int", subtract(int(128), int(27)), 101);

ivec2Scenario(
  "subtract int ivec2",
  subtract(int(128), ivec2(int(27), int(104))),
  [101, 24]
);

ivec3Scenario(
  "subtract int ivec3",
  subtract(int(128), ivec3(int(27), int(104), int(66))),
  [101, 24, 62]
);

ivec4Scenario(
  "subtract int ivec4",
  subtract(int(128), ivec4(int(27), int(104), int(66), int(70))),
  [101, 24, 62, 58]
);

ivec2Scenario(
  "subtract ivec2 int",
  subtract(ivec2(int(27), int(104)), int(6)),
  [21, 98]
);

ivec3Scenario(
  "subtract ivec3 int",
  subtract(ivec3(int(27), int(104), int(66)), int(6)),
  [21, 98, 60]
);

ivec4Scenario(
  "subtract ivec4 int",
  subtract(ivec4(int(27), int(104), int(66), int(70)), int(6)),
  [21, 98, 60, 64]
);

ivec2Scenario(
  "subtract ivec2 ivec2",
  subtract(ivec2(int(178), int(63)), ivec2(int(44), int(21))),
  [134, 42]
);

ivec3Scenario(
  "subtract ivec3 ivec3",
  subtract(
    ivec3(int(178), int(63), int(202)),
    ivec3(int(44), int(21), int(88))
  ),
  [134, 42, 114]
);

ivec4Scenario(
  "subtract ivec4 ivec4",
  subtract(
    ivec4(int(178), int(63), int(202), int(144)),
    ivec4(int(44), int(21), int(88), int(37))
  ),
  [134, 42, 114, 107]
);
