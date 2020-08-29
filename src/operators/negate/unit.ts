import { add, float, vec2, vec3, vec4, negate } from "../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../unit";

floatScenario(
  "negate positive float",
  add(negate(float(0.3)), float(0.5)),
  0.2
);

floatScenario(
  "negate negative float",
  add(negate(float(-0.3)), float(0.5)),
  0.8
);

vec2Scenario(
  "negate vec2",
  add(negate(vec2(float(0.3), float(-0.1))), float(0.5)),
  [0.2, 0.6]
);

vec3Scenario(
  "negate vec3",
  add(negate(vec3(float(0.3), float(-0.1), float(0.2))), float(0.5)),
  [0.2, 0.6, 0.3]
);

vec4Scenario(
  "negate vec4",
  add(
    negate(vec4(float(0.3), float(-0.1), float(-0.2), float(0.4))),
    float(0.5)
  ),
  [0.2, 0.6, 0.7, 0.1]
);
