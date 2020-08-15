import { AnyBoolPrimitive, BoolPrimitive, Bvec2Primitive } from "../primitive";
import { ConcatenateImplementation } from "../implementations/concatenate-implementation";
import { FunctionImplementation } from "../implementations/function-implementation";
import { Expression } from "../expression";

export function bvec2(a: Expression<BoolPrimitive>): Expression<Bvec2Primitive>;

export function bvec2(
  a: Expression<BoolPrimitive>,
  b: Expression<BoolPrimitive>
): Expression<Bvec2Primitive>;

export function bvec2(
  ...args: ReadonlyArray<Expression<AnyBoolPrimitive>>
): Expression<Bvec2Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      "bvec2",
      2,
      args.map((arg) => arg.javascript)
    ),
    new FunctionImplementation(
      "bvec2",
      "bvec2",
      args.map((arg) => arg.glsl)
    )
  );
}
