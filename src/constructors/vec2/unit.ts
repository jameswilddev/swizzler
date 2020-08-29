import { vec2, float } from "../..";
import { vec2Scenario } from "../../unit";

vec2Scenario("vec2 float", vec2(float(75 / 255)), [75 / 255, 75 / 255]);

vec2Scenario("vec2 float float", vec2(float(75 / 255), float(201 / 255)), [
  75 / 255,
  201 / 255,
]);
