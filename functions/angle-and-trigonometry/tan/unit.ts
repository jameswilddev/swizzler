import { float, vec2, vec3, vec4, tan } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario("tan float", tan(float(0.3)), 0.30933624960962325);

vec2Scenario("tan vec2", tan(vec2(float(0.3), float(0.4))), [
  0.30933624960962325,
  0.4227932187381618,
]);

vec3Scenario("tan vec3", tan(vec3(float(0.3), float(0.4), float(0.1))), [
  0.30933624960962325,
  0.4227932187381618,
  0.10033467208545055,
]);

vec4Scenario(
  "tan vec4",
  tan(vec4(float(0.3), float(0.4), float(0.1), float(0.2))),
  [
    0.30933624960962325,
    0.4227932187381618,
    0.10033467208545055,
    0.2027100355086725,
  ]
);
