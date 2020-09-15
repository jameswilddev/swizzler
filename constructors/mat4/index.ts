import {
  Mat2Primitive,
  Mat3Primitive,
  Mat4Primitive,
  BasePrimitive,
  AnyPrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { Sixteen } from "../total-components";

export function mat4(
  a: Expression<BasePrimitive | Mat2Primitive | Mat3Primitive | Mat4Primitive>
): Expression<Mat4Primitive>;
export function mat4(...args: Sixteen): Expression<Mat4Primitive>;

export function mat4(
  ...args: ReadonlyArray<Expression<AnyPrimitive>>
): Expression<Mat4Primitive> {
  args;

  throw new Error("Not implemented.");
}
