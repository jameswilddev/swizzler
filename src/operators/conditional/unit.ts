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
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../unit";

floatScenario(
  "conditional false float float",
  conditional(bool(false), float(48 / 255), float(76 / 255)),
  76 / 255
);
floatScenario(
  "conditional true float float",
  conditional(bool(true), float(48 / 255), float(76 / 255)),
  48 / 255
);
vec2Scenario(
  "conditional false vec2 vec2",
  conditional(
    bool(false),
    vec2(float(48 / 255), float(105 / 255)),
    vec2(float(148 / 255), float(76 / 255))
  ),
  [148 / 255, 76 / 255]
);
vec2Scenario(
  "conditional true vec2 vec2",
  conditional(
    bool(true),
    vec2(float(48 / 255), float(105 / 255)),
    vec2(float(148 / 255), float(76 / 255))
  ),
  [48 / 255, 105 / 255]
);
vec3Scenario(
  "conditional false vec3 vec3",
  conditional(
    bool(false),
    vec3(float(48 / 255), float(105 / 255), float(240 / 255)),
    vec3(float(148 / 255), float(76 / 255), float(5 / 255))
  ),
  [148 / 255, 76 / 255, 5 / 255]
);
vec3Scenario(
  "conditional true vec3 vec3",
  conditional(
    bool(true),
    vec3(float(48 / 255), float(105 / 255), float(240 / 255)),
    vec3(float(148 / 255), float(76 / 255), float(5 / 255))
  ),
  [48 / 255, 105 / 255, 240 / 255]
);
vec4Scenario(
  "conditional false vec4 vec4",
  conditional(
    bool(false),
    vec4(float(48 / 255), float(105 / 255), float(240 / 255), float(130 / 255)),
    vec4(float(148 / 255), float(76 / 255), float(5 / 255), float(187 / 255))
  ),
  [148 / 255, 76 / 255, 5 / 255, 187 / 255]
);
vec4Scenario(
  "conditional true vec4 vec4",
  conditional(
    bool(true),
    vec4(float(48 / 255), float(105 / 255), float(240 / 255), float(130 / 255)),
    vec4(float(148 / 255), float(76 / 255), float(5 / 255), float(187 / 255))
  ),
  [48 / 255, 105 / 255, 240 / 255, 130 / 255]
);
boolScenario(
  "conditional false false false",
  conditional(bool(false), bool(false), bool(false)),
  false
);

boolScenario(
  "conditional false false true",
  conditional(bool(false), bool(false), bool(true)),
  true
);

boolScenario(
  "conditional false true false",
  conditional(bool(false), bool(true), bool(false)),
  false
);

boolScenario(
  "conditional false true true",
  conditional(bool(false), bool(true), bool(true)),
  true
);

boolScenario(
  "conditional true false false",
  conditional(bool(true), bool(false), bool(false)),
  false
);

boolScenario(
  "conditional true false true",
  conditional(bool(true), bool(false), bool(true)),
  false
);

boolScenario(
  "conditional true true false",
  conditional(bool(true), bool(true), bool(false)),
  true
);

boolScenario(
  "conditional true true true",
  conditional(bool(true), bool(true), bool(true)),
  true
);

bvec2Scenario(
  "conditional false bvec2 bvec2",
  conditional(
    bool(false),
    bvec2(bool(true), bool(false)),
    bvec2(bool(false), bool(true))
  ),
  [false, true]
);

bvec2Scenario(
  "conditional true bvec2 bvec2",
  conditional(
    bool(true),
    bvec2(bool(true), bool(false)),
    bvec2(bool(false), bool(true))
  ),
  [true, false]
);

bvec3Scenario(
  "conditional false bvec3 bvec3",
  conditional(
    bool(false),
    bvec3(bool(true), bool(true), bool(false)),
    bvec3(bool(false), bool(true), bool(false))
  ),
  [false, true, false]
);

bvec3Scenario(
  "conditional true bvec3 bvec3",
  conditional(
    bool(true),
    bvec3(bool(true), bool(true), bool(false)),
    bvec3(bool(false), bool(true), bool(false))
  ),
  [true, true, false]
);

bvec4Scenario(
  "conditional false bvec4 bvec4",
  conditional(
    bool(false),
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(false), bool(true), bool(false), bool(true))
  ),
  [false, true, false, true]
);

bvec4Scenario(
  "conditional true bvec4 bvec4",
  conditional(
    bool(true),
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(false), bool(true), bool(false), bool(true))
  ),
  [true, true, false, true]
);
