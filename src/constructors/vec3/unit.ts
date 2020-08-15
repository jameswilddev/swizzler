import { vec2, vec3, float } from "../..";
import { Scenario } from "../../scenario/unit";

export const vec3Scenarios: ReadonlyArray<Scenario> = [
  ["vec3 float", vec3(float(75 / 255)), [75 / 255, 75 / 255, 75 / 255]],
  [
    "vec3 float float float",
    vec3(float(75 / 255), float(201 / 255), float(100 / 255)),
    [75 / 255, 201 / 255, 100 / 255],
  ],
  [
    "vec3 vec2 float",
    vec3(vec2(float(75 / 255), float(201 / 255)), float(100 / 255)),
    [75 / 255, 201 / 255, 100 / 255],
  ],
  [
    "vec3 float vec2",
    vec3(float(75 / 255), vec2(float(201 / 255), float(100 / 255))),
    [75 / 255, 201 / 255, 100 / 255],
  ],
];
