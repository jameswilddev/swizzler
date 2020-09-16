import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function degrees(radians: Float): Float;

export function degrees(radians: Vec2): Vec2;

export function degrees(radians: Vec3): Vec3;

export function degrees(radians: Vec4): Vec4;

export function degrees(radians: AnyFloat): AnyFloat {
  radians;

  return floatPlaceholder;
}
