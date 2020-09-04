import { FloatPrimitive, BoolPrimitive } from "../primitive";
import { Expression } from "../expression";
import { LiteralImplementation } from "../implementations/literal-implementation";

export function bool(value: boolean): Expression<BoolPrimitive> {
  const implementation = new LiteralImplementation("bool", [
    JSON.stringify(value),
  ]);

  return new Expression(implementation, implementation);
}

export function float(value: number): Expression<FloatPrimitive> {
  if (Number.isNaN(value)) {
    throw new Error("Cannot create a float literal of NaN.");
  } else if (!Number.isFinite(value)) {
    if (value > 0) {
      throw new Error("Cannot create a float literal of positive infinity.");
    } else {
      throw new Error("Cannot create a float literal of negative infinity.");
    }
  } else {
    const stringified = JSON.stringify(value);

    return new Expression(
      new LiteralImplementation("float", [stringified]),
      new LiteralImplementation("float", [
        stringified.includes(".") ? stringified : `${stringified}.`,
      ])
    );
  }
}
