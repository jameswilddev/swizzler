import { Vec4Primitive } from "../primitive";
import { compileImplementation } from "./compile-implementation";
import { Expression } from "../expression";

export function compileGlsl(expression: Expression<Vec4Primitive>): string {
  return `precision mediump float;

void main(void) {
${compileImplementation(
  "gl_FragColor = ",
  expression.glsl,
  (implementation) => `${implementation.primitive} `,
  () => ""
)}
}`;
}
