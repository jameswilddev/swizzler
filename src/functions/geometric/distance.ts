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

export function distance(
  p0: Expression<FloatPrimitive>,
  p1: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function distance(
  p0: Expression<Vec2Primitive>,
  p1: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function distance(
  p0: Expression<Vec3Primitive>,
  p1: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function distance(
  p0: Expression<Vec4Primitive>,
  p1: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function distance(
  p0: Expression<AnyFloatPrimitive>,
  p1: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  const primitive = p0.primitive;

  const javascriptDifference = new BinaryOperatorImplementation(
    primitive,
    p0.javascript,
    "-",
    p1.javascript
  );

  return new Expression(
    new FunctionImplementation("float", "Math.sqrt", [
      new AggregateImplementation(
        "float",
        "+",
        new BinaryOperatorImplementation(
          primitive,
          javascriptDifference,
          "*",
          javascriptDifference
        )
      ),
    ]),
    new FunctionImplementation("float", "distance", [p0.glsl, p1.glsl])
  );
}
