import { Vec2Primitive, Vec3Primitive, Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function xx(
  a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>
): Expression<Vec2Primitive> {
  return new Expression(
    new SwizzleImplementation("vec2", a.javascript, [0, 0]),
    new PropertyImplementation("vec2", a.glsl, "xx")
  );
}

export const rr = xx;
export const ss = xx;
