
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  "extends": [
    "next", 
    "next/core-web-vitals", 
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended", 
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier" // Prettier must be last brodie.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "eslint-comments",
    "jest",
    "promise",
    "import",
    "unicorn",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",
    "import/no-unresolved": "error",
    "import/order": [
      "error", 
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling", "object", "index"]],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["jest.setup.js", "**/*.test.tsx", "**/*.spec.tsx","**/*.test.ts", "**/*.spec.ts" ]}
    ]
  },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: ".",
        },
      },
    },
  };

