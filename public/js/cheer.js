
var aX = 0, aY = 0, aZ = 0;                     // 加速度の値を入れる変数を3個用意
var sum = 0;
var id = "";

var urlParams = new URLSearchParams(window.location.search);
id = urlParams.get('id');
var artistIdRef = firebase.database().ref('/artist/' + id);

// 加速度センサの値が変化したら実行される devicemotion イベント
window.addEventListener("devicemotion", (dat) => {
    sum += (Math.abs(aX - dat.accelerationIncludingGravity.x) + Math.abs(aY - dat.accelerationIncludingGravity.y) + Math.abs(aZ - dat.accelerationIncludingGravity.z)) / 10;
    aX = dat.accelerationIncludingGravity.x;    // x軸の重力加速度（Android と iOSでは正負が逆）
    aY = dat.accelerationIncludingGravity.y;    // y軸の重力加速度（Android と iOSでは正負が逆）
    aZ = dat.accelerationIncludingGravity.z;    // z軸の重力加速度（Android と iOSでは正負が逆）

    console.log(sum);

});
// 指定時間ごとに繰り返し実行される setInterval(実行する内容, 間隔[ms]) タイマーを設定
var timer = window.setInterval(() => {
    displayData();      // displayData 関数を実行
}, 33); // 33msごとに（1秒間に約30回）

var timer2 = window.setInterval(() => {
    countUpdateData();      // displayData 関数を実行

}, 60000); // 1minごとに実行

function countUpdateData() {
    var tmpSum = 0;
    artistIdRef.on('value', function (snapshot) {
        console.log('value', snapshot.val().name)
        tmpSum = snapshot.val().name;
        tmpSum = tmpSum + sum;
    })
    artistIdRef.update({
        "point": tmpSum
    });


}

// データを表示する displayData 関数
function displayData() {
    var txt = document.getElementById("txt");   // データを表示するdiv要素の取得
    txt.innerHTML = "x: " + aX + "<br>"         // x軸の値
        + "y: " + aY + "<br>"         // y軸の値
        + "z: " + aZ + "<br>"
        + "sum: " + sum + "<br>";                 // z軸の値
}

var artistRef = firebase.database().ref('/artist');
artistRef.on('value', function (snapshot) {
    valueArray = Object.values(snapshot.val());
    object_array_sort(valueArray, 'point', 'dec', function (new_data) {
        document.getElementById("color").textContent = new_data[0].color;
    });
});

function object_array_sort(data, key, order, fn) {
    //デフォは降順(DESC)
    var num_a = -1;
    var num_b = 1;

    if (order === 'asc') {//指定があれば昇順(ASC)
        num_a = 1;
        num_b = -1;
    }

    data = data.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        if (x > y) return num_a;
        if (x < y) return num_b;
        return 0;
    });

    fn(data); // ソート後の配列を返す
}

window.onload = function () {
    // document.getElementById("main").classList.add('cheer-style');
    setTimeout("next()", 5000)
}

function next() {
    document.getElementById("main").classList.add('cheer-style2');
    setTimeout("next2()", 5000)
}

function next2() {
    document.getElementById("main").classList.add('cheer-style3');
}

function go() {
    window.location.href = "thankyou.html";
}

