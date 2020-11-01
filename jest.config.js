module.exports = {
  setupFiles: [
    './jest.setup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  verbose: true,
  testPathIgnorePatterns: ['<rootDir>/tests/e2e'],
  testEnvironment: 'node',
};
