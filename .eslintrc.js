module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': ['off'],
    'vue/multi-word-component-names': ['off'],
  },
}
