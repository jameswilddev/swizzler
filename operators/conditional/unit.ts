import {
  bool,
  bvec2,
  bvec3,
  bvec4,
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
  conditional,
} from "../..";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
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
  "conditional false float float",
  conditional(
    bool(false),
    float(0.1882352941176471),
    float(0.2980392156862745)
  ),
  0.2980392156862745
);

floatScenario(
  "conditional true float float",
  conditional(bool(true), float(0.1882352941176471), float(0.2980392156862745)),
  0.1882352941176471
);

vec2Scenario(
  "conditional false vec2 vec2",
  conditional(
    bool(false),
    vec2(float(0.1882352941176471), float(0.4117647058823529)),
    vec2(float(0.5803921568627451), float(0.2980392156862745))
  ),
  [0.5803921568627451, 0.2980392156862745]
);

vec2Scenario(
  "conditional true vec2 vec2",
  conditional(
    bool(true),
    vec2(float(0.1882352941176471), float(0.4117647058823529)),
    vec2(float(0.5803921568627451), float(0.2980392156862745))
  ),
  [0.1882352941176471, 0.4117647058823529]
);

vec3Scenario(
  "conditional false vec3 vec3",
  conditional(
    bool(false),
    vec3(
      float(0.1882352941176471),
      float(0.4117647058823529),
      float(0.9411764705882353)
    ),
    vec3(
      float(0.5803921568627451),
      float(0.2980392156862745),
      float(0.0196078431372549)
    )
  ),
  [0.5803921568627451, 0.2980392156862745, 0.0196078431372549]
);

vec3Scenario(
  "conditional true vec3 vec3",
  conditional(
    bool(true),
    vec3(
      float(0.1882352941176471),
      float(0.4117647058823529),
      float(0.9411764705882353)
    ),
    vec3(
      float(0.5803921568627451),
      float(0.2980392156862745),
      float(0.0196078431372549)
    )
  ),
  [0.1882352941176471, 0.4117647058823529, 0.9411764705882353]
);

vec4Scenario(
  "conditional false vec4 vec4",
  conditional(
    bool(false),
    vec4(
      float(0.1882352941176471),
      float(0.4117647058823529),
      float(0.9411764705882353),
      float(0.5098039215686275)
    ),
    vec4(
      float(0.5803921568627451),
      float(0.2980392156862745),
      float(0.0196078431372549),
      float(0.7333333333333333)
    )
  ),
  [
    0.5803921568627451,
    0.2980392156862745,
    0.0196078431372549,
    0.7333333333333333,
  ]
);

vec4Scenario(
  "conditional true vec4 vec4",
  conditional(
    bool(true),
    vec4(
      float(0.1882352941176471),
      float(0.4117647058823529),
      float(0.9411764705882353),
      float(0.5098039215686275)
    ),
    vec4(
      float(0.5803921568627451),
      float(0.2980392156862745),
      float(0.0196078431372549),
      float(0.7333333333333333)
    )
  ),
  [
    0.1882352941176471,
    0.4117647058823529,
    0.9411764705882353,
    0.5098039215686275,
  ]
);

mat2Scenario(
  "conditional false mat2 mat2",
  conditional(
    bool(false),
    mat2(
      float(0.1882352941176471),
      float(0.4117647058823529),
      float(0.9411764705882353),
      float(0.5098039215686275)
    ),
    mat2(
      float(0.5803921568627451),
      float(0.2980392156862745),
      float(0.0196078431372549),
      float(0.7333333333333333)
    )
  ),
  [
    0.5803921568627451,
    0.2980392156862745,
    0.0196078431372549,
    0.7333333333333333,
  ]
);

mat2Scenario(
  "conditional true mat2 mat2",
  conditional(
    bool(true),
    mat2(
      float(0.1882352941176471),
      float(0.4117647058823529),
      float(0.9411764705882353),
      float(0.5098039215686275)
    ),
    mat2(
      float(0.5803921568627451),
      float(0.2980392156862745),
      float(0.0196078431372549),
      float(0.7333333333333333)
    )
  ),
  [
    0.1882352941176471,
    0.4117647058823529,
    0.9411764705882353,
    0.5098039215686275,
  ]
);

