import { AnyPrimitive } from "../primitive";
import { compileImplementation } from "./compile-implementation";
import { Expression } from "../expression";

export function compileTypeScript(
  prefix: string,
  expression: Expression<AnyPrimitive>
): string {
  return compileImplementation(prefix, expression.javascript);
}
