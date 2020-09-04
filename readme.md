# `swizzler` [![Continuous Integration](https://github.com/jameswilddev/swizzler/workflows/Continuous%20Integration/badge.svg)](https://github.com/jameswilddev/swizzler/actions) [![License](https://img.shields.io/github/license/jameswilddev/swizzler.svg)](https://github.com/jameswilddev/swizzler/blob/master/license) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswilddev%2Fswizzler.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswilddev%2Fswizzler?ref=badge_shield) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

TypeScript DSL for building expressions which can be compiled to TypeScript, JavaScript and GLSL.

## Example

### Input

```typescript
import {
  reference,
  float,
  vec2,
  multiply,
  dot,
  subtract,
  add,
  compileTypeScript,
  compileJavascript,
  compileGlsl,
} from "swizzler";

const argumentA = reference("vec3", "testArgumentA");
const argumentB = reference("float", "testArgumentB");

const expression = subtract(
  argumentB,
  add(
    argumentA,
    dot(
      multiply(vec2(float(2.7), float(-4)), float(3.1)),
      vec2(float(2.8), float(4.4))
    )
  )
);

console.log(compileTypeScript("const result = ", expression));

console.log(compileJavascript("const result = ", expression));

console.log(compileGlsl("vec3 a = ", expression));
```

### Outputs

#### TypeScript

```typescript
const result = [
  testArgumentB - (testArgumentA_0 + (2.7 * 3.1 * 2.8 + -4 * 3.1 * 4.4)),
  testArgumentB - (testArgumentA_1 + (2.7 * 3.1 * 2.8 + -4 * 3.1 * 4.4)),
  testArgumentB - (testArgumentA_2 + (2.7 * 3.1 * 2.8 + -4 * 3.1 * 4.4)),
];
```

#### Javascript

```javascript
const result = [
  testArgumentB - (testArgumentA_0 + (2.7 * 3.1 * 2.8 + -4 * 3.1 * 4.4)),
  testArgumentB - (testArgumentA_1 + (2.7 * 3.1 * 2.8 + -4 * 3.1 * 4.4)),
  testArgumentB - (testArgumentA_2 + (2.7 * 3.1 * 2.8 + -4 * 3.1 * 4.4)),
];
```

#### GLSL

```glsl
vec3 a = testArgumentB - (testArgumentA + dot(vec2(2.7,-4.0) * 3.1, vec2(2.8,4.4)));
```

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswilddev%2Fswizzler.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswilddev%2Fswizzler?ref=badge_large)
