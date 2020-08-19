import { Scenario } from "../../../scenario/unit";
import { float, vec2, vec3, vec4, add, multiply, mod } from "../../..";

export const modScenarios: ReadonlyArray<Scenario> = [
  [
    "mod float float less than second negative repeat",
    add(multiply(mod(float(-6.5), float(3.2)), float(0.125)), float(0.5)),
    [0.8875],
  ],
  [
    "mod float float equal to second negative repeat",
    add(multiply(mod(float(-6.4), float(3.2)), float(0.125)), float(0.5)),
    [0.5],
  ],
  [
    "mod float float greater than second negative repeat",
    add(multiply(mod(float(-6.3), float(3.2)), float(0.125)), float(0.5)),
    [0.5125],
  ],
  [
    "mod float float less than first negative repeat",
    add(multiply(mod(float(-3.3), float(3.2)), float(0.125)), float(0.5)),
    [0.8875],
  ],
  [
    "mod float float equal to first negative repeat",
    add(multiply(mod(float(-3.2), float(3.2)), float(0.125)), float(0.5)),
    [0.5],
  ],
  [
    "mod float float greater than first negative repeat",
    add(multiply(mod(float(-3.1), float(3.2)), float(0.125)), float(0.5)),
    [0.5125],
  ],
  [
    "mod float float less than zero",
    add(multiply(mod(float(-0.1), float(3.2)), float(0.125)), float(0.5)),
    [0.8875],
  ],
  [
    "mod float float zero",
    add(multiply(mod(float(0), float(3.2)), float(0.125)), float(0.5)),
    [0.5],
  ],
  [
    "mod float float greater than zero",
    add(multiply(mod(float(0.1), float(3.2)), float(0.125)), float(0.5)),
    [0.5125],
  ],
  [
    "mod float float less than first positive repeat",
    add(multiply(mod(float(3.1), float(3.2)), float(0.125)), float(0.5)),
    [0.8875],
  ],
  [
    "mod float float equal to first positive repeat",
    add(multiply(mod(float(3.2), float(3.2)), float(0.125)), float(0.5)),
    [0.5],
  ],
  [
    "mod float float greater than first positive repeat",
    add(multiply(mod(float(3.3), float(3.2)), float(0.125)), float(0.5)),
    [0.5125],
  ],
  [
    "mod float float less than second positive repeat",
    add(multiply(mod(float(6.3), float(3.2)), float(0.125)), float(0.5)),
    [0.8875],
  ],
  [
    "mod float float equal to second positive repeat",
    add(multiply(mod(float(6.4), float(3.2)), float(0.125)), float(0.5)),
    [0.5],
  ],
  [
    "mod float float greater than second positive repeat",
    add(multiply(mod(float(6.5), float(3.2)), float(0.125)), float(0.5)),
    [0.5125],
  ],
  [
    "mod vec2 vec2 a",
    add(
      multiply(
        mod(vec2(float(-6.5), float(1.6)), vec2(float(3.2), float(0.8))),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5],
  ],
  [
    "mod vec2 vec2 b",
    add(
      multiply(
        mod(vec2(float(-6.3), float(-0.9)), vec2(float(3.2), float(0.8))),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.5125, 0.5875],
  ],
  [
    "mod vec2 vec2 c",
    add(
      multiply(
        mod(vec2(float(-3.2), float(-0.7)), vec2(float(3.2), float(0.8))),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.5, 0.5125],
  ],
  [
    "mod vec2 vec2 d",
    add(
      multiply(
        mod(vec2(float(-0.1), float(0)), vec2(float(3.2), float(0.8))),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5],
  ],
  [
    "mod vec2 vec2 e",
    add(
      multiply(
        mod(vec2(float(0.1), float(0.7)), vec2(float(3.2), float(0.8))),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.5125, 0.5875],
  ],
  [
    "mod vec2 vec2 f",
    add(
      multiply(
        mod(vec2(float(3.2), float(1.7)), vec2(float(3.2), float(0.8))),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.5, 0.5125],
  ],
  [
    "mod vec2 vec2 g",
    add(
      multiply(
        mod(vec2(float(6.3), float(1.6)), vec2(float(3.2), float(0.8))),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5],
  ],
  [
    "mod vec2 vec2 h",
    add(
      multiply(
        mod(vec2(float(6.5), float(2.3)), vec2(float(3.2), float(0.8))),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.5125, 0.5875],
  ],
  [
    "mod vec2 float a",
    add(
      multiply(mod(vec2(float(-6.5), float(-6.4)), float(3.2)), float(0.125)),
      float(0.5)
    ),
    [0.8875, 0.5],
  ],
  [
    "mod vec2 float b",
    add(
      multiply(mod(vec2(float(-6.3), float(-3.3)), float(3.2)), float(0.125)),
      float(0.5)
    ),
    [0.5125, 0.8875],
  ],
  [
    "mod vec2 float c",
    add(
      multiply(mod(vec2(float(-3.2), float(-3.1)), float(3.2)), float(0.125)),
      float(0.5)
    ),
    [0.5, 0.5125],
  ],
  [
    "mod vec2 float d",
    add(
      multiply(mod(vec2(float(-0.1), float(0)), float(3.2)), float(0.125)),
      float(0.5)
    ),
    [0.8875, 0.5],
  ],
  [
    "mod vec2 float e",
    add(
      multiply(mod(vec2(float(0.1), float(3.1)), float(3.2)), float(0.125)),
      float(0.5)
    ),
    [0.5125, 0.8875],
  ],
  [
    "mod vec2 float f",
    add(
      multiply(mod(vec2(float(3.2), float(3.3)), float(3.2)), float(0.125)),
      float(0.5)
    ),
    [0.5, 0.5125],
  ],
  [
    "mod vec2 float g",
    add(
      multiply(mod(vec2(float(6.3), float(6.4)), float(3.2)), float(0.125)),
      float(0.5)
    ),
    [0.8875, 0.5],
  ],
  [
    "mod vec2 float h",
    add(
      multiply(mod(vec2(float(6.5), float(9.5)), float(3.2)), float(0.125)),
      float(0.5)
    ),
    [0.5125, 0.8875],
  ],
  [
    "mod vec3 vec3 a",
    add(
      multiply(
        mod(
          vec3(float(-6.5), float(-1.6), float(-2.7)),
          vec3(float(3.2), float(0.8), float(1.4))
        ),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125],
  ],
  [
    "mod vec3 vec3 b",
    add(
      multiply(
        mod(
          vec3(float(-3.3), float(-1.6), float(-1.3)),
          vec3(float(3.2), float(0.8), float(1.4))
        ),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125],
  ],
  [
    "mod vec3 vec3 c",
    add(
      multiply(
        mod(
          vec3(float(-0.1), float(0), float(0.1)),
          vec3(float(3.2), float(0.8), float(1.4))
        ),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125],
  ],
  [
    "mod vec3 vec3 d",
    add(
      multiply(
        mod(
          vec3(float(3.1), float(0.7), float(1.5)),
          vec3(float(3.2), float(0.8), float(1.4))
        ),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5875, 0.5125],
  ],
  [
    "mod vec3 vec3 e",
    add(
      multiply(
        mod(
          vec3(float(6.3), float(1.6), float(2.9)),
          vec3(float(3.2), float(0.8), float(1.4))
        ),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125],
  ],
  [
    "mod vec3 float a",
    add(
      multiply(
        mod(vec3(float(-6.5), float(-6.4), float(-6.3)), float(3.2)),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125],
  ],
  [
    "mod vec3 float b",
    add(
      multiply(
        mod(vec3(float(-3.3), float(-3.2), float(-3.1)), float(3.2)),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125],
  ],
  [
    "mod vec3 float c",
    add(
      multiply(
        mod(vec3(float(-0.1), float(0), float(0.1)), float(3.2)),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125],
  ],
  [
    "mod vec3 float d",
    add(
      multiply(
        mod(vec3(float(3.1), float(3.2), float(3.3)), float(3.2)),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125],
  ],
  [
    "mod vec3 float e",
    add(
      multiply(
        mod(vec3(float(6.3), float(6.4), float(6.5)), float(3.2)),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125],
  ],
  [
    "mod vec4 vec4 a",
    add(
      multiply(
        mod(
          vec4(float(-6.5), float(-1.6), float(-2.7), float(-2.2)),
          vec4(float(3.2), float(0.8), float(1.4), float(2.1))
        ),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125, 0.75],
  ],
  [
    "mod vec4 vec4 b",
    add(
      multiply(
        mod(
          vec4(float(-3.2), float(-0.7), float(-0.1), float(0)),
          vec4(float(3.2), float(0.8), float(1.4), float(2.1))
        ),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.5, 0.5125, 0.6625, 0.5],
  ],
  [
    "mod vec4 vec4 c",
    add(
      multiply(
        mod(
          vec4(float(0.1), float(0.7), float(1.4), float(2)),
          vec4(float(3.2), float(0.8), float(1.4), float(2.1))
        ),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.5125, 0.5875, 0.5, 0.75],
  ],
  [
    "mod vec4 vec4 d",
    add(
      multiply(
        mod(
          vec4(float(6.3), float(1.6), float(2.9), float(4.1)),
          vec4(float(3.2), float(0.8), float(1.4), float(2.1))
        ),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125, 0.75],
  ],
  [
    "mod vec4 float a",
    add(
      multiply(
        mod(
          vec4(float(-6.5), float(-6.4), float(-6.3), float(-3.3)),
          float(3.2)
        ),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125, 0.8875],
  ],
  [
    "mod vec4 float b",
    add(
      multiply(
        mod(vec4(float(-3.2), float(-3.1), float(-0.1), float(0)), float(3.2)),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.5, 0.5125, 0.8875, 0.5],
  ],
  [
    "mod vec4 float c",
    add(
      multiply(
        mod(vec4(float(0.1), float(3.1), float(3.2), float(3.3)), float(3.2)),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.5125, 0.8875, 0.5, 0.5125],
  ],
  [
    "mod vec4 float d",
    add(
      multiply(
        mod(vec4(float(6.3), float(6.4), float(6.5), float(9.5)), float(3.2)),
        float(0.125)
      ),
      float(0.5)
    ),
    [0.8875, 0.5, 0.5125, 0.8875],
  ],
];
