import { bvec2, bool } from "../..";
import { bvec2Scenario } from "../scenario";

bvec2Scenario("bvec2 false", bvec2(bool(false)), [false, false]);

bvec2Scenario("bvec2 true", bvec2(bool(true)), [true, true]);

bvec2Scenario("bvec2 true false", "bvec2", bvec2(bool(true), bool(false)), [
  true,
  false,
]);

bvec2Scenario("bvec2 false true", "bvec2", bvec2(bool(false), bool(true)), [
  false,
  true,
]);
