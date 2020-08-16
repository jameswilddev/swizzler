import { bool, and } from "../..";
import { Scenario } from "../../scenario/unit";

export const andScenarios: ReadonlyArray<Scenario> = [
  ["and false false", and(bool(false), bool(false)), [false]],
  ["and false true", and(bool(false), bool(true)), [false]],
  ["and true false", and(bool(true), bool(false)), [false]],
  ["and true true", and(bool(true), bool(true)), [true]],
];
