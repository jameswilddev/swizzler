import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, multiply, max } from "../../..";

export const maxScenarios: ReadonlyArray<Scenario> = [
  [
    "max float first greater",
    "float",
    add(multiply(max(float(0.7), float(0.3)), float(0.25)), float(0.5)),
    [0.675],
  ],
  [
    "max float equal",
    "float",
    add(multiply(max(float(0.5), float(0.5)), float(0.25)), float(0.5)),
    [0.625],
  ],
  [
    "max float second greater",
    "float",
    add(multiply(max(float(0.3), float(0.7)), float(0.25)), float(0.5)),
    [0.675],
  ],
  [
    "max vec2 vec2 a",
    "vec2",
    add(
      multiply(
        max(vec2(float(0.3), float(0.5)), vec2(float(0.7), float(0.5))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.675, 0.625],
  ],
  [
    "max vec2 vec2 b",
    "vec2",
    add(
      multiply(
        max(vec2(float(0.7), float(0.5)), vec2(float(0.3), float(0.5))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.675, 0.625],
  ],
  [
    "max vec2 float a",
    "vec2",
    add(
      multiply(max(vec2(float(0.3), float(0.7)), float(0.5)), float(0.25)),
      float(0.5)
    ),
    [0.625, 0.675],
  ],
  [
    "max vec2 float b",
    "vec2",
    add(
      multiply(max(vec2(float(0.7), float(0.5)), float(0.5)), float(0.25)),
      float(0.5)
    ),
    [0.675, 0.625],
  ],
  [
    "max vec3 vec3",
    "vec3",
    add(
      multiply(
        max(
          vec3(float(0.7), float(0.5), float(0.4)),
          vec3(float(0.3), float(0.5), float(0.6))
        ),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.675, 0.625, 0.65],
  ],
  [
    "max vec3 float",
    "vec3",
    add(
      multiply(
        max(vec3(float(0.7), float(0.5), float(0.4)), float(0.5)),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.675, 0.625, 0.625],
  ],
  [
    "max vec4 vec4",
    "vec4",
    add(
      multiply(
        max(
          vec4(float(0.7), float(0.5), float(0.4), float(0.8)),
          vec4(float(0.3), float(0.5), float(0.6), float(0.2))
        ),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.675, 0.625, 0.65, 0.7],
  ],
  [
    "max vec4 float",
    "vec4",
    add(
      multiply(
        max(vec4(float(0.7), float(0.5), float(0.4), float(0.8)), float(0.5)),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.675, 0.625, 0.625, 0.7],
  ],
];
