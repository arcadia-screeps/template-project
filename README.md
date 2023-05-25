# template-project

  <p align="center">
    <a href="README.md">English</a>
    ·
    <a href="README_zh-Hans.md">简体中文</a>
  </p>

## Description

A general template project for node projects using:

1. `Typescript` to develop
2. `Rollup` to bundle
3. `eslint` and `prettier` to lint code
4. `@microsoft/api-extractor` and `@microsoft/api-documenter` to generate api docs



## Key Parameters for Bundling

specified  `input` in `rollup.config.mjs`  to change bundling entry, default `src/index.ts`

specified  `name` in `package.json`  to change commonJS import name of your package

specified  `types` in `package.json`  to change path of output declaration file, default `dist/index.d.ts`

specified `outDir` and `sourceMap` in `tsconfig.json` to change output path and whether generating sourcemap file, default `dist` and `true`



**Now you can start writing code in  `src` directory and use `npm run build` to get bundling from `dist`**

