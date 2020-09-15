import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function log(x: Expression<FloatPrimitive>): Expression<FloatPrimitive>;

export function log(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function log(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function log(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function log(
  x: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  x;

  return new Expression("float");
}
