import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, multiply, min } from "../../..";

export const minScenarios: ReadonlyArray<Scenario> = [
  [
    "min float first greater",
    add(multiply(min(float(0.7), float(0.3)), float(0.25)), float(0.5)),
    [0.575],
  ],
  [
    "min float equal",
    add(multiply(min(float(0.5), float(0.5)), float(0.25)), float(0.5)),
    [0.625],
  ],
  [
    "min float second greater",
    add(multiply(min(float(0.3), float(0.7)), float(0.25)), float(0.5)),
    [0.575],
  ],
  [
    "min vec2 vec2 a",
    add(
      multiply(
        min(vec2(float(0.3), float(0.5)), vec2(float(0.7), float(0.5))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.575, 0.625],
  ],
  [
    "min vec2 vec2 b",
    add(
      multiply(
        min(vec2(float(0.7), float(0.5)), vec2(float(0.3), float(0.5))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.575, 0.625],
  ],
  [
    "min vec2 float a",
    add(
      multiply(min(vec2(float(0.3), float(0.7)), float(0.5)), float(0.25)),
      float(0.5)
    ),
    [0.575, 0.625],
  ],
  [
    "min vec2 float b",
    add(
      multiply(min(vec2(float(0.7), float(0.5)), float(0.5)), float(0.25)),
      float(0.5)
    ),
    [0.625, 0.625],
  ],
  [
    "min vec3 vec3",
    add(
      multiply(
        min(
          vec3(float(0.7), float(0.5), float(0.4)),
          vec3(float(0.3), float(0.5), float(0.6))
        ),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.575, 0.625, 0.6],
  ],
  [
    "min vec3 float",
    add(
      multiply(
        min(vec3(float(0.7), float(0.5), float(0.4)), float(0.5)),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.625, 0.625, 0.6],
  ],
  [
    "min vec4 vec4",
    add(
      multiply(
        min(
          vec4(float(0.7), float(0.5), float(0.4), float(0.8)),
          vec4(float(0.3), float(0.5), float(0.6), float(0.2))
        ),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.575, 0.625, 0.6, 0.55],
  ],
  [
    "min vec4 float",
    add(
      multiply(
        min(vec4(float(0.7), float(0.5), float(0.4), float(0.8)), float(0.5)),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.625, 0.625, 0.6, 0.625],
  ],
];
