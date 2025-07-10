module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./setupTest.js"],
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageReporters: ["json", "lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
};
