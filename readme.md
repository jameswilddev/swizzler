# `ayeful` [![Continuous Integration](https://github.com/jameswilddev/ayeful/workflows/Continuous%20Integration/badge.svg)](https://github.com/jameswilddev/ayeful/actions) [![License](https://img.shields.io/github/license/jameswilddev/ayeful.svg)](https://github.com/jameswilddev/ayeful/blob/master/license) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswilddev%2Fayeful.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswilddev%2Fayeful?ref=badge_shield) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

TypeScript DSL for building expressions which can be compiled to TypeScript, JavaScript and GLSL.

## Example

### Input

```typescript
import { argument, float, vec2, multiply, dot, compileTypeScript, compileJavascript, compileGlsl } from "ayeful";

const argumentA = argument("vec3", "testArgumentA");
const argumentB = argument("float", "testArgumentB");

const expression = subtract(argumentB, add(argumentA, dot(multiply(vec2(float(2.7), float(-4)), float(3.1)), vec2(float(2.8), float(4.4)))));

console.log(compileTypeScript("testFunctionName", [argumentA, argumentB], expression));

console.log(compileJavascript("testFunctionName", [argumentA, argumentB], expression));

console.log(compileGlsl("testFunctionName", [argumentA, argumentB], expression));
```

### Outputs

#### TypeScript

```typescript
function testFunctionName(
  argumentA: readonly [number, number, number],
  argumentB: number,
): readonly [number, number, number] {
  return [];
}
```

#### Javascript

```javascript
function testFunctionName() {}
```

#### GLSL

```glsl

```

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswilddev%2Fayeful.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswilddev%2Fayeful?ref=badge_large)
