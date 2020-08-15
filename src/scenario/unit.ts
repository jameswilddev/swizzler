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
  | readonly [string, Expression<BoolPrimitive>, readonly [boolean]]
  | readonly [string, Expression<Bvec2Primitive>, readonly [boolean, boolean]]
  | readonly [
      string,
      Expression<Bvec3Primitive>,
      readonly [boolean, boolean, boolean]
    ]
  | readonly [
      string,
      Expression<Bvec4Primitive>,
      readonly [boolean, boolean, boolean, boolean]
    ];
