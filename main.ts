import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the output directory from the environment, defaulting to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output directory if it does not exist yet.
mkdirSync(outDir, { recursive: true });

// Copy the entry image sitting beside this script into the output directory.
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
