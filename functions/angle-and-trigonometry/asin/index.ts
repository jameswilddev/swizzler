import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function asin(x: Expression<FloatPrimitive>): Expression<FloatPrimitive>;

export function asin(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function asin(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function asin(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function asin(
  x: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  x;

  throw new Error("Not implemented.");
}
