import { float, vec2, int, ivec2, bool, bvec2, add, multiply } from "../..";
import { vec2Scenario } from "../../unit";

vec2Scenario("vec2 float", vec2(float(0.4)), [0.4, 0.4]);

vec2Scenario("vec2 floats", vec2(float(0.4), float(0.2)), [0.4, 0.2]);

vec2Scenario("vec2 vec2", vec2(vec2(float(0.4), float(0.2))), [0.4, 0.2]);

vec2Scenario(
  "vec2 int",
  add(float(0.5), multiply(float(0.125), vec2(int(3)))),
  [0.875, 0.875]
);

vec2Scenario(
  "vec2 ints",
  add(float(0.5), multiply(float(0.125), vec2(int(3), int(-2)))),
  [0.875, 0.25]
);

vec2Scenario(
  "vec2 ivec2",
  add(float(0.5), multiply(float(0.125), vec2(ivec2(int(3), int(-2))))),
  [0.875, 0.25]
);

vec2Scenario(
  "vec2 false",
  add(float(0.25), multiply(float(0.5), vec2(bool(false)))),
  [0.25, 0.25]
);

vec2Scenario(
  "vec2 true",
  add(float(0.25), multiply(float(0.5), vec2(bool(true)))),
  [0.75, 0.75]
);

vec2Scenario(
  "vec2 bools",
  add(float(0.25), multiply(float(0.5), vec2(bool(true), bool(false)))),
  [0.75, 0.25]
);

vec2Scenario(
  "vec2 bvec2",
  add(float(0.25), multiply(float(0.5), vec2(bvec2(bool(true), bool(false))))),
  [0.75, 0.25]
);

xit("vec2 complex", () => {});
