import { Implementation } from "../implementations/implementation";
import { AnyPrimitive } from "../primitive";

export function compileImplementation(
  implementations: ReadonlyArray<
    readonly [string, Implementation<AnyPrimitive>]
  >
): string {
  const lines = [];

  function recurse(
    implementation: Implementation<AnyPrimitive>
  ): ReadonlyArray<string> {
    const renderedArgs = implementation.args.map(recurse);
    const rendered = implementation.render(renderedArgs);

    return rendered;
  }

  for (const implementation of implementations) {
    const final = recurse(implementation[1]);

    if (final.length === 1) {
      lines.push(`${implementation[0]}${final[0]};`);
    } else {
      lines.push(`${implementation[0]}[${final.join(", ")}];`);
    }
  }

  return lines.join("\n");
}
