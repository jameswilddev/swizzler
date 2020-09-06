import { float, vec2, int, ivec2, bool, bvec2, add, multiply } from "../..";
import { ivec2Scenario } from "../../unit";

ivec2Scenario("ivec2 float zero", add(int(128), ivec2(float(0))), [128, 128]);

ivec2Scenario(
  "ivec2 float positive unit interval",
  add(int(128), ivec2(float(0.7))),
  [128, 128]
);

ivec2Scenario("ivec2 float positive integer", add(int(128), ivec2(float(32))), [
  160,
  160,
]);

ivec2Scenario("ivec2 float positive float", add(int(128), ivec2(float(9.6))), [
  137,
  137,
]);

ivec2Scenario(
  "ivec2 float negative unit interval",
  add(int(128), ivec2(float(-0.7))),
  [128, 128]
);

ivec2Scenario(
  "ivec2 float negative integer",
  add(int(128), ivec2(float(-32))),
  [96, 96]
);

ivec2Scenario("ivec2 float negative float", add(int(128), ivec2(float(-9.6))), [
  119,
  119,
]);

ivec2Scenario("ivec2 floats", add(int(128), ivec2(float(9.6), float(42.1))), [
  137,
  170,
]);

ivec2Scenario(
  "ivec2 vec2",
  add(int(128), ivec2(vec2(float(9.6), float(42.1)))),
  [137, 170]
);

ivec2Scenario("ivec2 int", ivec2(int(37)), [37, 37]);

ivec2Scenario("ivec2 ints", ivec2(int(37), int(182)), [37, 182]);

ivec2Scenario("ivec2 ivec2", ivec2(ivec2(int(37), int(182))), [37, 182]);

ivec2Scenario(
  "ivec2 false",
  add(int(64), multiply(int(128), ivec2(bool(false)))),
  [64, 64]
);

ivec2Scenario(
  "ivec2 true",
  add(int(64), multiply(int(128), ivec2(bool(true)))),
  [192, 192]
);

ivec2Scenario(
  "ivec2 bools",
  add(int(64), multiply(int(128), ivec2(bool(true), bool(false)))),
  [192, 64]
);

ivec2Scenario(
  "ivec2 bvec2",
  add(int(64), multiply(int(128), ivec2(bvec2(bool(true), bool(false))))),
  [192, 64]
);
