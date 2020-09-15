import {
  Vec4Primitive,
  Mat2Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { Four } from "../total-components";

export function vec4(
  a: Expression<BasePrimitive | Mat2Primitive>
): Expression<Vec4Primitive>;

export function vec4(...a: Four): Expression<Vec4Primitive>;

export function vec4(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Vec4Primitive> {
  args;

  throw new Error("Not implemented.");
}
