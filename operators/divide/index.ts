import { floatPlaceholder } from "../../helpers";
import {
  Float,
  Vec2,
  Vec3,
  Vec4,
  Mat2,
  Mat3,
  Mat4,
  Int,
  Ivec2,
  Ivec3,
  Ivec4,
  AnyNumber,
} from "../../primitive";

export function divide(a: Float, b: Float): Float;

export function divide(a: Vec2, b: Float): Vec2;

export function divide(a: Vec3, b: Float): Vec3;

export function divide(a: Vec4, b: Float): Vec4;

export function divide(a: Float, b: Vec2): Vec2;

export function divide(a: Float, b: Vec3): Vec3;

export function divide(a: Float, b: Vec4): Vec4;

export function divide(a: Vec2, b: Vec2): Vec2;

export function divide(a: Vec3, b: Vec3): Vec3;

export function divide(a: Vec4, b: Vec4): Vec4;

export function divide(a: Float, b: Mat2): Mat2;

export function divide(a: Float, b: Mat3): Mat3;

export function divide(a: Float, b: Mat4): Mat4;

export function divide(a: Mat2, b: Float): Mat2;

export function divide(a: Mat3, b: Float): Mat3;

export function divide(a: Mat4, b: Float): Mat4;

export function divide(a: Mat2, b: Mat2): Mat2;

export function divide(a: Mat3, b: Mat3): Mat3;

export function divide(a: Mat4, b: Mat4): Mat4;

export function divide(a: Int, b: Int): Int;

export function divide(a: Ivec2, b: Int): Ivec2;

export function divide(a: Ivec3, b: Int): Ivec3;

export function divide(a: Ivec4, b: Int): Ivec4;

export function divide(a: Int, b: Ivec2): Ivec2;

export function divide(a: Int, b: Ivec3): Ivec3;

export function divide(a: Int, b: Ivec4): Ivec4;

export function divide(a: Ivec2, b: Ivec2): Ivec2;

export function divide(a: Ivec3, b: Ivec3): Ivec3;

export function divide(a: Ivec4, b: Ivec4): Ivec4;

export function divide(a: AnyNumber, b: AnyNumber): AnyNumber {
  a;
  b;

  return floatPlaceholder;
}
