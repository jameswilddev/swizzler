import { Vec3Primitive, Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function zyxx(
  a: Expression<Vec3Primitive | Vec4Primitive>
): Expression<Vec4Primitive> {
  return new Expression(
    new SwizzleImplementation("vec4", a.javascript, [2, 1, 0, 0]),
    new PropertyImplementation("vec4", a.glsl, "zyxx")
  );
}

export const bgrr = zyxx;
export const ptss = zyxx;
