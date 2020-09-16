import { floatPlaceholder } from "../../../helpers";
import { AnyFloat, Mat2, Mat3, Mat4 } from "../../../primitive";

export function matrixCompMult(x: Mat2, y: Mat2): Mat2;

export function matrixCompMult(x: Mat3, y: Mat3): Mat3;

export function matrixCompMult(x: Mat4, y: Mat4): Mat4;

export function matrixCompMult(x: AnyFloat, y: AnyFloat): AnyFloat {
  x;
  y;

  return floatPlaceholder;
}
