import {
  float,
  vec2,
  vec3,
  vec4,
  int,
  ivec2,
  ivec3,
  ivec4,
  lessThan,
} from "../../";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
} from "../../unit";

boolScenario(
  "lessThan float lesser greater",
  lessThan(float(2.1), float(2.3)),
  true
);

boolScenario("lessThan float equal", lessThan(float(2.2), float(2.2)), false);

boolScenario(
  "lessThan float greater lesser",
  lessThan(float(2.3), float(2.1)),
  false
);

bvec2Scenario(
  "lessThan vec2 a",
  lessThan(vec2(float(2.1), float(1.1)), vec2(float(2.3), float(1.1))),
  [true, false]
);

bvec2Scenario(
  "lessThan vec2 b",
  lessThan(vec2(float(2.3), float(1.1)), vec2(float(2.1), float(1.1))),
  [false, false]
);

bvec3Scenario(
  "lessThan vec3",
  lessThan(
    vec3(float(2.1), float(1.1), float(5.4)),
    vec3(float(2.3), float(1.1), float(5.2))
  ),
  [true, false, false]
);

bvec4Scenario(
  "lessThan vec4",
  lessThan(
    vec4(float(2.1), float(1.1), float(6.1), float(5.4)),
    vec4(float(2.3), float(1.1), float(6.2), float(5.2))
  ),
  [true, false, true, false]
);

boolScenario("lessThan float lesser greater", lessThan(int(21), int(22)), true);

boolScenario("lessThan int equal", lessThan(int(22), int(22)), false);

boolScenario("lessThan int greater lesser", lessThan(int(23), int(22)), false);

bvec2Scenario(
  "lessThan ivec2 a",
  lessThan(ivec2(int(21), int(11)), ivec2(int(22), int(11))),
  [true, false]
);

bvec2Scenario(
  "lessThan ivec2 b",
  lessThan(ivec2(int(23), int(11)), ivec2(int(22), int(11))),
  [false, false]
);

bvec3Scenario(
  "lessThan ivec3",
  lessThan(ivec3(int(21), int(11), int(54)), ivec3(int(22), int(11), int(53))),
  [true, false, false]
);

bvec4Scenario(
  "lessThan ivec4",
  lessThan(
    ivec4(int(21), int(11), int(61), int(54)),
    ivec4(int(22), int(11), int(62), int(52))
  ),
  [true, false, true, false]
);
