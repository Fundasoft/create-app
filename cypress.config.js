const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    supportFile: false,
    specPattern: ['./tests/**/*.spec.js', './app/**/*.spec.js'],
  },
  e2e: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    supportFile: false,
    specPattern: ['./tests/**/*.spec.js', './app/**/*.spec.js'],
  }
});
