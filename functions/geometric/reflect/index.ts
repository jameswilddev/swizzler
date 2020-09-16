import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function reflect(i: Float, n: Float): Float;

export function reflect(i: Vec2, n: Vec2): Vec2;

export function reflect(i: Vec3, n: Vec3): Vec3;

export function reflect(i: Vec4, n: Vec4): Vec4;

export function reflect(i: AnyFloat, n: AnyFloat): AnyFloat {
  i;
  n;

  return floatPlaceholder;
}
