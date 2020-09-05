import {
  AnyCastablePrimitive,
  AnyPrimitive,
  castToInt,
  CastToInt,
  primitiveBases,
} from "../primitive";
import { Implementation } from "./implementation";

export class CastToIntImplementation<TFrom extends AnyCastablePrimitive>
  implements Implementation<CastToInt[TFrom]> {
  constructor(private readonly a: Implementation<AnyCastablePrimitive>) {}

  readonly primitive = castToInt[this.a.primitive] as CastToInt[TFrom];

  readonly refactorable = true;

  readonly args: ReadonlyArray<Implementation<AnyPrimitive>> = [this.a];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    if (primitiveBases[this.a.primitive] === "bool") {
      return renderedArgs[0].map((dimension) => `(${dimension})?1:0`);
    } else {
      return renderedArgs[0];
    }
  }
}
