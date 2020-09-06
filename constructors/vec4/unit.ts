import {
  float,
  vec2,
  vec3,
  vec4,
  mat2,
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
} from "../..";
import { vec4Scenario } from "../../unit";

vec4Scenario("vec4 float", vec4(float(0.4)), [0.4, 0.4, 0.4, 0.4]);

vec4Scenario(
  "vec4 floats",
  vec4(float(0.4), float(0.2), float(0.7), float(0.6)),
  [0.4, 0.2, 0.7, 0.6]
);

vec4Scenario(
  "vec4 vec2s",
  vec4(vec2(float(0.4), float(0.2)), vec2(float(0.7), float(0.6))),
  [0.4, 0.2, 0.7, 0.6]
);

vec4Scenario(
  "vec4 vec3s",
  vec4(vec3(float(0.4), float(0.2), float(0.7)), float(0.6)),
  [0.4, 0.2, 0.7, 0.6]
);

vec4Scenario(
  "vec4 vec4",
  vec4(vec4(float(0.4), float(0.2), float(0.7), float(0.6))),
  [0.4, 0.2, 0.7, 0.6]
);

vec4Scenario(
  "vec4 mat2",
  vec4(mat2(float(0.4), float(0.2), float(0.7), float(0.6))),
  [0.4, 0.2, 0.7, 0.6]
);

vec4Scenario(
  "vec4 int",
  add(float(0.5), multiply(float(0.125), vec4(int(3)))),
  [0.875, 0.875, 0.875, 0.875]
);

vec4Scenario(
  "vec4 ints",
  add(
    float(0.5),
    multiply(float(0.125), vec4(int(3), int(-2), int(2), int(-1)))
  ),
  [0.875, 0.25, 0.75, 0.375]
);

vec4Scenario(
  "vec4 ivec2s",
  add(
    float(0.5),
    multiply(float(0.125), vec4(ivec2(int(3), int(-2)), ivec2(int(2), int(-1))))
  ),
  [0.875, 0.25, 0.75, 0.375]
);

vec4Scenario(
  "vec4 ivec3s",
  add(
    float(0.5),
    multiply(float(0.125), vec4(ivec3(int(3), int(-2), int(2)), int(-1)))
  ),
  [0.875, 0.25, 0.75, 0.375]
);

vec4Scenario(
  "vec4 ivec4",
  add(
    float(0.5),
    multiply(float(0.125), vec4(ivec4(int(3), int(-2), int(2), int(-1))))
  ),
  [0.875, 0.25, 0.75, 0.375]
);

vec4Scenario(
  "vec4 false",
  add(float(0.25), multiply(float(0.5), vec4(bool(false)))),
  [0.25, 0.25, 0.25, 0.25]
);

vec4Scenario(
  "vec4 true",
  add(float(0.25), multiply(float(0.5), vec4(bool(true)))),
  [0.75, 0.75, 0.75, 0.75]
);

vec4Scenario(
  "vec4 bools",
  add(
    float(0.25),
    multiply(float(0.5), vec4(bool(true), bool(false), bool(false), bool(true)))
  ),
  [0.75, 0.25, 0.25, 0.75]
);

vec4Scenario(
  "vec4 bvec2s",
  add(
    float(0.25),
    multiply(
      float(0.5),
      vec4(bvec2(bool(true), bool(false)), bvec2(bool(false), bool(true)))
    )
  ),
  [0.75, 0.25, 0.25, 0.75]
);

vec4Scenario(
  "vec4 bvec3s",
  add(
    float(0.25),
    multiply(
      float(0.5),
      vec4(bvec3(bool(true), bool(false), bool(false)), bool(true))
    )
  ),
  [0.75, 0.25, 0.25, 0.75]
);

vec4Scenario(
  "vec4 bvec4",
  add(
    float(0.25),
    multiply(
      float(0.5),
      vec4(bvec4(bool(true), bool(false), bool(false), bool(true)))
    )
  ),
  [0.75, 0.25, 0.25, 0.75]
);

vec4Scenario(
  "vec4 complex",
  add(
    float(0.5),
    multiply(
      float(0.125),
      vec4(float(3.2), bvec2(bool(true), bool(false)), int(-2))
    )
  ),
  [0.9, 0.625, 0.5, 0.25]
);
