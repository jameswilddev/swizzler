import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function faceforward(
  n: Expression<FloatPrimitive>,
  i: Expression<FloatPrimitive>,
  nRef: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function faceforward(
  n: Expression<Vec2Primitive>,
  i: Expression<Vec2Primitive>,
  nRef: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function faceforward(
  n: Expression<Vec3Primitive>,
  i: Expression<Vec3Primitive>,
  nRef: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function faceforward(
  n: Expression<Vec4Primitive>,
  i: Expression<Vec4Primitive>,
  nRef: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function faceforward(
  n: Expression<AnyFloatPrimitive>,
  i: Expression<AnyFloatPrimitive>,
  nRef: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  n;
  i;
  nRef;

  return new Expression("float");
}
