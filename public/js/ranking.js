
var artistRef = firebase.database().ref('/artist');
artistRef.push({ name: "name", point: 1, location_x: "", location_y: "" });
artistRef.on('value', function (snapshot) {
    // console.log(snapshot.val()); // 取得した際の処理
    // console.log(Object.values(snapshot.val()));
    valueArray = Object.values(snapshot.val());
    object_array_sort(valueArray, 'point', 'dec', function (new_data) {
        //ソート後の処理
        console.log(new_data); //
        for (var i = 0; i < 10; i++) {
            document.write(new_data[i].name + "," + new_data[i].point + "<br>");
        }
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


