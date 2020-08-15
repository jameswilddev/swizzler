import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { func } from "../../helpers";

export function inversesqrt(
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function inversesqrt(
  x: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function inversesqrt(
  x: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function inversesqrt(
  x: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function inversesqrt(
  x: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  return func("Math.inversesqrt", "inversesqrt", x);
}
