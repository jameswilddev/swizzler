import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function radians(
  degrees: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function radians(
  degrees: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function radians(
  degrees: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function radians(
  degrees: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function radians(
  degrees: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  degrees;

  throw new Error("Not implemented.");
}
