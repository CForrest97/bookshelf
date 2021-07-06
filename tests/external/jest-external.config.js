module.exports = {
  preset: "ts-jest",
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      functions: 95,
      lines: 95,
    },
  },
  setupFilesAfterEnv: ["./setupTests.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
    },
    statements: 0,
    branches: 0,
    functions: 0,
    lines: 0,
  },
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/../../src/$1",
    "@tests/(.*)": "<rootDir>/../../tests/$1",
  },
  testEnvironment: "jsdom",
};
