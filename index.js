'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: [
      'babel',
      'react',
      'jsx-a11y',
      'import'
  ],
  extends: [
    'xo-space/esnext'
  ],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  rules: {
    // After eslint 3.3 lot of rules has changed or was introduced
    'no-unused-vars': 'error',
    'capitalized-comments': 'off',
    'new-cap': 'warn',
    'quote-props': 'warn',
    'func-names': 'warn',
    'valid-typeof': ['error', { requireStringLiterals: false }],
    'prefer-promise-reject-errors': ['warn', {'allowEmptyReject': true}],
    'no-useless-return': 'error',
    'no-self-assign': 'warn',

    //
    // Disable rules which aren't that important for us as a team.
    //
    'react/jsx-boolean-value': 0,
    'react/jsx-filename-extension': 0,

    //
    // Necessary to remove no-unused-vars
    //
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,

    //
    // Switch to a 4 space indentation.
    //
    'react/jsx-indent-props': [2, 4],
    'react/jsx-indent': [2, 4],
    'indent': 'off',
    'indent-legacy': [2, 4, {SwitchCase: 1}],

    //
    // Enforce a basic level of accessibility.
    //
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/alt-text': [ 'warn', {components: ['Image']} ],
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/label-has-for': [ 'error', {
        'components': [ 'label' ],
        'allowChildren': true
    }],
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-static-element-interactions': [
      'warn',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/tabindex-no-positive': 'warn'
  }
}
