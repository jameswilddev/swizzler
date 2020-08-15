import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  AnyFloatPrimitive,
} from "../primitive";
import { ConcatenateImplementation } from "../implementations/concatenate-implementation";
import { FunctionImplementation } from "../implementations/function-implementation";
import { Expression } from "../expression";

export function vec3(a: Expression<FloatPrimitive>): Expression<Vec3Primitive>;

export function vec3(
  a: Expression<FloatPrimitive>,
  b: Expression<FloatPrimitive>,
  c: Expression<FloatPrimitive>
): Expression<Vec3Primitive>;

export function vec3(
  a: Expression<Vec2Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Vec3Primitive>;

export function vec3(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec2Primitive>
): Expression<Vec3Primitive>;

export function vec3(a: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function vec3(
  ...args: ReadonlyArray<Expression<AnyFloatPrimitive>>
): Expression<Vec3Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      "vec3",
      3,
      args.map((arg) => arg.javascript)
    ),
    new FunctionImplementation(
      "vec3",
      "vec3",
      args.map((arg) => arg.glsl)
    )
  );
}
