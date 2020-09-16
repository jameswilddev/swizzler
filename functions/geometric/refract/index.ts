import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function refract(n: Float, i: Float, eta: Float): Float;

export function refract(n: Vec2, i: Vec2, eta: Float): Vec2;

export function refract(n: Vec3, i: Vec3, eta: Float): Vec3;

export function refract(n: Vec4, i: Vec4, eta: Float): Vec4;

export function refract(i: AnyFloat, n: AnyFloat, eta: AnyFloat): AnyFloat {
  i;
  n;
  eta;

  return floatPlaceholder;
}
