import { bool, and } from "../..";
import { Scenario } from "../../scenario/unit";

export const andScenarios: ReadonlyArray<Scenario> = [
  ["and false false", "bool", and(bool(false), bool(false)), [false]],
  ["and false true", "bool", and(bool(false), bool(true)), [false]],
  ["and true false", "bool", and(bool(true), bool(false)), [false]],
  ["and true true", "bool", and(bool(true), bool(true)), [true]],
];
