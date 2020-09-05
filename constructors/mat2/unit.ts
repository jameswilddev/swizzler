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
import { mat2Scenario } from "../../unit";

mat2Scenario("mat2 float", mat2(float(0.65)), [0.65, 0, 0, 0.65]);

mat2Scenario(
  "mat2 floats",
  mat2(float(0.65), float(0.21), float(0.97), float(0.46)),
  [0.65, 0.21, 0.97, 0.46]
);

mat2Scenario(
  "mat2 vec2s",
  mat2(vec2(float(0.65), float(0.21)), vec2(float(0.97), float(0.46))),
  [0.65, 0.21, 0.97, 0.46]
);

mat2Scenario(
  "mat2 vec3s",
  mat2(vec3(float(0.65), float(0.21), float(0.97)), float(0.46)),
  [0.65, 0.21, 0.97, 0.46]
);

mat2Scenario(
  "mat2 vec4",
  mat2(vec4(float(0.65), float(0.21), float(0.97), float(0.46))),
  [0.65, 0.21, 0.97, 0.46]
);

mat2Scenario(
  "mat2 mat2",
  mat2(mat2(float(0.65), float(0.21), float(0.97), float(0.46))),
  [0.65, 0.21, 0.97, 0.46]
);

mat2Scenario(
  "mat2 mat3",
  mat2(
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
  [0.65, 0.21, 0.46, 0.31]
);

mat2Scenario(
  "mat2 mat4",
  mat2(
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
  [0.65, 0.21, 0.31, 0.61]
);

mat2Scenario("mat2 int", divide(mat2(int(37)), float(255)), [
  0.1450980392156863,
  0,
  0,
  0.1450980392156863,
]);

mat2Scenario(
  "mat2 ints",
  divide(mat2(int(37), int(18), int(201), int(144)), float(255)),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
  ]
);

mat2Scenario(
  "mat2 ivec2s",
  divide(mat2(ivec2(int(37), int(18)), ivec2(int(201), int(144))), float(255)),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
  ]
);

mat2Scenario(
  "mat2 ivec3s",
  divide(mat2(ivec3(int(37), int(18), int(201)), int(144)), float(255)),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
  ]
);

mat2Scenario(
  "mat2 ivec4",
  divide(mat2(ivec4(int(37), int(18), int(201), int(144))), float(255)),
  [
    0.1450980392156863,
    0.0705882352941176,
    0.7882352941176471,
    0.5647058823529412,
  ]
);

mat2Scenario(
  "mat2 false",
  add(float(0.25), multiply(float(0.5), mat2(bool(false)))),
  [0.25, 0.25, 0.25, 0.25]
);

mat2Scenario(
  "mat2 true",
  add(float(0.25), multiply(float(0.5), mat2(bool(true)))),
  [0.75, 0.25, 0.25, 0.75]
);

mat2Scenario(
  "mat2 bvec2s",
  add(
    float(0.25),
    multiply(
      float(0.5),
      mat2(bvec2(bool(true), bool(false)), bvec2(bool(false), bool(true)))
    )
  ),
  [0.75, 0.25, 0.25, 0.75]
);

mat2Scenario(
  "mat2 bvec3s",
  add(
    float(0.25),
    multiply(
      float(0.5),
      mat2(bvec3(bool(true), bool(false), bool(false)), bool(true))
    )
  ),
  [0.75, 0.25, 0.25, 0.75]
);

mat2Scenario(
  "mat2 bvec4",
  add(
    float(0.25),
    multiply(
      float(0.5),
      mat2(bvec4(bool(true), bool(false), bool(false), bool(true)))
    )
  ),
  [0.75, 0.25, 0.25, 0.75]
);

mat2Scenario(
  "mat2 complex",
  add(
    float(0.5),
    multiply(
      float(0.125),
      mat2(float(3.2), bvec2(bool(true), bool(false)), int(-2))
    )
  ),
  [0.9, 0.625, 0.5, 0.25]
);
