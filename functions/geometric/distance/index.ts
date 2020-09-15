import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function distance(
  p0: Expression<FloatPrimitive>,
  p1: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function distance(
  p0: Expression<Vec2Primitive>,
  p1: Expression<Vec2Primitive>
): Expression<FloatPrimitive>;

export function distance(
  p0: Expression<Vec3Primitive>,
  p1: Expression<Vec3Primitive>
): Expression<FloatPrimitive>;

export function distance(
  p0: Expression<Vec4Primitive>,
  p1: Expression<Vec4Primitive>
): Expression<FloatPrimitive>;

export function distance(
  p0: Expression<AnyFloatPrimitive>,
  p1: Expression<AnyFloatPrimitive>
): Expression<FloatPrimitive> {
  p0;
  p1;

  throw new Error("Not implemented.");
}
