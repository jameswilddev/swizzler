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

export function greaterThan(a: Float, b: Float): Bool;

export function greaterThan(a: Vec2, b: Vec2): Bvec2;

export function greaterThan(a: Vec3, b: Vec3): Bvec3;

export function greaterThan(a: Vec4, b: Vec4): Bvec4;

export function greaterThan(a: Int, b: Int): Bool;

export function greaterThan(a: Ivec2, b: Ivec2): Bvec2;

export function greaterThan(a: Ivec3, b: Ivec3): Bvec3;

export function greaterThan(a: Ivec4, b: Ivec4): Bvec4;

export function greaterThan(a: AnyNumber, b: AnyNumber): AnyBool {
  a;
  b;

  return boolPlaceholder;
}
