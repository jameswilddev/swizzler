import { Vec4Primitive, Vec3Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function wyz(a: Expression<Vec4Primitive>): Expression<Vec3Primitive> {
  return new Expression(
    new SwizzleImplementation("vec3", a.javascript, [3, 1, 2]),
    new PropertyImplementation("vec3", a.glsl, "wyz")
  );
}

export const agb = wyz;
export const qtp = wyz;
