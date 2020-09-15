import {
  AnyCastablePrimitive,
  BasePrimitive,
  Bvec3Primitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { Three } from "../total-components";

export function bvec3(a: Expression<BasePrimitive>): Expression<Bvec3Primitive>;

export function bvec3(...a: Three): Expression<Bvec3Primitive>;

export function bvec3(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Bvec3Primitive> {
  args;

  throw new Error("Not implemented.");
}
