module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/**/mocks.ts',
    '!src/**/style.tsx',
    '!src/**/*.style.tsx',
    '!src/**/*.d.ts',
    '!src/pages/_document.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/index.tsx',
    '!src/pages/api/auth/\\[...nextauth\\].ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
};
