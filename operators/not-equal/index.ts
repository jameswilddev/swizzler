import { boolPlaceholder } from "../../helpers";
import {
  Any,
  Bool,
  Bvec2,
  Bvec3,
  Bvec4,
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

export function notEqual(a: Float, b: Float): Bool;

export function notEqual(a: Vec2, b: Vec2): Bool;

export function notEqual(a: Vec3, b: Vec3): Bool;

export function notEqual(a: Vec4, b: Vec4): Bool;

export function notEqual(a: Mat2, b: Mat2): Bool;

export function notEqual(a: Mat3, b: Mat3): Bool;

export function notEqual(a: Mat4, b: Mat4): Bool;

export function notEqual(a: Int, b: Int): Bool;

export function notEqual(a: Ivec2, b: Ivec2): Bool;

export function notEqual(a: Ivec3, b: Ivec3): Bool;

export function notEqual(a: Ivec4, b: Ivec4): Bool;

export function notEqual(a: Bool, b: Bool): Bool;

export function notEqual(a: Bvec2, b: Bvec2): Bool;

export function notEqual(a: Bvec3, b: Bvec3): Bool;

export function notEqual(a: Bvec4, b: Bvec4): Bool;

export function notEqual(a: Any, b: Any): Bool {
  a;
  b;

  return boolPlaceholder;
}
