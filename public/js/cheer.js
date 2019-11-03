
var aX = 0, aY = 0, aZ = 0;                     // 加速度の値を入れる変数を3個用意
var sum = 0;
var id = "";


var urlParams = new URLSearchParams(window.location.search);
id = urlParams.get('id');
var artistIdRef = firebase.database().ref('/artist/' + id);


artistIdRef.on('value', function (snapshot) {
    console.log('value', snapshot.val().color)
    document.getElementById('cheer-style').style.backgroundColor = snapshot.val().color;

})

// 加速度センサの値が変化したら実行される devicemotion イベント
window.addEventListener("devicemotion", (dat) => {
    sum += (Math.abs(aX - dat.accelerationIncludingGravity.x) + Math.abs(aY - dat.accelerationIncludingGravity.y) + Math.abs(aZ - dat.accelerationIncludingGravity.z)) / 10;
    aX = dat.accelerationIncludingGravity.x;    // x軸の重力加速度（Android と iOSでは正負が逆）
    aY = dat.accelerationIncludingGravity.y;    // y軸の重力加速度（Android と iOSでは正負が逆）
    aZ = dat.accelerationIncludingGravity.z;    // z軸の重力加速度（Android と iOSでは正負が逆）

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
        tmpSum = snapshot.val().point;
        tmpSum = tmpSum + sum;
    })
    artistIdRef.update({
        "point": Math.floor(tmpSum)
    });


}

// データを表示する displayData 関数
function displayData() {
    // var txt = document.getElementById("txt");   // データを表示するdiv要素の取得
    // txt.innerHTML = sum + "point";                 // z軸の値
}

function go() {
    countUpdateData();
    window.location.href = "thankyou.html?" + "point=" + Math.floor(sum);
}



