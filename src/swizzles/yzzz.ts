import { Vec3Primitive, Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function yzzz(
  a: Expression<Vec3Primitive | Vec4Primitive>
): Expression<Vec4Primitive> {
  return new Expression(
    new SwizzleImplementation("vec4", a.javascript, [1, 2, 2, 2]),
    new PropertyImplementation("vec4", a.glsl, "yzzz")
  );
}

export const gbbb = yzzz;
export const tppp = yzzz;
