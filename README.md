## fronend-static boilerplate

主に非SPAなLPや、数ページ程度の小規模制作案件向けのフロントエンド開発環境キット

- webpack
- babel
- postcss + csswring
- stylelint
- editorconfig

## Develop

```
yarn install
yarn start  # development
yarn deploy # production
```

開発環境は `http://localhost:3355/`  
基本的に `/src` 配下を編集する。js/cssはHot Module Replacement対応。

本番デプロイは `/public` 配下に成果物を吐き出す。CSSはFilename-based Cache Busting対応。ハッシュ付きでファイルを出力した後、そのファイル名でHTMLに`<link>`タグとして書き込む。
