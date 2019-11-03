var artistIdRef = firebase.database().ref('/artist/-Lsh0SCxDudlM7JhY4NX');
function red(){
  artistIdRef.update({
    "color": "red"
  });
}

function blue(){
  artistIdRef.update({
    "color": "blue"
  });
}

function green(){
  artistIdRef.update({
    "color": "green"
  });
}
