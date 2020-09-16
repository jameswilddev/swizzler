import { mat4Placeholder } from "../../helpers";
import { Any, Base, Mat2, Mat3, Mat4 } from "../../primitive";
import { Sixteen } from "../total-components";

export function mat4(a: Base | Mat2 | Mat3 | Mat4): Mat4;
export function mat4(...args: Sixteen): Mat4;

export function mat4(...args: ReadonlyArray<Any>): Mat4 {
  args;

  return mat4Placeholder;
}
