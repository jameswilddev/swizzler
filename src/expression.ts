import { AnyPrimitive } from "./primitive";
import { Implementation } from "./implementations/implementation";

export class Expression<TPrimitive extends AnyPrimitive> {
  constructor(
    public readonly javascript: Implementation<TPrimitive>,
    public readonly glsl: Implementation<TPrimitive>
  ) {}

  public readonly primitive = this.glsl.primitive;
}
