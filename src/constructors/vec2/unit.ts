import { vec2, float } from "../..";
import { Scenario } from "../../scenario/unit";

export const vec2Scenarios: ReadonlyArray<Scenario> = [
  ["vec2 float", "vec2", vec2(float(75 / 255)), [75 / 255, 75 / 255]],
  [
    "vec2 float float",
    "vec2",
    vec2(float(75 / 255), float(201 / 255)),
    [75 / 255, 201 / 255],
  ],
];
