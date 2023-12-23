module.exports = {
  collectCoverageFrom: ['./**/*.{js,ts,tsx}'],
  moduleDirectories: ['node_modules', './**/*.{js,ts,tsx}'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};
