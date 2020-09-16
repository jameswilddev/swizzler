import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function sin(angle: Float): Float;

export function sin(angle: Vec2): Vec2;

export function sin(angle: Vec3): Vec3;

export function sin(angle: Vec4): Vec4;

export function sin(angle: AnyFloat): AnyFloat {
  angle;

  return floatPlaceholder;
}
