import { float, vec2, vec3, vec4, add } from "../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../unit";

floatScenario(
  "add float float",
  add(float(75 / 255), float(102 / 255)),
  177 / 255
);

vec2Scenario(
  "add vec2 float",
  add(vec2(float(75 / 255), float(89 / 255)), float(102 / 255)),
  [177 / 255, 191 / 255]
);

vec3Scenario(
  "add vec3 float",
  add(
    vec3(float(75 / 255), float(89 / 255), float(14 / 255)),
    float(102 / 255)
  ),
  [177 / 255, 191 / 255, 116 / 255]
);

vec4Scenario(
  "add vec4 float",
  add(
    vec4(float(75 / 255), float(89 / 255), float(14 / 255), float(55 / 255)),
    float(102 / 255)
  ),
  [177 / 255, 191 / 255, 116 / 255, 157 / 255]
);

vec2Scenario(
  "add float vec2",
  add(float(102 / 255), vec2(float(75 / 255), float(89 / 255))),
  [177 / 255, 191 / 255]
);

vec3Scenario(
  "add float vec3",
  add(
    float(102 / 255),
    vec3(float(75 / 255), float(89 / 255), float(14 / 255))
  ),
  [177 / 255, 191 / 255, 116 / 255]
);

vec4Scenario(
  "add float vec4",
  add(
    float(102 / 255),
    vec4(float(75 / 255), float(89 / 255), float(14 / 255), float(55 / 255))
  ),
  [177 / 255, 191 / 255, 116 / 255, 157 / 255]
);

vec2Scenario(
  "add vec2 vec2",
  add(
    vec2(float(75 / 255), float(89 / 255)),
    vec2(float(102 / 255), float(88 / 255))
  ),
  [177 / 255, 177 / 255]
);

vec3Scenario(
  "add vec3 vec3",
  add(
    vec3(float(75 / 255), float(89 / 255), float(14 / 255)),
    vec3(float(102 / 255), float(88 / 255), float(80 / 255))
  ),
  [177 / 255, 177 / 255, 94 / 255]
);

vec4Scenario(
  "add vec4 vec4",
  add(
    vec4(float(75 / 255), float(89 / 255), float(14 / 255), float(55 / 255)),
    vec4(float(102 / 255), float(88 / 255), float(80 / 255), float(99 / 255))
  ),
  [177 / 255, 177 / 255, 94 / 255, 154 / 255]
);
