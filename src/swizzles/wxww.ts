import { Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function wxww(a: Expression<Vec4Primitive>): Expression<Vec4Primitive> {
  return new Expression(
    new SwizzleImplementation("vec4", a.javascript, [3, 0, 3, 3]),
    new PropertyImplementation("vec4", a.glsl, "wxww")
  );
}

export const araa = wxww;
export const qsqq = wxww;
