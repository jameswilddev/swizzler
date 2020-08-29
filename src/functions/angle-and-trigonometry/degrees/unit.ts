import { float, vec2, vec3, vec4, degrees } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario("degrees float", degrees(float(0.015)), 0.859);

vec2Scenario("degrees vec2", degrees(vec2(float(0.015), float(0.011))), [
  0.859,
  0.63,
]);

vec3Scenario(
  "degrees vec3",
  degrees(vec3(float(0.015), float(0.011), float(0.017))),
  [0.859, 0.63, 0.974]
);

vec4Scenario(
  "degrees vec4",
  degrees(vec4(float(0.015), float(0.011), float(0.017), float(0.014))),
  [0.859, 0.63, 0.974, 0.802]
);
