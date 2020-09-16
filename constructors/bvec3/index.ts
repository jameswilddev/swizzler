import { bvec3Placeholder } from "../../helpers";
import { Base, Bvec3, Castable } from "../../primitive";
import { Three } from "../total-components";

export function bvec3(a: Base): Bvec3;

export function bvec3(...a: Three): Bvec3;

export function bvec3(...args: ReadonlyArray<Castable>): Bvec3 {
  args;

  return bvec3Placeholder;
}
