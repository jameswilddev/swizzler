import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function asin(x: Float): Float;

export function asin(x: Vec2): Vec2;

export function asin(x: Vec3): Vec3;

export function asin(x: Vec4): Vec4;

export function asin(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
