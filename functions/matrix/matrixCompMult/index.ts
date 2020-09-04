import {
  Mat2Primitive,
  Mat3Primitive,
  Mat4Primitive,
  AnyFloatPrimitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { BinaryOperatorImplementation } from "../../../implementations/binary-implementation";
import { FunctionImplementation } from "../../../implementations/function-implementation";

export function matrixCompMult(
  a: Expression<Mat2Primitive>,
  b: Expression<Mat2Primitive>
): Expression<Mat2Primitive>;

export function matrixCompMult(
  a: Expression<Mat3Primitive>,
  b: Expression<Mat3Primitive>
): Expression<Mat3Primitive>;

export function matrixCompMult(
  a: Expression<Mat4Primitive>,
  b: Expression<Mat4Primitive>
): Expression<Mat4Primitive>;

export function matrixCompMult(
  a: Expression<AnyFloatPrimitive>,
  b: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  return new Expression(
    new BinaryOperatorImplementation(
      a.primitive,
      a.javascript,
      "*",
      b.javascript
    ),
    new FunctionImplementation(a.primitive, "matrixCompMult", [a.glsl, b.glsl])
  );
}
