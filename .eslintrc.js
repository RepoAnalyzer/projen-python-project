module.exports = {
  "env": {
    "jest": true,
    "node": true
  },
  "root": true,
  "plugins": [
    "@typescript-eslint",
    "import",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ["./tsconfig.dev.json"],
    "tsconfigRootDir": __dirname
  },
  "ignorePatterns": [
    "*.js",
    "!.projenrc.ts",
    "*.d.ts",
    "node_modules/",
    "*.generated.ts",
    "coverage",
    "!.projenrc.ts",
    "!projenrc/**/*.ts"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  "rules": {
    "quotes": ["error", "double"]
 }
}
