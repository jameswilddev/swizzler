import { AnyPrimitive } from "../../primitive";
import { compileImplementation } from "../compile-implementation";
import { Expression } from "../../expression";

export function compileGlsl(
  expressions: ReadonlyArray<readonly [string, Expression<AnyPrimitive>]>
): string {
  return compileImplementation(
    expressions.map((expression) => [expression[0], expression[1].glsl])
  );
}