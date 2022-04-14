module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/packages'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/config/setupTests.ts'],
  moduleDirectories: ['node_modules', 'packages'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testRegex: '((\\.|/*.)(test))\\.[tj]sx?$',
  coverageDirectory: 'coverage',
  coverageReporters: ['cobertura', 'html', 'lcov', 'text-summary', 'text'],
  collectCoverageFrom: [
    'packages/**/*.{js,jsx,ts,tsx}',
    '!packages/**/*.stories.{js,jsx,ts,tsx}',
    '!packages/styles/**/*',
    '!packages/web/**/*',
    '!packages/core/**/*',
    '!packages/utils/**/*',
  ],
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     lines: 80,
  //     functions: 80,
  //     statements: 80,
  //   },
  //   './**/': {
  //     branches: 80,
  //     lines: 80,
  //     functions: 80,
  //     statements: 80,
  //   },
  // },
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/config/mocks/fileMock.ts',
    '\\.(css)$': '<rootDir>/config/mocks/styleMock.ts',
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: './coverage/',
        outputName: 'junit.xml',
        classNameTemplate: '{classname} - {title}',
        titleTemplate: '{classname} - {title}',
        ancestorSeparator: ' > ',
        usePathForSuiteName: 'true',
      },
    ],
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
};
