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

type Five =
  | readonly [...Three, ...Two]
  | readonly [...Two, ...Three]
  | readonly [...Four, ...One]
  | readonly [...One, ...Four];

type Six =
  | readonly [...Five, ...One]
  | readonly [...One, ...Five]
  | readonly [...Four, ...Two]
  | readonly [...Two, ...Four]
  | readonly [...Three, ...Three];

type Seven =
  | readonly [...Six, ...One]
  | readonly [...One, ...Six]
  | readonly [...Five, ...Two]
  | readonly [...Two, ...Five]
  | readonly [...Four, ...Three]
  | readonly [...Three, ...Four];

type Eight =
  | readonly [...Seven, ...One]
  | readonly [...One, ...Seven]
  | readonly [...Six, ...Two]
  | readonly [...Two, ...Six]
  | readonly [...Five, ...Three]
  | readonly [...Three, ...Five]
  | readonly [...Four, ...Four];

type Nine =
  | readonly [...Eight, ...One]
  | readonly [...One, ...Eight]
  | readonly [...Seven, ...Two]
  | readonly [...Two, ...Seven]
  | readonly [...Six, ...Three]
  | readonly [...Three, ...Six]
  | readonly [...Five, ...Four]
  | readonly [...Four, ...Five];

export function mat3(a: Expression<FloatPrimitive>): Expression<Mat3Primitive>;
export function mat3(a: Expression<Mat2Primitive>): Expression<Mat3Primitive>;
export function mat3(a: Expression<Mat4Primitive>): Expression<Mat3Primitive>;
export function mat3(...args: Nine): Expression<Mat3Primitive>;

export function mat3(
  ...args: ReadonlyArray<Expression<AnyFloatPrimitive>>
): Expression<Mat3Primitive> {
  if (args.length === 1) {
    return new Expression(
      new MatrixResizeImplementation("mat3", args[0].javascript),
      new FunctionImplementation(
        "mat3",
        "mat3",
        args.map((arg) => arg.glsl)
      )
    );
  } else {
    return new Expression(
      new ConcatenateImplementation(
        "mat3",
        4,
        args.map((arg) => arg.javascript)
      ),
      new FunctionImplementation(
        "mat3",
        "mat3",
        args.map((arg) => arg.glsl)
      )
    );
  }
}
