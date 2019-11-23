module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: [
    "<rootDir>/tests/setupTests.js"
  ]
}