import { vec2Placeholder } from "../../helpers";
import { Base, Castable, Vec2 } from "../../primitive";
import { Two } from "../total-components";

export function vec2(a: Base): Vec2;

export function vec2(...a: Two): Vec2;

export function vec2(...args: ReadonlyArray<Castable>): Vec2 {
  args;

  return vec2Placeholder;
}
