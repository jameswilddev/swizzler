import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function length(x: Float): Float;

export function length(x: Vec2): Float;

export function length(x: Vec3): Float;

export function length(x: Vec4): Float;

export function length(x: AnyFloat): Float {
  x;

  return floatPlaceholder;
}
