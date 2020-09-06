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
import { ivec4Scenario } from "../../unit";

ivec4Scenario("ivec4 float zero", add(int(128), ivec4(float(0))), [
  128,
  128,
  128,
  128,
]);

ivec4Scenario(
  "ivec4 float positive unit interval",
  add(int(128), ivec4(float(0.7))),
  [128, 128, 128, 128]
);

ivec4Scenario("ivec4 float positive integer", add(int(128), ivec4(float(32))), [
  160,
  160,
  160,
  160,
]);

ivec4Scenario("ivec4 float positive float", add(int(128), ivec4(float(9.6))), [
  137,
  137,
  137,
  137,
]);

ivec4Scenario(
  "ivec4 float negative unit interval",
  add(int(128), ivec4(float(-0.7))),
  [128, 128, 128, 128]
);

ivec4Scenario(
  "ivec4 float negative integer",
  add(int(128), ivec4(float(-32))),
  [96, 96, 96, 96]
);

ivec4Scenario("ivec4 float negative float", add(int(128), ivec4(float(-9.6))), [
  119,
  119,
  119,
  119,
]);

ivec4Scenario(
  "ivec4 floats",
  add(int(128), ivec4(float(9.6), float(42.1), float(-7), float(15.2))),
  [137, 170, 121, 143]
);

ivec4Scenario(
  "ivec4 vec2s",
  add(
    int(128),
    ivec4(vec2(float(9.6), float(42.1)), vec2(float(-7), float(15.2)))
  ),
  [137, 170, 121, 143]
);

ivec4Scenario(
  "ivec4 vec3s",
  add(int(128), ivec4(vec3(float(9.6), float(42.1), float(-7)), float(15.2))),
  [137, 170, 121, 143]
);

ivec4Scenario(
  "ivec4 vec4",
  add(int(128), ivec4(vec4(float(9.6), float(42.1), float(-7), float(15.2)))),
  [137, 170, 121, 143]
);

ivec4Scenario(
  "ivec4 mat2",
  add(int(128), ivec4(mat2(float(9.6), float(42.1), float(-7), float(15.2)))),
  [137, 170, 121, 143]
);

ivec4Scenario("ivec4 int", ivec4(int(37)), [37, 37, 37, 37]);

ivec4Scenario("ivec4 ints", ivec4(int(37), int(182), int(48), int(99)), [
  37,
  182,
  48,
  99,
]);

ivec4Scenario(
  "ivec4 ivec2s",
  ivec4(ivec2(int(37), int(182)), ivec2(int(48), int(99))),
  [37, 182, 48, 99]
);

ivec4Scenario(
  "ivec4 ivec3s",
  ivec4(ivec3(int(37), int(182), int(48)), int(99)),
  [37, 182, 48, 99]
);

ivec4Scenario(
  "ivec4 ivec4s",
  ivec4(ivec4(int(37), int(182), int(48), int(99))),
  [37, 182, 48, 99]
);

ivec4Scenario(
  "ivec4 false",
  add(int(64), multiply(int(128), ivec4(bool(false)))),
  [64, 64, 64, 64]
);

ivec4Scenario(
  "ivec4 true",
  add(int(64), multiply(int(128), ivec4(bool(true)))),
  [192, 192, 192, 192]
);

ivec4Scenario(
  "ivec4 bools",
  add(
    int(64),
    multiply(int(128), ivec4(bool(true), bool(false), bool(false), bool(true)))
  ),
  [192, 64, 64, 192]
);

ivec4Scenario(
  "ivec4 bvec2s",
  add(
    int(64),
    multiply(
      int(128),
      ivec4(bvec2(bool(true), bool(false)), bvec2(bool(false), bool(true)))
    )
  ),
  [192, 64, 64, 192]
);

ivec4Scenario(
  "ivec4 bvec3s",
  add(
    int(64),
    multiply(
      int(128),
      ivec4(bvec3(bool(true), bool(false), bool(false)), bool(true))
    )
  ),
  [192, 64, 64, 192]
);

ivec4Scenario(
  "ivec4 bvec4",
  add(
    int(64),
    multiply(
      int(128),
      ivec4(bvec4(bool(true), bool(false), bool(false), bool(true)))
    )
  ),
  [192, 64, 64, 192]
);
