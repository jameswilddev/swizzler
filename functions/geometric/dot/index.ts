import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function dot(x: Float, y: Float): Float;

export function dot(x: Vec2, y: Vec2): Float;

export function dot(x: Vec3, y: Vec3): Float;

export function dot(x: Vec4, y: Vec4): Float;

export function dot(x: AnyFloat, y: AnyFloat): Float {
  x;
  y;

  return floatPlaceholder;
}
