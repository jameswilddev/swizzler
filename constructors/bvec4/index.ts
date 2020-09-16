import { bvec4Placeholder } from "../../helpers";
import { Base, Bvec4, Castable, Mat2 } from "../../primitive";
import { Four } from "../total-components";

export function bvec4(a: Base | Mat2): Bvec4;

export function bvec4(...a: Four): Bvec4;

export function bvec4(...args: ReadonlyArray<Castable>): Bvec4 {
  args;

  return bvec4Placeholder;
}
