import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function mod(x: Float, y: Float): Float;

export function mod(x: Vec2, y: Float): Vec2;

export function mod(x: Vec2, y: Vec2): Vec2;

export function mod(x: Vec3, y: Float): Vec3;

export function mod(x: Vec3, y: Vec3): Vec3;

export function mod(x: Vec4, y: Float): Vec4;

export function mod(x: Vec4, y: Vec4): Vec4;

export function mod(x: AnyFloat, y: AnyFloat): AnyFloat {
  x;
  y;

  return floatPlaceholder;
}
