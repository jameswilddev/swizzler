import {
  Mat2Primitive,
  Mat3Primitive,
  Mat4Primitive,
  AnyFloatPrimitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function matrixCompMult(
  x: Expression<Mat2Primitive>,
  y: Expression<Mat2Primitive>
): Expression<Mat2Primitive>;

export function matrixCompMult(
  x: Expression<Mat3Primitive>,
  y: Expression<Mat3Primitive>
): Expression<Mat3Primitive>;

export function matrixCompMult(
  x: Expression<Mat4Primitive>,
  y: Expression<Mat4Primitive>
): Expression<Mat4Primitive>;

export function matrixCompMult(
  x: Expression<AnyFloatPrimitive>,
  y: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  x;
  y;

  return new Expression("float");
}
