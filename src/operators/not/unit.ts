import { bool, bvec2, bvec3, bvec4, not } from "../..";
import { Scenario } from "../../scenario/unit";

export const notScenarios: ReadonlyArray<Scenario> = [
  ["not false", "bool", not(bool(false)), [true]],
  ["not true", "bool", not(bool(true)), [false]],
  ["not bvec2", "bvec2", not(bvec2(bool(false), bool(true))), [true, false]],
  [
    "not bvec3",
    "bvec3",
    not(bvec3(bool(false), bool(true), bool(true))),
    [true, false, false],
  ],
  [
    "not bvec4",
    "bvec4",
    not(bvec4(bool(false), bool(true), bool(true), bool(false))),
    [true, false, false, true],
  ],
];
