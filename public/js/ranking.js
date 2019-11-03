var artistRef = firebase.database().ref('/artist');

var rank1Id = "";
var rank2Id = "";
var rank3Id = "";

// function geo(position) {
//     var geo_text = "緯度:" + position.coords.latitude + "\n";
//     geo_text += "経度:" + position.coords.longitude + "\n";
//     geo_text += "高度:" + position.coords.altitude + "\n";
//     geo_text += "位置精度:" + position.coords.accuracy + "\n";
//     geo_text += "高度精度:" + position.coords.altitudeAccuracy + "\n";
//     geo_text += "移動方向:" + position.coords.heading + "\n";
//     geo_text += "速度:" + position.coords.speed + "\n";
//     var date = new Date(position.timestamp);

//     //サンプルデータ(オアシス21)
//     var tLatitude = 35.1708924;
//     var tLongitude = 136.9095254;

//     //サンプルデータと現時点との角度測定。
//     tLatitude *= Math.PI / 180;
//     tLongitude *= Math.PI / 180;

//     var Between = 0.0;
//     var time = 0.0;

//     //二点間の距離
//     Between += 6371 * Math.acos(Math.cos(tLatitude) * Math.cos(gLatitude) * Math.cos(gLongitude - tLongitude) + Math.sin(tLatitude) * Math.sin(gLatitude)) + "\n";
//     geo_text += "二点間の距離" + Between + "km" + "\n";
//     // console.log(Between);

//     //時間
//     time += ((6371 * Math.acos(Math.cos(tLatitude) * Math.cos(gLatitude) * Math.cos(gLongitude - tLongitude) + Math.sin(tLatitude) * Math.sin(gLatitude))) * 1000) / 77 + "\n";
//     geo_text += "かかる時間" + time + "分" + "\n";
//     // console.log(time);
//     // geo_text += "取得時刻:" + date.toLocaleString() + "\n";
//     geo_text += "更新回数:" + (++num) + "\n";
//     var rad = Math.atan2(gLatitude - tLatitude, gLongitude - tLongitude);
//     // var angle = rad * (180 / Math.PI) ; // ラジアンを度数へ変換
//     geo_text += "角度" + (rad * (180 / Math.PI) + 180);
//     console.log(rad);
//     document.getElementById('position_view').innerHTML = geo_text;
//     // return rad; //二点間角度
// }


// artistRef.push({ name: "name", point: 0, location_x: "", location_y: "", color: "green" });
artistRef.on('value', function (snapshot) {

    valueArray = Object.values(snapshot.val());
    console.log(valueArray[0].location_x);

    object_array_sort(valueArray, 'point', 'dec', function (new_data) {
        //ソート後の処理
        console.log(new_data);
        // for (var i = 0; i < 10; i++) {
        //     document.write(new_data[i].name + "," + new_data[i].point + "<br>");
        // }
        document.getElementById("rank1-name").textContent = new_data[0].name;
        document.getElementById("rank1-distanse").textContent = new_data[0].point;
        document.getElementById("rank2-name").textContent = new_data[1].name;
        document.getElementById("rank2-distanse").textContent = new_data[1].point;
        document.getElementById("rank3-name").textContent = new_data[2].name;
        document.getElementById("rank3-distanse").textContent = new_data[2].point;

        console.log(Object.keys(snapshot.val())[0]);
        rank1Id = Object.keys(snapshot.val())[0];
        rank2Id = Object.keys(snapshot.val())[1];
        rank3Id = Object.keys(snapshot.val())[2];

    });
});

function rank1NextClick() {
    window.location.href = "golive.html?" + "id=" + rank1Id;
}

function rank2NextClick() {
    window.location.href = "golive.html?" + "id=" + rank2Id;
}

function rank3NextClick() {
    window.location.href = "golive.html?" + "id=" + rank3Id;
}

function go() {
    window.location.href = "golive.html";
}

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


