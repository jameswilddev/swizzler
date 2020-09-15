import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function length(
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function length(
  x: Expression<Vec2Primitive>
): Expression<FloatPrimitive>;

export function length(
  x: Expression<Vec3Primitive>
): Expression<FloatPrimitive>;

export function length(
  x: Expression<Vec4Primitive>
): Expression<FloatPrimitive>;

export function length(
  x: Expression<AnyFloatPrimitive>
): Expression<FloatPrimitive> {
  x;

  return new Expression("float");
}
