import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function refract(
  n: Expression<FloatPrimitive>,
  i: Expression<FloatPrimitive>,
  eta: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function refract(
  n: Expression<Vec2Primitive>,
  i: Expression<Vec2Primitive>,
  eta: Expression<FloatPrimitive>
): Expression<Vec2Primitive>;

export function refract(
  n: Expression<Vec3Primitive>,
  i: Expression<Vec3Primitive>,
  eta: Expression<FloatPrimitive>
): Expression<Vec3Primitive>;

export function refract(
  n: Expression<Vec4Primitive>,
  i: Expression<Vec4Primitive>,
  eta: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function refract(
  i: Expression<AnyFloatPrimitive>,
  n: Expression<AnyFloatPrimitive>,
  eta: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  i;
  n;
  eta;

  return new Expression("float");
}
