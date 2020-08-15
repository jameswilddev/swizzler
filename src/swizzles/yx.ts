import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../primitive";
import { Expression } from "../expression";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";

export function yx(
  a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>
): Expression<FloatPrimitive> {
  return new Expression(
    new SwizzleImplementation("float", a.javascript, [1, 0]),
    new PropertyImplementation("float", a.glsl, "yx")
  );
}

export const gr = yx;
export const ts = yx;
