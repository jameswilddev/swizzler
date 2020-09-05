import { bool, float, int, add } from "..";
import { floatScenario, intScenario, boolScenario } from "../unit";

floatScenario("float positive unit interval", float(75 / 255), 75 / 255);

floatScenario("float zero", add(float(0), float(128 / 255)), 128 / 255);

floatScenario(
  "float negative unit interval",
  add(float(-75 / 255), float(128 / 255)),
  53 / 255
);

floatScenario(
  "float positive integer",
  add(float(2), float(-492 / 255)),
  18 / 255
);

floatScenario(
  "float negative integer",
  add(float(-2), float(532 / 255)),
  22 / 255
);

floatScenario("floats", add(float(650 / 255), float(-410 / 255)), 240 / 255);

it("float NaN", () => {
  expect(() => float(Number.NaN)).toThrowError(
    "Cannot create a float literal of NaN."
  );
});

it("float positive infinity", () => {
  expect(() => float(Number.POSITIVE_INFINITY)).toThrowError(
    "Cannot create a float literal of positive infinity."
  );
});

it("float negative infinity", () => {
  expect(() => float(Number.NEGATIVE_INFINITY)).toThrowError(
    "Cannot create a float literal of negative infinity."
  );
});

intScenario("int zero", add(int(0), int(128)), 128);

intScenario("int positive integer", int(37), 37);

intScenario("int negative integer", add(int(-37), int(128)), 91);

it("int NaN", () => {
  expect(() => int(Number.NaN)).toThrowError(
    "Cannot create an int literal of NaN."
  );
});

it("int positive infinity", () => {
  expect(() => int(Number.POSITIVE_INFINITY)).toThrowError(
    "Cannot create an int literal of positive infinity."
  );
});

it("int negative infinity", () => {
  expect(() => int(Number.NEGATIVE_INFINITY)).toThrowError(
    "Cannot create an int literal of negative infinity."
  );
});

it("int positive unit interval", () => {
  expect(() => int(0.3)).toThrowError(
    "Cannot create an int literal of a decimal number."
  );
});

it("int negative unit interval", () => {
  expect(() => int(-0.3)).toThrowError(
    "Cannot create an int literal of a decimal number."
  );
});

it("int positive decimal", () => {
  expect(() => int(27.3)).toThrowError(
    "Cannot create an int literal of a decimal number."
  );
});

it("int negative decimal", () => {
  expect(() => int(-27.3)).toThrowError(
    "Cannot create an int literal of a decimal number."
  );
});

it("int positive unsafe integer", () => {
  expect(() => int(9007199254740993)).toThrowError(
    "Cannot create an int literal of an unsafe integer."
  );
});

it("int negative unsafe integer", () => {
  expect(() => int(-9007199254740993)).toThrowError(
    "Cannot create an int literal of an unsafe integer."
  );
});

boolScenario("true", bool(true), true);

boolScenario("false", bool(false), false);
