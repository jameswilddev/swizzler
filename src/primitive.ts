export type FloatPrimitive = "float";
export type Vec2Primitive = "vec2";
export type Vec3Primitive = "vec3";
export type Vec4Primitive = "vec4";
export type AnyFloatPrimitive =
  | FloatPrimitive
  | Vec2Primitive
  | Vec3Primitive
  | Vec4Primitive;

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
  bool: "bool",
  bvec2: "bool",
  bvec3: "bool",
  bvec4: "bool",
};

export const primitiveArities: {
  readonly [primitive in AnyPrimitive]: number;
} = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
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
