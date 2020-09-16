import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function tan(angle: Float): Float;

export function tan(angle: Vec2): Vec2;

export function tan(angle: Vec3): Vec3;

export function tan(angle: Vec4): Vec4;

export function tan(angle: AnyFloat): AnyFloat {
  angle;

  return floatPlaceholder;
}
