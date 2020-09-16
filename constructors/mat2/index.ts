import { mat2Placeholder } from "../../helpers";
import { Any, Base, Mat2, Mat3, Mat4 } from "../../primitive";
import { Four } from "../total-components";

export function mat2(a: Base | Mat2 | Mat3 | Mat4): Mat2;
export function mat2(...args: Four): Mat2;

export function mat2(...args: ReadonlyArray<Any>): Mat2 {
  args;

  return mat2Placeholder;
}
