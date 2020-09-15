import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function smoothstep(
  edge0: Expression<FloatPrimitive>,
  edge1: Expression<FloatPrimitive>,
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function smoothstep(
  edge0: Expression<FloatPrimitive>,
  edge1: Expression<FloatPrimitive>,
  x: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function smoothstep(
  edge0: Expression<Vec2Primitive>,
  edge1: Expression<Vec2Primitive>,
  x: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function smoothstep(
  edge0: Expression<FloatPrimitive>,
  edge1: Expression<FloatPrimitive>,
  x: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function smoothstep(
  edge0: Expression<Vec3Primitive>,
  edge1: Expression<Vec3Primitive>,
  x: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function smoothstep(
  edge0: Expression<FloatPrimitive>,
  edge1: Expression<FloatPrimitive>,
  x: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function smoothstep(
  edge0: Expression<Vec4Primitive>,
  edge1: Expression<Vec4Primitive>,
  x: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function smoothstep(
  edge0: Expression<AnyFloatPrimitive>,
  edge1: Expression<AnyFloatPrimitive>,
  x: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  edge0;
  edge1;
  x;

  return new Expression("float");
}
