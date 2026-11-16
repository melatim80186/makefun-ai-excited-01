// "Idea Takes Flight" — make.fun contest ai-excited-01
// Tiny deterministic program: copies the entry image into the output dir.
// Node 22, stdlib only. No network, no randomness, no timestamps.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));

// Output dir comes from the environment, falling back to /output.
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

// The entry image sits beside this script, and is copied verbatim so the
// output is byte-identical on every run.
const sourceImage = join(scriptDir, "entry.png");
const targetImage = join(outputDir, "entry.png");

function main(): void {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(sourceImage, targetImage);
  console.log(`Wrote ${targetImage}`);
}

main();
