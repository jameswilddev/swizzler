import { Vec4Primitive, Vec2Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function wy(a: Expression<Vec4Primitive>): Expression<Vec2Primitive> {
  return new Expression(
    new SwizzleImplementation("vec2", a.javascript, [3, 1]),
    new PropertyImplementation("vec2", a.glsl, "wy")
  );
}

export const ag = wy;
export const qt = wy;
