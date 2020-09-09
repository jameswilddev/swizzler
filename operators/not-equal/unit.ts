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
  equal,
} from "../..";
import { boolScenario } from "../../unit";

boolScenario("equal float true", equal(float(2.3), float(2.3)), true);

boolScenario("equal float false", equal(float(2.3), float(2.1)), false);

boolScenario(
  "equal vec2 true true",
  equal(vec2(float(2.3), float(4.7)), vec2(float(2.3), float(4.7))),
  true
);

boolScenario(
  "equal vec2 false true",
  equal(vec2(float(2.3), float(4.7)), vec2(float(2.1), float(4.7))),
  false
);

boolScenario(
  "equal vec2 true false",
  equal(vec2(float(2.3), float(4.5)), vec2(float(2.3), float(4.1))),
  false
);

boolScenario(
  "equal vec3 true true true",
  equal(
    vec3(float(2.3), float(4.7), float(6.6)),
    vec3(float(2.3), float(4.7), float(6.6))
  ),
  true
);

boolScenario(
  "equal vec3 false true true",
  equal(
    vec3(float(2.3), float(4.7), float(6.6)),
    vec3(float(2.1), float(4.7), float(6.6))
  ),
  false
);

boolScenario(
  "equal vec3 true false true",
  equal(
    vec3(float(2.3), float(4.7), float(6.6)),
    vec3(float(2.3), float(4.1), float(6.6))
  ),
  false
);

boolScenario(
  "equal vec3 true true false",
  equal(
    vec3(float(2.3), float(4.7), float(6.6)),
    vec3(float(2.3), float(4.7), float(6.1))
  ),
  false
);

boolScenario(
  "equal vec4 true true true true",
  equal(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.3), float(4.7), float(6.6), float(1.4))
  ),
  true
);

boolScenario(
  "equal vec4 false true true true",
  equal(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.1), float(4.7), float(6.6), float(1.4))
  ),
  false
);

boolScenario(
  "equal vec4 true false true true",
  equal(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.3), float(4.1), float(6.6), float(1.4))
  ),
  false
);

boolScenario(
  "equal vec4 true true false true",
  equal(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.3), float(4.7), float(6.1), float(1.4))
  ),
  false
);

boolScenario(
  "equal vec4 true true true false",
  equal(
    vec4(float(2.3), float(4.7), float(6.6), float(1.4)),
    vec4(float(2.3), float(4.7), float(6.6), float(1.1))
  ),
  false
);

boolScenario(
  "equal mat2 true true true true",
  equal(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.3), float(4.7), float(6.6), float(1.4))
  ),
  true
);

boolScenario(
  "equal mat2 false true true true",
  equal(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.1), float(4.7), float(6.6), float(1.4))
  ),
  false
);

boolScenario(
  "equal mat2 true false true true",
  equal(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.3), float(4.1), float(6.6), float(1.4))
  ),
  false
);

boolScenario(
  "equal mat2 true true false true",
  equal(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.3), float(4.7), float(6.1), float(1.4))
  ),
  false
);

boolScenario(
  "equal mat2 true true true false",
  equal(
    mat2(float(2.3), float(4.7), float(6.6), float(1.4)),
    mat2(float(2.3), float(4.7), float(6.6), float(1.1))
  ),
  false
);

