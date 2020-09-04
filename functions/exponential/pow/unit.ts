import { float, vec2, vec3, vec4, pow } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  "pow float float",
  pow(float(0.75), float(3.2)),
  0.39828691882753677372546481418202
);

vec2Scenario(
  "pow vec2 vec2",
  pow(vec2(float(0.75), float(0.25)), vec2(float(3.2), float(1.2))),
  [0.39828691882753677372546481418202, 0.18946457081379976029340747516331]
);

vec3Scenario(
  "pow vec3 vec3",
  pow(
    vec3(float(0.75), float(0.25), float(0.7)),
    vec3(float(3.2), float(1.2), float(1.4))
  ),
  [
    0.39828691882753677372546481418202,
    0.18946457081379976029340747516331,
    0.60692811506678640518892282813701,
  ]
);

vec4Scenario(
  "pow vec4 vec4",
  pow(
    vec4(float(0.75), float(0.25), float(0.7), float(0.4)),
    vec4(float(3.2), float(1.2), float(1.4), float(1.8))
  ),
  [
    0.39828691882753677372546481418202,
    0.18946457081379976029340747516331,
    0.60692811506678640518892282813701,
    0.19217990943702899731873598297587,
  ]
);
