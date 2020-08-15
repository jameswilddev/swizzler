import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  BasePrimitive,
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
  AnyPrimitive,
  primitiveBases,
} from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function y(
  a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>
): Expression<FloatPrimitive>;

export function y(
  a: Expression<Bvec2Primitive | Bvec3Primitive | Bvec4Primitive>
): Expression<BoolPrimitive>;

export function y(a: Expression<AnyPrimitive>): Expression<BasePrimitive> {
  const primitive = primitiveBases[a.primitive];

  return new Expression(
    new SwizzleImplementation(primitive, a.javascript, [1]),
    new PropertyImplementation(primitive, a.glsl, "y")
  );
}

export const g = y;
export const t = y;
