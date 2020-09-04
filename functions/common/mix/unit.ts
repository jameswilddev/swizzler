import { float, vec2, vec3, vec4, mix } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "mix float float float",
  mix(float(0.4), float(0.9), float(0.7)),
  0.75
);

vec2Scenario(
  "mix vec2 vec2 vec2",
  mix(
    vec2(float(0.4), float(0.1)),
    vec2(float(0.9), float(0.4)),
    vec2(float(0.7), float(0.25))
  ),
  [0.75, 0.175]
);

vec2Scenario(
  "mix vec2 vec2 float",
  mix(vec2(float(0.4), float(0.1)), vec2(float(0.9), float(0.4)), float(0.7)),
  [0.75, 0.31]
);

vec3Scenario(
  "mix vec3 vec3 vec3",
  mix(
    vec3(float(0.4), float(0.1), float(0.4)),
    vec3(float(0.9), float(0.4), float(0.6)),
    vec3(float(0.7), float(0.25), float(0.3))
  ),
  [0.75, 0.175, 0.46]
);

vec3Scenario(
  "mix vec3 vec3 float",
  mix(
    vec3(float(0.4), float(0.1), float(0.4)),
    vec3(float(0.9), float(0.4), float(0.6)),
    float(0.7)
  ),
  [0.75, 0.31, 0.54]
);

vec4Scenario(
  "mix vec4 vec4 vec4",
  mix(
    vec4(float(0.4), float(0.1), float(0.4), float(0.8)),
    vec4(float(0.9), float(0.4), float(0.6), float(0.9)),
    vec4(float(0.7), float(0.25), float(0.3), float(0.5))
  ),
  [0.75, 0.175, 0.46, 0.85]
);

vec4Scenario(
  "mix vec4 vec4 float",
  mix(
    vec4(float(0.4), float(0.1), float(0.4), float(0.8)),
    vec4(float(0.9), float(0.4), float(0.6), float(0.9)),
    float(0.7)
  ),
  [0.75, 0.31, 0.54, 0.87]
);
