import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function xy(
  a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>
): Expression<FloatPrimitive> {
  return new Expression(
    new SwizzleImplementation("float", a.javascript, [0, 1]),
    new PropertyImplementation("float", a.glsl, "xy")
  );
}

export const rg = xy;
export const st = xy;
