import { LiteralImplementation } from "./implementations/literal-implementation";
import { AnyPrimitive, primitiveArities } from "./primitive";
import { Expression } from "./expression";

export function reference<TPrimitive extends AnyPrimitive>(
  primitive: TPrimitive,
  name: string
): Expression<TPrimitive> {
  const arity = primitiveArities[primitive];

  let javascriptLiteral: string[];

  if (arity === 1) {
    javascriptLiteral = [name];
  } else {
    javascriptLiteral = [];

    for (let i = 0; i < arity; i++) {
      javascriptLiteral.push(`${name}_${i}`);
    }
  }

  return new Expression(
    new LiteralImplementation(primitive, javascriptLiteral),
    new LiteralImplementation(primitive, [name])
  );
}
