import { bool, float, add } from "..";
import { Scenario } from "../scenario/unit";

export const literalsScenarios: ReadonlyArray<Scenario> = [
  ["positive unit interval", "float", float(75 / 255), [75 / 255]],
  ["zero", "float", add(float(0), float(128 / 255)), [128 / 255]],
  [
    "negative unit interval",
    "float",
    add(float(-75 / 255), float(128 / 255)),
    [53 / 255],
  ],
  ["positive integer", "float", add(float(2), float(-492 / 255)), [18 / 255]],
  ["negative integer", "float", add(float(-2), float(532 / 255)), [22 / 255]],
  ["floats", "float", add(float(650 / 255), float(-410 / 255)), [240 / 255]],
  ["true", "bool", bool(true), [true]],
  ["false", "bool", bool(false), [false]],
];
