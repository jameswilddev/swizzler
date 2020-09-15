import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function tan(
  angle: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function tan(
  angle: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function tan(
  angle: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function tan(
  angle: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function tan(
  angle: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  angle;

  return new Expression("float");
}
