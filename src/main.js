// -----------------------------------------------------------------------------
// ライブラリのインポート
// -----------------------------------------------------------------------------
// VueJs
import { createApp, h } from 'vue';

// -----------------------------------------------------------------------------
// GETパラメータの取得
// -----------------------------------------------------------------------------
let queryObject = {};

if (window.location.search) {

    // 1文字目がクエスチョン'?'になっているので、substringで2文字目以降を取得する
    const queryString = window.location.search.substring(1);
    // '&'キーワードで分解する
    var parameters = queryString.split('&');

    for (let i = 0, ilen = parameters.length; i < ilen; i++) {

        // '='キーワードでキーと値に分解する
        var element = parameters[i].split('=');

        // デコードを忘れずに実施する
        var paramName = decodeURIComponent(element[0]);
        var paramValue = decodeURIComponent(element[1]);

        queryObject[paramName] = paramValue;
    }
}

// ------------------------------------------------------------------------------
// 動的インポートを実施
// ------------------------------------------------------------------------------
// URL指定例）
// http://localhost:8080/hello-vuejs/index.html?componentPath=/Func/Hello/Front/View/Hello
// http://localhost:8080/hello-vuejs/index.html?componentPath=/Func/Goodbye/Front/View/Goodbye
if (typeof queryObject['componentPath'] !== 'undefined') {

    // componentPathを以下のルールで変換
    // 例）
    //    /Func/Hello/Front/View/Hello
    //     ↓
    //   ./Func/Hello/Front/View/Hello.vue
    const componentPath = queryObject['componentPath'];
    const componentId = componentPath.substring(componentPath.lastIndexOf('/') + 1);

    const componentLoadPromise = import("./" + componentPath.replace(/^\//, "") + ".vue");

    componentLoadPromise.then(function (value) {
        // 動的インポート完了

        const app = createApp(h(value.default)).mount('#app');
    });

} else {
    console.warn('componentPathパラメータが見つかりませんでした。');
}
