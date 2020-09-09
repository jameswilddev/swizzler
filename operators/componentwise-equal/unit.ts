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
  componentwiseEqual,
} from "../../";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
} from "../../unit";

boolScenario(
  "componentwiseEqual float lesser greater",
  componentwiseEqual(float(2.1), float(2.3)),
  false
);

boolScenario(
  "componentwiseEqual float equal",
  componentwiseEqual(float(2.2), float(2.2)),
  true
);

boolScenario(
  "componentwiseEqual float greater lesser",
  componentwiseEqual(float(2.3), float(2.1)),
  false
);

bvec2Scenario(
  "componentwiseEqual vec2",
  componentwiseEqual(
    vec2(float(2.1), float(1.2)),
    vec2(float(2.3), float(1.2))
  ),
  [false, true]
);

bvec3Scenario(
  "componentwiseEqual vec3",
  componentwiseEqual(
    vec3(float(2.1), float(1.2), float(5.7)),
    vec3(float(2.3), float(1.2), float(5.4))
  ),
  [false, true, false]
);

bvec4Scenario(
  "componentwiseEqual vec4",
  componentwiseEqual(
    vec4(float(2.1), float(1.2), float(5.7), float(8.8)),
    vec4(float(2.3), float(1.2), float(5.4), float(8.8))
  ),
  [false, true, false, true]
);

boolScenario(
  "componentwiseEqual int lesser greater",
  componentwiseEqual(int(21), int(22)),
  false
);

boolScenario(
  "componentwiseEqual int equal",
  componentwiseEqual(int(22), int(22)),
  true
);

boolScenario(
  "componentwiseEqual int greater lesser",
  componentwiseEqual(int(22), int(21)),
  false
);

bvec2Scenario(
  "componentwiseEqual ivec2",
  componentwiseEqual(ivec2(int(21), int(12)), ivec2(int(22), int(12))),
  [false, true]
);

bvec3Scenario(
  "componentwiseEqual ivec3",
  componentwiseEqual(
    ivec3(int(21), int(12), int(57)),
    ivec3(int(22), int(12), int(56))
  ),
  [false, true, false]
);

bvec4Scenario(
  "componentwiseEqual ivec4",
  componentwiseEqual(
    ivec4(int(21), int(12), int(57), int(88)),
    ivec4(int(22), int(12), int(56), int(88))
  ),
  [false, true, false, true]
);

boolScenario(
  "componentwiseEqual bool false false",
  componentwiseEqual(bool(false), bool(false)),
  true
);

boolScenario(
  "componentwiseEqual bool false true",
  componentwiseEqual(bool(false), bool(true)),
  false
);

boolScenario(
  "componentwiseEqual bool true false",
  componentwiseEqual(bool(true), bool(false)),
  false
);

boolScenario(
  "componentwiseEqual bool true true",
  componentwiseEqual(bool(true), bool(true)),
  true
);

bvec2Scenario(
  "componentwiseEqual bvec2",
  componentwiseEqual(
    bvec2(bool(false), bool(true)),
    bvec2(bool(true), bool(true))
  ),
  [false, true]
);

bvec3Scenario(
  "componentwiseEqual bvec3",
  componentwiseEqual(
    bvec3(bool(false), bool(true), bool(true)),
    bvec3(bool(true), bool(true), bool(false))
  ),
  [false, true, false]
);

bvec4Scenario(
  "componentwiseEqual bvec4",
  componentwiseEqual(
    bvec4(bool(false), bool(true), bool(true), bool(false)),
    bvec4(bool(true), bool(true), bool(false), bool(false))
  ),
  [false, true, false, true]
);
