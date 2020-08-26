import { vec2, vec3, mat2, float } from "../..";
import { Scenario } from "../../scenario/unit";

export const mat2Scenarios: ReadonlyArray<Scenario> = [
  ["mat2 float", "mat2", mat2(float(75 / 255)), [75 / 255, 0, 0, 75 / 255]],
  [
    "mat2 float float float float",
    "mat2",
    mat2(float(75 / 255), float(201 / 255), float(100 / 255), float(240 / 255)),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
  [
    "mat2 vec2 float float",
    "mat2",
    mat2(
      vec2(float(75 / 255), float(201 / 255)),
      float(100 / 255),
      float(240 / 255)
    ),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
  [
    "mat2 float vec2 float",
    "mat2",
    mat2(
      float(75 / 255),
      vec2(float(201 / 255), float(100 / 255)),
      float(240 / 255)
    ),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
  [
    "mat2 float float vec2",
    "mat2",
    mat2(
      float(75 / 255),
      float(201 / 255),
      vec2(float(100 / 255), float(240 / 255))
    ),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
  [
    "mat2 vec2 vec2",
    "mat2",
    mat2(
      vec2(float(75 / 255), float(201 / 255)),
      vec2(float(100 / 255), float(240 / 255))
    ),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
  [
    "mat2 vec3 float",
    "mat2",
    mat2(
      vec3(float(75 / 255), float(201 / 255), float(100 / 255)),
      float(240 / 255)
    ),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
  [
    "mat2 float vec3",
    "mat2",
    mat2(
      float(75 / 255),
      vec3(float(201 / 255), float(100 / 255), float(240 / 255))
    ),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
];
