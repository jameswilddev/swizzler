import { floatPlaceholder } from "../../helpers";
import {
  AnyNumber,
  Float,
  Int,
  Ivec2,
  Ivec3,
  Ivec4,
  Mat2,
  Mat3,
  Mat4,
  Vec2,
  Vec3,
  Vec4,
} from "../../primitive";

export function negate(a: Float): Float;

export function negate(a: Vec2): Vec2;

export function negate(a: Vec3): Vec3;

export function negate(a: Vec4): Vec4;

export function negate(a: Mat2): Mat2;

export function negate(a: Mat3): Mat3;

export function negate(a: Mat4): Mat4;

export function negate(a: Int): Int;

export function negate(a: Ivec2): Ivec2;

export function negate(a: Ivec3): Ivec3;

export function negate(a: Ivec4): Ivec4;

export function negate(a: AnyNumber): AnyNumber {
  a;

  return floatPlaceholder;
}
