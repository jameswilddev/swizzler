import { FloatPrimitive, BoolPrimitive } from "./primitive";
import { Expression } from "./expression";
import { LiteralImplementation } from "./implementations/literal-implementation";

export function bool(value: boolean): Expression<BoolPrimitive> {
  const implementation = new LiteralImplementation("bool", [
    JSON.stringify(value),
  ]);

  return new Expression(implementation, implementation);
}

export function float(value: number): Expression<FloatPrimitive> {
  const stringified = JSON.stringify(value);

  return new Expression(
    new LiteralImplementation("float", [stringified]),
    new LiteralImplementation("float", [
      stringified.includes(".") ? stringified : `${stringified}.`,
    ])
  );
}
