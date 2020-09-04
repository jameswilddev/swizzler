import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  Mat2Primitive,
  Mat3Primitive,
  Mat4Primitive,
  AnyFloatPrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";
import { MatrixResizeImplementation } from "../../implementations/matrix-resize-implementation";

type One = readonly [Expression<FloatPrimitive>];

type Two = readonly [Expression<Vec2Primitive>] | readonly [...One, ...One];

type Three =
  | readonly [Expression<Vec3Primitive>]
  | readonly [...Two, ...One]
  | readonly [...One, ...Two];

type Four =
  | readonly [Expression<Vec4Primitive>]
  | readonly [...Three, ...One]
  | readonly [...One, ...Three]
  | readonly [...Two, ...Two];

export function mat2(a: Expression<FloatPrimitive>): Expression<Mat2Primitive>;
export function mat2(a: Expression<Mat3Primitive>): Expression<Mat2Primitive>;
export function mat2(a: Expression<Mat4Primitive>): Expression<Mat2Primitive>;
export function mat2(...args: Four): Expression<Mat2Primitive>;

export function mat2(
  ...args: ReadonlyArray<Expression<AnyFloatPrimitive>>
): Expression<Mat2Primitive> {
  if (args.length === 1 && args[0].primitive.startsWith("mat")) {
    return new Expression(
      new MatrixResizeImplementation("mat2", args[0].javascript),
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
