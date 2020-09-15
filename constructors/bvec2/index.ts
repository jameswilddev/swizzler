import {
  AnyCastablePrimitive,
  BasePrimitive,
  Bvec2Primitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { Two } from "../total-components";

export function bvec2(a: Expression<BasePrimitive>): Expression<Bvec2Primitive>;

export function bvec2(...a: Two): Expression<Bvec2Primitive>;

export function bvec2(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Bvec2Primitive> {
  args;

  return new Expression("bvec2");
}
