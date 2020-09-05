import { float, vec3, int, ivec3, bool, bvec3 } from "../..";

import { bvec3Scenario } from "../../unit";

bvec3Scenario("bvec3 float zero", bvec3(float(0)), [false, false, false]);

bvec3Scenario("bvec3 float positive", bvec3(float(0.1)), [true, true, true]);

bvec3Scenario("bvec3 float negative", bvec3(float(-0.1)), [true, true, true]);

bvec3Scenario("bvec3 floats", bvec3(float(0), float(0.1), float(-0.1)), [
  false,
  true,
  true,
]);

bvec3Scenario("bvec3 vec3", bvec3(vec3(float(0), float(0.1), float(-0.1))), [
  false,
  true,
  true,
]);

bvec3Scenario("bvec3 int zero", bvec3(int(0)), [false, false, false]);

bvec3Scenario("bvec3 int positive", bvec3(int(1)), [true, true, true]);

bvec3Scenario("bvec3 int negative", bvec3(int(-1)), [true, true, true]);

bvec3Scenario("bvec3 ints", bvec3(int(0), int(1), int(-1)), [
  false,
  true,
  true,
]);

bvec3Scenario("bvec3 ivec3", bvec3(ivec3(int(0), int(1), int(-1))), [
  false,
  true,
  true,
]);

bvec3Scenario("bvec3 false", bvec3(bool(false)), [false, false, false]);

bvec3Scenario("bvec3 true", bvec3(bool(true)), [true, true, true]);

bvec3Scenario("bvec3 bools", bvec3(bool(false), bool(true), bool(false)), [
  false,
  true,
  false,
]);
