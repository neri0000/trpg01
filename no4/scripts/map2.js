//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

var str = "";
document.getElementById('write').innerHTML = str;
document.getElementById('Iam').innerHTML = '<img src="../pic3/t1.png" alt="aa">';
}


//初見セリフ
var text = [
  "部屋に入ると様々な家具が置いてあるのが見えた。まるで誰かの個人部屋のようだ。",
  "しかしその部屋の主の姿はなく、窓も曇り外が確認できない。",
  "よく見ると部屋全体にうっすらと埃が積もっている。しばらく使われた形跡は無さそうだ。",
  "...",
  "この部屋の主には悪いが少し探索させてもらおう。何か使えるものがあるかもしれない",
] 
var n = 0;
var max = text.length;
var op = function () {
  document.getElementById('write').innerHTML = text[n];
  n++;
  if(n > max){
    str = " ";
    document.getElementById('write').innerHTML = str;
    ItemClick();
  }
}


var text2 = [
  "改めて確認すると随分と物が少ないように感じられる",
  "",
  "",
  "本棚を確認すると随分と収められている本が少ないように感じる",
  "...？",
  "数冊しかない本の中でも1冊不自然な本がある。表紙や台頭が書かれておらず、まるで装丁をしなかったかのように真っ白だ。",
  "...なにかに使えるかもしれない、持っていこう",
  "『白紙の本』を入手した",
  "",
  "",
  "",
  "もう気になるところはない"
] 
var n = 0;
var max2 = text.length;
var op2 = function () {
  document.getElementById('write').innerHTML = text2[n];
  n++;
  if(n > 13){
    str = " ";
    document.getElementById('write').innerHTML = str;
    ItemClick();
  }
}


//テレビのセリフ
var text3 = [
  "小さな棚だ。",
  "漫画本や小物、ぬいぐるみなどが収められている。",
  "最上段小漫画本は中間の巻が抜かれてる。読むためにまとめて抜いたのだろうか",
  "",
  "",
  "これ以上わかることはないだろう",
] 

var max3 = text3.length;
var t = 0;
var tv = function () {
  document.getElementById('write').innerHTML = text3[t];
  t++;
  if(t > max3){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}


//フィルムのセリフ
var f = 0;
var text4 = [
  "木の枝から紐のようなものが垂れ下がっている。",
  "よく見ようと近づくと、それは私の意図を察したかのように落ちてきた。",
  "--未使用の８ｍｍフィルムを入手した",
] 
var max4 = text4.length;
var film = function () {
  document.getElementById('write').innerHTML = text4[f];
  f++;
  if(f > max4){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}


var Right = function () {
  location.href = "map2-2.html";
}
var Left = function () {
  location.href = "map2-3.html";
}
var rLeft = function () {
  location.href = "map2-1.html";
}
var lRight = function () {
  location.href = "map2-1.html";
}