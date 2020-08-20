import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Mat2Primitive,
  AnyFloatPrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";
import { LiteralImplementation } from "../../implementations/literal-implementation";

export function mat2(a: Expression<FloatPrimitive>): Expression<Mat2Primitive>;

export function mat2(
  a: Expression<FloatPrimitive>,
  b: Expression<FloatPrimitive>,
  c: Expression<FloatPrimitive>,
  d: Expression<FloatPrimitive>
): Expression<Mat2Primitive>;

export function mat2(
  a: Expression<Vec2Primitive>,
  b: Expression<FloatPrimitive>,
  c: Expression<FloatPrimitive>
): Expression<Mat2Primitive>;

export function mat2(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec2Primitive>,
  c: Expression<FloatPrimitive>
): Expression<Mat2Primitive>;

export function mat2(
  a: Expression<FloatPrimitive>,
  b: Expression<FloatPrimitive>,
  c: Expression<Vec2Primitive>
): Expression<Mat2Primitive>;

export function mat2(
  a: Expression<Vec2Primitive>,
  b: Expression<Vec2Primitive>
): Expression<Mat2Primitive>;

export function mat2(
  a: Expression<Vec3Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Mat2Primitive>;

export function mat2(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec3Primitive>
): Expression<Mat2Primitive>;

export function mat2(
  ...args: ReadonlyArray<Expression<AnyFloatPrimitive>>
): Expression<Mat2Primitive> {
  if (args.length === 1 && args[0].primitive === "float") {
    return new Expression(
      new ConcatenateImplementation("mat2", 4, [
        args[0].javascript,
        new LiteralImplementation("float", ["0"]),
        new LiteralImplementation("float", ["0"]),
        args[0].javascript,
      ]),
      new FunctionImplementation(
        "mat2",
        "mat2",
        args.map((arg) => arg.glsl)
      )
    );
  } else {
    return new Expression(
      new ConcatenateImplementation(
        "mat2",
        4,
        args.map((arg) => arg.javascript)
      ),
      new FunctionImplementation(
        "mat2",
        "mat2",
        args.map((arg) => arg.glsl)
      )
    );
  }
}
