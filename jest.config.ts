import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/services(.*)$": "<rootDir>/src/services$1",
    "^@/api(.*)$": "<rootDir>/src/api$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(config);
