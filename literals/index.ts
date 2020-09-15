import { FloatPrimitive, IntPrimitive, BoolPrimitive } from "../primitive";
import { Expression } from "../expression";

// todo: cast
export function bool(value: boolean): Expression<BoolPrimitive> {
  value;

  throw new Error("Not implemented.");
}

// todo: cast
export function float(value: number): Expression<FloatPrimitive> {
  value;

  throw new Error("Not implemented.");
}

// todo: cast
export function int(value: number): Expression<IntPrimitive> {
  value;

  throw new Error("Not implemented.");
}
