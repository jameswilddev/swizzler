import {
  float,
  vec2,
  vec3,
  vec4,
  int,
  ivec2,
  ivec3,
  ivec4,
  bool,
  bvec2,
  bvec3,
  bvec4,
  componentwiseNotEqual,
} from "../..";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
} from "../../unit";

boolScenario(
  "componentwiseNotEqual float lesser greater",
  componentwiseNotEqual(float(2.1), float(2.3)),
  true
);

boolScenario(
  "componentwiseNotEqual float equal",
  componentwiseNotEqual(float(2.2), float(2.2)),
  false
);

boolScenario(
  "componentwiseNotEqual float greater lesser",
  componentwiseNotEqual(float(2.3), float(2.1)),
  true
);

bvec2Scenario(
  "componentwiseNotEqual vec2",
  componentwiseNotEqual(
    vec2(float(2.1), float(1.2)),
    vec2(float(2.3), float(1.2))
  ),
  [true, false]
);

bvec3Scenario(
  "componentwiseNotEqual vec3",
  componentwiseNotEqual(
    vec3(float(2.1), float(1.2), float(5.7)),
    vec3(float(2.3), float(1.2), float(5.4))
  ),
  [true, false, true]
);

bvec4Scenario(
  "componentwiseNotEqual vec4",
  componentwiseNotEqual(
    vec4(float(2.1), float(1.2), float(5.7), float(8.8)),
    vec4(float(2.3), float(1.2), float(5.4), float(8.8))
  ),
  [true, false, true, false]
);

boolScenario(
  "componentwiseNotEqual int lesser greater",
  componentwiseNotEqual(int(21), int(22)),
  true
);

boolScenario(
  "componentwiseNotEqual int equal",
  componentwiseNotEqual(int(22), int(22)),
  false
);

boolScenario(
  "componentwiseNotEqual int greater lesser",
  componentwiseNotEqual(int(22), int(21)),
  true
);

bvec2Scenario(
  "componentwiseNotEqual ivec2",
  componentwiseNotEqual(ivec2(int(21), int(12)), ivec2(int(22), int(12))),
  [true, false]
);

bvec3Scenario(
  "componentwiseNotEqual ivec3",
  componentwiseNotEqual(
    ivec3(int(21), int(12), int(57)),
    ivec3(int(22), int(12), int(56))
  ),
  [true, false, true]
);

bvec4Scenario(
  "componentwiseNotEqual ivec4",
  componentwiseNotEqual(
    ivec4(int(21), int(12), int(57), int(88)),
    ivec4(int(22), int(12), int(56), int(88))
  ),
  [true, false, true, false]
);

boolScenario(
  "componentwiseNotEqual bool true true",
  componentwiseNotEqual(bool(false), bool(false)),
  false
);

boolScenario(
  "componentwiseNotEqual bool true false",
  componentwiseNotEqual(bool(false), bool(true)),
  true
);

boolScenario(
  "componentwiseNotEqual bool false true",
  componentwiseNotEqual(bool(true), bool(false)),
  true
);

boolScenario(
  "componentwiseNotEqual bool false false",
  componentwiseNotEqual(bool(true), bool(true)),
  false
);

bvec2Scenario(
  "componentwiseNotEqual bvec2",
  componentwiseNotEqual(
    bvec2(bool(false), bool(true)),
    bvec2(bool(true), bool(true))
  ),
  [true, false]
);

bvec3Scenario(
  "componentwiseNotEqual bvec3",
  componentwiseNotEqual(
    bvec3(bool(false), bool(true), bool(true)),
    bvec3(bool(true), bool(true), bool(false))
  ),
  [true, false, true]
);

bvec4Scenario(
  "componentwiseNotEqual bvec4",
  componentwiseNotEqual(
    bvec4(bool(false), bool(true), bool(true), bool(false)),
    bvec4(bool(true), bool(true), bool(false), bool(false))
  ),
  [true, false, true, false]
);
