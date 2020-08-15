import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { func } from "../../helpers";

export function exp2(x: Expression<FloatPrimitive>): Expression<FloatPrimitive>;

export function exp2(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function exp2(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function exp2(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function exp2(
  x: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  return func("Math.exp2", "exp2", x);
}
