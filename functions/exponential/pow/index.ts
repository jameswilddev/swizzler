import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function pow(x: Float, y: Float): Float;

export function pow(x: Vec2, y: Vec2): Vec2;

export function pow(x: Vec3, y: Vec3): Vec3;

export function pow(x: Vec4, y: Vec4): Vec4;

export function pow(x: AnyFloat, y: AnyFloat): AnyFloat {
  x;
  y;

  return floatPlaceholder;
}
