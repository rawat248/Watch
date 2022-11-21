module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": 0,
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
