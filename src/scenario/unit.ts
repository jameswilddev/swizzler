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
  | readonly [string, "float", Expression<FloatPrimitive>, readonly [number]]
  | readonly [
      string,
      "vec2",
      Expression<Vec2Primitive>,
      readonly [number, number]
    ]
  | readonly [
      string,
      "vec3",
      Expression<Vec3Primitive>,
      readonly [number, number, number]
    ]
  | readonly [
      string,
      "vec4",
      Expression<Vec4Primitive>,
      readonly [number, number, number, number]
    ]
  | readonly [
      string,
      "bool",
      Expression<BoolPrimitive>,
      readonly [boolean | null]
    ]
  | readonly [
      string,
      "bvec2",
      Expression<Bvec2Primitive>,
      readonly [boolean | null, boolean | null]
    ]
  | readonly [
      string,
      "bvec3",
      Expression<Bvec3Primitive>,
      readonly [boolean | null, boolean | null, boolean | null]
    ]
  | readonly [
      string,
      "bvec4",
      Expression<Bvec4Primitive>,
      readonly [boolean | null, boolean | null, boolean | null, boolean | null]
    ]
  | readonly [
      string,
      "mat2",
      Expression<Mat2Primitive>,
      readonly [number, number, number, number]
    ];
