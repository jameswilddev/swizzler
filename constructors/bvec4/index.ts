import {
  Mat2Primitive,
  BasePrimitive,
  Bvec4Primitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { Four } from "../total-components";

export function bvec4(
  a: Expression<BasePrimitive | Mat2Primitive>
): Expression<Bvec4Primitive>;

export function bvec4(...a: Four): Expression<Bvec4Primitive>;

export function bvec4(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Bvec4Primitive> {
  args;

  return new Expression("bvec4");
}
