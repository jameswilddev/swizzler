import { bool, bvec2, bvec3, bvec4, all } from "../../..";
import { boolScenario } from "../../../unit";

boolScenario("all true true", all(bvec2(bool(true), bool(true))), true);

boolScenario("all false true", all(bvec2(bool(false), bool(true))), false);

boolScenario("all true false", all(bvec2(bool(true), bool(false))), false);

boolScenario(
  "all true true true",
  all(bvec3(bool(true), bool(true), bool(true))),
  true
);

boolScenario(
  "all false true true",
  all(bvec3(bool(false), bool(true), bool(true))),
  false
);

boolScenario(
  "all true false true",
  all(bvec3(bool(true), bool(false), bool(true))),
  false
);

boolScenario(
  "all true true false",
  all(bvec3(bool(true), bool(true), bool(false))),
  false
);

boolScenario(
  "all true true true true",
  all(bvec4(bool(true), bool(true), bool(true), bool(true))),
  true
);

boolScenario(
  "all false true true true",
  all(bvec4(bool(false), bool(true), bool(true), bool(true))),
  false
);

boolScenario(
  "all true false true true",
  all(bvec4(bool(true), bool(false), bool(true), bool(true))),
  false
);

boolScenario(
  "all true true false true",
  all(bvec4(bool(true), bool(true), bool(false), bool(true))),
  false
);

boolScenario(
  "all true true true false",
  all(bvec4(bool(true), bool(true), bool(true), bool(false))),
  false
);
