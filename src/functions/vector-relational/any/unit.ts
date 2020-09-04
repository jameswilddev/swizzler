import { bool, bvec2, bvec3, bvec4, any } from "../../..";
import { boolScenario } from "../../../unit";

boolScenario("any false false", any(bvec2(bool(false), bool(false))), false);

boolScenario("any true false", any(bvec2(bool(true), bool(false))), true);

boolScenario("any false true", any(bvec2(bool(false), bool(true))), true);

boolScenario(
  "any false false false",
  any(bvec3(bool(false), bool(false), bool(false))),
  false
);

boolScenario(
  "any true false false",
  any(bvec3(bool(true), bool(false), bool(false))),
  true
);

boolScenario(
  "any false true false",
  any(bvec3(bool(false), bool(true), bool(false))),
  true
);

boolScenario(
  "any false false true",
  any(bvec3(bool(false), bool(false), bool(true))),
  true
);

boolScenario(
  "any false false false false",
  any(bvec4(bool(false), bool(false), bool(false), bool(false))),
  false
);

boolScenario(
  "any true false false false",
  any(bvec4(bool(true), bool(false), bool(false), bool(false))),
  true
);

boolScenario(
  "any false true false false",
  any(bvec4(bool(false), bool(true), bool(false), bool(false))),
  true
);

boolScenario(
  "any false false true false",
  any(bvec4(bool(false), bool(false), bool(true), bool(false))),
  true
);

boolScenario(
  "any false false false true",
  any(bvec4(bool(false), bool(false), bool(false), bool(true))),
  true
);
