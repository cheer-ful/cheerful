
var artistRef = firebase.database().ref('/artist');

var rank1Id = "";
var rank2Id = "";
var rank3Id = "";

// artistRef.push({ name: "name", point: 1, location_x: "", location_y: "" });
artistRef.on('value', function (snapshot) {

    valueArray = Object.values(snapshot.val());
    object_array_sort(valueArray, 'point', 'dec', function (new_data) {
        //ソート後の処理
        console.log(new_data); //
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
    window.location.href = "golive.html?" + rank1Id;
}

function rank2NextClick() {
    window.location.href = "golive.html?" + rank2Id;
}

function rank3NextClick() {
    window.location.href = "golive.html?" + rank3Id;
}

function go() {
    window.location.href = "cheer.html?Lsev4ZFT9NaxPSBeDAr";
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


