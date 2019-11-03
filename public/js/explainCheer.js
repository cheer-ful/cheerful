var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');
console.log(urlParams.get('id'));

window.onload = function () {
  this.setTimeout("GoNextPage()", 1000);
}

function GoNextPage() {
  window.location.href = 'cheer.html?' + 'id=' + id;
}
