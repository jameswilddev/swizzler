import { Vec2Primitive, Vec3Primitive, Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function yxy(
  a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>
): Expression<Vec3Primitive> {
  return new Expression(
    new SwizzleImplementation("vec3", a.javascript, [1, 0, 1]),
    new PropertyImplementation("vec3", a.glsl, "yxy")
  );
}

export const grg = yxy;
export const tst = yxy;
