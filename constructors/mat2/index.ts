import {
  Mat2Primitive,
  Mat3Primitive,
  Mat4Primitive,
  BasePrimitive,
  AnyPrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { Four } from "../total-components";

export function mat2(
  a: Expression<BasePrimitive | Mat2Primitive | Mat3Primitive | Mat4Primitive>
): Expression<Mat2Primitive>;
export function mat2(...args: Four): Expression<Mat2Primitive>;

export function mat2(
  ...args: ReadonlyArray<Expression<AnyPrimitive>>
): Expression<Mat2Primitive> {
  args;

  return new Expression("mat2");
}
