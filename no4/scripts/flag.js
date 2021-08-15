//フラグ
function FlagSet() {
  for(let i=0; i<itemlist.length; i++){
    var s4k = 'get'+i;//辞書の名前
    data = sessionStorage.getItem(s4k);
    if(data == 'false'){
      sessionStorage.setItem(s4k, true);
    }
  }
}

//アイテムリスト
var s4itemlist = [
  "map",
  "a",
  "b",
  "c"
]

//アイテムの獲得設定
let s4count = 1;
let s4address = 'HAVE' + s4count;
var s4Item = function () {
  var data;
  for(let i=0; i<itemlist.length; i++){
    var k = 'get'+i;
    data = sessionStorage.getItem(k);
    console.log(data);
    if(data == 'true'){
      address = 'HAVE' + count;
      document.getElementById(address).innerHTML = itemlist[i];
      sessionStorage.setItem(k, false);
      count++;
    }
  }
}