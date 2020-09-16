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
  Bool,
  Bvec2,
  Bvec3,
  Bvec4,
  Any,
} from "../../primitive";

export function conditional(a: Bool, b: Float, c: Float): Float;

export function conditional(a: Bool, b: Vec2, c: Vec2): Vec2;

export function conditional(a: Bool, b: Vec3, c: Vec3): Vec3;

export function conditional(a: Bool, b: Vec4, c: Vec4): Vec4;

export function conditional(a: Bool, b: Mat2, c: Mat2): Mat2;

export function conditional(a: Bool, b: Mat3, c: Mat3): Mat3;

export function conditional(a: Bool, b: Mat4, c: Mat4): Mat4;

export function conditional(a: Bool, b: Int, c: Int): Int;

export function conditional(a: Bool, b: Ivec2, c: Ivec2): Ivec2;

export function conditional(a: Bool, b: Ivec3, c: Ivec3): Ivec3;

export function conditional(a: Bool, b: Ivec4, c: Ivec4): Ivec4;

export function conditional(a: Bool, b: Bool, c: Bool): Bool;

export function conditional(a: Bool, b: Bvec2, c: Bvec2): Bvec2;

export function conditional(a: Bool, b: Bvec3, c: Bvec3): Bvec3;

export function conditional(a: Bool, b: Bvec4, c: Bvec4): Bvec4;

export function conditional(a: Bool, b: Any, c: Any): Any {
  a;
  b;
  c;

  return floatPlaceholder;
}
