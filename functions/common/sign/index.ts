import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function sign(x: Float): Float;

export function sign(x: Vec2): Vec2;

export function sign(x: Vec3): Vec3;

export function sign(x: Vec4): Vec4;

export function sign(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
