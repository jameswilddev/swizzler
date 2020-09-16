import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function min(x: Float, y: Float): Float;

export function min(x: Vec2, y: Float): Vec2;

export function min(x: Vec2, y: Vec2): Vec2;

export function min(x: Vec3, y: Float): Vec3;

export function min(x: Vec3, y: Vec3): Vec3;

export function min(x: Vec4, y: Float): Vec4;

export function min(x: Vec4, y: Vec4): Vec4;

export function min(x: AnyFloat, y: AnyFloat): AnyFloat {
  x;
  y;

  return floatPlaceholder;
}
