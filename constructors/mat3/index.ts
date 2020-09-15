import {
  Mat2Primitive,
  Mat3Primitive,
  Mat4Primitive,
  BasePrimitive,
  AnyPrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { Nine } from "../total-components";

export function mat3(
  a: Expression<BasePrimitive | Mat2Primitive | Mat3Primitive | Mat4Primitive>
): Expression<Mat3Primitive>;
export function mat3(...args: Nine): Expression<Mat3Primitive>;

export function mat3(
  ...args: ReadonlyArray<Expression<AnyPrimitive>>
): Expression<Mat3Primitive> {
  args;

  throw new Error("Not implemented.");
}
