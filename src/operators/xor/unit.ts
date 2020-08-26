import { bool, xor } from "../..";
import { Scenario } from "../../scenario/unit";

export const xorScenarios: ReadonlyArray<Scenario> = [
  ["xor false false", "bool", xor(bool(false), bool(false)), [false]],
  ["xor false true", "bool", xor(bool(false), bool(true)), [true]],
  ["xor true false", "bool", xor(bool(true), bool(false)), [true]],
  ["xor true true", "bool", xor(bool(true), bool(true)), [false]],
];
