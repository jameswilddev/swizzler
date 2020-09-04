import { bool, xor } from "../..";
import { boolScenario } from "../../unit";

boolScenario("xor false false", xor(bool(false), bool(false)), false);

boolScenario("xor false true", xor(bool(false), bool(true)), true);

boolScenario("xor true false", xor(bool(true), bool(false)), true);

boolScenario("xor true true", xor(bool(true), bool(true)), false);
