import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function ceil(x: Float): Float;

export function ceil(x: Vec2): Vec2;

export function ceil(x: Vec3): Vec3;

export function ceil(x: Vec4): Vec4;

export function ceil(x: AnyFloat): AnyFloat {
  x;

  return floatPlaceholder;
}
