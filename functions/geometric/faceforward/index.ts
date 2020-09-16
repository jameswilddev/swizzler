import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function faceforward(n: Float, i: Float, nRef: Float): Float;

export function faceforward(n: Vec2, i: Vec2, nRef: Vec2): Vec2;

export function faceforward(n: Vec3, i: Vec3, nRef: Vec3): Vec3;

export function faceforward(n: Vec4, i: Vec4, nRef: Vec4): Vec4;

export function faceforward(
  n: AnyFloat,
  i: AnyFloat,
  nRef: AnyFloat
): AnyFloat {
  n;
  i;
  nRef;

  return floatPlaceholder;
}
