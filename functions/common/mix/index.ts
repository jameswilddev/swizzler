import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function mix(x: Float, y: Float, a: Float): Float;

export function mix(x: Vec2, y: Vec2, a: Float): Vec2;

export function mix(x: Vec2, y: Vec2, a: Vec2): Vec2;

export function mix(x: Vec3, y: Vec3, a: Float): Vec3;

export function mix(x: Vec3, y: Vec3, a: Vec3): Vec3;

export function mix(x: Vec4, y: Vec4, a: Float): Vec4;

export function mix(x: Vec4, y: Vec4, a: Vec4): Vec4;

export function mix(x: AnyFloat, y: AnyFloat, a: AnyFloat): AnyFloat {
  x;
  y;
  a;

  return floatPlaceholder;
}
