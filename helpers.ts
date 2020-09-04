import { combinationOfPrimitives, AnyPrimitive } from "./primitive";
import { Expression } from "./expression";
import { BinaryOperatorImplementation } from "./implementations/binary-implementation";
import { UnaryOperatorImplementation } from "./implementations/unary-implementation";
import { FunctionImplementation } from "./implementations/function-implementation";

export function unary<
  TInputPrimitive extends AnyPrimitive,
  TOutputPrimitive extends AnyPrimitive
>(
  outputPrimitive: TOutputPrimitive,
  symbol: string,
  a: Expression<TInputPrimitive>
): Expression<TOutputPrimitive> {
  return new Expression(
    new UnaryOperatorImplementation(outputPrimitive, symbol, a.javascript),
    new UnaryOperatorImplementation(outputPrimitive, symbol, a.glsl)
  );
}

export function binary<TPrimitive extends AnyPrimitive>(
  a: Expression<TPrimitive>,
  symbol: string,
  b: Expression<TPrimitive>
): Expression<TPrimitive> {
  const primitive = combinationOfPrimitives(a.primitive, b.primitive);

  return new Expression(
    new BinaryOperatorImplementation(
      primitive,
      a.javascript,
      symbol,
      b.javascript
    ),
    new BinaryOperatorImplementation(primitive, a.glsl, symbol, b.glsl)
  );
}

export function func<TPrimitive extends AnyPrimitive>(
  javascript: string,
  glsl: string,
  ...args: ReadonlyArray<Expression<TPrimitive>>
): Expression<TPrimitive> {
  const primitive = combinationOfPrimitives(
    ...args.map((arg) => arg.primitive)
  );

  return new Expression(
    new FunctionImplementation(
      primitive,
      javascript,
      args.map((arg) => arg.javascript)
    ),
    new FunctionImplementation(
      primitive,
      glsl,
      args.map((arg) => arg.glsl)
    )
  );
}
