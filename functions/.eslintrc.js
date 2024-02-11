module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-trailing-spaces": "off",
    "space-before-function-paren": "off",
    "array-bracket-spacing": "off",
    "object-curly-spacing": "off",
    "computed-property-spacing": "off",
    "space-in-parens": "off",
    "keyword-spacing": "off",
    "space-before-blocks": "off",
    "comma-dangle": "off",
    "max-len": "off",
    "quotes": "off",
    "no-unused-vars": "warn",
    "indent": "off",
    "padded-blocks": "off"
  },
};
