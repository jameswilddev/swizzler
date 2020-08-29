import { float, mat2, mat3, mat4 } from "../../";
import { ScenariosWithoutValues } from "./scenarios-without-values/unit";
import { Scenario } from "../../scenario/unit";
import { mat4ScenariosA } from "./scenarios-a/unit";
import { mat4ScenariosB } from "./scenarios-b/unit";
import { mat4ScenariosC } from "./scenarios-c/unit";
import { mat4ScenariosD } from "./scenarios-d/unit";
import { mat4ScenariosE } from "./scenarios-e/unit";
import { mat4ScenariosF } from "./scenarios-f/unit";
import { mat4ScenariosG } from "./scenarios-g/unit";
import { mat4ScenariosH } from "./scenarios-h/unit";
import { mat4ScenariosI } from "./scenarios-i/unit";
import { mat4ScenariosJ } from "./scenarios-j/unit";
import { mat4ScenariosK } from "./scenarios-k/unit";
import { mat4ScenariosL } from "./scenarios-l/unit";
import { mat4ScenariosM } from "./scenarios-m/unit";
import { mat4ScenariosN } from "./scenarios-n/unit";
import { mat4ScenariosO } from "./scenarios-o/unit";
import { mat4ScenariosP } from "./scenarios-p/unit";
import { mat4ScenariosQ } from "./scenarios-q/unit";
import { mat4ScenariosR } from "./scenarios-r/unit";
import { mat4ScenariosS } from "./scenarios-s/unit";
import { mat4ScenariosT } from "./scenarios-t/unit";
import { mat4ScenariosU } from "./scenarios-u/unit";

const importedScenarios: ScenariosWithoutValues = [
  ...mat4ScenariosA,
  ...mat4ScenariosB,
  ...mat4ScenariosC,
  ...mat4ScenariosD,
  ...mat4ScenariosE,
  ...mat4ScenariosF,
  ...mat4ScenariosG,
  ...mat4ScenariosH,
  ...mat4ScenariosI,
  ...mat4ScenariosJ,
  ...mat4ScenariosK,
  ...mat4ScenariosL,
  ...mat4ScenariosM,
  ...mat4ScenariosN,
  ...mat4ScenariosO,
  ...mat4ScenariosP,
  ...mat4ScenariosQ,
  ...mat4ScenariosR,
  ...mat4ScenariosS,
  ...mat4ScenariosT,
  ...mat4ScenariosU,
];

export const mat4Scenarios: ReadonlyArray<Scenario> = [
  [
    "mat4 float",
    "mat4",
    mat4(float(0.65)),
    [0.65, 0, 0, 0, 0, 0.65, 0, 0, 0, 0, 0.65, 0, 0, 0, 0, 0.65],
  ],
  [
    "mat4 mat2",
    "mat4",
    mat4(mat2(float(0.65), float(0.21), float(0.97), float(0.46))),
    [0.65, 0.21, 0, 0, 0.97, 0.46, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  ],
  [
    "mat4 mat3",
    "mat4",
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
    [0.65, 0.21, 0.97, 0, 0.46, 0.31, 0.61, 0, 0.14, 0.33, 0.89, 0, 0, 0, 0, 1],
  ],
  ...importedScenarios.map(
    (details): Scenario => [
      details[0],
      "mat4",
      details[1],
      [
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
      ],
    ]
  ),
];
