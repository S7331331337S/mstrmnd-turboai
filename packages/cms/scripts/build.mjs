import { spawnSync } from "node:child_process";

if (!process.env.BASEHUB_TOKEN) {
  console.log("Skipping BaseHub build (BASEHUB_TOKEN is not set).");
  process.exit(0);
}

const result = spawnSync("basehub", ["build"], {
  stdio: "inherit",
  shell: true,
});

process.exit(result.status ?? 1);
