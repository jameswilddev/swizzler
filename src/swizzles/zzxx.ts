import { Vec3Primitive, Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function zzxx(
  a: Expression<Vec3Primitive | Vec4Primitive>
): Expression<Vec4Primitive> {
  return new Expression(
    new SwizzleImplementation("vec4", a.javascript, [2, 2, 0, 0]),
    new PropertyImplementation("vec4", a.glsl, "zzxx")
  );
}

export const bbrr = zzxx;
export const ppss = zzxx;
