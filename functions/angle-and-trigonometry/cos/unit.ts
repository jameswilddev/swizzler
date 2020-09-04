import { float, vec2, vec3, vec4, cos } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario("cos float", cos(float(0.9)), 0.6216099682706644);

vec2Scenario("cos vec2", cos(vec2(float(0.9), float(-0.6))), [
  0.6216099682706644,
  0.8253356149096783,
]);

vec3Scenario("cos vec3", cos(vec3(float(0.9), float(-0.6), float(0.8))), [
  0.6216099682706644,
  0.8253356149096783,
  0.6967067093471654,
]);

vec4Scenario(
  "cos vec4",
  cos(vec4(float(0.9), float(-0.6), float(0.8), float(0.1))),
  [0.6216099682706644, 0.8253356149096783, 0.6967067093471654, 0.99500417]
);
