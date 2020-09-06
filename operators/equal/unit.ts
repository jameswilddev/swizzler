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
  inequal,
} from "../../";
import { boolScenario } from "../../unit";

boolScenario("inequal float true", inequal(float(2.3), float(2.3)), false);

boolScenario("inequal float false", inequal(float(2.3), float(2.1)), true);

boolScenario(
  "inequal vec2 true true",
  inequal(vec2(float(2.3), float(4.7)), vec2(float(2.3), float(4.7))),
  false
);

boolScenario(
  "inequal vec2 false true",
  inequal(vec2(float(2.3), float(4.7)), vec2(float(2.1), float(4.7))),
  true
);

boolScenario(
  "inequal vec2 true false",
  inequal(vec2(float(2.3), float(4.5)), vec2(float(2.3), float(4.1))),
  true
);

boolScenario(
  "inequal vec3 true true true",
  inequal(
    vec3(float(2.3), float(4.7), float(6.6)),
    vec3(float(2.3), float(4.7), float(6.6))
  ),
  false
);

boolScenario(
  "inequal vec3 false true true",
  inequal(
    vec3(float(2.3), float(4.7), float(6.6)),
    vec3(float(2.1), float(4.7), float(6.6))
  ),
  true
);

boolScenario(
  "inequal vec3 true false true",
  inequal(
    vec3(float(2.3), float(4.7), float(6.6)),
    vec3(float(2.3), float(4.1), float(6.6))
  ),
  true
);

boolScenario(
  "inequal vec3 true true false",
  inequal(
    vec3(float(2.3), float(4.7), float(6.6)),
    vec3(float(2.3), float(4.7), float(6.1))
  ),
  true
);

boolScenario(
  "inequal vec4 true true true true",
  inequal(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.3), float(4.7), float(6.6), float(1.4))
  ),
  false
);

boolScenario(
  "inequal vec4 false true true true",
  inequal(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.1), float(4.7), float(6.6), float(1.4))
  ),
  true
);

boolScenario(
  "inequal vec4 true false true true",
  inequal(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.3), float(4.1), float(6.6), float(1.4))
  ),
  true
);

boolScenario(
  "inequal vec4 true true false true",
  inequal(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.3), float(4.7), float(6.1), float(1.4))
  ),
  true
);

boolScenario(
  "inequal vec4 true true true false",
  inequal(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.3), float(4.7), float(6.6), float(1.1))
  ),
  true
);

boolScenario(
  "inequal mat2 true true true true",
  inequal(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.3), float(4.7), float(6.6), float(1.4))
  ),
  false
);

boolScenario(
  "inequal mat2 false true true true",
  inequal(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.1), float(4.7), float(6.6), float(1.4))
  ),
  true
);

boolScenario(
  "inequal mat2 true false true true",
  inequal(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.3), float(4.1), float(6.6), float(1.4))
  ),
  true
);

boolScenario(
  "inequal mat2 true true false true",
  inequal(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.3), float(4.7), float(6.1), float(1.4))
  ),
  true
);

boolScenario(
  "inequal mat2 true true true false",
  inequal(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.3), float(4.7), float(6.6), float(1.1))
  ),
  true
);

