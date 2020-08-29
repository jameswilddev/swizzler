import { vec2, vec3, vec4, mat2, mat3, mat4, float } from "../..";
import { Scenario } from "../../scenario/unit";

export const mat2Scenarios: ReadonlyArray<Scenario> = [
  ["mat2 float", "mat2", mat2(float(75 / 255)), [75 / 255, 0, 0, 75 / 255]],
  [
    "mat2 mat3",
    "mat2",
    mat2(
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
      )
    ),
    [0.65, 0.21, 0.46, 0.31],
  ],
  [
    "mat2 mat4",
    "mat2",
    mat2(
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
      )
    ),
    [0.65, 0.21, 0.31, 0.61],
  ],
  [
    "mat2 float float float float",
    "mat2",
    mat2(float(0.65), float(0.21), float(0.97), float(0.46)),
    [0.65, 0.21, 0.97, 0.46],
  ],
  [
    "mat2 float float vec2",
    "mat2",
    mat2(float(0.65), float(0.21), vec2(float(0.97), float(0.46))),
    [0.65, 0.21, 0.97, 0.46],
  ],
  [
    "mat2 float vec2 float",
    "mat2",
    mat2(float(0.65), vec2(float(0.21), float(0.97)), float(0.46)),
    [0.65, 0.21, 0.97, 0.46],
  ],
  [
    "mat2 float vec3",
    "mat2",
    mat2(float(0.65), vec3(float(0.21), float(0.97), float(0.46))),
    [0.65, 0.21, 0.97, 0.46],
  ],
  [
    "mat2 vec2 float float",
    "mat2",
    mat2(vec2(float(0.65), float(0.21)), float(0.97), float(0.46)),
    [0.65, 0.21, 0.97, 0.46],
  ],
  [
    "mat2 vec2 vec2",
    "mat2",
    mat2(vec2(float(0.65), float(0.21)), vec2(float(0.97), float(0.46))),
    [0.65, 0.21, 0.97, 0.46],
  ],
  [
    "mat2 vec3 float",
    "mat2",
    mat2(vec3(float(0.65), float(0.21), float(0.97)), float(0.46)),
    [0.65, 0.21, 0.97, 0.46],
  ],
  [
    "mat2 vec4",
    "mat2",
    mat2(vec4(float(0.65), float(0.21), float(0.97), float(0.46))),
    [0.65, 0.21, 0.97, 0.46],
  ],
];
