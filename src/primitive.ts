export type FloatPrimitive = "float";
export type Vec2Primitive = "vec2";
export type Vec3Primitive = "vec3";
export type Vec4Primitive = "vec4";
export type Mat2Primitive = "mat2";
export type AnyFloatPrimitive =
  | FloatPrimitive
  | Vec2Primitive
  | Vec3Primitive
  | Vec4Primitive
  | Mat2Primitive;

export type BoolPrimitive = "bool";
export type Bvec2Primitive = "bvec2";
export type Bvec3Primitive = "bvec3";
export type Bvec4Primitive = "bvec4";
export type AnyBoolPrimitive =
  | BoolPrimitive
  | Bvec2Primitive
  | Bvec3Primitive
  | Bvec4Primitive;

export type AnyPrimitive = AnyFloatPrimitive | AnyBoolPrimitive;

export type BasePrimitive = FloatPrimitive | BoolPrimitive;
export const basePrimitives: ReadonlyArray<BasePrimitive> = ["float", "bool"];

export const primitiveBases: {
  readonly [primitive in AnyPrimitive]: BasePrimitive;
} = {
  float: "float",
  vec2: "float",
  vec3: "float",
  vec4: "float",
  mat2: "float",
  bool: "bool",
  bvec2: "bool",
  bvec3: "bool",
  bvec4: "bool",
};

export type PairPrimitive = Vec2Primitive | Bvec2Primitive;
export const pairPrimitives: ReadonlyArray<PairPrimitive> = ["vec2", "bvec2"];

export const primitivePairs: {
  readonly [primitive in AnyPrimitive]: PairPrimitive;
} = {
  float: "vec2",
  vec2: "vec2",
  vec3: "vec2",
  vec4: "vec2",
  mat2: "vec2",
  bool: "bvec2",
  bvec2: "bvec2",
  bvec3: "bvec2",
  bvec4: "bvec2",
};

export type TripletPrimitive = Vec3Primitive | Bvec3Primitive;
export const tripletPrimitives: ReadonlyArray<TripletPrimitive> = [
  "vec3",
  "bvec3",
];

export const primitiveTriplets: {
  readonly [primitive in AnyPrimitive]: TripletPrimitive;
} = {
  float: "vec3",
  vec2: "vec3",
  vec3: "vec3",
  vec4: "vec3",
  mat2: "vec3",
  bool: "bvec3",
  bvec2: "bvec3",
  bvec3: "bvec3",
  bvec4: "bvec3",
};

export type QuartetPrimitive = Vec4Primitive | Bvec4Primitive;
export const quartetPrimitives: ReadonlyArray<QuartetPrimitive> = [
  "vec4",
  "bvec4",
];

export const primitiveQuartets: {
  readonly [primitive in AnyPrimitive]: QuartetPrimitive;
} = {
  float: "vec4",
  vec2: "vec4",
  vec3: "vec4",
  vec4: "vec4",
  mat2: "vec4",
  bool: "bvec4",
  bvec2: "bvec4",
  bvec3: "bvec4",
  bvec4: "bvec4",
};

export const primitiveArities: {
  readonly [primitive in AnyPrimitive]: number;
} = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  mat2: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
};

export function combinationOfPrimitives<TPrimitive extends AnyPrimitive>(
  ...primitives: ReadonlyArray<TPrimitive>
): TPrimitive {
  const castBasePrimitives: ReadonlyArray<AnyPrimitive> = basePrimitives;

  let output = primitives[0];

  for (const primitive of primitives) {
    if (!castBasePrimitives.includes(primitive)) {
      output = primitive;
    }
  }

  return output;
}
