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
  bool,
  bvec2,
  bvec3,
  bvec4,
  add,
  multiply,
  divide,
} from "../..";
import { mat3Scenario } from "../../unit";

mat3Scenario("mat3 float", mat3(float(0.65)), [
  0.65,
  0,
  0,
  0,
  0.65,
  0,
  0,
  0,
  0.65,
]);

mat3Scenario(
  "mat3 floats",
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
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2s",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3s",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec3(float(0.46), float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4s",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    vec4(float(0.31), float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 mat2",
  mat3(mat2(float(0.65), float(0.21), float(0.97), float(0.46))),
  [0.65, 0.21, 0, 0.97, 0.46, 0, 0, 0, 1]
);

mat3Scenario(
  "mat3 mat3",
  mat3(
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
  "mat3 mat4",
  mat3(
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
  [0.65, 0.21, 0.97, 0.31, 0.61, 0.14, 0.89, 0.72, 0.41]
);

mat3Scenario("mat3 int", divide(mat3(int(37)), float(255)), [
  0.1450980392156863,
  0,
  0,
  0,
  0.1450980392156863,
  0,
  0,
  0,
  0.1450980392156863,
]);

mat3Scenario(
  "mat3 ints",
  divide(
    mat3(
      int(37),
      int(18),
      int(201),
      int(144),
      int(86),
      int(241),
      int(17),
      int(101),
      int(222)
    ),
    float(255)
  ),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
    0.3372549019607843,
    0.9450980392156863,
    0.0666666666666667,
    0.396078431372549,
    0.8705882352941176,
  ]
);

mat3Scenario(
  "mat3 ivec2s",
  divide(
    mat3(
      ivec2(int(37), int(18)),
      ivec2(int(201), int(144)),
      ivec2(int(86), int(241)),
      ivec2(int(17), int(101)),
      int(222)
    ),
    float(255)
  ),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
    0.3372549019607843,
    0.9450980392156863,
    0.0666666666666667,
    0.396078431372549,
    0.8705882352941176,
  ]
);

mat3Scenario(
  "mat3 ivec3s",
  divide(
    mat3(
      ivec3(int(37), int(18), int(201)),
      ivec3(int(144), int(86), int(241)),
      ivec3(int(17), int(101), int(222))
    ),
    float(255)
  ),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
    0.3372549019607843,
    0.9450980392156863,
    0.0666666666666667,
    0.396078431372549,
    0.8705882352941176,
  ]
);

mat3Scenario(
  "mat3 ivec4s",
  divide(
    mat3(
      ivec4(int(37), int(18), int(201), int(144)),
      ivec4(int(86), int(241), int(17), int(101)),
      int(222)
    ),
    float(255)
  ),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
    0.3372549019607843,
    0.9450980392156863,
    0.0666666666666667,
    0.396078431372549,
    0.8705882352941176,
  ]
);

mat3Scenario(
  "mat3 false",
  add(float(0.25), multiply(float(0.5), mat3(bool(false)))),
  [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
);

mat3Scenario(
  "mat3 true",
  add(float(0.25), multiply(float(0.5), mat3(bool(true)))),
  [0.75, 0.25, 0.25, 0.25, 0.75, 0.25, 0.25, 0.25, 0.75]
);

mat3Scenario(
  "mat3 bvec2s",
  add(
    float(0.25),
    multiply(
      float(0.5),
      mat3(
        bvec2(bool(true), bool(false)),
        bvec2(bool(false), bool(true)),
        bvec2(bool(true), bool(true)),
        bvec2(bool(false), bool(false)),
        bool(true)
      )
    )
  ),
  [0.75, 0.25, 0.25, 0.75, 0.75, 0.75, 0.25, 0.25, 0.75]
);

mat3Scenario(
  "mat3 bvec3s",
  add(
    float(0.25),
    multiply(
      float(0.5),
      mat3(
        bvec3(bool(true), bool(false), bool(false)),
        bvec3(bool(true), bool(true), bool(true)),
        bvec3(bool(false), bool(false), bool(true))
      )
    )
  ),
  [0.75, 0.25, 0.25, 0.75, 0.75, 0.75, 0.25, 0.25, 0.75]
);

mat3Scenario(
  "mat3 bvec4s",
  add(
    float(0.25),
    multiply(
      float(0.5),
      mat3(
        bvec4(bool(true), bool(false), bool(false), bool(true)),
        bvec4(bool(true), bool(true), bool(false), bool(false)),
        bool(true)
      )
    )
  ),
  [0.75, 0.25, 0.25, 0.75, 0.75, 0.75, 0.25, 0.25, 0.75]
);

mat3Scenario(
  "mat3 complex",
  add(
    float(0.5),
    multiply(
      float(0.125),
      mat3(
        float(3.2),
        bvec2(bool(true), bool(false)),
        ivec2(int(-2), int(2)),
        vec4(float(0.82), float(-0.72), float(-0.2), float(0.34))
      )
    )
  ),
  [0.9, 0.625, 0.5, 0.25, 0.75, 0.6025, 0.41, 0.475, 0.5425]
);
