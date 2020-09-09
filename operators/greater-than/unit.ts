import {
  float,
  vec2,
  vec3,
  vec4,
  int,
  ivec2,
  ivec3,
  ivec4,
  greaterThan,
} from "../..";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
} from "../../unit";

boolScenario(
  "greaterThan float lesser greater",
  greaterThan(float(2.1), float(2.3)),
  false
);

boolScenario(
  "greaterThan float equal",
  greaterThan(float(2.2), float(2.2)),
  false
);

boolScenario(
  "greaterThan float greater lesser",
  greaterThan(float(2.3), float(2.1)),
  true
);

bvec2Scenario(
  "greaterThan vec2 a",
  greaterThan(vec2(float(2.1), float(1.1)), vec2(float(2.3), float(1.1))),
  [false, false]
);

bvec2Scenario(
  "greaterThan vec2 b",
  greaterThan(vec2(float(2.3), float(1.1)), vec2(float(2.1), float(1.1))),
  [true, false]
);

bvec3Scenario(
  "greaterThan vec3",
  greaterThan(
    vec3(float(2.1), float(1.1), float(5.4)),
    vec3(float(2.3), float(1.1), float(5.2))
  ),
  [false, false, true]
);

bvec4Scenario(
  "greaterThan vec4",
  greaterThan(
    vec4(float(2.1), float(1.1), float(6.1), float(5.4)),
    vec4(float(2.3), float(1.1), float(6.2), float(5.2))
  ),
  [false, false, false, true]
);

boolScenario(
  "greaterThan float lesser greater",
  greaterThan(int(21), int(22)),
  false
);

boolScenario("greaterThan int equal", greaterThan(int(22), int(22)), false);

boolScenario(
  "greaterThan int greater lesser",
  greaterThan(int(23), int(22)),
  true
);

bvec2Scenario(
  "greaterThan ivec2 a",
  greaterThan(ivec2(int(21), int(11)), ivec2(int(22), int(11))),
  [false, false]
);

bvec2Scenario(
  "greaterThan ivec2 b",
  greaterThan(ivec2(int(23), int(11)), ivec2(int(22), int(11))),
  [true, false]
);

bvec3Scenario(
  "greaterThan ivec3",
  greaterThan(
    ivec3(int(21), int(11), int(54)),
    ivec3(int(22), int(11), int(53))
  ),
  [false, false, true]
);

bvec4Scenario(
  "greaterThan ivec4",
  greaterThan(
    ivec4(int(21), int(11), int(61), int(54)),
    ivec4(int(22), int(11), int(62), int(52))
  ),
  [false, false, false, true]
);
