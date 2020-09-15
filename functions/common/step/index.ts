import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function step(
  edge: Expression<FloatPrimitive>,
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function step(
  edge: Expression<FloatPrimitive>,
  x: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function step(
  edge: Expression<Vec2Primitive>,
  x: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function step(
  edge: Expression<FloatPrimitive>,
  x: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function step(
  edge: Expression<Vec3Primitive>,
  x: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function step(
  edge: Expression<FloatPrimitive>,
  x: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function step(
  edge: Expression<Vec4Primitive>,
  x: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function step(
  edge: Expression<AnyFloatPrimitive>,
  x: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  edge;
  x;

  return new Expression("float");
}
