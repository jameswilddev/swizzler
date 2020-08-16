import { bool, xor } from "../..";
import { Scenario } from "../../scenario/unit";

export const xorScenarios: ReadonlyArray<Scenario> = [
  ["xor false false", xor(bool(false), bool(false)), [false]],
  ["xor false true", xor(bool(false), bool(true)), [true]],
  ["xor true false", xor(bool(true), bool(false)), [true]],
  ["xor true true", xor(bool(true), bool(true)), [false]],
];
