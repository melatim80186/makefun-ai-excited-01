/**
 * Idea Takes Flight — make.fun ai-excited-01 entry.
 *
 * A tiny cheerful white robot with a glowing orange visor rides
 * triumphantly on top of a gigantic glowing lightbulb lifting off
 * like a hot-air balloon through a deep indigo dawn sky. The bulb
 * blazes warm golden light with a clean zig-zag filament; long bold
 * ribbons of teal, magenta and gold stream behind it; confetti and
 * speed lines fill the sky; below, a small stylised neon city glows
 * at the bottom edge. One huge clear focal shape (the bulb) dominates
 * the frame. No text at all.
 *
 * This program is the deterministic entrypoint: it copies the
 * beside-the-script entry.png into the output directory as entry.png.
 * Node 22, stdlib only. Two runs write byte-identical output.
 */

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY_FILE = "entry.png";
const DEFAULT_OUTPUT_DIR = "/output";

function main(): void {
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const source = join(scriptDir, ENTRY_FILE);
  if (!existsSync(source)) {
    throw new Error(`entry image not found beside the script: ${source}`);
  }
  const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? DEFAULT_OUTPUT_DIR);
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, join(outputDir, ENTRY_FILE));
}

main();
