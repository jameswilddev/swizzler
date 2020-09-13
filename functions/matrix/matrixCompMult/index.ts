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
  x: Expression<Mat2Primitive>,
  y: Expression<Mat2Primitive>
): Expression<Mat2Primitive>;

export function matrixCompMult(
  x: Expression<Mat3Primitive>,
  y: Expression<Mat3Primitive>
): Expression<Mat3Primitive>;

export function matrixCompMult(
  x: Expression<Mat4Primitive>,
  y: Expression<Mat4Primitive>
): Expression<Mat4Primitive>;

export function matrixCompMult(
  x: Expression<AnyFloatPrimitive>,
  y: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  return new Expression(
    new BinaryOperatorImplementation(
      a.primitive,
      x.javascript,
      "*",
      y.javascript
    ),
    new FunctionImplementation(a.primitive, "matrixCompMult", [x.glsl, y.glsl])
  );
}
