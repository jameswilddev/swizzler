import { bool, or } from "../..";
import { boolScenario } from "../../unit";

boolScenario("or false false", or(bool(false), bool(false)), false);

boolScenario("or false true", or(bool(false), bool(true)), true);

boolScenario("or true false", or(bool(true), bool(false)), true);

boolScenario("or true true", or(bool(true), bool(true)), true);
