import { Vec4Primitive, Vec2Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function wz(a: Expression<Vec4Primitive>): Expression<Vec2Primitive> {
  return new Expression(
    new SwizzleImplementation("vec2", a.javascript, [3, 2]),
    new PropertyImplementation("vec2", a.glsl, "wz")
  );
}

export const ab = wz;
export const qp = wz;
