// main.ts — "Idea Takes Flight" entry for the make.fun ai-excited-01 contest.
// Node 22, standard library only. Copies the beside-the-script entry.png
// into the output directory as entry.png. Deterministic: two runs write
// identical bytes.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the output directory from MAKEFUN_OUTPUT_DIR, falling back to
// /output. A blank value falls back too, so an empty env var never resolves
// to the current working directory.
function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim() !== "") {
    return fromEnv;
  }
  return "/output";
}

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outputDir = resolveOutputDir();

function main(): void {
  if (!existsSync(source)) {
    console.error(`error: entry image not found beside this script: ${source}`);
    process.exit(1);
  }

  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, join(outputDir, "entry.png"));
  console.log(`wrote ${join(outputDir, "entry.png")}`);
}

main();
