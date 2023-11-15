module.exports = {
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    // Add other Jest configuration options as needed
  };