import { float, vec2, vec3, vec4, smoothstep } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "smoothstep float float float less than lower",
  smoothstep(float(0.3), float(0.7), float(0.2)),
  0
);

floatScenario(
  "smoothstep float float float between",
  smoothstep(float(0.3), float(0.7), float(0.6)),
  0.84375
);

floatScenario(
  "smoothstep float float float greater than upper",
  smoothstep(float(0.3), float(0.7), float(0.8)),
  1
);

vec2Scenario(
  "smoothstep vec2 vec2 vec2 a",
  smoothstep(
    vec2(float(0.3), float(12.4)),
    vec2(float(0.7), float(20.1)),
    vec2(float(0.1), float(24.5))
  ),
  [0, 1]
);

vec2Scenario(
  "smoothstep vec2 vec2 vec2 b",
  smoothstep(
    vec2(float(0.3), float(12.4)),
    vec2(float(0.7), float(20.1)),
    vec2(float(0.9), float(15.2))
  ),
  [1, 0.3005259203606308]
);

vec2Scenario(
  "smoothstep vec2 vec2 vec2 c",
  smoothstep(
    vec2(float(0.3), float(12.4)),
    vec2(float(0.7), float(20.1)),
    vec2(float(0.6), float(11.2))
  ),
  [0.84375, 0]
);

vec2Scenario(
  "smoothstep float float vec2 a",
  smoothstep(float(0.3), float(0.7), vec2(float(0.9), float(0.4))),
  [1, 0.15625000000000014]
);

vec2Scenario(
  "smoothstep float float vec2 b",
  smoothstep(float(0.3), float(0.7), vec2(float(0.2), float(0.9))),
  [0, 1]
);

vec2Scenario(
  "smoothstep float float vec2 c",
  smoothstep(float(0.3), float(0.7), vec2(float(0.6), float(0.1))),
  [0.84375, 0]
);

vec3Scenario(
  "smoothstep vec3 vec3 vec3 a",
  smoothstep(
    vec3(float(0.3), float(12.4), float(1.2)),
    vec3(float(0.7), float(20.1), float(8.9)),
    vec3(float(0.6), float(25.4), float(0.2))
  ),
  [0.84375, 1, 0]
);

vec3Scenario(
  "smoothstep vec3 vec3 vec3 b",
  smoothstep(
    vec3(float(0.3), float(12.4), float(1.2)),
    vec3(float(0.7), float(20.1), float(8.9)),
    vec3(float(0.2), float(15.2), float(10.4))
  ),
  [0, 0.3005259203606308, 1]
);

vec3Scenario(
  "smoothstep vec3 vec3 vec3 c",
  smoothstep(
    vec3(float(0.3), float(12.4), float(1.2)),
    vec3(float(0.7), float(20.1), float(8.9)),
    vec3(float(0.9), float(11.7), float(2.4))
  ),
  [1, 0, 0.06529210374715519]
);

vec3Scenario(
  "smoothstep float float vec3 a",
  smoothstep(float(0.3), float(0.7), vec3(float(0.9), float(0.4), float(1.2))),
  [1, 0.15625000000000014, 1]
);

vec3Scenario(
  "smoothstep float float vec3 b",
  smoothstep(float(0.3), float(0.7), vec3(float(0.2), float(0.9), float(0.55))),
  [0, 1, 0.6835937500000003]
);

vec3Scenario(
  "smoothstep float float vec3 c",
  smoothstep(float(0.3), float(0.7), vec3(float(0.6), float(0.1), float(0.2))),
  [0.84375, 0, 0]
);

vec4Scenario(
  "smoothstep vec4 vec4 vec4 a",
  smoothstep(
    vec4(float(0.3), float(12.4), float(1.2), float(-45.3)),
    vec4(float(0.7), float(20.1), float(8.9), float(-33.2)),
    vec4(float(0.2), float(23.4), float(2.4), float(-31.6))
  ),
  [0, 1, 0.06529210374715519, 1]
);

vec4Scenario(
  "smoothstep vec4 vec4 vec4 b",
  smoothstep(
    vec4(float(0.3), float(12.4), float(1.2), float(-45.3)),
    vec4(float(0.7), float(20.1), float(8.9), float(-33.2)),
    vec4(float(0.9), float(11.2), float(0.5), float(-41.7))
  ),
  [1, 0, 0, 0.212883440084761]
);

vec4Scenario(
  "smoothstep vec4 vec4 vec4 c",
  smoothstep(
    vec4(float(0.3), float(12.4), float(1.2), float(-45.3)),
    vec4(float(0.7), float(20.1), float(8.9), float(-33.2)),
    vec4(float(0.6), float(15.2), float(9.2), float(-47.4))
  ),
  [0.84375, 0.3005259203606308, 1, 0]
);

vec4Scenario(
  "smoothstep float float vec4 a",
  smoothstep(
    float(0.3),
    float(0.7),
    vec4(float(0.9), float(0.4), float(1.2), float(1.1))
  ),
  [1, 0.15625000000000014, 1, 1]
);

vec4Scenario(
  "smoothstep float float vec4 b",
  smoothstep(
    float(0.3),
    float(0.7),
    vec4(float(0.2), float(0.9), float(0.55), float(0.1))
  ),
  [0, 1, 0.6835937500000003, 0]
);

vec4Scenario(
  "smoothstep float float vec4 c",
  smoothstep(
    float(0.3),
    float(0.7),
    vec4(float(0.6), float(0.1), float(0.2), float(0.35))
  ),
  [0.84375, 0, 0, 0.04296874999999999]
);
