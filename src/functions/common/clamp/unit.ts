import { float, vec2, vec3, vec4, clamp } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "clamp float less than minimum",
  clamp(float(0.4), float(0.5), float(0.7)),
  0.5
);

floatScenario(
  "clamp float at minimum",
  clamp(float(0.5), float(0.5), float(0.7)),
  0.5
);

floatScenario(
  "clamp float between minimum and maximum",
  clamp(float(0.6), float(0.5), float(0.7)),
  0.6
);

floatScenario(
  "clamp float at maximum",
  clamp(float(0.7), float(0.5), float(0.7)),
  0.7
);

floatScenario(
  "clamp float greater than maximum",
  clamp(float(0.8), float(0.5), float(0.7)),
  0.7
);

vec2Scenario(
  "clamp vec2 vec2 vec2 a",
  clamp(
    vec2(float(0.3), float(0.2)),
    vec2(float(0.4), float(0.2)),
    vec2(float(0.7), float(0.5))
  ),
  [0.4, 0.2]
);

vec2Scenario(
  "clamp vec2 vec2 vec2 b",
  clamp(
    vec2(float(0.5), float(0.6)),
    vec2(float(0.4), float(0.9)),
    vec2(float(0.7), float(0.9))
  ),
  [0.5, 0.9]
);

vec2Scenario(
  "clamp vec2 vec2 vec2 c",
  clamp(
    vec2(float(0.8), float(0.2)),
    vec2(float(0.4), float(0.2)),
    vec2(float(0.7), float(0.5))
  ),
  [0.7, 0.2]
);

vec2Scenario(
  "clamp vec2 float float a",
  clamp(vec2(float(0.4), float(0.5)), float(0.5), float(0.7)),
  [0.5, 0.5]
);

vec2Scenario(
  "clamp vec2 float float b",
  clamp(vec2(float(0.6), float(0.7)), float(0.5), float(0.7)),
  [0.6, 0.7]
);

vec2Scenario(
  "clamp vec2 float float c",
  clamp(vec2(float(0.8), float(0.5)), float(0.5), float(0.7)),
  [0.7, 0.5]
);

vec3Scenario(
  "clamp vec3 vec3 vec3 a",
  clamp(
    vec3(float(0.3), float(0.2), float(0.8)),
    vec3(float(0.4), float(0.2), float(0.7)),
    vec3(float(0.7), float(0.5), float(0.9))
  ),
  [0.4, 0.2, 0.8]
);

vec3Scenario(
  "clamp vec3 vec3 vec3 b",
  clamp(
    vec3(float(0.7), float(0.6), float(0.8)),
    vec3(float(0.4), float(0.2), float(0.7)),
    vec3(float(0.7), float(0.5), float(0.9))
  ),
  [0.7, 0.5, 0.8]
);

vec3Scenario(
  "clamp vec3 float float a",
  clamp(vec3(float(0.3), float(0.4), float(0.5)), float(0.4), float(0.7)),
  [0.4, 0.4, 0.5]
);

vec3Scenario(
  "clamp vec3 float float b",
  clamp(vec3(float(0.7), float(0.8), float(0.5)), float(0.4), float(0.7)),
  [0.7, 0.7, 0.5]
);

vec4Scenario(
  "clamp vec4 vec4 vec4 a",
  clamp(
    vec4(float(0.3), float(0.2), float(0.8), float(0.3)),
    vec4(float(0.4), float(0.2), float(0.7), float(0.1)),
    vec4(float(0.7), float(0.5), float(0.9), float(0.3))
  ),
  [0.4, 0.2, 0.8, 0.3]
);

vec4Scenario(
  "clamp vec4 vec4 vec4 b",
  clamp(
    vec4(float(0.8), float(0.2), float(0.8), float(0.3)),
    vec4(float(0.4), float(0.2), float(0.7), float(0.1)),
    vec4(float(0.7), float(0.5), float(0.9), float(0.3))
  ),
  [0.7, 0.2, 0.8, 0.3]
);

vec4Scenario(
  "clamp vec4 float float a",
  clamp(
    vec4(float(0.3), float(0.4), float(0.5), float(0.7)),
    float(0.4),
    float(0.7)
  ),
  [0.4, 0.4, 0.5, 0.7]
);

vec4Scenario(
  "clamp vec4 float float b",
  clamp(
    vec4(float(0.8), float(0.2), float(0.8), float(0.3)),
    float(0.4),
    float(0.7)
  ),
  [0.7, 0.4, 0.7, 0.4]
);
