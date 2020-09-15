import { Vec3Primitive } from "../../../primitive";
import { Expression } from "../../../expression";

export function cross(
  x: Expression<Vec3Primitive>,
  y: Expression<Vec3Primitive>
): Expression<Vec3Primitive> {
  x;
  y;

  return new Expression("vec3");
}
