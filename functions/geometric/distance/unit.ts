import { float, vec2, vec3, vec4, distance } from "../../..";
import { floatScenario } from "../../../unit";

floatScenario(
  "distance float lesser greater",
  distance(float(0.2941176470588235), float(0.4235294117647059)),
  0.1294117647058824
);

floatScenario(
  "distance float greater lesser",
  distance(float(0.4235294117647059), float(0.2941176470588235)),
  0.1294117647058824
);

floatScenario(
  "distance vec2",
  distance(
    vec2(float(0.4235294117647059), float(0.9411764705882353)),
    vec2(float(0.2941176470588235), float(0.1294117647058824))
  ),
  0.822015
);

floatScenario(
  "distance vec3",
  distance(
    vec3(
      float(0.4235294117647059),
      float(0.9411764705882353),
      float(0.2156862745098039)
    ),
    vec3(
      float(0.2941176470588235),
      float(0.1294117647058824),
      float(0.1568627450980392)
    )
  ),
  0.824117
);

floatScenario(
  "distance vec4",
  distance(
    vec4(
      float(0.4235294117647059),
      float(0.9411764705882353),
      float(0.2156862745098039),
      float(0.2627450980392157)
    ),
    vec4(
      float(0.2941176470588235),
      float(0.1294117647058824),
      float(0.1568627450980392),
      float(0.3137254901960784)
    )
  ),
  0.825693
);
