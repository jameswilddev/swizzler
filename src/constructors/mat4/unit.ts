import { float, mat2, mat3, mat4, Expression, Mat4Primitive } from "../..";
import { mat4Scenario } from "../../unit";

mat4Scenario("mat4 float", mat4(float(0.65)), [
  0.65,
  0,
  0,
  0,
  0,
  0.65,
  0,
  0,
  0,
  0,
  0.65,
  0,
  0,
  0,
  0,
  0.65,
]);

mat4Scenario(
  "mat4 mat2",
  mat4(mat2(float(0.65), float(0.21), float(0.97), float(0.46))),
  [0.65, 0.21, 0, 0, 0.97, 0.46, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
);

mat4Scenario(
  "mat4 mat3",
  mat4(
    mat3(
      float(0.65),
      float(0.21),
      float(0.97),
      float(0.46),
      float(0.31),
      float(0.61),
      float(0.14),
      float(0.33),
      float(0.89)
    )
  ),
  [0.65, 0.21, 0.97, 0, 0.46, 0.31, 0.61, 0, 0.14, 0.33, 0.89, 0, 0, 0, 0, 1]
);

export function mat4ConstructorScenario(
  description: string,
  expression: Expression<Mat4Primitive>
): void {
  mat4Scenario(description, expression, [
    0.65,
    0.21,
    0.97,
    0.46,
    0.31,
    0.61,
    0.14,
    0.33,
    0.89,
    0.72,
    0.41,
    0.56,
    0.91,
    0.18,
    0.37,
    0.52,
  ]);
}
