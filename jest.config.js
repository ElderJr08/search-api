/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/**/*.js',
    '!<rootDir>/src/main/**',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
}
  