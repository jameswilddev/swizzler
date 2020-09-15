import {
  Ivec3Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { Three } from "../total-components";

export function ivec3(a: Expression<BasePrimitive>): Expression<Ivec3Primitive>;

export function ivec3(...a: Three): Expression<Ivec3Primitive>;

export function ivec3(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Ivec3Primitive> {
  args;

  throw new Error("Not implemented.");
}
