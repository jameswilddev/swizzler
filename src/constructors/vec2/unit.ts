import { vec2, float } from "../..";
import { Scenario } from "../../scenario/unit";

export const vec2Scenarios: ReadonlyArray<Scenario> = [
  ["vec2 float", vec2(float(0.7)), [0.7, 0.7]],
  ["vec2 float float", vec2(float(0.7), float(0.3)), [0.7, 0.3]],
];
