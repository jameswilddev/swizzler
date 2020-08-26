import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, smoothstep } from "../../..";

export const smoothstepScenarios: ReadonlyArray<Scenario> = [
  [
    "smoothstep float float float less than lower",
    "float",
    smoothstep(float(0.3), float(0.7), float(0.2)),
    [0],
  ],
  [
    "smoothstep float float float between",
    "float",
    smoothstep(float(0.3), float(0.7), float(0.6)),
    [0.84375],
  ],
  [
    "smoothstep float float float greater than upper",
    "float",
    smoothstep(float(0.3), float(0.7), float(0.8)),
    [1],
  ],
  [
    "smoothstep vec2 vec2 vec2 a",
    "vec2",
    smoothstep(
      vec2(float(0.3), float(12.4)),
      vec2(float(0.7), float(20.1)),
      vec2(float(0.1), float(24.5))
    ),
    [0, 1],
  ],
  [
    "smoothstep vec2 vec2 vec2 b",
    "vec2",
    smoothstep(
      vec2(float(0.3), float(12.4)),
      vec2(float(0.7), float(20.1)),
      vec2(float(0.9), float(15.2))
    ),
    [1, 0.3005259203606308],
  ],
  [
    "smoothstep vec2 vec2 vec2 c",
    "vec2",
    smoothstep(
      vec2(float(0.3), float(12.4)),
      vec2(float(0.7), float(20.1)),
      vec2(float(0.6), float(11.2))
    ),
    [0.84375, 0],
  ],
  [
    "smoothstep float float vec2 a",
    "vec2",
    smoothstep(float(0.3), float(0.7), vec2(float(0.9), float(0.4))),
    [1, 0.15625000000000014],
  ],
  [
    "smoothstep float float vec2 b",
    "vec2",
    smoothstep(float(0.3), float(0.7), vec2(float(0.2), float(0.9))),
    [0, 1],
  ],
  [
    "smoothstep float float vec2 c",
    "vec2",
    smoothstep(float(0.3), float(0.7), vec2(float(0.6), float(0.1))),
    [0.84375, 0],
  ],
  [
    "smoothstep vec3 vec3 vec3 a",
    "vec3",
    smoothstep(
      vec3(float(0.3), float(12.4), float(1.2)),
      vec3(float(0.7), float(20.1), float(8.9)),
      vec3(float(0.6), float(25.4), float(0.2))
    ),
    [0.84375, 1, 0],
  ],
  [
    "smoothstep vec3 vec3 vec3 b",
    "vec3",
    smoothstep(
      vec3(float(0.3), float(12.4), float(1.2)),
      vec3(float(0.7), float(20.1), float(8.9)),
      vec3(float(0.2), float(15.2), float(10.4))
    ),
    [0, 0.3005259203606308, 1],
  ],
  [
    "smoothstep vec3 vec3 vec3 c",
    "vec3",
    smoothstep(
      vec3(float(0.3), float(12.4), float(1.2)),
      vec3(float(0.7), float(20.1), float(8.9)),
      vec3(float(0.9), float(11.7), float(2.4))
    ),
    [1, 0, 0.06529210374715519],
  ],
  [
    "smoothstep float float vec3 a",
    "vec3",
    smoothstep(
      float(0.3),
      float(0.7),
      vec3(float(0.9), float(0.4), float(1.2))
    ),
    [1, 0.15625000000000014, 1],
  ],
  [
    "smoothstep float float vec3 b",
    "vec3",
    smoothstep(
      float(0.3),
      float(0.7),
      vec3(float(0.2), float(0.9), float(0.55))
    ),
    [0, 1, 0.6835937500000003],
  ],
  [
    "smoothstep float float vec3 c",
    "vec3",
    smoothstep(
      float(0.3),
      float(0.7),
      vec3(float(0.6), float(0.1), float(0.2))
    ),
    [0.84375, 0, 0],
  ],
  [
    "smoothstep vec4 vec4 vec4 a",
    "vec4",
    smoothstep(
      vec4(float(0.3), float(12.4), float(1.2), float(-45.3)),
      vec4(float(0.7), float(20.1), float(8.9), float(-33.2)),
      vec4(float(0.2), float(23.4), float(2.4), float(-31.6))
    ),
    [0, 1, 0.06529210374715519, 1],
  ],
  [
    "smoothstep vec4 vec4 vec4 b",
    "vec4",
    smoothstep(
      vec4(float(0.3), float(12.4), float(1.2), float(-45.3)),
      vec4(float(0.7), float(20.1), float(8.9), float(-33.2)),
      vec4(float(0.9), float(11.2), float(0.5), float(-41.7))
    ),
    [1, 0, 0, 0.212883440084761],
  ],
  [
    "smoothstep vec4 vec4 vec4 c",
    "vec4",
    smoothstep(
      vec4(float(0.3), float(12.4), float(1.2), float(-45.3)),
      vec4(float(0.7), float(20.1), float(8.9), float(-33.2)),
      vec4(float(0.6), float(15.2), float(9.2), float(-47.4))
    ),
    [0.84375, 0.3005259203606308, 1, 0],
  ],
  [
    "smoothstep float float vec4 a",
    "vec4",
    smoothstep(
      float(0.3),
      float(0.7),
      vec4(float(0.9), float(0.4), float(1.2), float(1.1))
    ),
    [1, 0.15625000000000014, 1, 1],
  ],
  [
    "smoothstep float float vec4 b",
    "vec4",
    smoothstep(
      float(0.3),
      float(0.7),
      vec4(float(0.2), float(0.9), float(0.55), float(0.1))
    ),
    [0, 1, 0.6835937500000003, 0],
  ],
  [
    "smoothstep float float vec4 c",
    "vec4",
    smoothstep(
      float(0.3),
      float(0.7),
      vec4(float(0.6), float(0.1), float(0.2), float(0.35))
    ),
    [0.84375, 0, 0, 0.04296874999999999],
  ],
];
