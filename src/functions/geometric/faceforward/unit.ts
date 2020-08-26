import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, faceforward } from "../../..";

export const faceforwardScenarios: ReadonlyArray<Scenario> = [
  [
    "faceforward float positive",
    "float",
    add(faceforward(float(0.16), float(-0.4), float(0.7)), float(0.5)),
    [0.66],
  ],
  [
    "faceforward float negative",
    "float",
    add(faceforward(float(0.16), float(0.4), float(0.7)), float(0.5)),
    [0.34],
  ],
  [
    "faceforward vec2 positive",
    "vec2",
    add(
      faceforward(
        vec2(float(0.16), float(-0.3)),
        vec2(float(-0.4), float(-0.5)),
        vec2(float(0.7), float(0.2))
      ),
      float(0.5)
    ),
    [0.66, 0.2],
  ],
  [
    "faceforward vec2 negative",
    "vec2",
    add(
      faceforward(
        vec2(float(0.16), float(-0.3)),
        vec2(float(0.4), float(0.5)),
        vec2(float(0.7), float(0.2))
      ),
      float(0.5)
    ),
    [0.34, 0.8],
  ],
  [
    "faceforward vec3 positive",
    "vec3",
    add(
      faceforward(
        vec3(float(0.16), float(-0.3), float(-0.2)),
        vec3(float(-0.4), float(-0.5), float(0.2)),
        vec3(float(0.7), float(0.2), float(0.3))
      ),
      float(0.5)
    ),
    [0.66, 0.2, 0.3],
  ],
  [
    "faceforward vec3 negative",
    "vec3",
    add(
      faceforward(
        vec3(float(0.16), float(-0.3), float(-0.2)),
        vec3(float(0.4), float(0.5), float(-0.2)),
        vec3(float(0.7), float(0.2), float(0.3))
      ),
      float(0.5)
    ),
    [0.34, 0.8, 0.7],
  ],
  [
    "faceforward vec4 positive",
    "vec4",
    add(
      faceforward(
        vec4(float(0.16), float(-0.3), float(-0.2), float(0.1)),
        vec4(float(-0.4), float(-0.5), float(0.2), float(-0.4)),
        vec4(float(0.7), float(0.2), float(0.3), float(0.7))
      ),
      float(0.5)
    ),
    [0.66, 0.2, 0.3, 0.6],
  ],
  [
    "faceforward vec4 negative",
    "vec4",
    add(
      faceforward(
        vec4(float(0.16), float(-0.3), float(-0.2), float(0.1)),
        vec4(float(0.4), float(0.5), float(-0.2), float(0.4)),
        vec4(float(0.7), float(0.2), float(0.3), float(0.7))
      ),
      float(0.5)
    ),
    [0.34, 0.8, 0.7, 0.4],
  ],
];
