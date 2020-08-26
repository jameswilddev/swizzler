import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, clamp } from "../../..";

export const clampScenarios: ReadonlyArray<Scenario> = [
  [
    "clamp float less than minimum",
    "float",
    clamp(float(0.4), float(0.5), float(0.7)),
    [0.5],
  ],
  [
    "clamp float at minimum",
    "float",
    clamp(float(0.5), float(0.5), float(0.7)),
    [0.5],
  ],
  [
    "clamp float between minimum and maximum",
    "float",
    clamp(float(0.6), float(0.5), float(0.7)),
    [0.6],
  ],
  [
    "clamp float at maximum",
    "float",
    clamp(float(0.7), float(0.5), float(0.7)),
    [0.7],
  ],
  [
    "clamp float greater than maximum",
    "float",
    clamp(float(0.8), float(0.5), float(0.7)),
    [0.7],
  ],
  [
    "clamp vec2 vec2 vec2 a",
    "vec2",
    clamp(
      vec2(float(0.3), float(0.2)),
      vec2(float(0.4), float(0.2)),
      vec2(float(0.7), float(0.5))
    ),
    [0.4, 0.2],
  ],
  [
    "clamp vec2 vec2 vec2 b",
    "vec2",
    clamp(
      vec2(float(0.5), float(0.6)),
      vec2(float(0.4), float(0.9)),
      vec2(float(0.7), float(0.9))
    ),
    [0.5, 0.9],
  ],
  [
    "clamp vec2 vec2 vec2 c",
    "vec2",
    clamp(
      vec2(float(0.8), float(0.2)),
      vec2(float(0.4), float(0.2)),
      vec2(float(0.7), float(0.5))
    ),
    [0.7, 0.2],
  ],
  [
    "clamp vec2 float float a",
    "vec2",
    clamp(vec2(float(0.4), float(0.5)), float(0.5), float(0.7)),
    [0.5, 0.5],
  ],
  [
    "clamp vec2 float float b",
    "vec2",
    clamp(vec2(float(0.6), float(0.7)), float(0.5), float(0.7)),
    [0.6, 0.7],
  ],
  [
    "clamp vec2 float float c",
    "vec2",
    clamp(vec2(float(0.8), float(0.5)), float(0.5), float(0.7)),
    [0.7, 0.5],
  ],
  [
    "clamp vec3 vec3 vec3 a",
    "vec3",
    clamp(
      vec3(float(0.3), float(0.2), float(0.8)),
      vec3(float(0.4), float(0.2), float(0.7)),
      vec3(float(0.7), float(0.5), float(0.9))
    ),
    [0.4, 0.2, 0.8],
  ],
  [
    "clamp vec3 vec3 vec3 b",
    "vec3",
    clamp(
      vec3(float(0.7), float(0.6), float(0.8)),
      vec3(float(0.4), float(0.2), float(0.7)),
      vec3(float(0.7), float(0.5), float(0.9))
    ),
    [0.7, 0.5, 0.8],
  ],
  [
    "clamp vec3 float float a",
    "vec3",
    clamp(vec3(float(0.3), float(0.4), float(0.5)), float(0.4), float(0.7)),
    [0.4, 0.4, 0.5],
  ],
  [
    "clamp vec3 float float b",
    "vec3",
    clamp(vec3(float(0.7), float(0.8), float(0.5)), float(0.4), float(0.7)),
    [0.7, 0.7, 0.5],
  ],
  [
    "clamp vec4 vec4 vec4 a",
    "vec4",
    clamp(
      vec4(float(0.3), float(0.2), float(0.8), float(0.3)),
      vec4(float(0.4), float(0.2), float(0.7), float(0.1)),
      vec4(float(0.7), float(0.5), float(0.9), float(0.3))
    ),
    [0.4, 0.2, 0.8, 0.3],
  ],
  [
    "clamp vec4 vec4 vec4 b",
    "vec4",
    clamp(
      vec4(float(0.8), float(0.2), float(0.8), float(0.3)),
      vec4(float(0.4), float(0.2), float(0.7), float(0.1)),
      vec4(float(0.7), float(0.5), float(0.9), float(0.3))
    ),
    [0.7, 0.2, 0.8, 0.3],
  ],
  [
    "clamp vec4 float float a",
    "vec4",
    clamp(
      vec4(float(0.3), float(0.4), float(0.5), float(0.7)),
      float(0.4),
      float(0.7)
    ),
    [0.4, 0.4, 0.5, 0.7],
  ],
  [
    "clamp vec4 float float b",
    "vec4",
    clamp(
      vec4(float(0.8), float(0.2), float(0.8), float(0.3)),
      float(0.4),
      float(0.7)
    ),
    [0.7, 0.4, 0.7, 0.4],
  ],
];
