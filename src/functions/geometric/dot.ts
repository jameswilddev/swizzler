import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { AggregateImplementation } from "../../implementations/aggregate-implementation";
import { BinaryOperatorImplementation } from "../../implementations/binary-implementation";

export function dot(
  x: Expression<FloatPrimitive>,
  y: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function dot(
  x: Expression<Vec2Primitive>,
  y: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function dot(
  x: Expression<Vec3Primitive>,
  y: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function dot(
  x: Expression<Vec4Primitive>,
  y: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function dot(
  x: Expression<AnyFloatPrimitive>,
  y: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  const primitive = x.primitive;

  return new Expression(
    new AggregateImplementation(
      "float",
      "+",
      new BinaryOperatorImplementation(
        primitive,
        x.javascript,
        "*",
        y.javascript
      )
    ),
    new FunctionImplementation("float", "dot", [x.glsl, y.glsl])
  );
}
