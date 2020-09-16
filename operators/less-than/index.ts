import { boolPlaceholder } from "../../helpers";
import {
  AnyBool,
  AnyNumber,
  Bool,
  Bvec2,
  Bvec3,
  Bvec4,
  Float,
  Int,
  Ivec2,
  Ivec3,
  Ivec4,
  Vec2,
  Vec3,
  Vec4,
} from "../../primitive";

export function lessThan(a: Float, b: Float): Bool;

export function lessThan(a: Vec2, b: Vec2): Bvec2;

export function lessThan(a: Vec3, b: Vec3): Bvec3;

export function lessThan(a: Vec4, b: Vec4): Bvec4;

export function lessThan(a: Int, b: Int): Bool;

export function lessThan(a: Ivec2, b: Ivec2): Bvec2;

export function lessThan(a: Ivec3, b: Ivec3): Bvec3;

export function lessThan(a: Ivec4, b: Ivec4): Bvec4;

export function lessThan(a: AnyNumber, b: AnyNumber): AnyBool {
  a;
  b;

  return boolPlaceholder;
}
