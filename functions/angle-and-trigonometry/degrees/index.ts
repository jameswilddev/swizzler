import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function degrees(
  radians: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function degrees(
  radians: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function degrees(
  radians: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function degrees(
  radians: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function degrees(
  radians: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  radians;

  throw new Error("Not implemented.");
}
