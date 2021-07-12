const path = require('path');

module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'vue'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/components/$1',
  },
  preset: 'ts-jest',
  rootDir: path.resolve(__dirname),
  testEnvironment: 'jsdom',
  testRegex: [
    '^.+\\.spec.(j|t)sx?$',
  ],
  transform: {    
    '^.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  verbose: true,
}
