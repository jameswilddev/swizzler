import { float, vec4, mat2, int, ivec4, bool, bvec4 } from "../..";

import { bvec4Scenario } from "../../unit";

bvec4Scenario("bvec4 float zero", bvec4(float(0)), [
  false,
  false,
  false,
  false,
]);

bvec4Scenario("bvec4 float positive", bvec4(float(0.1)), [
  true,
  true,
  true,
  true,
]);

bvec4Scenario("bvec4 float negative", bvec4(float(-0.1)), [
  true,
  true,
  true,
  true,
]);

bvec4Scenario(
  "bvec4 floats",
  bvec4(float(0), float(0.1), float(-0.1), float(0)),
  [false, true, true, false]
);

bvec4Scenario(
  "bvec4 vec4",
  bvec4(vec4(float(0), float(0.1), float(-0.1), float(0))),
  [false, true, true, false]
);

bvec4Scenario(
  "bvec4 mat2",
  bvec4(mat2(float(0), float(0.1), float(-0.1), float(0))),
  [false, true, true, false]
);

bvec4Scenario("bvec4 int zero", bvec4(int(0)), [false, false, false, false]);

bvec4Scenario("bvec4 int positive", bvec4(int(1)), [true, true, true, true]);

bvec4Scenario("bvec4 int negative", bvec4(int(-1)), [true, true, true, true]);

bvec4Scenario("bvec4 ints", bvec4(int(0), int(1), int(-1), int(0)), [
  false,
  true,
  true,
  false,
]);

bvec4Scenario("bvec4 ivec4", bvec4(ivec4(int(0), int(1), int(-1), int(0))), [
  false,
  true,
  true,
  false,
]);

bvec4Scenario("bvec4 false", bvec4(bool(false)), [false, false, false, false]);

bvec4Scenario("bvec4 true", bvec4(bool(true)), [true, true, true, true]);

bvec4Scenario(
  "bvec4 bools",
  bvec4(bool(false), bool(true), bool(false), bool(true)),
  [false, true, false, true]
);
