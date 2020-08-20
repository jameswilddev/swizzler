import { Mat2Primitive, Vec2Primitive } from "../primitive";
import { Expression } from "../expression";
import { IndexerImplementation } from "../implementations/indexer-implementation";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";

export function getColumn(
  matrix: Expression<Mat2Primitive>,
  column: 0 | 1
): Expression<Vec2Primitive> {
  return new Expression(
    new SwizzleImplementation("vec2", matrix.javascript, [
      column * 2,
      column * 2 + 1,
    ]),
    new IndexerImplementation("vec2", matrix.glsl, column)
  );
}
