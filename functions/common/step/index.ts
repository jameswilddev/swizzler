import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Float, Vec2, Vec3, Vec4 } from "../../../primitive";

export function step(edge: Float, x: Float): Float;

export function step(edge: Float, x: Vec2): Vec2;

export function step(edge: Vec2, x: Vec2): Vec2;

export function step(edge: Float, x: Vec3): Vec3;

export function step(edge: Vec3, x: Vec3): Vec3;

export function step(edge: Float, x: Vec4): Vec4;

export function step(edge: Vec4, x: Vec4): Vec4;

export function step(edge: AnyFloat, x: AnyFloat): AnyFloat {
  edge;
  x;

  return floatPlaceholder;
}
