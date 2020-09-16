import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function log(x: Float): Float;

export function log(x: Vec2): Vec2;

export function log(x: Vec3): Vec3;

export function log(x: Vec4): Vec4;

export function log(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
