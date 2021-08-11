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
  "急がなければ。",
  "私の世界を待つ者がいる。",
  "急がなければ。",
  "はやる気持ちを無理やりに押さえつけ、努めて冷静にペンを走らせる。",
  "-ドラマの脚本、私はその締め切りに追われている-",
  "自ら望んだ道ではあるが、作品の肝となる脚本をたった一人で仕上げるという重圧と孤独は、時間と共に重く心に圧し掛かる",
  "本来であれば同じ班員と共同で仕上げるべきものを、半ば押し付けられるようにして一任されたのだ。",
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
  "-欠伸",
  "生理的に浮かぶ涙を手の甲で拭いつつ、机を整理する。書き殴った様な筆跡が目立つ脚本は、今日も未完成のまま閉じられた。",
  "ふらつく足取りで、縋るように寝室へ続く扉のノブを捻る。",
  "しかし、休息を望んだ一歩が地面に触れることは無かった。",
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
  "「...ここは？」",
  "当然と言うべきか、返事はない。",
  "辺りはほの暗く、周囲を見た渡してみても正確な情報が得られそうにない。",
  "しかし、人間とは慣れの生物である。時間が経つに連れ環境に私の視界が適応し始めた。",
  "そこは先ほどまでいた自室ではなく、ドアのみが立ち並ぶ無機質な空間であった。",
  "振り返ってみても、そこには壁があるのみで入口らしき物は見当たらない。まるで寝室の扉の先が此処に繋がっていたかのような演出だ。",
  "異常事態。極めて奇妙な体験をしている。それにも関わらず、私の心はこの状況に楽しみを感じ始めていた。",
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
  "さび付いた鉄のの扉。",
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
  "「なんだこれ、何かの地図？」",
  "「...一応持っておこうかな」",
  "",
  "「止まってたって物語は進まないよね」",
  "扉を開き、中へ進んだ。",
] 

var D3 = d3text.length;
var door3 = function () {
  document.getElementById('write').innerHTML = d3text[d3];
  d3++;
  if(d3 > D3){
    str = " ";
    document.getElementById('write').innerHTML = str;
    location.href = "map2/map2-1.html";
  }
}

//ドア4
var d4 = 0;
var d4text = [
  "比較的新しい木製の扉。",
  "鍵はかかっていないようだ。",
  "中に入って部屋を調べる。",
  "-滝君を入手した。-",
  "",
  "ここはもう調べた。",
] 

var D4 = d4text.length;
var door4 = function () {
  document.getElementById('write').innerHTML = d4text[d4];
  d4++;
  if(d4 == 3){
    sessionStorage.setItem('get1', true);
  }
  if(d4 > D4){
    str = "ここはもう調べた。";
    document.getElementById('write').innerHTML = str;
  }
}


//アイテムリスト入手状況セット
function FlagSet() {
  for(let i=0; i<itemlist.length; i++){
    var k = 'get'+i;
    data = sessionStorage.getItem(k);
    if(data == 'false'){
      sessionStorage.setItem(k, true);
    }
  }
}

var itemlist = [
  "MAP",
  "滝君",
  "８mmフィルム",
  "バールのようなもの"
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





