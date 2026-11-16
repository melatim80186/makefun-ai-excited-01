// "Idea Takes Flight" — make.fun ai-excited-01 entry.
//
// This little program does exactly one job: it places the entry image
// where the contest harness expects it. The image itself already lives
// in this repo as entry.png, right next to this script; all we do is
// drop a copy of it into the output folder, creating that folder first
// when it is not there yet. Nothing is fetched, nothing is generated,
// and the bytes that come out are the bytes that went in.
//
// Usage:  MAKEFUN_OUTPUT_DIR=/some/dir node main.ts
// Without that variable the output goes to /output, the harness default.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Where the harness wants the image. The environment variable wins;
// otherwise we fall back to the standard /output directory.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Make sure the destination folder exists (creating parents as needed).
mkdirSync(outputDir, { recursive: true });

// The image sits beside this script, so resolve it from this file's own
// location rather than from wherever the process was launched.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(scriptDir, "entry.png");

// Copy it over, keeping the name the scorer looks for — the copy is
// byte-for-byte identical, so every run produces the same entry.
copyFileSync(sourceImage, join(outputDir, "entry.png"));
