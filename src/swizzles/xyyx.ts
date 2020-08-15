import { Vec2Primitive, Vec3Primitive, Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function xyyx(
  a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>
): Expression<Vec4Primitive> {
  return new Expression(
    new SwizzleImplementation("vec4", a.javascript, [0, 1, 1, 0]),
    new PropertyImplementation("vec4", a.glsl, "xyyx")
  );
}

export const rggr = xyyx;
export const stts = xyyx;
