import { FloatPrimitive, IntPrimitive, BoolPrimitive } from "../primitive";
import { Expression } from "../expression";

// todo: cast
export function bool(value: boolean): Expression<BoolPrimitive> {
  value;

  return new Expression("bool");
}

// todo: cast
export function float(value: number): Expression<FloatPrimitive> {
  value;

  return new Expression("float");
}

// todo: cast
export function int(value: number): Expression<IntPrimitive> {
  value;

  return new Expression("int");
}
