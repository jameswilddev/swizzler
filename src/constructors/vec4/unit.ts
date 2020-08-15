import { vec2, vec3, vec4, float } from "../..";
import { Scenario } from "../../scenario/unit";

export const vec4Scenarios: ReadonlyArray<Scenario> = [
  [
    "vec4 float",
    vec4(float(75 / 255)),
    [75 / 255, 75 / 255, 75 / 255, 75 / 255],
  ],
  [
    "vec4 float float float float",
    vec4(float(75 / 255), float(201 / 255), float(100 / 255), float(240 / 255)),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
  [
    "vec4 vec2 float float",
    vec4(
      vec2(float(75 / 255), float(201 / 255)),
      float(100 / 255),
      float(240 / 255)
    ),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
  [
    "vec4 float vec2 float",
    vec4(
      float(75 / 255),
      vec2(float(201 / 255), float(100 / 255)),
      float(240 / 255)
    ),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
  [
    "vec4 float float vec2",
    vec4(
      float(75 / 255),
      float(201 / 255),
      vec2(float(100 / 255), float(240 / 255))
    ),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
  [
    "vec4 vec2 vec2",
    vec4(
      vec2(float(75 / 255), float(201 / 255)),
      vec2(float(100 / 255), float(240 / 255))
    ),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
  [
    "vec4 vec3 float",
    vec4(
      vec3(float(75 / 255), float(201 / 255), float(100 / 255)),
      float(240 / 255)
    ),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
  [
    "vec4 float vec3",
    vec4(
      float(75 / 255),
      vec3(float(201 / 255), float(100 / 255), float(240 / 255))
    ),
    [75 / 255, 201 / 255, 100 / 255, 240 / 255],
  ],
];
