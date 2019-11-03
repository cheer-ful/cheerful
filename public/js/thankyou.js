var sum;
var urlParams = new URLSearchParams(window.location.search);
sum = urlParams.get('point');
console.log(sum);

var txt = document.getElementById("txt");   // データを表示するdiv要素の取得
txt.innerHTML = "合計ポイント" + sum;

function go() {
    window.location.href = 'ranking.html';
}