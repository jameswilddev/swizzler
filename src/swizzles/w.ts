import { FloatPrimitive, Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function w(a: Expression<Vec4Primitive>): Expression<FloatPrimitive> {
  return new Expression(
    new SwizzleImplementation("float", a.javascript, [3]),
    new PropertyImplementation("float", a.glsl, "w")
  );
}

export const a = w;
export const q = w;
