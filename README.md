## Fronend-static boilerplate

主に非SPAなLPや、数ページから10数ページ程度の、小規模制作案件向けのフロントエンド開発環境キット

- Webpack
- Babel + transform-runtime
- EJS
- PostCSS + CSSWring
- ESLint, StyleLint
- EditorConfig

## Develop

```
yarn install
yarn start # development with HMR
yarn lint  # eslint & stylelint
```

開発環境は `http://localhost:3355/`  
VirtualBoxでIE環境をテストするときは、「http://10.0.2.2:3355/」で見ると良い。  
参考: http://garbagetown.hatenablog.com/entry/20100313/1270039659

基本的に `/src` 配下を編集する。画像や静的ファイルも `/src/img` などに置く。  
モジュール分割は簡易BEM式。検索効率と名前衝突の回避のため、モジュールのBlockとファイル名は一致させること。  
HTMLの追加は `webpack.pages.js` に追記した上で `/src/templates` 以下に実ファイルを設置する。titleやdescriptionの設定もここで行う。

## Production

```
yarn deploy # production
```

本番デプロイは `$ yarn deploy` すると `/dist` 配下に成果物を吐き出す。  
エントリーポイントであるJS/CSS、画像、フォントファイルなど、webpackを通した静的ファイルにはハッシュがファイル名に付く。  
画像は圧縮もしているので、画質に不満がある場合は `/webpack.prod.js` の該当部分を編集すること。

HTML内のパス解決は部分的に対応。  
画像等は下記のように`require()`経由でWebpackに通す。
開発者ツールのNetworkで、404エラーが出てないかチェックすると良い。

```
<img src="<%= require('../img/sample.jpg') %>" alt="">>
```

内部リンクは基本的に相対パスで記述するか、必要に応じて`href`属性を置換すること。

