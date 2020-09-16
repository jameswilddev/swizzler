import { boolPlaceholder } from "../../helpers";
import { AnyBool, Bool, Bvec2, Bvec3, Bvec4 } from "../../primitive";

export function not(a: Bool): Bool;

export function not(a: Bvec2): Bvec2;

export function not(a: Bvec3): Bvec3;

export function not(a: Bvec4): Bvec4;

export function not(a: AnyBool): AnyBool {
  a;

  return boolPlaceholder;
}
