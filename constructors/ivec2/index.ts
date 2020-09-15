import {
  Ivec2Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { Two } from "../total-components";

export function ivec2(a: Expression<BasePrimitive>): Expression<Ivec2Primitive>;

export function ivec2(...a: Two): Expression<Ivec2Primitive>;

export function ivec2(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Ivec2Primitive> {
  args;

  return new Expression("ivec2");
}
