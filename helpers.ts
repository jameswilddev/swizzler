// todo: these should be removed when no longer used.

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
} from "./primitive";

export const floatPlaceholder: Float = {
  type: "float",
  expressions: [{ type: "floatConstant", value: 0 }],
};

export const vec2Placeholder: Vec2 = {
  type: "vec2",
  expressions: [
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
  ],
};

export const vec3Placeholder: Vec3 = {
  type: "vec3",
  expressions: [
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
  ],
};

export const vec4Placeholder: Vec4 = {
  type: "vec4",
  expressions: [
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
  ],
};

export const mat2Placeholder: Mat2 = {
  type: "mat2",
  expressions: [
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
  ],
};

export const mat3Placeholder: Mat3 = {
  type: "mat3",
  expressions: [
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
  ],
};

export const mat4Placeholder: Mat4 = {
  type: "mat4",
  expressions: [
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
    { type: "floatConstant", value: 0 },
  ],
};

export const intPlaceholder: Int = {
  type: "int",
  expressions: [{ type: "intConstant", value: 0 }],
};

export const ivec2Placeholder: Ivec2 = {
  type: "ivec2",
  expressions: [
    { type: "intConstant", value: 0 },
    { type: "intConstant", value: 0 },
  ],
};

export const ivec3Placeholder: Ivec3 = {
  type: "ivec3",
  expressions: [
    { type: "intConstant", value: 0 },
    { type: "intConstant", value: 0 },
    { type: "intConstant", value: 0 },
  ],
};

export const ivec4Placeholder: Ivec4 = {
  type: "ivec4",
  expressions: [
    { type: "intConstant", value: 0 },
    { type: "intConstant", value: 0 },
    { type: "intConstant", value: 0 },
    { type: "intConstant", value: 0 },
  ],
};

export const boolPlaceholder: Bool = {
  type: "bool",
  expressions: [{ type: "boolConstant", value: false }],
};

export const bvec2Placeholder: Bvec2 = {
  type: "bvec2",
  expressions: [
    { type: "boolConstant", value: false },
    { type: "boolConstant", value: false },
  ],
};

export const bvec3Placeholder: Bvec3 = {
  type: "bvec3",
  expressions: [
    { type: "boolConstant", value: false },
    { type: "boolConstant", value: false },
    { type: "boolConstant", value: false },
  ],
};

export const bvec4Placeholder: Bvec4 = {
  type: "bvec4",
  expressions: [
    { type: "boolConstant", value: false },
    { type: "boolConstant", value: false },
    { type: "boolConstant", value: false },
    { type: "boolConstant", value: false },
  ],
};
