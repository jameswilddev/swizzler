import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function clamp(
  x: Expression<FloatPrimitive>,
  minVal: Expression<FloatPrimitive>,
  maxVal: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function clamp(
  x: Expression<Vec2Primitive>,
  minVal: Expression<FloatPrimitive>,
  maxVal: Expression<FloatPrimitive>
): Expression<Vec2Primitive>;

export function clamp(
  x: Expression<Vec2Primitive>,
  minVal: Expression<Vec2Primitive>,
  maxVal: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function clamp(
  x: Expression<Vec3Primitive>,
  minVal: Expression<FloatPrimitive>,
  maxVal: Expression<FloatPrimitive>
): Expression<Vec3Primitive>;

export function clamp(
  x: Expression<Vec3Primitive>,
  minVal: Expression<Vec3Primitive>,
  maxVal: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function clamp(
  x: Expression<Vec4Primitive>,
  minVal: Expression<FloatPrimitive>,
  maxVal: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function clamp(
  x: Expression<Vec4Primitive>,
  minVal: Expression<Vec4Primitive>,
  maxVal: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function clamp(
  x: Expression<AnyFloatPrimitive>,
  minVal: Expression<AnyFloatPrimitive>,
  maxVal: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  x;
  minVal;
  maxVal;

  throw new Error("Not implemented.");
}
