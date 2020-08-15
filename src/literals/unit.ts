import { bool, float } from "..";
import { Scenario } from "../scenario/unit";

export const literalsScenarios: ReadonlyArray<Scenario> = [
  ["float literal", float(75 / 255), [75 / 255]],
  ["true", bool(true), [true]],
  ["false", bool(false), [false]],
];
