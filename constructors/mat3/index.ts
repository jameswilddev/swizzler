import { mat3Placeholder } from "../../helpers";
import { Base, Mat2, Mat3, Mat4, Any } from "../../primitive";
import { Nine } from "../total-components";

export function mat3(a: Base | Mat2 | Mat3 | Mat4): Mat3;
export function mat3(...args: Nine): Mat3;

export function mat3(...args: ReadonlyArray<Any>): Mat3 {
  args;

  return mat3Placeholder;
}
