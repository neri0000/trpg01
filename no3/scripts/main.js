//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

  var str = "...";
  document.getElementById('write').innerHTML = str;
  document.getElementById('Iam').innerHTML = '<img src="pic3/t2.png" alt="aa">';
}

//OPセリフ
var text = [
  "..................",
  "完成させなければ。",
  "はやる気持ちを無理やりに押さえつけ、努めて冷静にペンを走らせる。",
  "早く仕上げなければ。",
  "-ドラマで使われる脚本、私はその締め切りに追われている-",
  "",
  "『映像作家』。自ら望んだ道ではあるが、作品の肝となる脚本をたった一人で仕上げるという責任と重圧は、時間と共に重く心に圧し掛かる",
  "本来であれば同じ班員と共同で仕上げるべき脚本を、半ば押し付けられるようにして一任されたのだ。",
  "辛くないと言ったら嘘になる。同じ大学生として、不真面目な彼らに腹が立たないと言えば、それも嘘になる。",
  "それでも、こうして作業に没頭できているのは。やはり好きだからなのだろう。",
  "図書館、病院、森、...。作品は場所を限定しない。時空を超えて旅をしたり、気づけば世界を救っていたり、やろうと思えば思うように創造できる机上の世界。",
  "カットも撮り直しもできない現実なんかより、ずっと自由だ。",
  "『お前の脚本は現実味がない』とはよく言われるが、物語の中くらい現実離れしたっていいと私は思う。",
  "だってその方が絶対面白い。",
  " ",
  "部屋の時計が音を立てる。集中しているときにこそ、僅かな騒音がやけに大きく聞こえてしまうものだ。",
  "通常よりもいくらか濃い筆圧が、無意識にもその音にストレスを感じていることを告げる。時刻は深夜の2時を回っていた。",
  "「明日も早いし、もう寝るか。...というか寝たい。」",
  "-欠伸-",
  "生理的に浮かぶ涙を手の甲で拭いつつ、机を整理する。書き殴った様な筆跡が目立つ脚本は、今日も未完成のまま閉じられた。",
  "意識は朦朧。当然だ、ここの所徹夜続きだったのだから。",
  "ふらつく足取りで、縋るように寝室へ続く扉のノブを捻る。",
  "暗転。",
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
  "「...ありゃ？」",
  "果たしてそこは、望んだ場所（寝室）ではなかった。",
  "そこは先ほどまでいた自室ではなく、ドアのみが立ち並ぶ無機質な空間。",
  "目を擦る・頬を抓る。...といった王道なアクションは取らないが、自身が見る景色を疑った。",
  "天井から吊るされた明かりがぼんやりと辺りを照らし、見渡す限り人はいない。",
  "振り返ってみても、そこには壁があるのみで入口らしき物は見当たらない。まるで寝室の扉の先が此処に繋がっていたかのような演出だ。",
  "異常事態。",
  "それ即ち、極めて奇妙な体験。",
  "私の心は、この状況に楽しみを感じ始めていた。",
  "-操作説明：探索について-",
  "-操作はクリックのみです。-",
  "-画面の気になる箇所をクリックすることで、その場所についての情報が開示されます。-",
  "-また、調べた場所によっては『アイテム』を獲得することが出来ます。-",
  "-アイテムは画面右上からいつでも確認することが出来ます。探索によって得られた情報もアイテムの対象になりますので、注意深く探索しましょう。-",
  "-ステージ間の移動にはマップを使います。-",
  "-現在は表示されていませんが、マップは画面右上に用意されますので移動時にお役立てください。-",
] 

var max2 = text2.length;
var myfunc2 = function () {
  document.getElementById('write').innerHTML = text2[n];
  n++;
  if(n > max2){
    str = " ";
    document.getElementById('write').innerHTML = str;
    document.getElementById('Iam').innerHTML = '<img src="pic3/t1.png" alt="aa">';
  }
}

//ドア１
var d1 = 0;
var text3 = [
  "古めかしい木製の扉。",
  "この扉を前にすると不思議と意識が遠のく。",
  "眠気ではない。",
  "それは吸い取られるような、何を失いかけるような、そんな怪しい感覚。",
  "鍵がかかっている。",
  " ",
  "ここはもう調べた。",
] 

