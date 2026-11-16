// Idea Takes Flight — make.fun competition ai-excited-01.
//
// A tiny cheerful white robot with a glowing orange visor rides on top of
// a gigantic glowing lightbulb lifting off like a hot-air balloon through
// a deep indigo dawn sky. One huge focal shape dominates the frame.
// No text anywhere in the image.
//
// This entrypoint is deterministic: it copies the beside-the-script
// entry.png into the output directory as entry.png. Node 22, stdlib only.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(scriptDir, "entry.png");

// Output dir comes from MAKEFUN_OUTPUT_DIR, falling back to /output.
// A blank env value counts as unset so the fallback still applies.
function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  return fromEnv ? fromEnv : "/output";
}

const outputDir = resolveOutputDir();
const targetImage = join(outputDir, "entry.png");

function main(): void {
  if (!existsSync(sourceImage)) {
    throw new Error(`entry image not found: ${sourceImage}`);
  }
  // Determinism: a plain byte copy, so repeated runs write identical
  // bytes and the output always matches the source image exactly.
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(sourceImage, targetImage);
  console.log(`wrote ${targetImage}`);
}

main();
