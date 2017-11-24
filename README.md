## fronend-static boilerplate

主に非SPAなLPや、数ページ程度の小規模制作案件向けのフロントエンド開発環境キット

- webpack
- babel
- eslint
- ejs
- postcss + csswring
- stylelint
- editorconfig

## Develop

```
yarn install
yarn start  # development
yarn deploy # production
yarn lint   # eslint & stylelint
```

開発環境は `http://localhost:3355/`  
基本的に `/src` 配下を編集する。js/cssはHot Module Replacement対応。
テンプレートとしてEJSを用い、共通パーツを適宜インクルードする。

本番デプロイは `/dist` 配下に成果物を吐き出す。CSS/JSはハッシュ付きでファイルに書き込む。
