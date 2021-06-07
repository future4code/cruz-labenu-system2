export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  // rootDir: '<rootDir>/src',
  roots: ['<rootDir>/src']

  // A set of global variables that need to be available in all test environments

  // globals: {},

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module

  // moduleNameMapper: {},

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // setupFiles: [],

  // setupFilesAfterEnv: [],

  // The test environment that will be used for testing
  // testEnvironment: "jest-environment-node",

  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],
}
