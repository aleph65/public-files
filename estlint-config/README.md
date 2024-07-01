copy some files to your root:

- .prettierignore
- .prettierrc.js
- .eslintrc.js

add this to dev dependencies package.json

```json
    "@typescript-eslint/eslint-plugin": "^7.14.1",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-prettier": "^5.1.3",
    "eslint-plugin-simple-import-sort": "^12.1.0",
    "eslint-plugin-sort-destructure-keys": "^2.0.0",
    "eslint-plugin-sort-keys-fix": "^1.1.2",
    "prettier": "^3.3.2",
```

run 

```bash
pnpm install
```

add this to your scripts

```json
"lint": "eslint 'src/**/*.{js,ts,jsx,tsx}'",
"format": "prettier --write 'src/**/*.{js,ts,jsx,tsx,json,css,scss,md}'"
```

add .vscode/settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.requireConfig": true,
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}

```