// "Idea Takes Flight" — make.fun ai-excited-01 entry.
//
// A tiny cheerful white robot with a glowing orange visor rides
// triumphantly on top of a gigantic glowing lightbulb lifting off
// like a hot-air balloon through a deep indigo dawn sky. The bulb
// blazes warm golden light with a clean zig-zag filament; long bold
// ribbons of teal, magenta and gold stream behind it; confetti and
// speed lines fill the sky; below, a small stylised neon city glows
// at the bottom edge. One huge clear focal shape (the bulb) dominates
// the frame. No text at all.
//
// This program is deterministic: it copies the beside-the-script
// entry.png into the output directory, so two runs write identical
// bytes every time. Nothing is generated, randomised, or fetched at
// runtime — the output is a plain copy of the checked-in image, which
// is why the result is stable across runs and machines.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
