import {
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { AggregateImplementation } from "../../../implementations/aggregate-implementation";
import { FunctionImplementation } from "../../../implementations/function-implementation";

export function all(
  a: Expression<Bvec2Primitive | Bvec3Primitive | Bvec4Primitive>
): Expression<BoolPrimitive> {
  return new Expression(
    new AggregateImplementation("bool", "&&", a.javascript),
    new FunctionImplementation("bool", "all", [a.glsl])
  );
}
