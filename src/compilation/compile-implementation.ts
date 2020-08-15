import { Implementation } from "../implementations/implementation";
import { AnyPrimitive } from "../primitive";

// todo: this algorithm is imperfect and currently false positive detects an unreused command as reused if it exists within a reused command.
// todo: this algorithm double writes implementations sometimes
// todo: don't _0 for one dimensional things

function listAllImplementations(
  root: Implementation<AnyPrimitive>
): ReadonlyArray<Implementation<AnyPrimitive>> {
  const output: Implementation<AnyPrimitive>[] = [];

  function recurse(implementation: Implementation<AnyPrimitive>): void {
    for (const arg of implementation.args) {
      recurse(arg);
    }

    output.push(implementation);
  }

  recurse(root);

  return output;
}

function listReusedImplementations(
  root: Implementation<AnyPrimitive>
): ReadonlyArray<Implementation<AnyPrimitive>> {
  const output: Implementation<AnyPrimitive>[] = [];
  const all = listAllImplementations(root);

  for (const implementation of all) {
    if (
      implementation.refactorable &&
      !output.includes(implementation) &&
      all.indexOf(implementation) !== all.lastIndexOf(implementation)
    ) {
      output.push(implementation);
    }
  }

  return output;
}

export function compileImplementation(
  root: Implementation<AnyPrimitive>,
  getPrefix: (implementation: Implementation<AnyPrimitive>) => string,
  getSuffix: (implementation: Implementation<AnyPrimitive>) => string
): string {
  const reusedImplementations = listReusedImplementations(root);

  const renderedReusedImplementations: ReadonlyArray<string>[] = [];

  let output = "";

  function recurse(
    implementation: Implementation<AnyPrimitive>
  ): ReadonlyArray<string> {
    const isReused = reusedImplementations.indexOf(implementation);

    if (isReused !== -1 && isReused < renderedReusedImplementations.length) {
      return renderedReusedImplementations[isReused];
    }

    const renderedArgs = implementation.args.map(recurse);
    const rendered = implementation.render(renderedArgs);

    if (isReused === -1) {
      return rendered;
    } else {
      for (let i = 0; i < rendered.length; i++) {
        output += `${getPrefix(implementation)}_${isReused}_${i}${getSuffix(
          implementation
        )} = ${rendered[i]};\n`;
      }

      return rendered.map((_, index) => `_${isReused}_${index}`);
    }
  }

  const final = recurse(root);

  if (final.length === 1) {
    return `${output}return ${final[0]};`;
  } else {
    return `${output}return [${final.join(", ")}];`;
  }
}
