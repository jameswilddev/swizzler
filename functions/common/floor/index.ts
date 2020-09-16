import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function floor(x: Float): Float;

export function floor(x: Vec2): Vec2;

export function floor(x: Vec3): Vec3;

export function floor(x: Vec4): Vec4;

export function floor(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
