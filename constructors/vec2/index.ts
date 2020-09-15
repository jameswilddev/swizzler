import {
  Vec2Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { Two } from "../total-components";

export function vec2(a: Expression<BasePrimitive>): Expression<Vec2Primitive>;

export function vec2(...a: Two): Expression<Vec2Primitive>;

export function vec2(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Vec2Primitive> {
  args;

  throw new Error("Not implemented.");
}
