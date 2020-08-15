import { Implementation } from "../implementations/implementation";
import { AnyPrimitive } from "../primitive";

export function compileImplementation(
  returnText: string,
  root: Implementation<AnyPrimitive>,
  getPrefix: (implementation: Implementation<AnyPrimitive>) => string,
  getSuffix: (implementation: Implementation<AnyPrimitive>) => string
): string {
  getPrefix;
  getSuffix;

  const output = "";

  function recurse(
    implementation: Implementation<AnyPrimitive>
  ): ReadonlyArray<string> {
    const renderedArgs = implementation.args.map(recurse);
    const rendered = implementation.render(renderedArgs);

    return rendered;
  }

  const final = recurse(root);

  if (final.length === 1) {
    return `${output}\t${returnText}${final[0]};`;
  } else {
    return `${output}\t${returnText}[${final.join(", ")}];`;
  }
}
