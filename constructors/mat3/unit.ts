import { vec2, vec3, vec4, mat2, mat3, mat4, float } from "../..";
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
  "mat3 mat2",
  mat3(mat2(float(0.65), float(0.21), float(0.97), float(0.46))),
  [0.65, 0.21, 0, 0.97, 0.46, 0, 0, 0, 1]
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

mat3Scenario(
  "mat3 float float float float float float float float float",
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
  "mat3 float float float float float float float vec2",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    float(0.31),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float float float vec2 float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    float(0.31),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float float float vec3",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    float(0.31),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float float vec2 float float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float float vec2 vec2",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float float vec3 float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    float(0.31),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float float vec4",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    float(0.31),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float vec2 float float float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float vec2 float vec2",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float vec2 vec2 float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float vec2 vec3",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float vec3 float float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    vec3(float(0.31), float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float vec3 vec2",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    vec3(float(0.31), float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float float vec4 float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    float(0.46),
    vec4(float(0.31), float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec2 float float float float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec2 float float vec2",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec2 float vec2 float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec2 float vec3",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec2 vec2 float float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec2 vec2 vec2",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec2 vec3 float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec2 vec4",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec3 float float float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec3(float(0.46), float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec3 float vec2",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec3(float(0.46), float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec3 vec2 float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec3(float(0.46), float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec3 vec3",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec3(float(0.46), float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec4 float float",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec4(float(0.46), float(0.31), float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float float vec4 vec2",
  mat3(
    float(0.65),
    float(0.21),
    float(0.97),
    vec4(float(0.46), float(0.31), float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 float float float float float",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 float float float vec2",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 float float vec2 float",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 float float vec3",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 float vec2 float float",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 float vec2 vec2",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 float vec3 float",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 float vec4",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 vec2 float float float",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 vec2 float vec2",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 vec2 vec2 float",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 vec2 vec3",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 vec3 float float",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    vec3(float(0.31), float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 vec3 vec2",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    vec3(float(0.31), float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec2 vec4 float",
  mat3(
    float(0.65),
    float(0.21),
    vec2(float(0.97), float(0.46)),
    vec4(float(0.31), float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec3 float float float float",
  mat3(
    float(0.65),
    float(0.21),
    vec3(float(0.97), float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec3 float float vec2",
  mat3(
    float(0.65),
    float(0.21),
    vec3(float(0.97), float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec3 float vec2 float",
  mat3(
    float(0.65),
    float(0.21),
    vec3(float(0.97), float(0.46), float(0.31)),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec3 float vec3",
  mat3(
    float(0.65),
    float(0.21),
    vec3(float(0.97), float(0.46), float(0.31)),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec3 vec2 float float",
  mat3(
    float(0.65),
    float(0.21),
    vec3(float(0.97), float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec3 vec2 vec2",
  mat3(
    float(0.65),
    float(0.21),
    vec3(float(0.97), float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec3 vec3 float",
  mat3(
    float(0.65),
    float(0.21),
    vec3(float(0.97), float(0.46), float(0.31)),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec3 vec4",
  mat3(
    float(0.65),
    float(0.21),
    vec3(float(0.97), float(0.46), float(0.31)),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec4 float float float",
  mat3(
    float(0.65),
    float(0.21),
    vec4(float(0.97), float(0.46), float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec4 float vec2",
  mat3(
    float(0.65),
    float(0.21),
    vec4(float(0.97), float(0.46), float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec4 vec2 float",
  mat3(
    float(0.65),
    float(0.21),
    vec4(float(0.97), float(0.46), float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float float vec4 vec3",
  mat3(
    float(0.65),
    float(0.21),
    vec4(float(0.97), float(0.46), float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float float float float float float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
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
  "mat3 float vec2 float float float float vec2",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float float float vec2 float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float float float vec3",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float float vec2 float float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float float vec2 vec2",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float float vec3 float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float float vec4",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float vec2 float float float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float vec2 float vec2",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float vec2 vec2 float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float vec2 vec3",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float vec3 float float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    vec3(float(0.31), float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float vec3 vec2",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    vec3(float(0.31), float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 float vec4 float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    float(0.46),
    vec4(float(0.31), float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec2 float float float float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec2 float float vec2",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec2 float vec2 float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec2 float vec3",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec2 vec2 float float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec2 vec2 vec2",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec2 vec3 float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec2 vec4",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec3 float float float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec3(float(0.46), float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec3 float vec2",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec3(float(0.46), float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec3 vec2 float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec3(float(0.46), float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec3 vec3",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec3(float(0.46), float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec4 float float",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec4(float(0.46), float(0.31), float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec2 vec4 vec2",
  mat3(
    float(0.65),
    vec2(float(0.21), float(0.97)),
    vec4(float(0.46), float(0.31), float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 float float float float float",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 float float float vec2",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 float float vec2 float",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 float float vec3",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 float vec2 float float",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 float vec2 vec2",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 float vec3 float",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    float(0.31),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 float vec4",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    float(0.31),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 vec2 float float float",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 vec2 float vec2",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 vec2 vec2 float",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 vec2 vec3",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 vec3 float float",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    vec3(float(0.31), float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 vec3 vec2",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    vec3(float(0.31), float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec3 vec4 float",
  mat3(
    float(0.65),
    vec3(float(0.21), float(0.97), float(0.46)),
    vec4(float(0.31), float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec4 float float float float",
  mat3(
    float(0.65),
    vec4(float(0.21), float(0.97), float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec4 float float vec2",
  mat3(
    float(0.65),
    vec4(float(0.21), float(0.97), float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec4 float vec2 float",
  mat3(
    float(0.65),
    vec4(float(0.21), float(0.97), float(0.46), float(0.31)),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec4 float vec3",
  mat3(
    float(0.65),
    vec4(float(0.21), float(0.97), float(0.46), float(0.31)),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec4 vec2 float float",
  mat3(
    float(0.65),
    vec4(float(0.21), float(0.97), float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec4 vec2 vec2",
  mat3(
    float(0.65),
    vec4(float(0.21), float(0.97), float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec4 vec3 float",
  mat3(
    float(0.65),
    vec4(float(0.21), float(0.97), float(0.46), float(0.31)),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 float vec4 vec4",
  mat3(
    float(0.65),
    vec4(float(0.21), float(0.97), float(0.46), float(0.31)),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float float float float float float",
  mat3(
    vec2(float(0.65), float(0.21)),
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
  "mat3 vec2 float float float float float vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    float(0.31),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float float float vec2 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    float(0.31),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float float float vec3",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    float(0.31),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float float vec2 float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float float vec2 vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float float vec3 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    float(0.31),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float float vec4",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    float(0.31),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float vec2 float float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float vec2 float vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float vec2 vec2 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float vec2 vec3",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float vec3 float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    vec3(float(0.31), float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float vec3 vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    vec3(float(0.31), float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float float vec4 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    float(0.46),
    vec4(float(0.31), float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec2 float float float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec2 float float vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec2 float vec2 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec2 float vec3",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec2 vec2 float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec2 vec2 vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec2 vec3 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec2 vec4",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec2(float(0.46), float(0.31)),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec3 float float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec3(float(0.46), float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec3 float vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec3(float(0.46), float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec3 vec2 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec3(float(0.46), float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec3 vec3",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec3(float(0.46), float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec4 float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec4(float(0.46), float(0.31), float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 float vec4 vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    float(0.97),
    vec4(float(0.46), float(0.31), float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 float float float float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 float float float vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 float float vec2 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 float float vec3",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 float vec2 float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 float vec2 vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 float vec3 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 float vec4",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    float(0.31),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 vec2 float float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 vec2 float vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 vec2 vec2 float",
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
  "mat3 vec2 vec2 vec2 vec3",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 vec3 float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    vec3(float(0.31), float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 vec3 vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    vec3(float(0.31), float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec2 vec4 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec2(float(0.97), float(0.46)),
    vec4(float(0.31), float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec3 float float float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec3(float(0.97), float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec3 float float vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec3(float(0.97), float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec3 float vec2 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec3(float(0.97), float(0.46), float(0.31)),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec3 float vec3",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec3(float(0.97), float(0.46), float(0.31)),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec3 vec2 float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec3(float(0.97), float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec3 vec2 vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec3(float(0.97), float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec3 vec3 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec3(float(0.97), float(0.46), float(0.31)),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec3 vec4",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec3(float(0.97), float(0.46), float(0.31)),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec4 float float float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec4(float(0.97), float(0.46), float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec4 float vec2",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec4(float(0.97), float(0.46), float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec4 vec2 float",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec4(float(0.97), float(0.46), float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec2 vec4 vec3",
  mat3(
    vec2(float(0.65), float(0.21)),
    vec4(float(0.97), float(0.46), float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float float float float float float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
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
  "mat3 vec3 float float float float vec2",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float float float vec2 float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float float float vec3",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float float vec2 float float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float float vec2 vec2",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float float vec3 float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float float vec4",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    float(0.31),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float vec2 float float float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float vec2 float vec2",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float vec2 vec2 float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float vec2 vec3",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    vec2(float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float vec3 float float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    vec3(float(0.31), float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float vec3 vec2",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    vec3(float(0.31), float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 float vec4 float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    float(0.46),
    vec4(float(0.31), float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec2 float float float float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec2 float float vec2",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec2 float vec2 float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec2 float vec3",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec2 vec2 float float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec2 vec2 vec2",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec2 vec3 float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec2 vec4",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec2(float(0.46), float(0.31)),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec3 float float float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec3(float(0.46), float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec3 float vec2",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec3(float(0.46), float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec3 vec2 float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec3(float(0.46), float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec3 vec3",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec3(float(0.46), float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec4 float float",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec4(float(0.46), float(0.31), float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec3 vec4 vec2",
  mat3(
    vec3(float(0.65), float(0.21), float(0.97)),
    vec4(float(0.46), float(0.31), float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 float float float float float",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 float float float vec2",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 float float vec2 float",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 float float vec3",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    float(0.31),
    float(0.61),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 float vec2 float float",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 float vec2 vec2",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    float(0.31),
    vec2(float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 float vec3 float",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    float(0.31),
    vec3(float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 float vec4",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    float(0.31),
    vec4(float(0.61), float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 vec2 float float float",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 vec2 float vec2",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    float(0.14),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 vec2 vec2 float",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    vec2(float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 vec2 vec3",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    vec2(float(0.31), float(0.61)),
    vec3(float(0.14), float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 vec3 float float",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    vec3(float(0.31), float(0.61), float(0.14)),
    float(0.33),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 vec3 vec2",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    vec3(float(0.31), float(0.61), float(0.14)),
    vec2(float(0.33), float(0.89))
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  "mat3 vec4 vec4 float",
  mat3(
    vec4(float(0.65), float(0.21), float(0.97), float(0.46)),
    vec4(float(0.31), float(0.61), float(0.14), float(0.33)),
    float(0.89)
  ),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);
