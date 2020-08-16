import {
  bool,
  bvec2,
  bvec3,
  bvec4,
  float,
  vec2,
  vec3,
  vec4,
  conditional,
} from "../..";
import { Scenario } from "../../scenario/unit";

export const conditionalScenarios: ReadonlyArray<Scenario> = [
  [
    "conditional false float float",
    conditional(bool(false), float(48 / 255), float(76 / 255)),
    [76 / 255],
  ],
  [
    "conditional true float float",
    conditional(bool(true), float(48 / 255), float(76 / 255)),
    [48 / 255],
  ],
  [
    "conditional false vec2 vec2",
    conditional(
      bool(false),
      vec2(float(48 / 255), float(105 / 255)),
      vec2(float(148 / 255), float(76 / 255))
    ),
    [148 / 255, 76 / 255],
  ],
  [
    "conditional true vec2 vec2",
    conditional(
      bool(true),
      vec2(float(48 / 255), float(105 / 255)),
      vec2(float(148 / 255), float(76 / 255))
    ),
    [48 / 255, 105 / 255],
  ],
  [
    "conditional false vec3 vec3",
    conditional(
      bool(false),
      vec3(float(48 / 255), float(105 / 255), float(240 / 255)),
      vec3(float(148 / 255), float(76 / 255), float(5 / 255))
    ),
    [148 / 255, 76 / 255, 5 / 255],
  ],
  [
    "conditional true vec3 vec3",
    conditional(
      bool(true),
      vec3(float(48 / 255), float(105 / 255), float(240 / 255)),
      vec3(float(148 / 255), float(76 / 255), float(5 / 255))
    ),
    [48 / 255, 105 / 255, 240 / 255],
  ],
  [
    "conditional false vec4 vec4",
    conditional(
      bool(false),
      vec4(
        float(48 / 255),
        float(105 / 255),
        float(240 / 255),
        float(130 / 255)
      ),
      vec4(float(148 / 255), float(76 / 255), float(5 / 255), float(187 / 255))
    ),
    [148 / 255, 76 / 255, 5 / 255, 187 / 255],
  ],
  [
    "conditional true vec4 vec4",
    conditional(
      bool(true),
      vec4(
        float(48 / 255),
        float(105 / 255),
        float(240 / 255),
        float(130 / 255)
      ),
      vec4(float(148 / 255), float(76 / 255), float(5 / 255), float(187 / 255))
    ),
    [48 / 255, 105 / 255, 240 / 255, 130 / 255],
  ],
  [
    "conditional false false false",
    conditional(bool(false), bool(false), bool(false)),
    [false],
  ],
  [
    "conditional false false true",
    conditional(bool(false), bool(false), bool(true)),
    [true],
  ],
  [
    "conditional false true false",
    conditional(bool(false), bool(true), bool(false)),
    [false],
  ],
  [
    "conditional false true true",
    conditional(bool(false), bool(true), bool(true)),
    [true],
  ],
  [
    "conditional true false false",
    conditional(bool(true), bool(false), bool(false)),
    [false],
  ],
  [
    "conditional true false true",
    conditional(bool(true), bool(false), bool(true)),
    [false],
  ],
  [
    "conditional true true false",
    conditional(bool(true), bool(true), bool(false)),
    [true],
  ],
  [
    "conditional true true true",
    conditional(bool(true), bool(true), bool(true)),
    [true],
  ],
  [
    "conditional false bvec2 bvec2",
    conditional(
      bool(false),
      bvec2(bool(true), bool(false)),
      bvec2(bool(false), bool(true))
    ),
    [false, true],
  ],
  [
    "conditional true bvec2 bvec2",
    conditional(
      bool(true),
      bvec2(bool(true), bool(false)),
      bvec2(bool(false), bool(true))
    ),
    [true, false],
  ],
  [
    "conditional false bvec3 bvec3",
    conditional(
      bool(false),
      bvec3(bool(true), bool(true), bool(false)),
      bvec3(bool(false), bool(true), bool(false))
    ),
    [false, true, false],
  ],
  [
    "conditional true bvec3 bvec3",
    conditional(
      bool(true),
      bvec3(bool(true), bool(true), bool(false)),
      bvec3(bool(false), bool(true), bool(false))
    ),
    [true, true, false],
  ],
  [
    "conditional false bvec3 bvec3",
    conditional(
      bool(false),
      bvec4(bool(true), bool(true), bool(false), bool(true)),
      bvec4(bool(false), bool(true), bool(false), bool(true))
    ),
    [false, true, false, true],
  ],
  [
    "conditional true bvec3 bvec3",
    conditional(
      bool(true),
      bvec4(bool(true), bool(true), bool(false), bool(true)),
      bvec4(bool(false), bool(true), bool(false), bool(true))
    ),
    [true, true, false, true],
  ],
];
