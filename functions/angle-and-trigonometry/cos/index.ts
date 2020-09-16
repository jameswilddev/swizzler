import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function cos(angle: Float): Float;

export function cos(angle: Vec2): Vec2;

export function cos(angle: Vec3): Vec3;

export function cos(angle: Vec4): Vec4;

export function cos(angle: AnyFloat): AnyFloat {
  angle;

  return floatPlaceholder;
}
