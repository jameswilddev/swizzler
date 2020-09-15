import { Expression } from "../../expression";
import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  IntPrimitive,
  Ivec2Primitive,
  Ivec3Primitive,
  Ivec4Primitive,
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
  AnyFloatPrimitive,
  AnyBoolPrimitive,
  AnyCastablePrimitive,
} from "../../primitive";

export function lessThan(
  a: Expression<FloatPrimitive>,
  b: Expression<FloatPrimitive>
): Expression<BoolPrimitive>;

export function lessThan(
  a: Expression<Vec2Primitive>,
  b: Expression<Vec2Primitive>
): Expression<Bvec2Primitive>;

export function lessThan(
  a: Expression<Vec3Primitive>,
  b: Expression<Vec3Primitive>
): Expression<Bvec3Primitive>;

export function lessThan(
  a: Expression<Vec4Primitive>,
  b: Expression<Vec4Primitive>
): Expression<Bvec4Primitive>;

export function lessThan(
  a: Expression<IntPrimitive>,
  b: Expression<IntPrimitive>
): Expression<BoolPrimitive>;

export function lessThan(
  a: Expression<Ivec2Primitive>,
  b: Expression<Ivec2Primitive>
): Expression<Bvec2Primitive>;

export function lessThan(
  a: Expression<Ivec3Primitive>,
  b: Expression<Ivec3Primitive>
): Expression<Bvec3Primitive>;

export function lessThan(
  a: Expression<Ivec4Primitive>,
  b: Expression<Ivec4Primitive>
): Expression<Bvec4Primitive>;

export function lessThan<
  TPrimitive extends AnyFloatPrimitive & AnyCastablePrimitive
>(
  a: Expression<TPrimitive>,
  b: Expression<TPrimitive>
): Expression<AnyBoolPrimitive> {
  a;
  b;

  throw new Error("Not implemented.");
}
