import { float, vec2, vec3, vec4, add, multiply, step } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "step float less than edge",
  add(multiply(step(float(0.3), float(0.7)), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  "step float equal to edge",
  add(multiply(step(float(0.5), float(0.5)), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  "step float greater than edge",
  "float",
  add(multiply(step(float(0.7), float(0.3)), float(0.25)), float(0.5)),
  0.5
);

vec2Scenario(
  "step vec2 vec2 a",
  add(
    multiply(
      step(vec2(float(0.3), float(0.5)), vec2(float(0.7), float(0.5))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.75, 0.75]
);

vec2Scenario(
  "step vec2 vec2 b",
  add(
    multiply(
      step(vec2(float(0.7), float(0.5)), vec2(float(0.3), float(0.5))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.5, 0.75]
);

vec2Scenario(
  "step float vec2 a",
  add(
    multiply(step(float(0.5), vec2(float(0.3), float(0.5))), float(0.25)),
    float(0.5)
  ),
  [0.5, 0.75]
);

vec2Scenario(
  "step float vec2 b",
  add(
    multiply(step(float(0.5), vec2(float(0.7), float(0.5))), float(0.25)),
    float(0.5)
  ),
  [0.75, 0.75]
);

vec3Scenario(
  "step vec3 vec3",
  add(
    multiply(
      step(
        vec3(float(0.3), float(0.5), float(0.7)),
        vec3(float(0.7), float(0.5), float(0.3))
      ),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.75, 0.75, 0.5]
);

vec3Scenario(
  "step vec3 vec3",
  add(
    multiply(
      step(float(0.5), vec3(float(0.7), float(0.5), float(0.3))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.75, 0.75, 0.5]
);

vec4Scenario(
  "step vec4 vec4",
  add(
    multiply(
      step(
        vec4(float(0.3), float(0.5), float(0.7), float(0.9)),
        vec4(float(0.7), float(0.5), float(0.3), float(0.2))
      ),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.75, 0.75, 0.5, 0.5]
);

vec4Scenario(
  "step vec4 vec4",
  add(
    multiply(
      step(float(0.5), vec4(float(0.7), float(0.5), float(0.3), float(0.2))),
      float(0.25)
    ),
    float(0.5)
  ),
  [0.75, 0.75, 0.5, 0.5]
);
