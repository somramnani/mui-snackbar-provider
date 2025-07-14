module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./tests/utils/setupTest.js"],
  moduleDirectories: ["node_modules", "src"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/index.js"],
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
