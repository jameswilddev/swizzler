import { float, mat2, getColumn } from "..";
import { Scenario } from "../scenario/unit";

export const matrixSwizzleScenarios: ReadonlyArray<Scenario> = [
  [
    "getColumn mat2 0",
    "vec2",
    getColumn(
      mat2(
        float(75 / 255),
        float(201 / 255),
        float(100 / 255),
        float(240 / 255)
      ),
      0
    ),
    [75 / 255, 201 / 255],
  ],
  [
    "getColumn mat2 1",
    "vec2",
    getColumn(
      mat2(
        float(75 / 255),
        float(201 / 255),
        float(100 / 255),
        float(240 / 255)
      ),
      1
    ),
    [100 / 255, 240 / 255],
  ],
];
