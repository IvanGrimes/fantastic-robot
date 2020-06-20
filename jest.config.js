module.exports = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '^@shared': '<rootDir>/shared',
  },
};
