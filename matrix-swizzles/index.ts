import {
  Mat2Primitive,
  Vec2Primitive,
  Mat3Primitive,
  Vec3Primitive,
  Mat4Primitive,
  Vec4Primitive,
} from "../primitive";
import { Expression } from "../expression";

export function getColumn(
  matrix: Expression<Mat2Primitive>,
  column: 0 | 1
): Expression<Vec2Primitive>;

export function getColumn(
  matrix: Expression<Mat3Primitive>,
  column: 0 | 1 | 2
): Expression<Vec3Primitive>;

export function getColumn(
  matrix: Expression<Mat4Primitive>,
  column: 0 | 1 | 2 | 3
): Expression<Vec4Primitive>;

export function getColumn(
  matrix: Expression<Mat2Primitive | Mat3Primitive | Mat4Primitive>,
  column: 0 | 1 | 2 | 3
): Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive> {
  matrix;
  column;

  throw new Error("Not implemented.");
}
