import { bool, bvec2, bvec3, bvec4, not } from "../..";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
} from "../../unit";

boolScenario("not false", not(bool(false)), true);

boolScenario("not true", not(bool(true)), false);

bvec2Scenario("not bvec2", not(bvec2(bool(false), bool(true))), [true, false]);

bvec3Scenario("not bvec3", not(bvec3(bool(false), bool(true), bool(true))), [
  true,
  false,
  false,
]);

bvec4Scenario(
  "not bvec4",
  not(bvec4(bool(false), bool(true), bool(true), bool(false))),
  [true, false, false, true]
);
