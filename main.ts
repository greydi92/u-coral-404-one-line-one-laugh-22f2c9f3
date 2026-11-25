// One Line, One Laugh — u-coral-404-one-line-one-laugh-22f2c9f3
// Writes exactly one funny line to /output/entry.txt (no trailing newline,
// so the character count is exactly the line itself). No network, no input,
// deterministic: the same line every run.
//
// The line (iterate round 1, 2026-11-25): the therapist ghosts the patient,
// then the punchline turns the joke back on itself — even the abandonment
// issues feel abandoned. Two turns in one line, 70 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My therapist ghosted me. Even my abandonment issues feel abandoned.";

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return "/output";
}

function main(): void {
  // Defensive: the gate allows 1-200 characters, one line, no trailing
  // newline. Normalise here so the program can never emit an invalid file
  // even if LINE is edited later.
  const text = LINE.replace(/[\r\n]+$/u, "").slice(0, 200);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), text, "utf8");
}

main();
