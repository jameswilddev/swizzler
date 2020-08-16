import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  AnyFloatPrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { binary } from "../../helpers";

export function multiply(
  a: Expression<FloatPrimitive>,
  b: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function multiply(
  a: Expression<Vec2Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Vec2Primitive>;

export function multiply(
  a: Expression<Vec3Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Vec3Primitive>;

export function multiply(
  a: Expression<Vec4Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function multiply(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function multiply(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function multiply(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function multiply(
  a: Expression<Vec2Primitive>,
  b: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function multiply(
  a: Expression<Vec3Primitive>,
  b: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function multiply(
  a: Expression<Vec4Primitive>,
  b: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function multiply(
  a: Expression<AnyFloatPrimitive>,
  b: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  return binary(a, "*", b);
}
