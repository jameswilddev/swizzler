import { Vec2Primitive, Vec3Primitive, Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function xxxx(
  a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>
): Expression<Vec4Primitive> {
  return new Expression(
    new SwizzleImplementation("vec4", a.javascript, [0, 0, 0, 0]),
    new PropertyImplementation("vec4", a.glsl, "xxxx")
  );
}

export const rrrr = xxxx;
export const ssss = xxxx;
