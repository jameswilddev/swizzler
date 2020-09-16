import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function max(x: Float, y: Float): Float;

export function max(x: Vec2, y: Float): Vec2;

export function max(x: Vec2, y: Vec2): Vec2;

export function max(x: Vec3, y: Float): Vec3;

export function max(x: Vec3, y: Vec3): Vec3;

export function max(x: Vec4, y: Float): Vec4;

export function max(x: Vec4, y: Vec4): Vec4;

export function max(x: AnyFloat, y: AnyFloat): AnyFloat {
  x;
  y;

  return floatPlaceholder;
}
