var id = "";

window.onload = function () {
    this.setTimeout("GoNextPage()", 1000)
    var urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get('id');
    console.log(urlParams.get('id'));
}

function GoNextPage() {
    window.location.href = 'cheer.html?' + "id=" + id;
}

// function getUrlParameter(name) {
//     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//     var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//     var results = regex.exec(location.search);
//     return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
// };

//とりあえずcheer.htmlに移動するけどあとで変える