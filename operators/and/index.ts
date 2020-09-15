import { BoolPrimitive } from "../../primitive";
import { Expression } from "../../expression";

export function and(
  a: Expression<BoolPrimitive>,
  b: Expression<BoolPrimitive>
): Expression<BoolPrimitive> {
  a;
  b;

  return new Expression("bool");
}
