import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function inversesqrt(x: Float): Float;

export function inversesqrt(x: Vec2): Vec2;

export function inversesqrt(x: Vec3): Vec3;

export function inversesqrt(x: Vec4): Vec4;

export function inversesqrt(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
