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

export function x(
  a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>
): Expression<FloatPrimitive>;

export function x(
  a: Expression<Bvec2Primitive | Bvec3Primitive | Bvec4Primitive>
): Expression<BoolPrimitive>;

export function x(a: Expression<AnyPrimitive>): Expression<BasePrimitive> {
  const primitive = primitiveBases[a.primitive];

  return new Expression(
    new SwizzleImplementation(primitive, a.javascript, [0]),
    new PropertyImplementation(primitive, a.glsl, "x")
  );
}

export const r = x;
export const s = x;
