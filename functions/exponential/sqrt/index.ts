import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function sqrt(x: Float): Float;

export function sqrt(x: Vec2): Vec2;

export function sqrt(x: Vec3): Vec3;

export function sqrt(x: Vec4): Vec4;

export function sqrt(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
