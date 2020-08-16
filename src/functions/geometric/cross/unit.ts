import { Scenario } from "../../../scenario/unit";
import { float, vec3, add, cross } from "../../..";

export const crossScenarios: ReadonlyArray<Scenario> = [
  [
    "cross",
    add(
      cross(
        vec3(float(0.17647), float(0.5098), float(0.94117)),
        vec3(float(0.058823), float(0.87058), float(0.18431))
      ),
      float(0.75)
    ),
    [0.024597, 0.7728373, 0.873643],
  ],
];
