import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function log2(x: Float): Float;

export function log2(x: Vec2): Vec2;

export function log2(x: Vec3): Vec3;

export function log2(x: Vec4): Vec4;

export function log2(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
