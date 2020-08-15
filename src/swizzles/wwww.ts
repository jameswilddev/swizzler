import { Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function wwww(a: Expression<Vec4Primitive>): Expression<Vec4Primitive> {
  return new Expression(
    new SwizzleImplementation("vec4", a.javascript, [3, 3, 3, 3]),
    new PropertyImplementation("vec4", a.glsl, "wwww")
  );
}

export const aaaa = wwww;
export const qqqq = wwww;
