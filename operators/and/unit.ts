import { bool, and } from "../..";
import { boolScenario } from "../../unit";

boolScenario("and false false", and(bool(false), bool(false)), false);

boolScenario("and false true", and(bool(false), bool(true)), false);

boolScenario("and true false", and(bool(true), bool(false)), false);

boolScenario("and true true", and(bool(true), bool(true)), true);
