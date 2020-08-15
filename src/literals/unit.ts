import { bool, float } from "..";
import { Scenario } from "../scenario/unit";

export const literalsScenarios: ReadonlyArray<Scenario> = [
  ["float literal", float(0.7), [0.7]],
  ["true", bool(true), [true]],
  ["false", bool(false), [false]],
];
