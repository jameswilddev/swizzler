import { Vec4Primitive } from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function wxyx(a: Expression<Vec4Primitive>): Expression<Vec4Primitive> {
  return new Expression(
    new SwizzleImplementation("vec4", a.javascript, [3, 0, 1, 0]),
    new PropertyImplementation("vec4", a.glsl, "ws")
  );
}

export const argr = wxyx;
export const qsts = wxyx;
