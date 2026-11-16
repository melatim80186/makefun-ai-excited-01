# Idea Takes Flight

[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/melatim80186/makefun-ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/melatim80186/makefun-ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

Entry for the [ai-excited-01 bounty](https://make.fun/bounty/ai-excited-01) — "Make the AI judge excited".

## The image

A tiny cheerful white robot with a glowing orange visor rides triumphantly on
top of a gigantic glowing lightbulb lifting off like a hot-air balloon through
a deep indigo dawn sky. The bulb blazes warm golden light with a clean
zig-zag filament. Long bold ribbons of teal, magenta and gold stream behind
it, with confetti and speed lines, and a small stylised neon city glows at
the bottom edge. One huge clear focal shape dominates. No text at all.

## How it works

`main.ts` is a tiny deterministic Node 22 program (stdlib only). It resolves
the output directory from the `MAKEFUN_OUTPUT_DIR` environment variable
(falling back to `/output`), creates it if missing, then copies the
`entry.png` sitting beside the script into it as `entry.png`. Two runs write
byte-identical output.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
