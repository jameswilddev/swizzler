import {
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
  bool,
  bvec2,
  bvec3,
  bvec4,
  notEqual,
} from "../../";
import { boolScenario } from "../../unit";

boolScenario("notEqual float true", notEqual(float(2.3), float(2.3)), false);

boolScenario("notEqual float false", notEqual(float(2.3), float(2.1)), true);

boolScenario(
  "notEqual vec2 true true",
  notEqual(vec2(float(2.3), float(4.7)), vec2(float(2.3), float(4.7))),
  false
);

boolScenario(
  "notEqual vec2 false true",
  notEqual(vec2(float(2.3), float(4.7)), vec2(float(2.1), float(4.7))),
  true
);

boolScenario(
  "notEqual vec2 true false",
  notEqual(vec2(float(2.3), float(4.5)), vec2(float(2.3), float(4.1))),
  true
);

boolScenario(
  "notEqual vec3 true true true",
  notEqual(
    vec3(float(2.3), float(4.7), float(6.6)),
    vec3(float(2.3), float(4.7), float(6.6))
  ),
  false
);

boolScenario(
  "notEqual vec3 false true true",
  notEqual(
    vec3(float(2.3), float(4.7), float(6.6)),
    vec3(float(2.1), float(4.7), float(6.6))
  ),
  true
);

boolScenario(
  "notEqual vec3 true false true",
  notEqual(
    vec3(float(2.3), float(4.7), float(6.6)),
    vec3(float(2.3), float(4.1), float(6.6))
  ),
  true
);

boolScenario(
  "notEqual vec3 true true false",
  notEqual(
    vec3(float(2.3), float(4.7), float(6.6)),
    vec3(float(2.3), float(4.7), float(6.1))
  ),
  true
);

boolScenario(
  "notEqual vec4 true true true true",
  notEqual(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.3), float(4.7), float(6.6), float(1.4))
  ),
  false
);

boolScenario(
  "notEqual vec4 false true true true",
  notEqual(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.1), float(4.7), float(6.6), float(1.4))
  ),
  true
);

boolScenario(
  "notEqual vec4 true false true true",
  notEqual(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.3), float(4.1), float(6.6), float(1.4))
  ),
  true
);

boolScenario(
  "notEqual vec4 true true false true",
  notEqual(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.3), float(4.7), float(6.1), float(1.4))
  ),
  true
);

boolScenario(
  "notEqual vec4 true true true false",
  notEqual(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.3), float(4.7), float(6.6), float(1.1))
  ),
  true
);

boolScenario(
  "notEqual mat2 true true true true",
  notEqual(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.3), float(4.7), float(6.6), float(1.4))
  ),
  false
);

boolScenario(
  "notEqual mat2 false true true true",
  notEqual(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.1), float(4.7), float(6.6), float(1.4))
  ),
  true
);

boolScenario(
  "notEqual mat2 true false true true",
  notEqual(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.3), float(4.1), float(6.6), float(1.4))
  ),
  true
);

boolScenario(
  "notEqual mat2 true true false true",
  notEqual(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.3), float(4.7), float(6.1), float(1.4))
  ),
  true
);

boolScenario(
  "notEqual mat2 true true true false",
  notEqual(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.3), float(4.7), float(6.6), float(1.1))
  ),
  true
);

boolScenario(
  "notEqual mat3 true true true true true true true true true",
  notEqual(
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    )
  ),
  false
);

boolScenario(
  "notEqual mat3 false true true true true true true true true",
  notEqual(
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    mat3(
      float(0.41),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    )
  ),
  true
);

boolScenario(
  "notEqual mat3 true false true true true true true true true",
  notEqual(
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    mat3(
      float(0.45),
      float(0.93),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    )
  ),
  true
);

boolScenario(
  "notEqual mat3 true true false true true true true true true",
  notEqual(
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    mat3(
      float(0.45),
      float(0.91),
      float(0.03),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    )
  ),
  true
);

boolScenario(
  "notEqual mat3 true true true false true true true true true",
  notEqual(
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.45),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    )
  ),
  true
);

boolScenario(
  "notEqual mat3 true true true true false true true true true",
  notEqual(
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.91),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    )
  ),
  true
);

boolScenario(
  "notEqual mat3 true true true true true false true true true",
  notEqual(
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.87),
      float(0.46),
      float(0.06),
      float(0.09)
    )
  ),
  true
);

boolScenario(
  "notEqual mat3 true true true true true true false true true",
  notEqual(
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.42),
      float(0.06),
      float(0.09)
    )
  ),
  true
);

boolScenario(
  "notEqual mat3 true true true true true true true false true",
  notEqual(
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.02),
      float(0.09)
    )
  ),
  true
);

boolScenario(
  "notEqual mat3 true true true true true true true true false",
  notEqual(
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09)
    ),
    mat3(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.04)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true true true true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  false
);

