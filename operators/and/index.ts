import { BoolPrimitive } from "../../primitive";
import { Expression } from "../../expression";

export function and(
  a: Expression<BoolPrimitive>,
  b: Expression<BoolPrimitive>
): Expression<BoolPrimitive> {
  a;
  b;

  throw new Error("Not implemented.");
}
