import { Mat2, Base, Ivec4, Castable } from "../../primitive";
import { Four } from "../total-components";
import { ivec4Placeholder } from "../../helpers";

export function ivec4(a: Base | Mat2): Ivec4;

export function ivec4(...a: Four): Ivec4;

export function ivec4(...args: ReadonlyArray<Castable>): Ivec4 {
  args;

  return ivec4Placeholder;
}
