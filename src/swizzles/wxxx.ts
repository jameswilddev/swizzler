import { Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function wxxx(a: Expression<Vec4Primitive>): Expression<Vec4Primitive> {
  return new Expression(
    new SwizzleImplementation("vec4", a.javascript, [3, 0, 0, 0]),
    new PropertyImplementation("vec4", a.glsl, "ws")
  );
}

export const arrr = wxxx;
export const qsss = wxxx;
