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

export function componentwiseEqual(a: Float, b: Float): Bool;

export function componentwiseEqual(a: Vec2, b: Vec2): Bvec2;

export function componentwiseEqual(a: Vec3, b: Vec3): Bvec3;

export function componentwiseEqual(a: Vec4, b: Vec4): Bvec4;

export function componentwiseEqual(a: Int, b: Int): Bool;

export function componentwiseEqual(a: Ivec2, b: Ivec2): Bvec2;

export function componentwiseEqual(a: Ivec3, b: Ivec3): Bvec3;

export function componentwiseEqual(a: Ivec4, b: Ivec4): Bvec4;

export function componentwiseEqual(a: Bool, b: Bool): Bool;

export function componentwiseEqual(a: Bvec2, b: Bvec2): Bvec2;

export function componentwiseEqual(a: Bvec3, b: Bvec3): Bvec3;

export function componentwiseEqual(a: Bvec4, b: Bvec4): Bvec4;

export function componentwiseEqual(a: Castable, b: Castable): AnyBool {
  a;
  b;

  return boolPlaceholder;
}
