import { bool, or } from "../..";
import { Scenario } from "../../scenario/unit";

export const orScenarios: ReadonlyArray<Scenario> = [
  ["or false false", "bool", or(bool(false), bool(false)), [false]],
  ["or false true", "bool", or(bool(false), bool(true)), [true]],
  ["or true false", "bool", or(bool(true), bool(false)), [true]],
  ["or true true", "bool", or(bool(true), bool(true)), [true]],
];
