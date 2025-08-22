#!/usr/bin/env node
/**
 * turborepo-template bootstrapper
 *
 * This utility wraps `create-turbo` to scaffold a repo from the
 * react18-tools turborepo template and runs `pnpm rebrand` inside it.
 *
 * Usage:
 *   npx r18-turborepo my-app
 *
 * Notes:
 * - If no `projectName` is given, user is prompted to enter one
 * - Defaults to `react18-tools-turborepo-template`
 */

import { execSync } from "child_process";
import { resolve } from "path";
import { existsSync } from "fs";
import readline from "readline";

const DEFAULT_NAME = "react18-tools-turborepo-template";

export const askQuestion = (query: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => {
    rl.question(query, ans => {
      rl.close();
      resolve(ans);
    });
    rl.write(DEFAULT_NAME);
  });
};

const main = async (): Promise<void> => {
  let projectName = process.argv[2];

  if (!projectName) {
    const input = await askQuestion(`Project name: `);
    projectName = input.trim() || DEFAULT_NAME;
  }

  const projectDir = resolve(process.cwd(), projectName);

  // Step 1: Scaffold project using turborepo template
  console.log(`\n🔨 Creating turborepo project: ${projectName}\n`);
  const cmd = `pnpm dlx create-turbo@latest ${projectName} --example https://github.com/react18-tools/turborepo-template/ -m pnpm`;

  try {
    execSync(cmd, { stdio: "inherit" });
  } catch (err: any) {
    console.error("❌ Error while running create-turbo:", err.message);
    return;
  }

  // Step 2: Verify directory exists
  if (!existsSync(projectDir)) {
    console.error(`❌ Expected directory not found: ${projectDir}`);
    return;
  }

  // Step 3: Run rebrand
  console.log(`\n🚀 Rebranding project in ${projectName}\n`);
  try {
    execSync("pnpm rebrand", {
      cwd: projectDir,
      stdio: "inherit",
    });
  } catch (err: any) {
    console.error("❌ Rebrand step failed:", err.message);
    return;
  }

  console.log(`\n✅ Done! Your project is ready in: ${projectDir}\n`);
};

main();
