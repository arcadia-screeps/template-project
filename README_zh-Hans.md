# template-project

  <p align="center">
    <a href="README.md">English</a>
    ·
    <a href="README_zh-Hans.md">简体中文</a>
  </p>
## 描述

一个通用 Node 项目模板，使用：

1. `Typescript` 开发
2. `Rollup` 打包
3. `eslint` 与`prettier` 格式化
4. `@microsoft/api-extractor` 与 `@microsoft/api-documenter` 声称项目 api 文档



## 关键打包参数

指定 `rollup.config.mjs` 中的 `input` 来修改打包的入口, 默认 `src/index.ts`

指定 `package.json` 中的 `name`  来修改你的包在使用 CommonJS 导入时的包名

指定 `package.json` 中的 `types` 来修改生成项目声明文件的路径，默认 `dist/index.d.ts`

指定 `tsconfig.json` 中的 `outDir` 与 `sourceMap` 来修改导出的路径以及是否生成 sourcemap 文件，默认为 `dist` 和 `true`



**现在你可以在`src`目录中编写代码并使用`npm run build`打包到`dist`目录**
