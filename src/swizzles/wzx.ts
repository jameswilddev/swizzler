import { Vec4Primitive, Vec3Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function wzx(a: Expression<Vec4Primitive>): Expression<Vec3Primitive> {
  return new Expression(
    new SwizzleImplementation("vec3", a.javascript, [3, 2, 0]),
    new PropertyImplementation("vec3", a.glsl, "wzx")
  );
}

export const abr = wzx;
export const qps = wzx;
