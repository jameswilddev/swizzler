import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  AnyFloatPrimitive,
} from "../primitive";
import { ConcatenateImplementation } from "../implementations/concatenate-implementation";
import { FunctionImplementation } from "../implementations/function-implementation";
import { Expression } from "../expression";

export function vec4(a: Expression<FloatPrimitive>): Expression<Vec4Primitive>;

export function vec4(
  a: Expression<FloatPrimitive>,
  b: Expression<FloatPrimitive>,
  c: Expression<FloatPrimitive>,
  d: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function vec4(
  a: Expression<Vec2Primitive>,
  b: Expression<FloatPrimitive>,
  c: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function vec4(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec2Primitive>,
  c: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function vec4(
  a: Expression<FloatPrimitive>,
  b: Expression<FloatPrimitive>,
  c: Expression<Vec2Primitive>
): Expression<Vec4Primitive>;

export function vec4(
  a: Expression<Vec2Primitive>,
  b: Expression<Vec2Primitive>
): Expression<Vec4Primitive>;

export function vec4(
  a: Expression<Vec3Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function vec4(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec3Primitive>
): Expression<Vec4Primitive>;

export function vec4(
  ...args: ReadonlyArray<Expression<AnyFloatPrimitive>>
): Expression<Vec4Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      "vec4",
      4,
      args.map((arg) => arg.javascript)
    ),
    new FunctionImplementation(
      "vec4",
      "vec4",
      args.map((arg) => arg.glsl)
    )
  );
}
