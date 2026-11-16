// main.ts — "Idea Takes Flight" entrypoint for make.fun ai-excited-01.
// Node 22, standard library only. Copies the beside-the-script entry.png
// into the output directory as entry.png. Deterministic: every run writes
// byte-identical output.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(scriptDir, "entry.png");

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return "/output";
}

function main(): void {
  if (!existsSync(sourceImage)) {
    console.error(`error: entry image not found beside the script: ${sourceImage}`);
    process.exit(1);
  }
  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  const destination = join(outputDir, "entry.png");
  copyFileSync(sourceImage, destination);
  console.log(`wrote ${destination}`);
}

main();
