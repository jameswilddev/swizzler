import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";

export function cos(
  angle: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function cos(
  angle: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function cos(
  angle: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function cos(
  angle: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function cos(
  angle: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  angle;

  throw new Error("Not implemented.");
}
