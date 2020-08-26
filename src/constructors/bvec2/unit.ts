import { bvec2, bool } from "../..";
import { Scenario } from "../../scenario/unit";

export const bvec2Scenarios: ReadonlyArray<Scenario> = [
  ["bvec2 false", "bvec2", bvec2(bool(false)), [false, false]],
  ["bvec2 true", "bvec2", bvec2(bool(true)), [true, true]],
  ["bvec2 true false", "bvec2", bvec2(bool(true), bool(false)), [true, false]],
  ["bvec2 false true", "bvec2", bvec2(bool(false), bool(true)), [false, true]],
];
