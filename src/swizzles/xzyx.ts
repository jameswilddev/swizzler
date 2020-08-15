import { Vec3Primitive, Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function xzyx(
  a: Expression<Vec3Primitive | Vec4Primitive>
): Expression<Vec4Primitive> {
  return new Expression(
    new SwizzleImplementation("vec4", a.javascript, [0, 2, 1, 0]),
    new PropertyImplementation("vec4", a.glsl, "xzyx")
  );
}

export const rbgr = xzyx;
export const spts = xzyx;
