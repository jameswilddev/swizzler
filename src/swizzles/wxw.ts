import { Vec4Primitive, Vec3Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function wxw(a: Expression<Vec4Primitive>): Expression<Vec3Primitive> {
  return new Expression(
    new SwizzleImplementation("vec3", a.javascript, [3, 0, 3]),
    new PropertyImplementation("vec3", a.glsl, "wxw")
  );
}

export const ara = wxw;
export const qsq = wxw;