var D1 = text3.length;
var door1 = function () {
  document.getElementById('write').innerHTML = text3[d1];
  d1++;
  if(d1 > D1){
    str = "ここはもう調べた。";
    document.getElementById('write').innerHTML = str;
  }
}

//ドア2
var d2 = 0;
var d2text = [
  "さび付いた鉄の扉。",
  "扉からは何と言えない匂いが漂っている。",
  "錆は赤く変黒く色し、ぱっと見では血のように思える。",
  "「なんだか、不気味だ...。」",
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
  "比較的新しい木製の扉。隙間からは湿った空気が流れてきている。",
  "鍵はかかっていないようだ。",
  "",
  "扉の隙間に1枚のメモ用紙が挟まっている。",
  "時計やテレビ？といった落書きのようなイラストが書かれている。イラスト間には仕切りがあり、空間を表しているようだ。",
  "「なんだこれ、何かの地図？」",
  "「...一応持っておこうかな」",
  "",
  "「..........よし」",
  "扉を開き、中へ進んだ。",
] 

var D3 = d3text.length;
var door3 = function () {
  document.getElementById('write').innerHTML = d3text[d3];
  d3++;
  if(d3 > D3){
    str = " ";
    document.getElementById('write').innerHTML = str;
    location.href = "map1/map1-1.html";
  }
}

//ドア4
var d4 = 0;
var d4text = [
  "比較的新しい木製の扉。",
  "鍵はかかっていないようだ。",
  "！！！",
  "中に入ろうとノブと握ると、強い悪寒がした。",
  "強烈な焦燥感と、少しの喪失感",
  "",
  "今は、開けない方が良い気がする",
] 

var D4 = d4text.length;
var door4 = function () {
  document.getElementById('write').innerHTML = d4text[d4];
  d4++;
  if(d4 == 3){
    sessionStorage.setItem('get1', ture);
  }
  if(d4 > D4){
    str = "開けない方が良い気がする";
    document.getElementById('write').innerHTML = str;
  }
}


//アイテムリスト入手状況セット
function FlagSet() {
  for(let i=0; i<itemlist.length; i++){
    var k = 'get'+i;
    var data = sessionStorage.getItem(k);
    if(data == 'false'){
      sessionStorage.setItem(k, true);
    }
  }
}


//斧入手状況セット
let ono;
function onoSet() {
  let ono = sessionStorage.getItem('get0');
  if(ono == 'true'){
    document.querySelector('.ono').style.display = "none";
  }
}


//テープの入手状況セット
function tapeSet() {
  let bigBookF = sessionStorage.getItem('bigBook');
  let boxF = sessionStorage.getItem('box');
  let filmF = sessionStorage.getItem('film');
  let penF = sessionStorage.getItem('pen');
  let skyF = sessionStorage.getItem('sky');
  let back3F = sessionStorage.getItem('back3');

  let tapeF = sessionStorage.getItem('tape');
  if(tapeF == 'end'){
    document.querySelector('.tape').style.display = "none";
  }
  else if((bigBookF == 'end')&&(boxF == 'end')&&(bigBookF == 'end')&&(filmF == 'end')&&(penF == 'end')&&(skyF == 'end')&&(back3F == 'end')){
    document.querySelector('.tape').style.display = "block";
  }
}



//ダイスロールイベント判定
function takiSet() {
  sessionStorage.setItem('taki', 'end');
}
function rollSet(){
  sessionStorage.setItem('roll', 'true');
}



var itemlist = [
  "斧",
  "”無くした感想用紙”",
  "”誕生日プレゼント”",
  "リモコン",
  "白いテープ",
  "小さな鍵"
]

let count = 1;
let address = 'HAVE' + count;

var Item = function () {
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

var mapFlag = function () {
  var data0 = sessionStorage.getItem('map0');
  var data1 = sessionStorage.getItem('map1');
  if(data0 == 'true'){
    document.querySelector('.mori').style.display = "block";
  }
  if(data1 == 'true'){
    document.querySelector('.izumi').style.display = "block";
  }
}






