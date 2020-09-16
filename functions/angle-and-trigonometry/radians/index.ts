import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function radians(degrees: Float): Float;

export function radians(degrees: Vec2): Vec2;

export function radians(degrees: Vec3): Vec3;

export function radians(degrees: Vec4): Vec4;

export function radians(degrees: AnyFloat): AnyFloat {
  degrees;

  return floatPlaceholder;
}
