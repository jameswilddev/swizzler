import {
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function all(
  a: Expression<Bvec2Primitive | Bvec3Primitive | Bvec4Primitive>
): Expression<BoolPrimitive> {
  a;

  return new Expression("bool");
}
