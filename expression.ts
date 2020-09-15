import { AnyPrimitive } from "./primitive";

export class Expression<TPrimitive extends AnyPrimitive> {
  constructor(public readonly primitive: TPrimitive) {}
}
