import { vec2Placeholder } from "../helpers";
import { Mat2, Mat3, Mat4, Vec2, Vec3, Vec4 } from "../primitive";

export function getColumn(matrix: Mat2, column: 0 | 1): Vec2;

export function getColumn(matrix: Mat3, column: 0 | 1 | 2): Vec3;

export function getColumn(matrix: Mat4, column: 0 | 1 | 2 | 3): Vec4;

export function getColumn(
  matrix: Mat2 | Mat3 | Mat4,
  column: 0 | 1 | 2 | 3
): Vec2 | Vec3 | Vec4 {
  matrix;
  column;

  return vec2Placeholder;
}
