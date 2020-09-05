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
import { mat4Scenario } from "../../unit";

mat4Scenario("mat4 float", mat4(float(0.65)), [
  0.65,
  0,
  0,
  0,
  0,
  0.65,
  0,
  0,
  0,
  0,
  0.65,
  0,
  0,
  0,
  0,
  0.65,
]);

mat4Scenario(
  "mat4 floats",
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
  "mat4 vec2s",
  mat4(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    vec2(float(0.89), float(0.72)),
    vec2(float(0.41), float(0.56)),
    vec2(float(0.91), float(0.18)),
    vec2(float(0.37), float(0.52))
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
  "mat4 vec3s",
  mat4(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec3(float(0.46), float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89)),
    vec3(float(0.72), float(0.41), float(0.56)),
    vec3(float(0.91), float(0.18), float(0.37)),
    float(0.52)
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
  "mat4 vec4s",
  mat4(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    vec4(float(0.31), float(0.61), float(0.14), float(0.33)),
    vec4(float(0.89), float(0.72), float(0.41), float(0.56)),
    vec4(float(0.91), float(0.18), float(0.37), float(0.52))
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
  "mat4 mat2",
  mat4(mat2(float(0.65), float(0.21), float(0.97), float(0.46))),
  [0.65, 0.21, 0, 0, 0.97, 0.46, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
);

mat4Scenario(
  "mat4 mat3",
  mat4(
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
  [0.65, 0.21, 0.97, 0, 0.46, 0.31, 0.61, 0, 0.14, 0.33, 0.89, 0, 0, 0, 0, 1]
);

mat4Scenario(
  "mat4 mat4",
  mat4(
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

mat4Scenario("mat4 int", divide(mat4(int(37)), float(255)), [
  0.1450980392156863,
  0,
  0,
  0,
  0,
  0.1450980392156863,
  0,
  0,
  0,
  0,
  0.1450980392156863,
  0,
  0,
  0,
  0,
  0.1450980392156863,
]);

mat4Scenario(
  "mat4 ints",
  divide(
    mat4(
      int(37),
      int(18),
      int(201),
      int(144),
      int(86),
      int(241),
      int(17),
      int(101),
      int(222),
      int(177),
      int(4),
      int(66),
      int(89),
      int(97),
      int(14),
      int(50)
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
    0.6941176470588235,
    0.0156862745098039,
    0.2588235294117647,
    0.3490196078431373,
    0.3803921568627451,
    0.0549019607843137,
    0.196078431372549,
  ]
);

mat4Scenario(
  "mat4 ivec2s",
  divide(
    mat4(
      ivec2(int(37), int(18)),
      ivec2(int(201), int(144)),
      ivec2(int(86), int(241)),
      ivec2(int(17), int(101)),
      ivec2(int(222), int(177)),
      ivec2(int(4), int(66)),
      ivec2(int(89), int(97)),
      ivec2(int(14), int(50))
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
    0.6941176470588235,
    0.0156862745098039,
    0.2588235294117647,
    0.3490196078431373,
    0.3803921568627451,
    0.0549019607843137,
    0.196078431372549,
  ]
);

mat4Scenario(
  "mat4 ivec3s",
  divide(
    mat4(
      ivec3(int(37), int(18), int(201)),
      ivec3(int(144), int(86), int(241)),
      ivec3(int(17), int(101), int(222)),
      ivec3(int(177), int(4), int(66)),
      ivec3(int(89), int(97), int(14)),
      int(50)
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
    0.6941176470588235,
    0.0156862745098039,
    0.2588235294117647,
    0.3490196078431373,
    0.3803921568627451,
    0.0549019607843137,
    0.196078431372549,
  ]
);

mat4Scenario(
  "mat4 ivec4s",
  divide(
    mat4(
      ivec4(int(37), int(18), int(201), int(144)),
      ivec4(int(86), int(241), int(17), int(101)),
      ivec4(int(222), int(177), int(4), int(66)),
      ivec4(int(89), int(97), int(14), int(50))
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
    0.6941176470588235,
    0.0156862745098039,
    0.2588235294117647,
    0.3490196078431373,
    0.3803921568627451,
    0.0549019607843137,
    0.196078431372549,
  ]
);

mat4Scenario(
  "mat4 false",
  add(float(0.25), multiply(float(0.5), mat4(bool(false)))),
  [
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
    0.25,
  ]
);

mat4Scenario(
  "mat4 true",
  add(float(0.25), multiply(float(0.5), mat4(bool(true)))),
  [
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
    0.25,
    0.25,
    0.25,
    0.25,
    0.75,
  ]
);

mat4Scenario(
  "mat4 bvec2s",
  add(
    float(0.25),
    multiply(
      float(0.5),
      mat4(
        bvec2(bool(true), bool(false)),
        bvec2(bool(false), bool(true)),
        bvec2(bool(true), bool(true)),
        bvec2(bool(false), bool(false)),
        bvec2(bool(true), bool(false)),
        bvec2(bool(true), bool(false)),
        bvec2(bool(false), bool(true)),
        bvec2(bool(false), bool(true))
      )
    )
  ),
  [
    0.75,
    0.25,
    0.25,
    0.75,
    0.75,
    0.75,
    0.25,
    0.25,
    0.75,
    0.25,
    0.75,
    0.25,
    0.25,
    0.75,
    0.25,
    0.75,
  ]
);

mat4Scenario(
  "mat4 bvec3s",
  add(
    float(0.25),
    multiply(
      float(0.5),
      mat4(
        bvec3(bool(true), bool(false), bool(false)),
        bvec3(bool(true), bool(true), bool(true)),
        bvec3(bool(false), bool(false), bool(true)),
        bvec3(bool(false), bool(true), bool(false)),
        bvec3(bool(false), bool(true), bool(false)),
        bool(true)
      )
    )
  ),
  [
    0.75,
    0.25,
    0.25,
    0.75,
    0.75,
    0.75,
    0.25,
    0.25,
    0.75,
    0.25,
    0.75,
    0.25,
    0.25,
    0.75,
    0.25,
    0.75,
  ]
);

mat4Scenario(
  "mat4 bvec4s",
  add(
    float(0.25),
    multiply(
      float(0.5),
      mat4(
        bvec4(bool(true), bool(false), bool(false), bool(true)),
        bvec4(bool(true), bool(true), bool(false), bool(false)),
        bvec4(bool(true), bool(false), bool(true), bool(false)),
        bvec4(bool(false), bool(true), bool(false), bool(true))
      )
    )
  ),
  [
    0.75,
    0.25,
    0.25,
    0.75,
    0.75,
    0.75,
    0.25,
    0.25,
    0.75,
    0.25,
    0.75,
    0.25,
    0.25,
    0.75,
    0.25,
    0.75,
  ]
);

mat4Scenario(
  "mat4 complex",
  add(
    float(0.5),
    multiply(
      float(0.125),
      mat4(
        float(3.2),
        bvec2(bool(true), bool(false)),
        ivec2(int(-2), int(2)),
        vec4(float(0.82), float(-0.72), float(-0.2), float(0.34)),
        int(1),
        vec4(float(0.68), float(-0.87), float(0.31), float(-0.27)),
        bvec2(bool(false), bool(true))
      )
    )
  ),
  [
    0.9,
    0.625,
    0.5,
    0.25,
    0.75,
    0.6025,
    0.41,
    0.475,
    0.5425,
    0.625,
    0.585,
    0.39125,
    0.53875,
    0.46625,
    0.5,
    0.625,
  ]
);