boolScenario(
  "equal mat3 true true true true true true true true true",
  equal(
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
  true
);

boolScenario(
  "equal mat3 false true true true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat3 true false true true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat3 true true false true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat3 true true true false true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat3 true true true true false true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat3 true true true true true false true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat3 true true true true true true false true true",
  equal(
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
  false
);

boolScenario(
  "equal mat3 true true true true true true true false true",
  equal(
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
  false
);

boolScenario(
  "equal mat3 true true true true true true true true false",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true true true true true true true true true true true true true",
  equal(
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
  true
);

boolScenario(
  "equal mat4 false true true true true true true true true true true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true false true true true true true true true true true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true false true true true true true true true true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true false true true true true true true true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true false true true true true true true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true true false true true true true true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true true true false true true true true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true true true true false true true true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true true true true true false true true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true true true true true true false true true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true true true true true true true false true true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true true true true true true true true false true true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true true true true true true true true true false true true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true true true true true true true true true true false true true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true true true true true true true true true true true false true",
  equal(
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
  false
);

boolScenario(
  "equal mat4 true true true true true true true true true true true true true true true false",
  equal(
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
  false
);

boolScenario("equal int true", equal(int(23), int(23)), true);

boolScenario("equal int false", equal(int(23), int(21)), false);

boolScenario(
  "equal ivec2 true true",
  equal(ivec2(int(23), int(47)), ivec2(int(23), int(47))),
  true
);

boolScenario(
  "equal ivec2 false true",
  equal(ivec2(int(23), int(47)), ivec2(int(21), int(47))),
  false
);

boolScenario(
  "equal ivec2 true false",
  equal(ivec2(int(23), int(45)), ivec2(int(23), int(41))),
  false
);

boolScenario(
  "equal ivec3 true true true",
  equal(ivec3(int(23), int(47), int(66)), ivec3(int(23), int(47), int(66))),
  true
);

boolScenario(
  "equal ivec3 false true true",
  equal(ivec3(int(23), int(47), int(66)), ivec3(int(21), int(47), int(66))),
  false
);

boolScenario(
  "equal ivec3 true false true",
  equal(ivec3(int(23), int(47), int(66)), ivec3(int(23), int(41), int(66))),
  false
);

boolScenario(
  "equal ivec3 true true false",
  equal(ivec3(int(23), int(47), int(66)), ivec3(int(23), int(47), int(61))),
  false
);

boolScenario(
  "equal ivec4 true true true true",
  equal(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(23), int(47), int(66), int(14))
  ),
  true
);

boolScenario(
  "equal ivec4 false true true true",
  equal(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(21), int(47), int(66), int(14))
  ),
  false
);

boolScenario(
  "equal ivec4 true false true true",
  equal(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(23), int(41), int(66), int(14))
  ),
  false
);

boolScenario(
  "equal ivec4 true true false true",
  equal(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(23), int(47), int(61), int(14))
  ),
  false
);

boolScenario(
  "equal ivec4 true true true false",
  equal(
    ivec4(int(23), int(47), int(66), int(14)),
    ivec4(int(23), int(47), int(66), int(11))
  ),
  false
);

boolScenario("equal bool true true", equal(bool(true), bool(true)), true);

boolScenario("equal bool true false", equal(bool(true), bool(false)), false);

boolScenario("equal bool false true", equal(bool(false), bool(true)), false);

boolScenario("equal bool false false", equal(bool(false), bool(false)), true);

boolScenario(
  "equal bvec2 true true",
  equal(bvec2(bool(false), bool(true)), bvec2(bool(false), bool(true))),
  true
);

boolScenario(
  "equal bvec2 false true",
  equal(bvec2(bool(false), bool(true)), bvec2(bool(true), bool(true))),
  false
);

boolScenario(
  "equal bvec2 true false",
  equal(bvec2(bool(false), bool(true)), bvec2(bool(false), bool(false))),
  false
);

boolScenario(
  "equal bvec3 true true true",
  equal(
    bvec3(bool(true), bool(false), bool(true)),
    bvec3(bool(true), bool(false), bool(true))
  ),
  true
);

boolScenario(
  "equal bvec3 false true true",
  equal(
    bvec3(bool(true), bool(false), bool(true)),
    bvec3(bool(false), bool(false), bool(true))
  ),
  false
);

boolScenario(
  "equal bvec3 true false true",
  equal(
    bvec3(bool(true), bool(false), bool(true)),
    bvec3(bool(true), bool(true), bool(true))
  ),
  false
);

boolScenario(
  "equal bvec3 true true false",
  equal(
    bvec3(bool(true), bool(false), bool(true)),
    bvec3(bool(true), bool(false), bool(false))
  ),
  false
);

boolScenario(
  "equal bvec4 true true true true",
  equal(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(true), bool(true), bool(false), bool(true))
  ),
  true
);

boolScenario(
  "equal bvec4 false true true true",
  equal(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(false), bool(true), bool(false), bool(true))
  ),
  false
);

boolScenario(
  "equal bvec4 true false true true",
  equal(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(true), bool(false), bool(false), bool(true))
  ),
  false
);

boolScenario(
  "equal bvec4 true true false true",
  equal(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(true), bool(true), bool(true), bool(true))
  ),
  false
);

boolScenario(
  "equal bvec4 true true true false",
  equal(
    bvec4(bool(true), bool(true), bool(false), bool(true)),
    bvec4(bool(true), bool(true), bool(false), bool(false))
  ),
  false
);
