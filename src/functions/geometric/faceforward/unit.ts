import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, faceforward } from "../../..";

export const faceforwardScenarios: ReadonlyArray<Scenario> = [
  [
    "faceforward float positive",
    add(faceforward(float(0.16), float(-0.4), float(0.7)), float(0.5)),
    [0.66],
  ],
  [
    "faceforward float negative",
    add(faceforward(float(0.16), float(0.4), float(0.7)), float(0.5)),
    [0.34],
  ],
  [
    "faceforward vec2 positive",
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
