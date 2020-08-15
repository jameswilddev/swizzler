import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { BinaryOperatorImplementation } from "../../implementations/binary-implementation";
import { LiteralImplementation } from "../../implementations/literal-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";

export function degrees(
  degrees: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function degrees(
  degrees: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function degrees(
  degrees: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function degrees(
  degrees: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function degrees(
  degrees: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  const primitive = degrees.primitive;

  return new Expression(
    new BinaryOperatorImplementation(
      primitive,
      degrees.javascript,
      "*",
      new LiteralImplementation("float", [JSON.stringify(180 / Math.PI)])
    ),
    new FunctionImplementation(primitive, "degrees", [degrees.glsl])
  );
}
