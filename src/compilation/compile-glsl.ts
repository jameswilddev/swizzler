import { AnyPrimitive } from "../primitive";
import { compileImplementation } from "./compile-implementation";
import { Expression } from "../expression";

export function compileGlsl(expression: Expression<AnyPrimitive>): string {
  return compileImplementation(
    expression.glsl,
    (implementation) => `${implementation.primitive} `,
    () => ""
  );
}