mat3Scenario(
  "conditional false mat3 mat3",
  conditional(
    bool(false),
    mat3(
      float(0.61),
      float(0.02),
      float(0.72),
      float(0.06),
      float(0.86),
      float(0.37),
      float(0.4),
      float(0.3),
      float(0.29)
    ),
    mat3(
      float(0.65),
      float(0.21),
      float(0.97),
      float(0.46),
      float(0.31),
      float(0.61),
      float(0.14),
      float(0.33),
      float(0.89)
    )
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "conditional true mat3 mat3",
  conditional(
    bool(true),
    mat3(
      float(0.65),
      float(0.21),
      float(0.97),
      float(0.46),
      float(0.31),
      float(0.61),
      float(0.14),
      float(0.33),
      float(0.89)
    ),
    mat3(
      float(0.61),
      float(0.02),
      float(0.72),
      float(0.06),
      float(0.86),
      float(0.37),
      float(0.4),
      float(0.3),
      float(0.29)
    )
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat4Scenario(
  "conditional false mat4 mat4",
  conditional(
    bool(false),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.65),
      float(0.21),
      float(0.97),
      float(0.46),
      float(0.31),
      float(0.61),
      float(0.14),
      float(0.33),
      float(0.89),
      float(0.72),
      float(0.41),
      float(0.56),
      float(0.91),
      float(0.18),
      float(0.37),
      float(0.52)
    )
  ),
  [
    0.65,
    0.21,
    0.97,
    0.46,
    0.31,
    0.61,
    0.14,
    0.33,
    0.89,
    0.72,
    0.41,
    0.56,
    0.91,
    0.18,
    0.37,
    0.52,
  ]
);

mat4Scenario(
  "conditional true mat4 mat4",
  conditional(
    bool(true),
    mat4(
      float(0.65),
      float(0.21),
      float(0.97),
      float(0.46),
      float(0.31),
      float(0.61),
      float(0.14),
      float(0.33),
      float(0.89),
      float(0.72),
      float(0.41),
      float(0.56),
      float(0.91),
      float(0.18),
      float(0.37),
      float(0.52)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  [
    0.65,
    0.21,
    0.97,
    0.46,
    0.31,
    0.61,
    0.14,
    0.33,
    0.89,
    0.72,
    0.41,
    0.56,
    0.91,
    0.18,
    0.37,
    0.52,
  ]
);

intScenario(
  "conditional false int int",
  conditional(bool(false), int(72), int(172)),
  172
);

intScenario(
  "conditional true int int",
  conditional(bool(true), int(72), int(172)),
  72
);

ivec2Scenario(
  "conditional false ivec2 ivec2",
  conditional(bool(false), ivec2(int(72), int(201)), ivec2(int(172), int(242))),
  [172, 242]
);

ivec2Scenario(
  "conditional true ivec2 ivec2",
  conditional(bool(true), ivec2(int(72), int(201)), ivec2(int(172), int(242))),
  [72, 201]
);

ivec3Scenario(
  "conditional false ivec3 ivec3",
  conditional(
    bool(false),
    ivec3(int(72), int(201), int(154)),
    ivec3(int(172), int(242), int(37))
  ),
  [172, 242, 37]
);

ivec3Scenario(
  "conditional true ivec3 ivec3",
  conditional(
    bool(true),
    ivec3(int(72), int(201), int(154)),
    ivec3(int(172), int(242), int(37))
  ),
  [72, 201, 154]
);

ivec4Scenario(
  "conditional false ivec4 ivec4",
  conditional(
    bool(false),
    ivec4(int(72), int(201), int(154), int(68)),
    ivec4(int(172), int(242), int(37), int(45))
  ),
  [172, 242, 37, 45]
);

ivec4Scenario(
  "conditional true ivec4 ivec4",
  conditional(
    bool(true),
    ivec4(int(72), int(201), int(154), int(68)),
    ivec4(int(172), int(242), int(37), int(45))
  ),
  [72, 201, 154, 68]
);

boolScenario(
  "conditional false false false",
  conditional(bool(false), bool(false), bool(false)),
  false
);

boolScenario(
  "conditional false false true",
  conditional(bool(false), bool(false), bool(true)),
  true
);

boolScenario(
  "conditional false true false",
  conditional(bool(false), bool(true), bool(false)),
  false
);

boolScenario(
  "conditional false true true",
  conditional(bool(false), bool(true), bool(true)),
  true
);

boolScenario(
  "conditional true false false",
  conditional(bool(true), bool(false), bool(false)),
  false
);

boolScenario(
  "conditional true false true",
  conditional(bool(true), bool(false), bool(true)),
  false
);

boolScenario(
  "conditional true true false",
  conditional(bool(true), bool(true), bool(false)),
  true
);

boolScenario(
  "conditional true true true",
  conditional(bool(true), bool(true), bool(true)),
  true
);

bvec2Scenario(
  "conditional false bvec2 bvec2",
  conditional(
    bool(false),
    bvec2(bool(true), bool(false)),
    bvec2(bool(false), bool(true))
  ),
  [false, true]
);

bvec2Scenario(
  "conditional true bvec2 bvec2",
  conditional(
    bool(true),
    bvec2(bool(true), bool(false)),
    bvec2(bool(false), bool(true))
  ),
  [true, false]
);

bvec3Scenario(
  "conditional false bvec3 bvec3",
  conditional(
    bool(false),
    bvec3(bool(true), bool(true), bool(false)),
    bvec3(bool(false), bool(true), bool(false))
  ),
  [false, true, false]
);

bvec3Scenario(
  "conditional true bvec3 bvec3",
  conditional(
    bool(true),
    bvec3(bool(true), bool(true), bool(false)),
    bvec3(bool(false), bool(true), bool(false))
  ),
  [true, true, false]
);

bvec4Scenario(
  "conditional false bvec4 bvec4",
  conditional(
    bool(false),
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(false), bool(true), bool(false), bool(true))
  ),
  [false, true, false, true]
);

bvec4Scenario(
  "conditional true bvec4 bvec4",
  conditional(
    bool(true),
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(false), bool(true), bool(false), bool(true))
  ),
  [true, true, false, true]
);
