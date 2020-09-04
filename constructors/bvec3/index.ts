import {
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  AnyBoolPrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";

export function bvec3(a: Expression<BoolPrimitive>): Expression<Bvec3Primitive>;

export function bvec3(
  a: Expression<BoolPrimitive>,
  b: Expression<BoolPrimitive>,
  c: Expression<BoolPrimitive>
): Expression<Bvec3Primitive>;

export function bvec3(
  a: Expression<Bvec2Primitive>,
  b: Expression<BoolPrimitive>
): Expression<Bvec3Primitive>;

export function bvec3(
  a: Expression<BoolPrimitive>,
  b: Expression<Bvec2Primitive>
): Expression<Bvec3Primitive>;

export function bvec3(
  a: Expression<Bvec3Primitive>
): Expression<Bvec3Primitive>;

export function bvec3(
  ...args: ReadonlyArray<Expression<AnyBoolPrimitive>>
): Expression<Bvec3Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      "bvec3",
      3,
      args.map((arg) => arg.javascript)
    ),
    new FunctionImplementation(
      "bvec3",
      "bvec3",
      args.map((arg) => arg.glsl)
    )
  );
}
