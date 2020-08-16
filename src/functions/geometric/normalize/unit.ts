import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, multiply, normalize } from "../../..";

export const normalizeScenarios: ReadonlyArray<Scenario> = [
  [
    "normalize float positive",
    add(multiply(normalize(float(75)), float(0.25)), float(0.5)),
    [0.75],
  ],
  [
    "normalize float negative",
    add(multiply(normalize(float(-75)), float(0.25)), float(0.5)),
    [0.25],
  ],
  [
    "normalize vec2",
    add(
      multiply(normalize(vec2(float(-108), float(80))), float(0.5)),
      float(0.5)
    ),
    [0.09822142, 0.79761374],
  ],
  [
    "normalize vec3",
    add(
      multiply(normalize(vec3(float(-108), float(-80), float(21))), float(0.5)),
      float(0.5)
    ),
    [0.103037715, 0.20595387, 0.5771871],
  ],
  [
    "normalize vec4",
    add(
      multiply(
        normalize(vec4(float(-108), float(-80), float(21), float(-50))),
        float(0.5)
      ),
      float(0.5)
    ),
    [0.12740895, 0.22400662, 0.57244825, 0.32750416],
  ],
];