boolScenario(
  "inequal mat3 true true true true true true true true true",
  inequal(
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
  "inequal mat3 false true true true true true true true true",
  inequal(
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
  "inequal mat3 true false true true true true true true true",
  inequal(
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
  "inequal mat3 true true false true true true true true true",
  inequal(
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
  "inequal mat3 true true true false true true true true true",
  inequal(
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
  "inequal mat3 true true true true false true true true true",
  inequal(
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
  "inequal mat3 true true true true true false true true true",
  inequal(
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
  "inequal mat3 true true true true true true false true true",
  inequal(
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
  "inequal mat3 true true true true true true true false true",
  inequal(
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
  "inequal mat3 true true true true true true true true false",
  inequal(
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
  "inequal mat4 true true true true true true true true true true true true true true true true",
  inequal(
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
  "inequal mat4 false true true true true true true true true true true true true true true true",
  inequal(
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
  "inequal mat4 true false true true true true true true true true true true true true true true",
  inequal(
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
  "inequal mat4 true true false true true true true true true true true true true true true true",
  inequal(
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
  "inequal mat4 true true true false true true true true true true true true true true true true",
  inequal(
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
  "inequal mat4 true true true true false true true true true true true true true true true true",
  inequal(
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
  "inequal mat4 true true true true true false true true true true true true true true true true",
  inequal(
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
  "inequal mat4 true true true true true true false true true true true true true true true true",
  inequal(
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
  "inequal mat4 true true true true true true true false true true true true true true true true",
  inequal(
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
  "inequal mat4 true true true true true true true true false true true true true true true true",
  inequal(
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
  "inequal mat4 true true true true true true true true true false true true true true true true",
  inequal(
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
  "inequal mat4 true true true true true true true true true true false true true true true true",
  inequal(
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
  "inequal mat4 true true true true true true true true true true true false true true true true",
  inequal(
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
  "inequal mat4 true true true true true true true true true true true true false true true true",
  inequal(
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
  "inequal mat4 true true true true true true true true true true true true true false true true",
  inequal(
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
  "inequal mat4 true true true true true true true true true true true true true true false true",
  inequal(
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
  "inequal mat4 true true true true true true true true true true true true true true true false",
  inequal(
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

boolScenario("inequal int true", inequal(int(23), int(23)), false);

boolScenario("inequal int false", inequal(int(23), int(21)), true);

boolScenario(
  "inequal ivec2 true true",
  inequal(ivec2(int(23), int(47)), ivec2(int(23), int(47))),
  false
);

boolScenario(
  "inequal ivec2 false true",
  inequal(ivec2(int(23), int(47)), ivec2(int(21), int(47))),
  true
);

boolScenario(
  "inequal ivec2 true false",
  inequal(ivec2(int(23), int(45)), ivec2(int(23), int(41))),
  true
);

boolScenario(
  "inequal ivec3 true true true",
  inequal(ivec3(int(23), int(47), int(66)), ivec3(int(23), int(47), int(66))),
  false
);

boolScenario(
  "inequal ivec3 false true true",
  inequal(ivec3(int(23), int(47), int(66)), ivec3(int(21), int(47), int(66))),
  true
);

boolScenario(
  "inequal ivec3 true false true",
  inequal(ivec3(int(23), int(47), int(66)), ivec3(int(23), int(41), int(66))),
  true
);

boolScenario(
  "inequal ivec3 true true false",
  inequal(ivec3(int(23), int(47), int(66)), ivec3(int(23), int(47), int(61))),
  true
);

boolScenario(
  "inequal ivec4 true true true true",
  inequal(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(23), int(47), int(66), int(14))
  ),
  false
);

boolScenario(
  "inequal ivec4 false true true true",
  inequal(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(21), int(47), int(66), int(14))
  ),
  true
);

boolScenario(
  "inequal ivec4 true false true true",
  inequal(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(23), int(41), int(66), int(14))
  ),
  true
);

boolScenario(
  "inequal ivec4 true true false true",
  inequal(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(23), int(47), int(61), int(14))
  ),
  true
);

boolScenario(
  "inequal ivec4 true true true false",
  inequal(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(23), int(47), int(66), int(11))
  ),
  true
);

boolScenario("inequal bool true true", inequal(bool(true), bool(true)), false);

boolScenario("inequal bool true false", inequal(bool(true), bool(false)), true);

boolScenario("inequal bool false true", inequal(bool(false), bool(true)), true);

boolScenario(
  "inequal bool false false",
  inequal(bool(false), bool(false)),
  false
);

boolScenario(
  "inequal bvec2 true true",
  inequal(bvec2(bool(false), bool(true)), bvec2(bool(false), bool(true))),
  false
);

boolScenario(
  "inequal bvec2 false true",
  inequal(bvec2(bool(false), bool(true)), bvec2(bool(true), bool(true))),
  true
);

boolScenario(
  "inequal bvec2 true false",
  inequal(bvec2(bool(false), bool(true)), bvec2(bool(false), bool(false))),
  true
);

boolScenario(
  "inequal bvec3 true true true",
  inequal(
    bvec3(bool(true), bool(false), bool(true)),
    bvec3(bool(true), bool(false), bool(true))
  ),
  false
);

boolScenario(
  "inequal bvec3 false true true",
  inequal(
    bvec3(bool(true), bool(false), bool(true)),
    bvec3(bool(false), bool(false), bool(true))
  ),
  true
);

boolScenario(
  "inequal bvec3 true false true",
  inequal(
    bvec3(bool(true), bool(false), bool(true)),
    bvec3(bool(true), bool(true), bool(true))
  ),
  true
);

boolScenario(
  "inequal bvec3 true true false",
  inequal(
    bvec3(bool(true), bool(false), bool(true)),
    bvec3(bool(true), bool(false), bool(false))
  ),
  true
);

boolScenario(
  "inequal bvec4 true true true true",
  inequal(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(true), bool(true), bool(false), bool(true))
  ),
  false
);

boolScenario(
  "inequal bvec4 false true true true",
  inequal(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(false), bool(true), bool(false), bool(true))
  ),
  true
);

boolScenario(
  "inequal bvec4 true false true true",
  inequal(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(true), bool(false), bool(false), bool(true))
  ),
  true
);

boolScenario(
  "inequal bvec4 true true false true",
  inequal(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(true), bool(true), bool(true), bool(true))
  ),
  true
);

boolScenario(
  "inequal bvec4 true true true false",
  inequal(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(true), bool(true), bool(false), bool(false))
  ),
  true
);
