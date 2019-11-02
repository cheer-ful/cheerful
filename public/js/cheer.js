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

window.onload = function(){
  // document.getElementById("main").classList.add('cheer-style');
  setTimeout("next()",5000)
}

function next(){
  document.getElementById("main").classList.add('cheer-style2');  
  setTimeout("next2()",5000)
}

function next2(){
  document.getElementById("main").classList.add('cheer-style3');  
}

function go() {
  window.location.href = "thankyou.html";
}
