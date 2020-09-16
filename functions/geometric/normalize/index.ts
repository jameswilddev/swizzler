import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function normalize(x: Float): Float;

export function normalize(x: Vec2): Vec2;

export function normalize(x: Vec3): Vec3;

export function normalize(x: Vec4): Vec4;

export function normalize(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
