import {
  float,
  vec2,
  vec3,
  int,
  ivec2,
  ivec3,
  bool,
  bvec2,
  bvec3,
  add,
  multiply,
} from "../..";
import { vec3Scenario } from "../../unit";

vec3Scenario("vec3 float", vec3(float(0.4)), [0.4, 0.4, 0.4]);

vec3Scenario("vec3 floats", vec3(float(0.4), float(0.2), float(0.7)), [
  0.4,
  0.2,
  0.7,
]);

vec3Scenario("vec3 vec2s", vec3(vec2(float(0.4), float(0.2)), float(0.7)), [
  0.4,
  0.2,
  0.7,
]);

vec3Scenario("vec3 vec3", vec3(vec3(float(0.4), float(0.2), float(0.7))), [
  0.4,
  0.2,
  0.7,
]);

vec3Scenario(
  "vec3 int",
  add(float(0.5), multiply(float(0.125), vec3(int(3)))),
  [0.875, 0.875, 0.875]
);

vec3Scenario(
  "vec3 ints",
  add(float(0.5), multiply(float(0.125), vec3(int(3), int(-2), int(2)))),
  [0.875, 0.25, 0.75]
);

vec3Scenario(
  "vec3 ivec2s",
  add(float(0.5), multiply(float(0.125), vec3(ivec2(int(3), int(-2)), int(2)))),
  [0.875, 0.25, 0.75]
);

vec3Scenario(
  "vec3 ivec3",
  add(float(0.5), multiply(float(0.125), vec3(ivec3(int(3), int(-2), int(2))))),
  [0.875, 0.25, 0.75]
);

vec3Scenario(
  "vec3 false",
  add(float(0.25), multiply(float(0.5), vec3(bool(false)))),
  [0.25, 0.25, 0.25]
);

vec3Scenario(
  "vec3 true",
  add(float(0.25), multiply(float(0.5), vec3(bool(true)))),
  [0.75, 0.75, 0.75]
);

vec3Scenario(
  "vec3 bools",
  add(
    float(0.25),
    multiply(float(0.5), vec3(bool(true), bool(false), bool(false)))
  ),
  [0.75, 0.25, 0.25]
);

vec3Scenario(
  "vec3 bvec2s",
  add(
    float(0.25),
    multiply(float(0.5), vec3(bvec2(bool(true), bool(false)), bool(false)))
  ),
  [0.75, 0.25, 0.25]
);

vec3Scenario(
  "vec3 bvec3",
  add(
    float(0.25),
    multiply(float(0.5), vec3(bvec3(bool(true), bool(false), bool(false))))
  ),
  [0.75, 0.25, 0.25]
);

vec3Scenario(
  "vec3 complex",
  add(
    float(0.5),
    multiply(float(0.125), vec3(float(3.2), bool(true), int(-2)))
  ),
  [0.9, 0.625, 0.25]
);
