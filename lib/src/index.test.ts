import { describe, it, expect, vi } from "vitest";
import readline from "readline";
import { execSync } from "child_process";
import { askQuestion } from ".";

vi.mock("child_process");

describe("askQuestion", () => {
  it("resolves with user input", async () => {
    const mockInterface = {
      question: vi.fn((_q: string, cb: (ans: string) => void) => cb("my-app")),
      close: vi.fn(),
    } as unknown as readline.Interface;

    vi.spyOn(readline, "createInterface").mockReturnValue(mockInterface);

    const answer = await askQuestion("Project name?");
    expect(answer).toBe("my-app");
  });

  it("resolves with empty string if input is empty", async () => {
    const mockInterface = {
      question: vi.fn((_q: string, cb: (ans: string) => void) => cb("")),
      close: vi.fn(),
    } as unknown as readline.Interface;

    vi.spyOn(readline, "createInterface").mockReturnValue(mockInterface);

    const answer = await askQuestion("Project name?");
    expect(answer).toBe("");
  });
});

describe("error handling", () => {
  it("handles execSync errors gracefully", () => {
    (execSync as unknown as ReturnType<typeof vi.fn>).mockImplementation(() => {
      throw new Error("mock failure");
    });

    try {
      execSync("pnpm dlx create-turbo");
    } catch (err: any) {
      expect(err.message).toContain("mock failure");
    }
  });
});
