module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./utils/setupTest.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
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
