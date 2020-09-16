import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function fract(x: Float): Float;

export function fract(x: Vec2): Vec2;

export function fract(x: Vec3): Vec3;

export function fract(x: Vec4): Vec4;

export function fract(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
