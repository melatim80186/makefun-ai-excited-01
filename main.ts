// Idea Takes Flight — make.fun ai-excited-01 entry.
//
// The program has one job: carry the finished artwork to the output
// directory so the judge can see it. The picture itself lives beside
// this file; all we do is deliver a copy of it, byte for byte.
// Deterministic by design: a copy never changes, so two runs always agree.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The harness tells us where to put the image; without that hint we
// fall back to the conventional /output directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// entry.png sits in the same folder as this script, whatever the
// working directory happens to be when the harness runs us.
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
