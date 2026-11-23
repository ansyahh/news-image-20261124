// A news-image entry (Node 22, standard library only): its image is the entry.png beside
// this file, and the program copies it to /output/entry.png. The image is a one-page
// newspaper front page for Tuesday, 24 November 2026, drawn by a program in this session
// (draw.py, PIL): the date in a red band, a lead story on the Strait of Hormuz death toll,
// and six more stories across regions and fields, each with a short headline and summary.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
