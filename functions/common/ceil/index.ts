import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function ceil(x: Expression<FloatPrimitive>): Expression<FloatPrimitive>;

export function ceil(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function ceil(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function ceil(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function ceil(
  x: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  x;

  return new Expression("float");
}
