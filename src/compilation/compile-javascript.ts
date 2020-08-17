import { AnyPrimitive } from "../primitive";
import { compileImplementation } from "./compile-implementation";
import { Expression } from "../expression";

export function compileJavascript(
  expression: Expression<AnyPrimitive>
): string {
  return compileImplementation("return ", expression.javascript);
}
