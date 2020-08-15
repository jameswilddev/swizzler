import { transpile } from "typescript"
import { float, vec2, Expression, FloatPrimitive, Vec2Primitive, Vec3Primitive, Vec4Primitive, compileJavascript, compileTypeScript } from "."

type Scenario =
  | readonly [string, Expression<FloatPrimitive>, readonly [number]]
  | readonly [string, Expression<Vec2Primitive>, readonly [number, number]]
  | readonly [string, Expression<Vec3Primitive>, readonly [number, number, number]]
  | readonly [string, Expression<Vec4Primitive>, readonly [number, number, number, number]]

const scenarios: ReadonlyArray<Scenario> = [
  ["float literal", float(0.7), [0.7]],
  ["vec2 float", vec2(float(0.7)), [0.7, 0.7]],
  ["vec2 float float", vec2(float(0.7), float(0.3)), [0.7, 0.3]]
]

for (const scenario of scenarios) {
  const description = scenario[0]
  const expression = scenario[1]
  const expected = scenario[2]

  describe(description, () => {
    it("executes as TypeScript", () => {
      const compiledTypeScript = compileTypeScript(expression)
      const wrappedInFunctionForTranspilation = `function unusedName() { ${compiledTypeScript} }`
      const transpiledToJavascript = transpile(wrappedInFunctionForTranspilation)
      const unwrappedFunctionBody = (transpiledToJavascript.match(/^function unusedName\(\) { (.*) }\r\n$/) as RegExpMatchArray)[1]
      const func = new Function(unwrappedFunctionBody)
      const actual = func()

      expect(actual).toEqual(expected.length === 1 ? expected[0] : expected)
    })

    it("executes as Javascript", () => {
      const actual = new Function(compileJavascript(expression))()

      expect(actual).toEqual(expected.length === 1 ? expected[0] : expected)
    })

    it("executes as GLSL", () => {

    })
  })
}
