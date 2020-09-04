import { float, vec2, vec3, vec4, add, multiply, refract } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "refract float positive negative",
  add(
    multiply(refract(float(1), float(-1), float(0.9)), float(0.25)),
    float(0.5)
  ),
  0.75
);

floatScenario(
  "refract float positive positive",
  add(
    multiply(refract(float(1), float(1), float(0.9)), float(0.25)),
    float(0.5)
  ),
  0.25
);

floatScenario(
  "refract float negative positive",
  add(
    multiply(refract(float(-1), float(1), float(0.9)), float(0.25)),
    float(0.5)
  ),
  0.25
);

floatScenario(
  "refract float negative negative",
  add(
    multiply(refract(float(-1), float(-1), float(0.9)), float(0.25)),
    float(0.5)
  ),
  0.75
);
vec2Scenario(
  "refract vec2",
  add(
    multiply(
      refract(
        vec2(float(0.39391932), float(-0.91914505)),
        vec2(float(-0.8574929), float(0.51449573)),
        float(0.9)
      ),
      float(0.5)
    ),
    float(0.5)
  ),
  [0.7288377126933174, 0.05544031688546075]
);

vec3Scenario(
  "refract vec3",
  add(
    multiply(
      refract(
        vec3(float(0.27160725), float(-0.63375026), float(0.724286)),
        vec3(float(-0.43919685), float(0.26351812), float(-0.85887384)),
        float(0.9)
      ),
      float(0.5)
    ),
    float(0.5)
  ),
  [0.646147400295624, 0.2004578997779009, 0.8727136805781092]
);

vec4Scenario(
  "refract vec4",
  add(
    multiply(
      refract(
        vec4(
          float(0.26726127),
          float(-0.62360954),
          float(0.7126967),
          float(-0.17817417)
        ),
        vec4(
          float(-0.520379),
          float(0.3122274),
          float(0.7863505),
          float(-0.11563978)
        ),
        float(0.9)
      ),
      float(0.5)
    ),
    float(0.5)
  ),
  [
    0.8055037322291012,
    0.10823401056253928,
    0.5408010903875367,
    0.46098521556416455,
  ]
);
