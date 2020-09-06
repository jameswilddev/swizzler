import {
  float,
  vec2,
  vec3,
  int,
  ivec2,
  ivec3,
  bool,
  bvec2,
  bvec3,
  add,
  multiply,
} from "../..";
import { ivec3Scenario } from "../../unit";

ivec3Scenario("ivec3 float zero", add(int(128), ivec3(float(0))), [
  128,
  128,
  128,
]);

ivec3Scenario(
  "ivec3 float positive unit interval",
  add(int(128), ivec3(float(0.7))),
  [128, 128, 128]
);

ivec3Scenario("ivec3 float positive integer", add(int(128), ivec3(float(32))), [
  160,
  160,
  160,
]);

ivec3Scenario("ivec3 float positive float", add(int(128), ivec3(float(9.6))), [
  137,
  137,
  137,
]);

ivec3Scenario(
  "ivec3 float negative unit interval",
  add(int(128), ivec3(float(-0.7))),
  [128, 128, 128]
);

ivec3Scenario(
  "ivec3 float negative integer",
  add(int(128), ivec3(float(-32))),
  [96, 96, 96]
);

ivec3Scenario("ivec3 float negative float", add(int(128), ivec3(float(-9.6))), [
  119,
  119,
  119,
]);

ivec3Scenario(
  "ivec3 floats",
  add(int(128), ivec3(float(9.6), float(42.1), float(-7))),
  [137, 170, 121]
);

ivec3Scenario(
  "ivec3 vec2s",
  add(int(128), ivec3(vec2(float(9.6), float(42.1)), float(-7))),
  [137, 170, 121]
);

ivec3Scenario(
  "ivec3 vec3",
  add(int(128), ivec3(vec3(float(9.6), float(42.1), float(-7)))),
  [137, 170, 121]
);

ivec3Scenario("ivec3 int", ivec3(int(37)), [37, 37, 37]);

ivec3Scenario("ivec3 ints", ivec3(int(37), int(182), int(48)), [37, 182, 48]);

ivec3Scenario("ivec3 ivec2s", ivec3(ivec2(int(37), int(182)), int(48)), [
  37,
  182,
  48,
]);

ivec3Scenario("ivec3 ivec3", ivec3(ivec3(int(37), int(182), int(48))), [
  37,
  182,
  48,
]);

ivec3Scenario(
  "ivec3 false",
  add(int(64), multiply(int(128), ivec3(bool(false)))),
  [64, 64, 64]
);

ivec3Scenario(
  "ivec3 true",
  add(int(64), multiply(int(128), ivec3(bool(true)))),
  [192, 192, 192]
);

ivec3Scenario(
  "ivec3 bools",
  add(int(64), multiply(int(128), ivec3(bool(true), bool(false), bool(false)))),
  [192, 64, 64]
);

ivec3Scenario(
  "ivec3 bvec2s",
  add(
    int(64),
    multiply(int(128), ivec3(bvec2(bool(true), bool(false)), bool(false)))
  ),
  [192, 64, 64]
);

ivec3Scenario(
  "ivec3 bvec3",
  add(
    int(64),
    multiply(int(128), ivec3(bvec3(bool(true), bool(false), bool(false))))
  ),
  [192, 64, 64]
);
