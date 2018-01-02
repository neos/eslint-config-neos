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
    'xo-space/esnext',
    'xo-react/space'
  ],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  rules: {
    //
    // Disable rules which aren't that important for us as a team.
    //
    'react/jsx-boolean-value': 0,
    'react/jsx-filename-extension': 0,

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
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/aria-proptypes': 2,
    'jsx-a11y/aria-role': 2,
    'jsx-a11y/aria-unsupported-elements': 2,
    'jsx-a11y/img-has-alt': [ 2, 'Image' ],
    'jsx-a11y/img-redundant-alt': 2,
    'jsx-a11y/label-has-for': [ 2, 'Label' ],
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/no-access-key': 2,
    'jsx-a11y/onclick-has-role': 1,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/tabindex-no-positive': 1
  }
}
