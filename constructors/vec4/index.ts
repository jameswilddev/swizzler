import { vec4Placeholder } from "../../helpers";
import { Base, Castable, Mat2, Vec4 } from "../../primitive";
import { Four } from "../total-components";

export function vec4(a: Base | Mat2): Vec4;

export function vec4(...a: Four): Vec4;

export function vec4(...args: ReadonlyArray<Castable>): Vec4 {
  args;

  return vec4Placeholder;
}
