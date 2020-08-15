import {
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
  AnyBoolPrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";

export function bvec4(a: Expression<BoolPrimitive>): Expression<Bvec4Primitive>;

export function bvec4(
  a: Expression<BoolPrimitive>,
  b: Expression<BoolPrimitive>,
  c: Expression<BoolPrimitive>,
  d: Expression<BoolPrimitive>
): Expression<Bvec4Primitive>;

export function bvec4(
  a: Expression<Bvec2Primitive>,
  b: Expression<BoolPrimitive>,
  c: Expression<BoolPrimitive>
): Expression<Bvec4Primitive>;

export function bvec4(
  a: Expression<BoolPrimitive>,
  b: Expression<Bvec2Primitive>,
  c: Expression<BoolPrimitive>
): Expression<Bvec4Primitive>;

export function bvec4(
  a: Expression<BoolPrimitive>,
  b: Expression<BoolPrimitive>,
  c: Expression<Bvec2Primitive>
): Expression<Bvec4Primitive>;

export function bvec4(
  a: Expression<Bvec2Primitive>,
  b: Expression<Bvec2Primitive>
): Expression<Bvec4Primitive>;

export function bvec4(
  a: Expression<Bvec3Primitive>,
  b: Expression<BoolPrimitive>
): Expression<Bvec4Primitive>;

export function bvec4(
  a: Expression<BoolPrimitive>,
  b: Expression<Bvec3Primitive>
): Expression<Bvec4Primitive>;

export function bvec4(
  ...args: ReadonlyArray<Expression<AnyBoolPrimitive>>
): Expression<Bvec4Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      "bvec4",
      4,
      args.map((arg) => arg.javascript)
    ),
    new FunctionImplementation(
      "bvec4",
      "bvec4",
      args.map((arg) => arg.glsl)
    )
  );
}
