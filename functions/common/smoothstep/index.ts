import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function smoothstep(edge0: Float, edge1: Float, x: Float): Float;

export function smoothstep(edge0: Float, edge1: Float, x: Vec2): Vec2;

export function smoothstep(edge0: Vec2, edge1: Vec2, x: Vec2): Vec2;

export function smoothstep(edge0: Float, edge1: Float, x: Vec3): Vec3;

export function smoothstep(edge0: Vec3, edge1: Vec3, x: Vec3): Vec3;

export function smoothstep(edge0: Float, edge1: Float, x: Vec4): Vec4;

export function smoothstep(edge0: Vec4, edge1: Vec4, x: Vec4): Vec4;

export function smoothstep(
  edge0: AnyFloat,
  edge1: AnyFloat,
  x: AnyFloat
): AnyFloat {
  edge0;
  edge1;
  x;

  return floatPlaceholder;
}
