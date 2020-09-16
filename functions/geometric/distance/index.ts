import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function distance(p0: Float, p1: Float): Float;

export function distance(p0: Vec2, p1: Vec2): Float;

export function distance(p0: Vec3, p1: Vec3): Float;

export function distance(p0: Vec4, p1: Vec4): Float;

export function distance(p0: AnyFloat, p1: AnyFloat): Float {
  p0;
  p1;

  return floatPlaceholder;
}
