import { FloatPrimitive, Vec3Primitive, Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function z(
  a: Expression<Vec3Primitive | Vec4Primitive>
): Expression<FloatPrimitive> {
  return new Expression(
    new SwizzleImplementation("float", a.javascript, [2]),
    new PropertyImplementation("float", a.glsl, "z")
  );
}

export const b = z;
export const p = z;
