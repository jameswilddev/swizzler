import { float, vec2, vec3, vec4, add, multiply, normalize } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "normalize float positive",
  add(multiply(normalize(float(75)), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  "normalize float negative",
  add(multiply(normalize(float(-75)), float(0.25)), float(0.5)),
  0.25
);

vec2Scenario(
  "normalize vec2",
  add(
    multiply(normalize(vec2(float(-108), float(80))), float(0.5)),
    float(0.5)
  ),
  [0.09822142, 0.79761374]
);

vec3Scenario(
  "normalize vec3",
  add(
    multiply(normalize(vec3(float(-108), float(-80), float(21))), float(0.5)),
    float(0.5)
  ),
  [0.103037715, 0.20595387, 0.5771871]
);

vec4Scenario(
  "normalize vec4",
  add(
    multiply(
      normalize(vec4(float(-108), float(-80), float(21), float(-50))),
      float(0.5)
    ),
    float(0.5)
  ),
  [0.12740895, 0.22400662, 0.57244825, 0.32750416]
);
