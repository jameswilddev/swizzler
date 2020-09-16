import { ivec2Placeholder } from "../../helpers";
import { Base, Castable, Ivec2 } from "../../primitive";
import { Two } from "../total-components";

export function ivec2(a: Base): Ivec2;

export function ivec2(...a: Two): Ivec2;

export function ivec2(...args: ReadonlyArray<Castable>): Ivec2 {
  args;

  return ivec2Placeholder;
}
