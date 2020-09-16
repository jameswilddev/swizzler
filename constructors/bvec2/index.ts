import { bvec2Placeholder } from "../../helpers";
import { Base, Bvec2, Castable } from "../../primitive";
import { Two } from "../total-components";

export function bvec2(a: Base): Bvec2;

export function bvec2(...a: Two): Bvec2;

export function bvec2(...args: ReadonlyArray<Castable>): Bvec2 {
  args;

  return bvec2Placeholder;
}
