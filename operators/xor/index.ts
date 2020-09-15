import { BoolPrimitive } from "../../primitive";
import { Expression } from "../../expression";

export function xor(
  a: Expression<BoolPrimitive>,
  b: Expression<BoolPrimitive>
): Expression<BoolPrimitive> {
  a;
  b;

  return new Expression("bool");
}
