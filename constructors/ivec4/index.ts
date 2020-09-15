import {
  Ivec4Primitive,
  Mat2Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { Four } from "../total-components";

export function ivec4(
  a: Expression<BasePrimitive | Mat2Primitive>
): Expression<Ivec4Primitive>;

export function ivec4(...a: Four): Expression<Ivec4Primitive>;

export function ivec4(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Ivec4Primitive> {
  args;

  throw new Error("Not implemented.");
}
