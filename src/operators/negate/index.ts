import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  Mat2Primitive,
  Mat3Primitive,
  Mat4Primitive,
  AnyFloatPrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { unary } from "../../helpers";

export function negate(
  a: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function negate(a: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function negate(a: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function negate(a: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function negate(a: Expression<Mat2Primitive>): Expression<Mat2Primitive>;

export function negate(a: Expression<Mat3Primitive>): Expression<Mat3Primitive>;

export function negate(a: Expression<Mat4Primitive>): Expression<Mat4Primitive>;

export function negate(
  a: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  return unary(a.primitive, "-", a);
}
