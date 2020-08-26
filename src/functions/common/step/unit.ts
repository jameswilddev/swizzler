import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, multiply, step } from "../../..";

export const stepScenarios: ReadonlyArray<Scenario> = [
  [
    "step float less than edge",
    "float",
    add(multiply(step(float(0.3), float(0.7)), float(0.25)), float(0.5)),
    [0.75],
  ],
  [
    "step float equal to edge",
    "float",
    add(multiply(step(float(0.5), float(0.5)), float(0.25)), float(0.5)),
    [0.75],
  ],
  [
    "step float greater than edge",
    "float",
    add(multiply(step(float(0.7), float(0.3)), float(0.25)), float(0.5)),
    [0.5],
  ],
  [
    "step vec2 vec2 a",
    "vec2",
    add(
      multiply(
        step(vec2(float(0.3), float(0.5)), vec2(float(0.7), float(0.5))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.75, 0.75],
  ],
  [
    "step vec2 vec2 b",
    "vec2",
    add(
      multiply(
        step(vec2(float(0.7), float(0.5)), vec2(float(0.3), float(0.5))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.5, 0.75],
  ],
  [
    "step float vec2 a",
    "vec2",
    add(
      multiply(step(float(0.5), vec2(float(0.3), float(0.5))), float(0.25)),
      float(0.5)
    ),
    [0.5, 0.75],
  ],
  [
    "step float vec2 b",
    "vec2",
    add(
      multiply(step(float(0.5), vec2(float(0.7), float(0.5))), float(0.25)),
      float(0.5)
    ),
    [0.75, 0.75],
  ],
  [
    "step vec3 vec3",
    "vec3",
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
    [0.75, 0.75, 0.5],
  ],
  [
    "step vec3 vec3",
    "vec3",
    add(
      multiply(
        step(float(0.5), vec3(float(0.7), float(0.5), float(0.3))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.75, 0.75, 0.5],
  ],
  [
    "step vec4 vec4",
    "vec4",
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
    [0.75, 0.75, 0.5, 0.5],
  ],
  [
    "step vec4 vec4",
    "vec4",
    add(
      multiply(
        step(float(0.5), vec4(float(0.7), float(0.5), float(0.3), float(0.2))),
        float(0.25)
      ),
      float(0.5)
    ),
    [0.75, 0.75, 0.5, 0.5],
  ],
];
