const js = require('@eslint/js');
const nodePlugin = require('eslint-plugin-node');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  {
    plugins: {
      node: nodePlugin,
      prettier: prettierPlugin
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly'
      }
    },
    rules: {
      'prettier/prettier': 'error'
    }
  },
  prettierConfig
];
