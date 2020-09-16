import { Three } from "../total-components";
import { vec3Placeholder } from "../../helpers";
import { Base, Castable, Vec3 } from "../../primitive";

export function vec3(a: Base): Vec3;

export function vec3(...a: Three): Vec3;

export function vec3(...args: ReadonlyArray<Castable>): Vec3 {
  args;

  return vec3Placeholder;
}
