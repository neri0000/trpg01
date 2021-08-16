//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

var str = "";
document.getElementById('write').innerHTML = str;
document.getElementById('Iam').innerHTML = '<img src="../pic3/t1.png" alt="aa">';


FlagSet()
}


//初見セリフ
var map3OP = [
  "暗い、森のなかにいる。",
  "空を見上げれば、緑のグラデーションが鮮やかに光の色を教えてくれる。",
  "周囲を見渡すも、壁と呼べるようなものは先ほど出てきた穴以外になくここが野外であることが分かる。",
  "いつから部屋の外が森になったのか。いやしかし、それよりも、目の前に広がるこの幻想的な光景に息を飲む。",
  "生い茂る木々、湿った空気、降り注ぐ陽光は、白い軌跡を残して地面に差す。",
  "『ずっとここに居たい』と不意に思ってしまう程に、私は魅了されていた。",
] 

var map3Max = map3OP.length;
var Ma = 0;
let map3 = sessionStorage.getItem('op2');

var op2 = function () {
  if(map3 != 'end'){
    document.getElementById('write').innerHTML = map3OP[Ma];
    Ma++;
  }
  if(Ma == map3Max+1){
    sessionStorage.setItem('op2', 'end');
    map3 = sessionStorage.getItem('op2');
  }
  if(map3 == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//tvセリフ
var tvText = [
  "ブラウン管テレビだ。何も映っていない。",
  "...。",
  "テレビの黒い画面は、私の姿を反射している。",
  "私がテレビを見ているのか、テレビが私を見ているのか...そんな錯覚を覚える。",
  "不気味で仕方がないが、静かに佇むその姿はこの空間に馴染んでいるように思えた。",
  "だからなのか。",
  "何故だかよくわからないが、私にはその”テレビ”が",
  "...とても神聖なものに見えた。",
] 

var yukaMax = tvText.length;
var TVv = 0;
let tvF = sessionStorage.getItem('tv');

var tv = function () {
  if(tvF != 'end'){
    document.getElementById('write').innerHTML = tvText[TVv];
    TVv++;
  }
  if(TVv == yukaMax+1){
    sessionStorage.setItem('tv', 'end');
    tvF = sessionStorage.getItem('tv');
  }
  if(tvF == 'end'){
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


///////////////////////////////////////////////////////
//池のセリフ
var ikeText = [
  "息を飲むほど奇麗な泉だ。",
  "木の葉を縫うようにして落ちる陽光を、その水面が反射する。",
  "散った光はその周囲へと姿を消しては、また降りてくる。揺ぐようにして漂う光の粒が美しい。",
  "「.......」",
  "",
  "底が見える程に透き通った水に、心が引き寄せられるのを感じた。",
  "異様なまでの美しさに心が警鐘を鳴らすも、眼前の魅力の前にかき消された。",
  "",
  "「！！いけない、こんなことしてる場合じゃない。早く仕上げないと...」",
  "…",
  "「あれ、」",
  "「仕上げるって...何を？」",
  "何かを忘れている気がする。",
  "",
  "何かを忘れている気がするのに、何かが思い出せない。",
  "何かをわスれている気ガする。でも、それヨりも",
  "「...もっと近くで見たいなぁ」",
  "",
  "",
  "「...もっと近くで見たいなぁ」",
  "",
  "",
  "自然と体が前に出ていたのだろう、",
  "「つい」や「うっかり」という言葉の通り、私は私の不用心によって足を滑らせた。",
  "「うっわぁああああああ」",
] 

var maxIke = ikeText.length;
var hibiC = 0;
let ikeF = sessionStorage.getItem('ike');

var ike = function () {
  
  if(ikeF != 'end'){
    document.getElementById('write').innerHTML = ikeText[hibiC];
    hibiC++;
  }
  if(hibiC == maxIke+1){
    sessionStorage.setItem('ike', 'end');
    ikeF = sessionStorage.getItem('ike');
  }
  if(ikeF == 'end'){
    console.log(ikeF);
    str = " ";
    document.getElementById('write').innerHTML = str;
    location.href = "../map3/map3-1.html";
  }
}


