import {
  FloatPrimitive,
  Vec3Primitive,
  Vec4Primitive,
  BasePrimitive,
  BoolPrimitive,
  Bvec3Primitive,
  Bvec4Primitive,
  AnyPrimitive,
  primitiveBases,
} from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function z(
  a: Expression<Vec3Primitive | Vec4Primitive>
): Expression<FloatPrimitive>;

export function z(
  a: Expression<Bvec3Primitive | Bvec4Primitive>
): Expression<BoolPrimitive>;

export function z(a: Expression<AnyPrimitive>): Expression<BasePrimitive> {
  const primitive = primitiveBases[a.primitive];

  return new Expression(
    new SwizzleImplementation(primitive, a.javascript, [2]),
    new PropertyImplementation(primitive, a.glsl, "z")
  );
}

export const b = z;
export const p = z;
