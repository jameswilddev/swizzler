import { float, vec2, vec3, vec4, add, faceforward } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "faceforward float positive",
  add(faceforward(float(0.16), float(-0.4), float(0.7)), float(0.5)),
  0.66
);

floatScenario(
  "faceforward float negative",
  add(faceforward(float(0.16), float(0.4), float(0.7)), float(0.5)),
  0.34
);

vec2Scenario(
  "faceforward vec2 positive",
  add(
    faceforward(
      vec2(float(0.16), float(-0.3)),
      vec2(float(-0.4), float(-0.5)),
      vec2(float(0.7), float(0.2))
    ),
    float(0.5)
  ),
  [0.66, 0.2]
);

vec2Scenario(
  "faceforward vec2 negative",
  add(
    faceforward(
      vec2(float(0.16), float(-0.3)),
      vec2(float(0.4), float(0.5)),
      vec2(float(0.7), float(0.2))
    ),
    float(0.5)
  ),
  [0.34, 0.8]
);

vec3Scenario(
  "faceforward vec3 positive",
  add(
    faceforward(
      vec3(float(0.16), float(-0.3), float(-0.2)),
      vec3(float(-0.4), float(-0.5), float(0.2)),
      vec3(float(0.7), float(0.2), float(0.3))
    ),
    float(0.5)
  ),
  [0.66, 0.2, 0.3]
);

vec3Scenario(
  "faceforward vec3 negative",
  add(
    faceforward(
      vec3(float(0.16), float(-0.3), float(-0.2)),
      vec3(float(0.4), float(0.5), float(-0.2)),
      vec3(float(0.7), float(0.2), float(0.3))
    ),
    float(0.5)
  ),
  [0.34, 0.8, 0.7]
);

vec4Scenario(
  "faceforward vec4 positive",
  add(
    faceforward(
      vec4(float(0.16), float(-0.3), float(-0.2), float(0.1)),
      vec4(float(-0.4), float(-0.5), float(0.2), float(-0.4)),
      vec4(float(0.7), float(0.2), float(0.3), float(0.7))
    ),
    float(0.5)
  ),
  [0.66, 0.2, 0.3, 0.6]
);

vec4Scenario(
  "faceforward vec4 negative",
  add(
    faceforward(
      vec4(float(0.16), float(-0.3), float(-0.2), float(0.1)),
      vec4(float(0.4), float(0.5), float(-0.2), float(0.4)),
      vec4(float(0.7), float(0.2), float(0.3), float(0.7))
    ),
    float(0.5)
  ),
  [0.34, 0.8, 0.7, 0.4]
);
