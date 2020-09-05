import { float, vec2, int, ivec2, bool, bvec2 } from "../..";

import { bvec2Scenario } from "../../unit";

bvec2Scenario("bvec2 float zero", bvec2(float(0)), [false, false]);

bvec2Scenario("bvec2 float positive", bvec2(float(0.1)), [true, true]);

bvec2Scenario("bvec2 float negative", bvec2(float(-0.1)), [true, true]);

bvec2Scenario("bvec2 floats", bvec2(float(0), float(0.1)), [false, true]);

bvec2Scenario("bvec2 vec2", bvec2(vec2(float(0), float(0.1))), [false, true]);

bvec2Scenario("bvec2 int zero", bvec2(int(0)), [false, false]);

bvec2Scenario("bvec2 int positive", bvec2(int(1)), [true, true]);

bvec2Scenario("bvec2 int negative", bvec2(int(-1)), [true, true]);

bvec2Scenario("bvec2 ints", bvec2(int(0), int(1)), [false, true]);

bvec2Scenario("bvec2 ivec2", bvec2(ivec2(int(0), int(1))), [false, true]);

bvec2Scenario("bvec2 false", bvec2(bool(false)), [false, false]);

bvec2Scenario("bvec2 true", bvec2(bool(true)), [true, true]);

bvec2Scenario("bvec2 bools", bvec2(bool(false), bool(true)), [false, true]);
