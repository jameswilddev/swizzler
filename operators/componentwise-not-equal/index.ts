import { boolPlaceholder } from "../../helpers";
import {
  AnyBool,
  Bool,
  Bvec2,
  Bvec3,
  Bvec4,
  Castable,
  Float,
  Int,
  Ivec2,
  Ivec3,
  Ivec4,
  Vec2,
  Vec3,
  Vec4,
} from "../../primitive";

export function componentwiseNotEqual(a: Float, b: Float): Bool;

export function componentwiseNotEqual(a: Vec2, b: Vec2): Bvec2;

export function componentwiseNotEqual(a: Vec3, b: Vec3): Bvec3;

export function componentwiseNotEqual(a: Vec4, b: Vec4): Bvec4;

export function componentwiseNotEqual(a: Int, b: Int): Bool;

export function componentwiseNotEqual(a: Ivec2, b: Ivec2): Bvec2;

export function componentwiseNotEqual(a: Ivec3, b: Ivec3): Bvec3;

export function componentwiseNotEqual(a: Ivec4, b: Ivec4): Bvec4;

export function componentwiseNotEqual(a: Bool, b: Bool): Bool;

export function componentwiseNotEqual(a: Bvec2, b: Bvec2): Bvec2;

export function componentwiseNotEqual(a: Bvec3, b: Bvec3): Bvec3;

export function componentwiseNotEqual(a: Bvec4, b: Bvec4): Bvec4;

export function componentwiseNotEqual(a: Castable, b: Castable): AnyBool {
  a;
  b;

  return boolPlaceholder;
}
