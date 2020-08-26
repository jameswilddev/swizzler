import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, multiply, reflect } from "../../..";

export const reflectScenarios: ReadonlyArray<Scenario> = [
  [
    "reflect float positive",
    "float",
    add(multiply(reflect(float(0.3), float(-1)), float(0.5)), float(0.5)),
    [0.35],
  ],
  [
    "reflect float negative",
    "float",
    add(multiply(reflect(float(-0.3), float(1)), float(0.5)), float(0.5)),
    [0.65],
  ],
  [
    "reflect vec2",
    "vec2",
    add(
      multiply(
        reflect(
          vec2(float(0.3), float(-0.7)),
          vec2(float(-0.8574929), float(0.51449573))
        ),
        float(0.5)
      ),
      float(0.5)
    ),
    [0.12058821, 0.46764705],
  ],
  [
    "reflect vec3",
    "vec3",
    add(
      multiply(
        reflect(
          vec3(float(0.3), float(-0.7), float(0.8)),
          vec3(float(-0.43919685), float(0.26351812), float(-0.85887384))
        ),
        float(0.5)
      ),
      float(0.5)
    ),
    [0.20934466, 0.41439322, 0.03827402],
  ],
  [
    "reflect vec4",
    "vec4",
    add(
      multiply(
        reflect(
          vec4(float(0.3), float(-0.7), float(0.8), float(-0.2)),
          vec4(
            float(-0.520379),
            float(0.3122274),
            float(0.7863505),
            float(-0.11563978)
          )
        ),
        float(0.5)
      ),
      float(0.5)
    ),
    [0.794, 0.0633458199207576, 0.681759839679662, 0.4320941413868353],
  ],
];
