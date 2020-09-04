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

type Ten =
  | readonly [...Nine, ...One]
  | readonly [...One, ...Nine]
  | readonly [...Eight, ...Two]
  | readonly [...Two, ...Eight]
  | readonly [...Seven, ...Three]
  | readonly [...Three, ...Seven]
  | readonly [...Six, ...Four]
  | readonly [...Four, ...Six]
  | readonly [...Five, ...Five];

type Eleven =
  | readonly [...Ten, ...One]
  | readonly [...One, ...Ten]
  | readonly [...Nine, ...Two]
  | readonly [...Two, ...Nine]
  | readonly [...Eight, ...Three]
  | readonly [...Three, ...Eight]
  | readonly [...Seven, ...Four]
  | readonly [...Four, ...Seven]
  | readonly [...Six, ...Five]
  | readonly [...Five, ...Six];

type Twelve =
  | readonly [...Eleven, ...One]
  | readonly [...One, ...Eleven]
  | readonly [...Ten, ...Two]
  | readonly [...Two, ...Ten]
  | readonly [...Nine, ...Three]
  | readonly [...Three, ...Nine]
  | readonly [...Eight, ...Four]
  | readonly [...Four, ...Eight]
  | readonly [...Seven, ...Five]
  | readonly [...Five, ...Seven]
  | readonly [...Six, ...Six];

type Thirteen =
  | readonly [...Twelve, ...One]
  | readonly [...One, ...Twelve]
  | readonly [...Eleven, ...Two]
  | readonly [...Two, ...Eleven]
  | readonly [...Ten, ...Three]
  | readonly [...Three, ...Ten]
  | readonly [...Nine, ...Four]
  | readonly [...Four, ...Nine]
  | readonly [...Eight, ...Five]
  | readonly [...Five, ...Eight]
  | readonly [...Seven, ...Six]
  | readonly [...Six, ...Seven];

type Fourteen =
  | readonly [...Thirteen, ...One]
  | readonly [...One, ...Thirteen]
  | readonly [...Twelve, ...Two]
  | readonly [...Two, ...Twelve]
  | readonly [...Eleven, ...Three]
  | readonly [...Three, ...Eleven]
  | readonly [...Ten, ...Four]
  | readonly [...Four, ...Ten]
  | readonly [...Nine, ...Five]
  | readonly [...Five, ...Nine]
  | readonly [...Eight, ...Six]
  | readonly [...Six, ...Eight]
  | readonly [...Seven, ...Seven];

type Fifteen =
  | readonly [...Fourteen, ...One]
  | readonly [...One, ...Fourteen]
  | readonly [...Thirteen, ...Two]
  | readonly [...Two, ...Thirteen]
  | readonly [...Twelve, ...Three]
  | readonly [...Three, ...Twelve]
  | readonly [...Eleven, ...Four]
  | readonly [...Four, ...Eleven]
  | readonly [...Ten, ...Five]
  | readonly [...Five, ...Ten]
  | readonly [...Nine, ...Six]
  | readonly [...Six, ...Nine]
  | readonly [...Eight, ...Seven]
  | readonly [...Seven, ...Eight];

type Sixteen =
  | readonly [...Fifteen, ...One]
  | readonly [...One, ...Fifteen]
  | readonly [...Fourteen, ...Two]
  | readonly [...Two, ...Fourteen]
  | readonly [...Thirteen, ...Three]
  | readonly [...Three, ...Thirteen]
  | readonly [...Twelve, ...Four]
  | readonly [...Four, ...Twelve]
  | readonly [...Eleven, ...Five]
  | readonly [...Five, ...Eleven]
  | readonly [...Ten, ...Six]
  | readonly [...Six, ...Ten]
  | readonly [...Nine, ...Seven]
  | readonly [...Seven, ...Nine]
  | readonly [...Eight, ...Eight];

export function mat4(a: Expression<FloatPrimitive>): Expression<Mat4Primitive>;
export function mat4(a: Expression<Mat2Primitive>): Expression<Mat4Primitive>;
export function mat4(a: Expression<Mat3Primitive>): Expression<Mat4Primitive>;
export function mat4(...args: Sixteen): Expression<Mat4Primitive>;

export function mat4(
  ...args: ReadonlyArray<Expression<AnyFloatPrimitive>>
): Expression<Mat4Primitive> {
  if (args.length === 1) {
    return new Expression(
      new MatrixResizeImplementation("mat4", args[0].javascript),
      new FunctionImplementation(
        "mat4",
        "mat4",
        args.map((arg) => arg.glsl)
      )
    );
  } else {
    return new Expression(
      new ConcatenateImplementation(
        "mat4",
        4,
        args.map((arg) => arg.javascript)
      ),
      new FunctionImplementation(
        "mat4",
        "mat4",
        args.map((arg) => arg.glsl)
      )
    );
  }
}
