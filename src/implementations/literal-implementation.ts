import { AnyPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class LiteralImplementation<TPrimitive extends AnyPrimitive>
  implements Implementation<TPrimitive> {
  constructor(
    public readonly primitive: TPrimitive,
    private readonly literal: ReadonlyArray<string>
  ) {}

  readonly refactorable = false;

  readonly args = [];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    renderedArgs;
    return this.literal;
  }
}
