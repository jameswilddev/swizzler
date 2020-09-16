export type DirectMap = {
  readonly float: Float;
  readonly vec2: Vec2;
  readonly vec3: Vec3;
  readonly vec4: Vec4;
  readonly mat2: Mat2;
  readonly mat3: Mat3;
  readonly mat4: Mat4;
  readonly int: Int;
  readonly ivec2: Ivec2;
  readonly ivec3: Ivec3;
  readonly ivec4: Ivec4;
  readonly bool: Bool;
  readonly bvec2: Bvec2;
  readonly bvec3: Bvec3;
  readonly bvec4: Bvec4;
};

export type FloatExpression = {
  readonly type: "floatConstant";
  readonly value: number;
};

export type Float = {
  readonly type: "float";
  readonly expressions: readonly [FloatExpression];
};

export type Vec2 = {
  readonly type: "vec2";
  readonly expressions: readonly [FloatExpression, FloatExpression];
};

export type Vec3 = {
  readonly type: "vec3";
  readonly expressions: readonly [
    FloatExpression,
    FloatExpression,
    FloatExpression
  ];
};

export type Vec4 = {
  readonly type: "vec4";
  readonly expressions: readonly [
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression
  ];
};

export type Mat2 = {
  readonly type: "mat2";
  readonly expressions: readonly [
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression
  ];
};

export type Mat3 = {
  readonly type: "mat3";
  readonly expressions: readonly [
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression
  ];
};

export type Mat4 = {
  readonly type: "mat4";
  readonly expressions: readonly [
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression,
    FloatExpression
  ];
};

export type AnyFloat = Float | Vec2 | Vec3 | Vec4 | Mat2 | Mat3 | Mat4;

export type IntExpression = {
  readonly type: "intConstant";
  readonly value: number;
};

export type Int = {
  readonly type: "int";
  readonly expressions: readonly [IntExpression];
};

export type Ivec2 = {
  readonly type: "ivec2";
  readonly expressions: readonly [IntExpression, IntExpression];
};

export type Ivec3 = {
  readonly type: "ivec3";
  readonly expressions: readonly [IntExpression, IntExpression, IntExpression];
};

export type Ivec4 = {
  readonly type: "ivec4";
  readonly expressions: readonly [
    IntExpression,
    IntExpression,
    IntExpression,
    IntExpression
  ];
};

export type AnyInt = Int | Ivec2 | Ivec3 | Ivec4;

export type AnyNumber = AnyFloat | AnyInt;

export type BoolExpression = {
  readonly type: "boolConstant";
  readonly value: boolean;
};

export type Bool = {
  readonly type: "bool";
  readonly expressions: readonly [BoolExpression];
};

export type Bvec2 = {
  readonly type: "bvec2";
  readonly expressions: readonly [BoolExpression, BoolExpression];
};

export type Bvec3 = {
  readonly type: "bvec3";
  readonly expressions: readonly [
    BoolExpression,
    BoolExpression,
    BoolExpression
  ];
};

export type Bvec4 = {
  readonly type: "bvec4";
  readonly expressions: readonly [
    BoolExpression,
    BoolExpression,
    BoolExpression,
    BoolExpression
  ];
};

export type AnyBool = Bool | Bvec2 | Bvec3 | Bvec4;

export type Base = Float | Int | Bool;
export type Pair = Vec2 | Ivec2 | Bvec2;
export type Triplet = Vec3 | Ivec3 | Bvec3;
export type Quartet = Vec4 | Ivec4 | Bvec4;

export type Castable = Float | Vec2 | Vec3 | Vec4 | Mat2 | AnyInt | AnyBool;

export type Any = AnyNumber | AnyBool;
