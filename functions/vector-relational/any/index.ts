import {
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function any(
  a: Expression<Bvec2Primitive | Bvec3Primitive | Bvec4Primitive>
): Expression<BoolPrimitive> {
  a;

  throw new Error("Not implemented.");
}
