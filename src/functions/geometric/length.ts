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

export function length(
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function length(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function length(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function length(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function length(
  x: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  const primitive = x.primitive;

  return new Expression(
    new FunctionImplementation("float", "Math.sqrt", [
      new AggregateImplementation(
        "float",
        "+",
        new BinaryOperatorImplementation(
          primitive,
          x.javascript,
          "*",
          x.javascript
        )
      ),
    ]),
    new FunctionImplementation("float", "length", [x.glsl])
  );
}
