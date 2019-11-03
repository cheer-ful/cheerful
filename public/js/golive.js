var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');
console.log(urlParams.get('id'));

if (navigator.geolocation) {
    // alert("この端末では位置情報が取得できます");
} else {
    alert("この端末では位置情報が取得できません");
}

navigator.geolocation.getCurrentPosition(
    // 取得成功した場合
    function (position) {
        alert("緯度:" + position.coords.latitude + ",経度" + position.coords.longitude);
    },
    // 取得失敗した場合
    function (error) {
        switch (error.code) {
            case 1: //PERMISSION_DENIED
                alert("位置情報の利用が許可されていません");
                break;
            case 2: //POSITION_UNAVAILABLE
                alert("現在位置が取得できませんでした");
                break;
            case 3: //TIMEOUT
                alert("タイムアウトになりました");
                break;
            default:
                alert("その他のエラー(エラーコード:" + error.code + ")");
                break;
        }
    }
);


// cheer.htmlに移動
function GoNextPage() {
    window.location.href = 'cheer.html?' + "id=" + id;
}

function getTime(gLatitude, gLongitude, tLatitude, tLongitude) {
    let time = 0;
    time += ((6371 * Math.acos(Math.cos(tLatitude) * Math.cos(gLatitude) * Math.cos(gLongitude - tLongitude) + Math.sin(tLatitude) * Math.sin(gLatitude))) * 1000) / 77 + "\n";
    return time;
}


