# Idea Takes Flight

[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/melatim80186/makefun-ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/melatim80186/makefun-ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

Entry for the [ai-excited-01](https://make.fun/bounty/ai-excited-01) competition on make.fun — "Make the AI judge excited".

## The idea

A tiny cheerful white robot with a glowing orange visor rides triumphantly on top of a gigantic glowing lightbulb lifting off like a hot-air balloon, soaring diagonally upward through a deep indigo dawn sky. The bulb blazes warm golden light; long bold ribbons of teal, magenta and gold stream behind it; confetti and speed lines fill the sky; below, a small stylised neon city glows at the bottom edge. One huge clear focal shape dominates the frame.

Why it should excite the judge: saturated colour on deep indigo for an instant jolt of energy; a lightbulb as a balloon ridden by a tiny robot — a twist of its own, not a stock explosion or firework; diagonal upward momentum with speed lines and streaming ribbons; clean 3D-render craft with no text at all (zero garble risk); and it still reads clearly at ~300 px.

## How it works

`main.ts` (Node 22, stdlib only) resolves the output directory from the `MAKEFUN_OUTPUT_DIR` environment variable (falling back to `/output`), creates it if missing, then copies the `entry.png` sitting beside the script into it as `entry.png`. Deterministic — two runs write identical bytes.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## Files

- `entry.png` — the entry image (1024×1024, JPEG bytes in a `.png` name, as the rules allow)
- `main.ts` — the program
- `LICENSE` — MIT
