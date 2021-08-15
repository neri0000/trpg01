//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

  var str = "...";
  document.getElementById('write').innerHTML = str;
  document.getElementById('Iam').innerHTML = '<img src="pic1/t2.png" alt="aa">';
}


//セリフ

var text = [
  "...",
  "不意に、こんなことを思い出した。",
  "「いつからだろう」",
  "「お話を書かなくなっちゃったのは」",
  "...",
  "もう、思い出せない...",
  "というよりも",
  "「...思い出したくない」",
  "「また..台無しにされるくらいなら...」",
  "...",
  "...なんでこんなこと",
  "不意に思い出したんだろうか...",
  "...",
  "「...寝よ」",
  "そうして本読み終え",
  "私は瞳を閉じた。",
] 

//導入セリフ表示
var n = 0;
var max = text.length;
var myfunc = function () {
  document.getElementById('write').innerHTML = text[n];
  n++;
  if(n > max){
    str = " ";
    document.getElementById('write').innerHTML = str;
    n = 0;
    location.href = "index1.html";
  }
}

//目覚めた場所のセリフ
var text2 = [
  "...",
  "「ん........」",
  "「ここは...？」",
  "朝にしては、妙に薄暗い。",
  "というか、寝床が固い...？",
  "「あれ...」",
  "「ここ...どこ...」",
  "目を開くと、知らない場所にいた。",
  "扉が４つあるだけの部屋。",
  "...それ以外、何もない。",
  "「どうして...こんなところに...」",
  "「...」",
  "「......」",
  "「...行かなきゃ」",
  "進めば、何か変えられるかもしれない",
  "何故か、そんな思いを抱きながら",
  "私は足を運んだ。"
] 

var max2 = text2.length;
var myfunc2 = function () {
  document.getElementById('write').innerHTML = text2[n];
  n++;
  if(n > max2){
    str = " ";
    document.getElementById('write').innerHTML = str;
    document.getElementById('Iam').innerHTML = '<img src="pic1/t1.png" alt="aa">';
  }
}

//ドア１
var d1 = 0;
var d1text = [
  "古めかしい木製の扉。",
  "鍵はかかっていないようだ",
  " ",
  "「この扉だけ開いてる...」",
  "まるで進めと言わんばかりに。",
  "「...これは、地図？」",
  "「この扉の先のってこと...？」",
  "「...」",
  "「...行こう。」",
  "私は意を決して、扉をくぐった。",
] 

var D1 = d1text.length;
var door1 = function () {
  document.getElementById('write').innerHTML = d1text[d1];
  d1++;
  if(d1 > D1){
    str = " ";
    document.getElementById('write').innerHTML = str;
    location.href = "map1/map1-1.html";
  }
}

//ドア2
var d2 = 0;
var d2text = [
  "さび付いた鉄の扉。",
  "鍵がかかっている。",
  " ",
  "ここはもう調べた。",
] 

var D2 = d2text.length;
var door2 = function () {
  document.getElementById('write').innerHTML = d2text[d2];
  d2++;
  if(d2 > D2){
    str = "ここはもう調べた。";
    document.getElementById('write').innerHTML = str;
  }
}


//ドア3
var d3 = 0;
var d3text = [
  "比較的新しい木製の扉。",
  "鍵がかかっている",
  "",
  "ここはもう調べた。",
] 

var D3 = d3text.length;
var door3 = function () {
  document.getElementById('write').innerHTML = d3text[d3];
  d3++;
  if(d3 > D3){
    str = "ここはもう調べた。";
    document.getElementById('write').innerHTML = str;
  }
}

//ドア4
var d4 = 0;
var d4text = [
  "比較的新しい木製の扉。",
  "鍵がかかっている。",
  "",
  "ここはもう調べた。",
] 

var D4 = d4text.length;
var door4 = function () {
  document.getElementById('write').innerHTML = d4text[d4];
  d4++;
  if(d4 > D4){
    str = "ここはもう調べた。";
    document.getElementById('write').innerHTML = str;
  }
}


//アイテムリスト入手状況
function FlagSet() {
  for(let i=0; i<itemlist.length; i++){
    var k = 's1get'+i;
    data = sessionStorage.getItem(k);
    if(data == 'false'){
      sessionStorage.setItem(k, true);
    }
  }
}

var itemlist = [
  "使いかけの消しゴム",
  "自由帳",
  "読みかけの本",
  "日記"
]


let count = 1;
let address = 'HAVE' + count;
var Item = function () {
  var data;
  for(let i=0; i<itemlist.length; i++){
    var k = 's1get'+i;
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

