import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function dot(
  x: Expression<FloatPrimitive>,
  y: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function dot(
  x: Expression<Vec2Primitive>,
  y: Expression<Vec2Primitive>
): Expression<FloatPrimitive>;

export function dot(
  x: Expression<Vec3Primitive>,
  y: Expression<Vec3Primitive>
): Expression<FloatPrimitive>;

export function dot(
  x: Expression<Vec4Primitive>,
  y: Expression<Vec4Primitive>
): Expression<FloatPrimitive>;

export function dot(
  x: Expression<AnyFloatPrimitive>,
  y: Expression<AnyFloatPrimitive>
): Expression<FloatPrimitive> {
  x;
  y;

  return new Expression("float");
}
