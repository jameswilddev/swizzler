import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function atan(x: Float): Float;

export function atan(x: Vec2): Vec2;

export function atan(x: Vec3): Vec3;

export function atan(x: Vec4): Vec4;

export function atan(y: Float, x: Float): Float;

export function atan(y: Vec2, x: Vec2): Vec2;

export function atan(y: Vec3, x: Vec3): Vec3;

export function atan(y: Vec4, x: Vec4): Vec4;

export function atan(...args: ReadonlyArray<AnyFloat>): AnyFloat {
  args;

  return floatPlaceholder;
}
