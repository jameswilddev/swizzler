import {
  Expression,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
} from "..";
import { Mat2Primitive } from "../primitive";

export type Scenario =
  | readonly [string, Expression<FloatPrimitive>, readonly [number]]
  | readonly [string, Expression<Vec2Primitive>, readonly [number, number]]
  | readonly [
      string,
      Expression<Vec3Primitive>,
      readonly [number, number, number]
    ]
  | readonly [
      string,
      Expression<Vec4Primitive>,
      readonly [number, number, number, number]
    ]
  | readonly [string, Expression<BoolPrimitive>, readonly [boolean | null]]
  | readonly [
      string,
      Expression<Bvec2Primitive>,
      readonly [boolean | null, boolean | null]
    ]
  | readonly [
      string,
      Expression<Bvec3Primitive>,
      readonly [boolean | null, boolean | null, boolean | null]
    ]
  | readonly [
      string,
      Expression<Bvec4Primitive>,
      readonly [boolean | null, boolean | null, boolean | null, boolean | null]
    ]
  | readonly [
      string,
      Expression<Mat2Primitive>,
      readonly [number, number, number, number]
    ];
