import { AnyPrimitive } from "./primitive";
import { Expression } from "./expression";

export function reference<TPrimitive extends AnyPrimitive>(
  primitive: TPrimitive,
  name: string
): Expression<TPrimitive> {
  primitive;
  name;

  throw new Error("Not implemented.");
}
