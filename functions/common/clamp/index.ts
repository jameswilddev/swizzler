import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function clamp(x: Float, minVal: Float, maxVal: Float): Float;

export function clamp(x: Vec2, minVal: Float, maxVal: Float): Vec2;

export function clamp(x: Vec2, minVal: Vec2, maxVal: Vec2): Vec2;

export function clamp(x: Vec3, minVal: Float, maxVal: Float): Vec3;

export function clamp(x: Vec3, minVal: Vec3, maxVal: Vec3): Vec3;

export function clamp(x: Vec4, minVal: Float, maxVal: Float): Vec4;

export function clamp(x: Vec4, minVal: Vec4, maxVal: Vec4): Vec4;

export function clamp(
  x: AnyFloat,
  minVal: AnyFloat,
  maxVal: AnyFloat
): AnyFloat {
  x;
  minVal;
  maxVal;

  return floatPlaceholder;
}
