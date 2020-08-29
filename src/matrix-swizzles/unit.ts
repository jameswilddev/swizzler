import { float, mat2, mat3, mat4, getColumn } from "..";
import { Scenario } from "../scenario/unit";

export const matrixSwizzleScenarios: ReadonlyArray<Scenario> = [
  [
    "getColumn mat2 0",
    "vec2",
    getColumn(mat2(float(0.65), float(0.21), float(0.97), float(0.46)), 0),
    [0.65, 0.21],
  ],
  [
    "getColumn mat2 1",
    "vec2",
    getColumn(mat2(float(0.65), float(0.21), float(0.97), float(0.46)), 1),
    [0.97, 0.46],
  ],

  [
    "getColumn mat3 0",
    "vec3",
    getColumn(
      mat3(
        float(0.65),
        float(0.21),
        float(0.97),
        float(0.46),
        float(0.31),
        float(0.61),
        float(0.14),
        float(0.33),
        float(0.89)
      ),
      0
    ),
    [0.65, 0.21, 0.97],
  ],
  [
    "getColumn mat3 1",
    "vec3",
    getColumn(
      mat3(
        float(0.65),
        float(0.21),
        float(0.97),
        float(0.46),
        float(0.31),
        float(0.61),
        float(0.14),
        float(0.33),
        float(0.89)
      ),
      1
    ),
    [0.46, 0.31, 0.61],
  ],
  [
    "getColumn mat3 2",
    "vec3",
    getColumn(
      mat3(
        float(0.65),
        float(0.21),
        float(0.97),
        float(0.46),
        float(0.31),
        float(0.61),
        float(0.14),
        float(0.33),
        float(0.89)
      ),
      2
    ),
    [0.14, 0.33, 0.89],
  ],
  [
    "getColumn mat4 0",
    "vec4",
    getColumn(
      mat4(
        float(0.65),
        float(0.21),
        float(0.97),
        float(0.46),
        float(0.31),
        float(0.61),
        float(0.14),
        float(0.33),
        float(0.89),
        float(0.72),
        float(0.41),
        float(0.56),
        float(0.91),
        float(0.18),
        float(0.37),
        float(0.52)
      ),
      0
    ),
    [0.65, 0.21, 0.97, 0.46],
  ],
  [
    "getColumn mat4 1",
    "vec4",
    getColumn(
      mat4(
        float(0.65),
        float(0.21),
        float(0.97),
        float(0.46),
        float(0.31),
        float(0.61),
        float(0.14),
        float(0.33),
        float(0.89),
        float(0.72),
        float(0.41),
        float(0.56),
        float(0.91),
        float(0.18),
        float(0.37),
        float(0.52)
      ),
      1
    ),
    [0.31, 0.61, 0.14, 0.33],
  ],
  [
    "getColumn mat4 2",
    "vec4",
    getColumn(
      mat4(
        float(0.65),
        float(0.21),
        float(0.97),
        float(0.46),
        float(0.31),
        float(0.61),
        float(0.14),
        float(0.33),
        float(0.89),
        float(0.72),
        float(0.41),
        float(0.56),
        float(0.91),
        float(0.18),
        float(0.37),
        float(0.52)
      ),
      2
    ),
    [0.89, 0.72, 0.41, 0.56],
  ],
  [
    "getColumn mat4 3",
    "vec4",
    getColumn(
      mat4(
        float(0.65),
        float(0.21),
        float(0.97),
        float(0.46),
        float(0.31),
        float(0.61),
        float(0.14),
        float(0.33),
        float(0.89),
        float(0.72),
        float(0.41),
        float(0.56),
        float(0.91),
        float(0.18),
        float(0.37),
        float(0.52)
      ),
      3
    ),
    [0.91, 0.18, 0.37, 0.52],
  ],
];
