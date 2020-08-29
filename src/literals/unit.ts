import { bool, float, add } from "..";
import { boolScenario, floatScenario } from "../unit";

floatScenario("positive unit interval", float(75 / 255), 75 / 255);

floatScenario("zero", add(float(0), float(128 / 255)), 128 / 255);

floatScenario(
  "negative unit interval",
  add(float(-75 / 255), float(128 / 255)),
  53 / 255
);

floatScenario("positive integer", add(float(2), float(-492 / 255)), 18 / 255);

floatScenario("negative integer", add(float(-2), float(532 / 255)), 22 / 255);

floatScenario("floats", add(float(650 / 255), float(-410 / 255)), 240 / 255);

boolScenario("true", bool(true), true);

boolScenario("false", bool(false), false);
