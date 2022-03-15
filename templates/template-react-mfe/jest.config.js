module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testRegex: '((\\.|/*.)(test))\\.[tj]sx?$',

  coverageDirectory: 'reports',
  coverageReporters: ['cobertura', 'html', 'lcov', 'text-summary', 'text'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.tsx',
    '!src/index.dev.ts',
    '!src/**/*.style.ts',
    '!src/config/**/*.ts',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/webpack.config.{dev,prod}.js',
    '!src/<%= normalizedMfeName %>.tsx',
    '!src/analyze.js',
    '!src/paths.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      lines: 80,
      functions: 80,
      statements: 80,
    },
    './**/': {
      branches: 80,
      lines: 80,
      functions: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/config/mocks/fileMock.ts',
    '\\.(css)$': '<rootDir>/config/mocks/styleMock.ts',
  },
  testResultsProcessor: 'jest-sonar-reporter',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: './reports/',
        outputName: 'junit.xml',
        classNameTemplate: '{classname} - {title}',
        titleTemplate: '{classname} - {title}',
        ancestorSeparator: ' > ',
        usePathForSuiteName: 'true',
      },
    ],
  ],
};
