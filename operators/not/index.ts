import {
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
  AnyBoolPrimitive,
} from "../../primitive";
import { Expression } from "../../expression";

export function not(a: Expression<BoolPrimitive>): Expression<BoolPrimitive>;

export function not(a: Expression<Bvec2Primitive>): Expression<Bvec2Primitive>;

export function not(a: Expression<Bvec3Primitive>): Expression<Bvec3Primitive>;

export function not(a: Expression<Bvec4Primitive>): Expression<Bvec4Primitive>;

export function not(
  a: Expression<AnyBoolPrimitive>
): Expression<AnyBoolPrimitive> {
  a;

  throw new Error("Not implemented.");
}
