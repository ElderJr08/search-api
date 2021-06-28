module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'script',
    ecmaFeature: {
      impliedStrict: true,
    },
    requireConfigFile: false,
  },
  parser: '@babel/eslint-parser',
  env: {
    'node': true,
  },
  rules: {
    'consistent-return': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'func-names': 'off',
    'no-multi-spaces': 'off',
    'spaced-comment': ["error", "always", {
      "markers": ["/"],
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'padded-blocks': 'off',
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'indent': ['error', 2],
    'max-len': ['error', 150, 2, {
      ignoreComments: true,
    }],
    'no-unused-vars': ['error', {
      vars: 'local',
      args: 'after-used',
    }],
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 1,
    }],
    'no-nested-ternary': 'off',
    'no-underscore-dangle': ['error', {
      'allow': ['_super', '_lookupFactory'],
    }],
    'object-shorthand': ['error', 'methods'],
  },
};
