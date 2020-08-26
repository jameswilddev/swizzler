import { float, vec2, vec3, vec4, add } from "../..";
import { Scenario } from "../../scenario/unit";

export const addScenarios: ReadonlyArray<Scenario> = [
  [
    "add float float",
    "float",
    add(float(75 / 255), float(102 / 255)),
    [177 / 255],
  ],
  [
    "add vec2 float",
    "vec2",
    add(vec2(float(75 / 255), float(89 / 255)), float(102 / 255)),
    [177 / 255, 191 / 255],
  ],
  [
    "add vec3 float",
    "vec3",
    add(
      vec3(float(75 / 255), float(89 / 255), float(14 / 255)),
      float(102 / 255)
    ),
    [177 / 255, 191 / 255, 116 / 255],
  ],
  [
    "add vec4 float",
    "vec4",
    add(
      vec4(float(75 / 255), float(89 / 255), float(14 / 255), float(55 / 255)),
      float(102 / 255)
    ),
    [177 / 255, 191 / 255, 116 / 255, 157 / 255],
  ],
  [
    "add float vec2",
    "vec2",
    add(float(102 / 255), vec2(float(75 / 255), float(89 / 255))),
    [177 / 255, 191 / 255],
  ],
  [
    "add float vec3",
    "vec3",
    add(
      float(102 / 255),
      vec3(float(75 / 255), float(89 / 255), float(14 / 255))
    ),
    [177 / 255, 191 / 255, 116 / 255],
  ],
  [
    "add float vec4",
    "vec4",
    add(
      float(102 / 255),
      vec4(float(75 / 255), float(89 / 255), float(14 / 255), float(55 / 255))
    ),
    [177 / 255, 191 / 255, 116 / 255, 157 / 255],
  ],
  [
    "add vec2 vec2",
    "vec2",
    add(
      vec2(float(75 / 255), float(89 / 255)),
      vec2(float(102 / 255), float(88 / 255))
    ),
    [177 / 255, 177 / 255],
  ],
  [
    "add vec3 vec3",
    "vec3",
    add(
      vec3(float(75 / 255), float(89 / 255), float(14 / 255)),
      vec3(float(102 / 255), float(88 / 255), float(80 / 255))
    ),
    [177 / 255, 177 / 255, 94 / 255],
  ],
  [
    "add vec4 vec4",
    "vec4",
    add(
      vec4(float(75 / 255), float(89 / 255), float(14 / 255), float(55 / 255)),
      vec4(float(102 / 255), float(88 / 255), float(80 / 255), float(99 / 255))
    ),
    [177 / 255, 177 / 255, 94 / 255, 154 / 255],
  ],
];
