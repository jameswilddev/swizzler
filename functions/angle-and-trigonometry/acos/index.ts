import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function acos(x: Float): Float;

export function acos(x: Vec2): Vec2;

export function acos(x: Vec3): Vec3;

export function acos(x: Vec4): Vec4;

export function acos(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
