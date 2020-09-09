import {
  float,
  vec2,
  vec3,
  vec4,
  int,
  ivec2,
  ivec3,
  ivec4,
  lessThanEqual,
} from "../..";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
} from "../../unit";

boolScenario(
  "lessThanEqual float lesser greater",
  lessThanEqual(float(2.1), float(2.3)),
  true
);

boolScenario(
  "lessThanEqual float equal",
  lessThanEqual(float(2.2), float(2.2)),
  true
);

boolScenario(
  "lessThanEqual float greater lesser",
  lessThanEqual(float(2.3), float(2.1)),
  false
);

bvec2Scenario(
  "lessThanEqual vec2 a",
  lessThanEqual(vec2(float(2.1), float(1.1)), vec2(float(2.3), float(1.1))),
  [true, true]
);

bvec2Scenario(
  "lessThanEqual vec2 b",
  lessThanEqual(vec2(float(2.3), float(1.1)), vec2(float(2.1), float(1.1))),
  [false, true]
);

bvec3Scenario(
  "lessThanEqual vec3",
  lessThanEqual(
    vec3(float(2.1), float(1.1), float(5.4)),
    vec3(float(2.3), float(1.1), float(5.2))
  ),
  [true, true, false]
);

bvec4Scenario(
  "lessThanEqual vec4",
  lessThanEqual(
    vec4(float(2.1), float(1.1), float(6.1), float(5.4)),
    vec4(float(2.3), float(1.1), float(6.2), float(5.2))
  ),
  [true, true, true, false]
);

boolScenario(
  "lessThanEqual float lesser greater",
  lessThanEqual(int(21), int(22)),
  true
);

boolScenario("lessThanEqual int equal", lessThanEqual(int(22), int(22)), true);

boolScenario(
  "lessThanEqual int greater lesser",
  lessThanEqual(int(23), int(22)),
  false
);

bvec2Scenario(
  "lessThanEqual ivec2 a",
  lessThanEqual(ivec2(int(21), int(11)), ivec2(int(22), int(11))),
  [true, true]
);

bvec2Scenario(
  "lessThanEqual ivec2 b",
  lessThanEqual(ivec2(int(23), int(11)), ivec2(int(22), int(11))),
  [false, true]
);

bvec3Scenario(
  "lessThanEqual ivec3",
  lessThanEqual(
    ivec3(int(21), int(11), int(54)),
    ivec3(int(22), int(11), int(53))
  ),
  [true, true, false]
);

bvec4Scenario(
  "lessThanEqual ivec4",
  lessThanEqual(
    ivec4(int(21), int(11), int(61), int(54)),
    ivec4(int(22), int(11), int(62), int(52))
  ),
  [true, true, true, false]
);
