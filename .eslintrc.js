module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': 'off',
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
