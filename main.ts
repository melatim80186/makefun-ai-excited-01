// main.ts — "Idea Takes Flight" entrypoint for make.fun ai-excited-01.
// Node 22, standard library only. Deterministic: copies the beside-the-
// script entry.png into the output directory, byte for byte.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  if (fromEnv) return fromEnv;
  return "/output";
}

function main(): void {
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const source = join(scriptDir, "entry.png");
  if (!existsSync(source)) {
    console.error(`entry image not found: ${source}`);
    process.exit(1);
  }
  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  const target = join(outputDir, "entry.png");
  copyFileSync(source, target);
  const bytes = statSync(target).size;
  console.log(`wrote ${target} (${bytes} bytes)`);
}

main();
