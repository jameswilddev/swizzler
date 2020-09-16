import {
  floatPlaceholder,
  vec2Placeholder,
  vec3Placeholder,
  vec4Placeholder,
  mat2Placeholder,
  mat3Placeholder,
  mat4Placeholder,
  intPlaceholder,
  ivec2Placeholder,
  ivec3Placeholder,
  ivec4Placeholder,
  boolPlaceholder,
  bvec2Placeholder,
  bvec3Placeholder,
  bvec4Placeholder,
} from "./helpers";
import { DirectMap } from "./primitive";

export function reference<T extends keyof DirectMap>(
  primitive: T,
  name: string
): DirectMap[T] {
  name;

  switch (primitive) {
    case "float":
      return floatPlaceholder as DirectMap[T];

    case "vec2":
      return vec2Placeholder as DirectMap[T];

    case "vec3":
      return vec3Placeholder as DirectMap[T];

    case "vec4":
      return vec4Placeholder as DirectMap[T];

    case "mat2":
      return mat2Placeholder as DirectMap[T];

    case "mat3":
      return mat3Placeholder as DirectMap[T];

    case "mat4":
      return mat4Placeholder as DirectMap[T];

    case "int":
      return intPlaceholder as DirectMap[T];

    case "ivec2":
      return ivec2Placeholder as DirectMap[T];

    case "ivec3":
      return ivec3Placeholder as DirectMap[T];

    case "ivec4":
      return ivec4Placeholder as DirectMap[T];

    case "bool":
      return boolPlaceholder as DirectMap[T];

    case "bvec2":
      return bvec2Placeholder as DirectMap[T];

    case "bvec3":
      return bvec3Placeholder as DirectMap[T];

    case "bvec4":
      return bvec4Placeholder as DirectMap[T];
  }

  throw new Error(`Unimplemented primitive type "${primitive}".`);
}
