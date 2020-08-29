import { float, vec2, vec3, vec4, length } from "../../..";
import { floatScenario } from "../../../unit";

floatScenario("length float positive", length(float(75 / 255)), 75 / 255);

floatScenario("length float negative", length(float(-75 / 255)), 75 / 255);

floatScenario(
  "length vec2",
  length(vec2(float(108 / 255), float(80 / 255))),
  0.5270681605148687877124407759915551544836531982852138840417133730862653663677860901135743434324634371
);

floatScenario(
  "length vec3",
  length(vec3(float(108 / 255), float(80 / 255), float(21 / 255))),
  0.5334630753378744529098654767638801605534094872763101837831363418754337091401979677420684445893064449
);

floatScenario(
  "length vec4",
  length(
    vec4(float(108 / 255), float(80 / 255), float(21 / 255), float(50 / 255))
  ),
  0.5683569336239878493403179681554701864974203565683226008523114269173309965000554075432362507233926199
);
