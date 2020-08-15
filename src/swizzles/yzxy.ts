import { Vec3Primitive, Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function yzxy(
  a: Expression<Vec3Primitive | Vec4Primitive>
): Expression<Vec4Primitive> {
  return new Expression(
    new SwizzleImplementation("vec4", a.javascript, [1, 2, 0, 1]),
    new PropertyImplementation("vec4", a.glsl, "xzzz")
  );
}

export const gbrg = yzxy;
export const tpst = yzxy;
