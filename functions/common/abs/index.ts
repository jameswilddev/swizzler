import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function abs(x: Float): Float;

export function abs(x: Vec2): Vec2;

export function abs(x: Vec3): Vec3;

export function abs(x: Vec4): Vec4;

export function abs(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
