# YoloGroup's searching countries and countries label task
## Table of Contents
- [Installation](#installation)
- [Testing](#testing)
- [Features](#Features)
- [Contact Information](#contact-information)

# installation
To install the project, follow these steps:
run this command in a terminal of directory you want:
- git clone https://github.com/zaraganja/YoloGroup-Countries-Zahra.h.g.git
Install dependencies run:
open terminal in file of the project:
- npm install
Start the application run :
- npm run dev

# testing
to test the full application run :
- npm test
to test CountriesTable component run :
- npm test CountriesTable.test.tsx
to test SearchBox component run :
- npm test SearchBox.test.tsx
to test App component :
- npm test App.test.tsx

# Features
- React , Typescrip and Vite
- TailwindCSS as CSS framework
- @testing-library/react and jest as testing libraries
- react-icons library to import icon (search icon)
- react-responsive library to develope PWA responsive mode of the project
- GraphQL queries for fetching data from graphQL API

# contact-information
email-addres : zahra.h.ganji@gmail.com
LinkedIn : https://www.linkedin.com/in/zahrahozhabriganji/




# React + TypeScript + Vite


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
