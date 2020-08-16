import { bool, or } from "../..";
import { Scenario } from "../../scenario/unit";

export const orScenarios: ReadonlyArray<Scenario> = [
  ["or false false", or(bool(false), bool(false)), [false]],
  ["or false true", or(bool(false), bool(true)), [true]],
  ["or true false", or(bool(true), bool(false)), [true]],
  ["or true true", or(bool(true), bool(true)), [true]],
];
