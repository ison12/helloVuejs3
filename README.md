# helloVuejs
Vue.js3でSFC（単一ファイルコンポーネント）を使う環境の構築

## ツールなどのインストール

### Node.jsのインストール

[Node.js](https://nodejs.org/ja/)

## インストール方法

    cd [Git cloneしたディレクトリ or Downloadディレクトリ]
    npm install

## 起動方法

以下のコマンドでNode.jsのWebサーバーが起動できます。

    npm run start

上のコマンドを実行後、以下のURLで各画面へのアクセスが可能。

- [Hello画面](http://localhost:8080/hello-vuejs/index.html?componentPath=/Func/Hello/Front/View/Hello)
- [Goodbye画面](http://localhost:8080/hello-vuejs/index.html?componentPath=/Func/Goodbye/Front/View/Goodbye)

## ビルド方法

以下のコマンドでbundle.jsが生成されます。

    npm run build

## 元になった記事
[Vue.js3でSFC（単一ファイルコンポーネント）を使う環境の構築](https://qiita.com/ison12/items/6b5b3e0d8338b3baac83)