module.exports = {
  extends: '@loopback/eslint-config',
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn', // or error
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember'
        ],
        'format': null,
        'modifiers': ['requiresQuotes']
      }
    ],
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        'allowDestructuring': false, // Disallow `const { props, state } = this`; true by default
        'allowedNames': ['self'] // Allow `const self = this`; `[]` by default
      }
    ],
  },
};
