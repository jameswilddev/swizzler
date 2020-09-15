import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function reflect(
  i: Expression<FloatPrimitive>,
  n: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function reflect(
  i: Expression<Vec2Primitive>,
  n: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function reflect(
  i: Expression<Vec3Primitive>,
  n: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function reflect(
  i: Expression<Vec4Primitive>,
  n: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function reflect(
  i: Expression<AnyFloatPrimitive>,
  n: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  i;
  n;

  throw new Error("Not implemented.");
}