boolScenario(
  "notEqual mat4 false true true true true true true true true true true true true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.41),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true false true true true true true true true true true true true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.93),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true false true true true true true true true true true true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.07),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.03),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true false true true true true true true true true true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.41),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true false true true true true true true true true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.91),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true true false true true true true true true true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.81),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true false true true true true true true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.41),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true false true true true true true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.01),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true false true true true true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.01),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true false true true true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.11),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true false true true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.21),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true true false true true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.41),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true true true false true true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.61),
      float(0.37),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true true true true false true true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.31),
      float(0.75),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true true true true true false true",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.71),
      float(0.93)
    )
  ),
  true
);

boolScenario(
  "notEqual mat4 true true true true true true true true true true true true true true true false",
  notEqual(
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.91)
    )
  ),
  true
);

boolScenario("notEqual int true", notEqual(int(23), int(23)), false);

boolScenario("notEqual int false", notEqual(int(23), int(21)), true);

boolScenario(
  "notEqual ivec2 true true",
  notEqual(ivec2(int(23), int(47)), ivec2(int(23), int(47))),
  false
);

boolScenario(
  "notEqual ivec2 false true",
  notEqual(ivec2(int(23), int(47)), ivec2(int(21), int(47))),
  true
);

boolScenario(
  "notEqual ivec2 true false",
  notEqual(ivec2(int(23), int(45)), ivec2(int(23), int(41))),
  true
);

boolScenario(
  "notEqual ivec3 true true true",
  notEqual(ivec3(int(23), int(47), int(66)), ivec3(int(23), int(47), int(66))),
  false
);

boolScenario(
  "notEqual ivec3 false true true",
  notEqual(ivec3(int(23), int(47), int(66)), ivec3(int(21), int(47), int(66))),
  true
);

boolScenario(
  "notEqual ivec3 true false true",
  notEqual(ivec3(int(23), int(47), int(66)), ivec3(int(23), int(41), int(66))),
  true
);

boolScenario(
  "notEqual ivec3 true true false",
  notEqual(ivec3(int(23), int(47), int(66)), ivec3(int(23), int(47), int(61))),
  true
);

boolScenario(
  "notEqual ivec4 true true true true",
  notEqual(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(23), int(47), int(66), int(14))
  ),
  false
);

boolScenario(
  "notEqual ivec4 false true true true",
  notEqual(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(21), int(47), int(66), int(14))
  ),
  true
);

boolScenario(
  "notEqual ivec4 true false true true",
  notEqual(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(23), int(41), int(66), int(14))
  ),
  true
);

boolScenario(
  "notEqual ivec4 true true false true",
  notEqual(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(23), int(47), int(61), int(14))
  ),
  true
);

boolScenario(
  "notEqual ivec4 true true true false",
  notEqual(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(23), int(47), int(66), int(11))
  ),
  true
);

boolScenario("notEqual bool true true", notEqual(bool(true), bool(true)), false);

boolScenario("notEqual bool true false", notEqual(bool(true), bool(false)), true);

boolScenario("notEqual bool false true", notEqual(bool(false), bool(true)), true);

boolScenario(
  "notEqual bool false false",
  notEqual(bool(false), bool(false)),
  false
);

boolScenario(
  "notEqual bvec2 true true",
  notEqual(bvec2(bool(false), bool(true)), bvec2(bool(false), bool(true))),
  false
);

boolScenario(
  "notEqual bvec2 false true",
  notEqual(bvec2(bool(false), bool(true)), bvec2(bool(true), bool(true))),
  true
);

boolScenario(
  "notEqual bvec2 true false",
  notEqual(bvec2(bool(false), bool(true)), bvec2(bool(false), bool(false))),
  true
);

boolScenario(
  "notEqual bvec3 true true true",
  notEqual(
    bvec3(bool(true), bool(false), bool(true)),
    bvec3(bool(true), bool(false), bool(true))
  ),
  false
);

boolScenario(
  "notEqual bvec3 false true true",
  notEqual(
    bvec3(bool(true), bool(false), bool(true)),
    bvec3(bool(false), bool(false), bool(true))
  ),
  true
);

boolScenario(
  "notEqual bvec3 true false true",
  notEqual(
    bvec3(bool(true), bool(false), bool(true)),
    bvec3(bool(true), bool(true), bool(true))
  ),
  true
);

boolScenario(
  "notEqual bvec3 true true false",
  notEqual(
    bvec3(bool(true), bool(false), bool(true)),
    bvec3(bool(true), bool(false), bool(false))
  ),
  true
);

boolScenario(
  "notEqual bvec4 true true true true",
  notEqual(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(true), bool(true), bool(false), bool(true))
  ),
  false
);

boolScenario(
  "notEqual bvec4 false true true true",
  notEqual(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(false), bool(true), bool(false), bool(true))
  ),
  true
);

boolScenario(
  "notEqual bvec4 true false true true",
  notEqual(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(true), bool(false), bool(false), bool(true))
  ),
  true
);

boolScenario(
  "notEqual bvec4 true true false true",
  notEqual(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(true), bool(true), bool(true), bool(true))
  ),
  true
);

boolScenario(
  "notEqual bvec4 true true true false",
  notEqual(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(true), bool(true), bool(false), bool(false))
  ),
  true
);
