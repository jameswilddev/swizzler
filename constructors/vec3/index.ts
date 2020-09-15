import {
  Vec3Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { Three } from "../total-components";

export function vec3(a: Expression<BasePrimitive>): Expression<Vec3Primitive>;

export function vec3(...a: Three): Expression<Vec3Primitive>;

export function vec3(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Vec3Primitive> {
  args;

  return new Expression("vec3");
}
