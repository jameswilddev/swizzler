import { FloatPrimitive, Vec2Primitive, AnyFloatPrimitive } from "../primitive";
import { ConcatenateImplementation } from "../implementations/concatenate-implementation";
import { FunctionImplementation } from "../implementations/function-implementation";
import { Expression } from "../expression";

export function vec2(a: Expression<FloatPrimitive>): Expression<Vec2Primitive>;

export function vec2(
  a: Expression<FloatPrimitive>,
  b: Expression<FloatPrimitive>
): Expression<Vec2Primitive>;

export function vec2(
  ...args: ReadonlyArray<Expression<AnyFloatPrimitive>>
): Expression<Vec2Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      "vec2",
      2,
      args.map((arg) => arg.javascript)
    ),
    new FunctionImplementation(
      "vec2",
      "vec2",
      args.map((arg) => arg.glsl)
    )
  );
}
