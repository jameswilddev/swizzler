import {
  add,
  float,
  vec2,
  vec3,
  vec4,
  mat2,
  mat3,
  mat4,
  int,
  ivec2,
  ivec3,
  ivec4,
  negate,
} from "../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
  mat2Scenario,
  mat3Scenario,
  mat4Scenario,
  intScenario,
  ivec2Scenario,
  ivec3Scenario,
  ivec4Scenario,
} from "../../unit";

floatScenario(
  "negate positive float",
  add(negate(float(0.3)), float(0.5)),
  0.2
);

floatScenario(
  "negate negative float",
  add(negate(float(-0.3)), float(0.5)),
  0.8
);

vec2Scenario(
  "negate vec2",
  add(negate(vec2(float(0.3), float(-0.1))), float(0.5)),
  [0.2, 0.6]
);

vec3Scenario(
  "negate vec3",
  add(negate(vec3(float(0.3), float(-0.1), float(0.2))), float(0.5)),
  [0.2, 0.6, 0.3]
);

vec4Scenario(
  "negate vec4",
  add(
    negate(vec4(float(0.3), float(-0.1), float(-0.2), float(0.4))),
    float(0.5)
  ),
  [0.2, 0.6, 0.7, 0.1]
);

mat2Scenario(
  "negate mat2",
  add(
    negate(
      mat2(float(0.122742), float(0.244741), float(-0.204337), float(0.144786))
    ),
    float(0.5)
  ),
  [0.377258, 0.255259, 0.704337, 0.355214]
);

mat3Scenario(
  "negate mat3",
  add(
    negate(
      mat3(
        float(0.122742),
        float(0.244741),
        float(-0.204337),
        float(0.144786),
        float(0.39316),
        float(0.280716),
        float(-0.284655),
        float(-0.332962),
        float(0.385265)
      )
    ),
    float(0.5)
  ),
  [
    0.377258,
    0.255259,
    0.704337,
    0.355214,
    0.10684,
    0.219284,
    0.784655,
    0.832962,
    0.114735,
  ]
);

mat4Scenario(
  "negate mat4",
  add(
    negate(
      mat4(
        float(0.122742),
        float(0.244741),
        float(-0.204337),
        float(0.144786),
        float(0.39316),
        float(0.280716),
        float(-0.284655),
        float(-0.332962),
        float(0.385265),
        float(0.231687),
        float(-0.194077),
        float(0.344387),
        float(0.37693),
        float(-0.422212),
        float(0.0182347),
        float(-0.0214072)
      )
    ),
    float(0.5)
  ),
  [
    0.377258,
    0.255259,
    0.704337,
    0.355214,
    0.10684,
    0.219284,
    0.784655,
    0.832962,
    0.114735,
    0.268313,
    0.694077,
    0.155613,
    0.12307,
    0.922212,
    0.4817653,
    0.5214072,
  ]
);

intScenario("negate int negative", add(int(128), negate(int(-27))), 155);

intScenario("negate int positive", add(int(128), negate(int(27))), 101);

ivec2Scenario(
  "negate ivec2",
  add(int(128), negate(ivec2(int(-27), int(104)))),
  [155, 24]
);

ivec3Scenario(
  "negate ivec3",
  add(int(128), negate(ivec3(int(-27), int(104), int(-66)))),
  [155, 24, 194]
);

ivec4Scenario(
  "negate ivec4",
  add(int(128), negate(ivec4(int(-27), int(104), int(-66), int(70)))),
  [155, 24, 194, 58]
);
