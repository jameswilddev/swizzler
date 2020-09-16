import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function exp(x: Float): Float;

export function exp(x: Vec2): Vec2;

export function exp(x: Vec3): Vec3;

export function exp(x: Vec4): Vec4;

export function exp(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
