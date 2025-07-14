module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./tests/utils/setupTest.js"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
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
