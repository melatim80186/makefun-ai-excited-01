// main.ts — entrypoint for the make.fun bounty "Make the AI judge excited"
// (ai-excited-01). Node 22, stdlib only.
//
// Resolves the output directory from MAKEFUN_OUTPUT_DIR (fallback /output),
// creates it if missing, and copies the entry image that sits beside this
// script into it as entry.png. The copy is byte-for-byte, so two runs
// produce byte-identical output.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Output directory comes from MAKEFUN_OUTPUT_DIR, falling back to /output.
// An empty string counts as unset so a bare `MAKEFUN_OUTPUT_DIR=` still
// lands in the default directory.
function resolveOutputDir(): string {
  const fromEnv: string | undefined = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv !== "") {
    return fromEnv;
  }
  return "/output";
}

const outputDir: string = resolveOutputDir();
const scriptDir: string = dirname(fileURLToPath(import.meta.url));
const source: string = join(scriptDir, "entry.png");
const destination: string = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);

console.log(`wrote ${destination}`);
