import {
  FloatPrimitive,
  Vec4Primitive,
  BasePrimitive,
  BoolPrimitive,
  Bvec4Primitive,
  AnyPrimitive,
  primitiveBases,
} from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function w(a: Expression<Vec4Primitive>): Expression<FloatPrimitive>;

export function w(a: Expression<Bvec4Primitive>): Expression<BoolPrimitive>;

export function w(a: Expression<AnyPrimitive>): Expression<BasePrimitive> {
  const primitive = primitiveBases[a.primitive];

  return new Expression(
    new SwizzleImplementation(primitive, a.javascript, [3]),
    new PropertyImplementation(primitive, a.glsl, "w")
  );
}

export const a = w;
export const q = w;
