import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function atan(x: Expression<FloatPrimitive>): Expression<FloatPrimitive>;

export function atan(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function atan(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function atan(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function atan(
  y: Expression<FloatPrimitive>,
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function atan(
  y: Expression<Vec2Primitive>,
  x: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function atan(
  y: Expression<Vec3Primitive>,
  x: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function atan(
  y: Expression<Vec4Primitive>,
  x: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function atan(
  ...args: ReadonlyArray<Expression<AnyFloatPrimitive>>
): Expression<AnyFloatPrimitive> {
  args;

  return new Expression("float");
}
