import {
  float,
  vec2,
  vec3,
  vec4,
  int,
  ivec2,
  ivec3,
  ivec4,
  greaterThanEqual,
} from "../..";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
} from "../../unit";

boolScenario(
  "greaterThanEqual float lesser greater",
  greaterThanEqual(float(2.1), float(2.3)),
  false
);

boolScenario(
  "greaterThanEqual float equal",
  greaterThanEqual(float(2.2), float(2.2)),
  true
);

boolScenario(
  "greaterThanEqual float greater lesser",
  greaterThanEqual(float(2.3), float(2.1)),
  true
);

bvec2Scenario(
  "greaterThanEqual vec2 a",
  greaterThanEqual(vec2(float(2.1), float(1.1)), vec2(float(2.3), float(1.1))),
  [false, true]
);

bvec2Scenario(
  "greaterThanEqual vec2 b",
  greaterThanEqual(vec2(float(2.3), float(1.1)), vec2(float(2.1), float(1.1))),
  [true, true]
);

bvec3Scenario(
  "greaterThanEqual vec3",
  greaterThanEqual(
    vec3(float(2.1), float(1.1), float(5.4)),
    vec3(float(2.3), float(1.1), float(5.2))
  ),
  [false, true, true]
);

bvec4Scenario(
  "greaterThanEqual vec4",
  greaterThanEqual(
    vec4(float(2.1), float(1.1), float(6.1), float(5.4)),
    vec4(float(2.3), float(1.1), float(6.2), float(5.2))
  ),
  [false, true, false, true]
);

boolScenario(
  "greaterThanEqual float lesser greater",
  greaterThanEqual(int(21), int(22)),
  false
);

boolScenario(
  "greaterThanEqual int equal",
  greaterThanEqual(int(22), int(22)),
  true
);

boolScenario(
  "greaterThanEqual int greater lesser",
  greaterThanEqual(int(23), int(22)),
  true
);

bvec2Scenario(
  "greaterThanEqual ivec2 a",
  greaterThanEqual(ivec2(int(21), int(11)), ivec2(int(22), int(11))),
  [false, true]
);

bvec2Scenario(
  "greaterThanEqual ivec2 b",
  greaterThanEqual(ivec2(int(23), int(11)), ivec2(int(22), int(11))),
  [true, true]
);

bvec3Scenario(
  "greaterThanEqual ivec3",
  greaterThanEqual(
    ivec3(int(21), int(11), int(54)),
    ivec3(int(22), int(11), int(53))
  ),
  [false, true, true]
);

bvec4Scenario(
  "greaterThanEqual ivec4",
  greaterThanEqual(
    ivec4(int(21), int(11), int(61), int(54)),
    ivec4(int(22), int(11), int(62), int(52))
  ),
  [false, true, false, true]
);
