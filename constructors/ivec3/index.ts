import { ivec3Placeholder } from "../../helpers";
import { Base, Castable, Ivec3 } from "../../primitive";
import { Three } from "../total-components";

export function ivec3(a: Base): Ivec3;

export function ivec3(...a: Three): Ivec3;

export function ivec3(...args: ReadonlyArray<Castable>): Ivec3 {
  args;

  return ivec3Placeholder;
}
