import { Vec2Primitive, Vec3Primitive, Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function yyx(
  a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>
): Expression<Vec3Primitive> {
  return new Expression(
    new SwizzleImplementation("vec3", a.javascript, [1, 1, 0]),
    new PropertyImplementation("vec3", a.glsl, "yyx")
  );
}

export const ggr = yyx;
export const tts = yyx;
