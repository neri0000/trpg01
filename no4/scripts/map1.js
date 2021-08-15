//ロード画面の表示
window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
    FlagSet();
  
  var str = "";
  document.getElementById('write').innerHTML = str;
  document.getElementById('Iam').innerHTML = '<img src="../pic3/t1.png" alt="aa">';
  }
  
  
  //初見セリフ
  var text = [
    "扉を開くと見覚えのある通りが広がっていた。どうやら自宅から駅に向かう際に歩く通りの1つのようだ。",
    "後ろには何もない空間に扉が一枚立っているのがわかる。どうやら戻ることは可能なようだ。",
    "ひとまず帰り道があることは確認できたので周囲の確認をすることにした。",
    "通りには人影が見当たらない。普段人通りが多いだけに違和感を感じる。",
    "しかし、違和感の原因はそれだけではなさそうだ。少し探索して違和感の正体を探ってみよう。",
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
    "正面に小規模な進学塾がある。かつては自分も通っていた教室だ。",
    "主に小中学生向けの勉強を教えている教室で、それなりに地震学実績がよかった覚えがある。",
    "あの頃の自分は自信にあふれていて、どんなことでも頑張ればできると信じていた",
    "今の自分を見たらどう思うだろうか...",
    "...いや、今はそんなことを考えている場合ではない。探索を続行しよう",
  ] 
  var n2 = 0;
  var max2 = text2.length;
  var op2 = function () {
    document.getElementById('write').innerHTML = text2[n2];
    n2++;
    if(n2 > max2){
      str = " ";
      document.getElementById('write').innerHTML = str;
      ItemClick();
    }
  }
  
  
  
  var text3 = [
    "古い商店がある。聞いた話では、この通りが商店街であった頃からある店らしい。",
    "価格設定が学生向けであったため、学生の頃は帰り道によくこの店で買い食いをしていた。",
    "非常に思い入れのある店ではあるが老朽化が激しく、近々建て替えるという話を聞いた記憶がある。",
    "確かによく風邪にあおられて看板が嫌な音を立てていたことを覚えている。",
  ] 
  var n3 = 0;
  var max3 = text3.length;
  var op3 = function () {
    document.getElementById('write').innerHTML = text3[n3];
    n3++;
    if(n3 > max3){
      str = " ";
      document.getElementById('write').innerHTML = str;
      ItemClick();
    }
  }
    
  
  var Left = function () {
    location.href = "map1-3.html";
  }
  var Right = function () {
    location.href = "map1-2.html";
  }
  var rLeft = function () {
    location.href = "map1-1.html";
  }
  var lRight = function () {
    location.href = "map1-1.html";
  }
  
  
  
  
  //1-1
  
var o10 = 0;
var o10text = [
  "駅へ続く道だ。",
  "もしかしたら駅に行けば誰かいるかもしれない。そう考え駅に向かうことにする。",
  "しかしどういうことだろうか、向こう側の景色は見えているはずなのにある程度進むと前に進むことができない。",
  "足を前に踏み出し、地面を蹴る感覚はあるのに前に進んでいないようだ。",
  "しばらく違和感を無視して歩き続けるが、感覚と視覚の不一致のせいで気分が悪くなってきた。",
  "これ以上進むのはやめておこう。",
  "引き返すと、進みが止まったところまでの距離を歩くことで扉の前まで帰ることができた。",
  "...",
  "「......ここやばいところなのでは...？」",
  "",

] 

var O10 = o10text.length;
let data10 = sessionStorage.getItem('s4txt10');
var obj10 = function () {
  if(data10 != 'ok'){
    document.getElementById('write').innerHTML = o10text[o10];
    o10++;
  } 
  if(o10 == O10 + 1){
    sessionStorage.setItem('s4txt10','ok');
    data10 = sessionStorage.getItem('s4txt10');
  }
  if(data10 == 'ok'){
    console.log(data10);
    str = "もう一度進む気にはなれない。";
    document.getElementById('write').innerHTML = str;
  }
}


  
var o11 = 0;
var o11text = [
  "左右の道路をわたるための信号のない横断歩道だ。",
  "道幅が広いわけでもないし、車通りの多い道というわけでもない。必要があるのかは疑問だ。",
  "この辺りには進学塾や商店があるので、子供が安全に道路を渡りやすいという点で利点がある...と思う。",
  "...",
  "まぁ、横断歩道を渡らず好き勝手横切る人も多いのだが、ないよりはマシなのだろうか",
  "",
] 

var O11 = o11text.length;
let data11 = sessionStorage.getItem('s4txt11');
var obj11 = function () {
  if(data11 != 'ok'){
    document.getElementById('write').innerHTML = o11text[o11];
    o11++;
  } 
  if(o11 == O11 + 1){
    sessionStorage.setItem('s4txt11','ok');
    data11 = sessionStorage.getItem('s4txt11');
  }
  if(data11 == 'ok'){
    console.log(data11);
    str = "もう調べることはないだろう。";
    document.getElementById('write').innerHTML = str;
  }
}
  
  
  
var o12 = 0;
var o12text = [
  "向かって右側の歩道だ。",
  "古い家が建っている。たしか商店だったはずだが...",
  "",
] 

var O12 = o12text.length;
let data12 = sessionStorage.getItem('s4txt12');
var obj12 = function () {
  if(data12 != 'ok'){
    document.getElementById('write').innerHTML = o12text[o12];
    o12++;
  } 
  if(o12 == O12 + 1){
    sessionStorage.setItem('s4txt12','ok');
    data12 = sessionStorage.getItem('s4txt12');
  }
  if(data12 == 'ok'){
    console.log(data12);
    str = "この周辺を調べるならしっかり見たほうがよさそうだ。";
    document.getElementById('write').innerHTML = str;
  }
}
  
  
var o13 = 0;
var o13text = [
  "向かって左側の歩道だ",
  "昔通っていた進学塾がある。子供のころから通っていたためなじみ深い場所だ。",
  "久しぶりにお世話になった先生に挨拶にでも行こうか...",
  "",

] 

var O13 = o13text.length;
let data13 = sessionStorage.getItem('s4txt13');
var obj13 = function () {
  if(data13 != 'ok'){
    document.getElementById('write').innerHTML = o13text[o13];
    o13++;
  } 
  if(o13 == O13 + 1){
    sessionStorage.setItem('s4txt13','ok');
    data13 = sessionStorage.getItem('s4txt13');
  }
  if(data13 == 'ok'){
    console.log(data13);
    str = "この周辺を調べるならしっかり見たほうがよさそうだ。。";
    document.getElementById('write').innerHTML = str;
  }
}
  
  

//1-2
var o14 = 0;
var o14text = [
  "店の扉を開こうとしてみるが開かない。",
  "入り口である引き戸の建付けが悪くガタガタと揺れるようになっていたはずだが、何かでその場に固定されたかのように動かすことができないようだ。",
  "仕方がないので外から観察することにしよう",
  "...",
  "......",
  "駅へ向かうたびにこの店の前を通るが、今日の店舗は何か違和感を感じる。",
  "しかし、見慣れているだけにしっかり確認したことは少なく、うまく違和感の正体をつかむことができない。",
  "...これ以上見てもわかることはなさそうだ。別の場所を探そう。",
  "",
] 

//くるとんみたいなみせ

var O14 = o14text.length;
let data14 = sessionStorage.getItem('s4txt14');
var obj14 = function () {
  if(data14 != 'ok'){
    document.getElementById('write').innerHTML = o14text[o14];
    o14++;
  } 
  if(o14 == O14 + 1){
    sessionStorage.setItem('s4txt14','ok');
    data14 = sessionStorage.getItem('s4txt14');
  }
  if(data14 == 'ok'){
    console.log(data14);
    str = "これ以上調べても何かわかることはなさそうだ。";
    document.getElementById('write').innerHTML = str;
  }
}
  
  
  
var o15 = 0;
var o15text = [
  "これは...",
  "本来この商店についているはずの看板が落下している。経年劣化に耐えられなかったのだろうか。",
  "前々から落ちそうだと思っていたからか、驚きより「やっぱりこうなったか」という感想が浮かぶ",
  "...",
  "しかしなんだろうか、予想していたこととはいえあまりにも驚きが少ない気がする。",
  "...まるで一度知った情報を改めて聞かされたような気分だ。",
  "何はともあれ探索をしよう。何かないだろうか。",
  "...",
  "......！",
  "自分がよくつけている腕時計を発見した。なぜこんなところに落ちているのだろうか。",
  "時間は１０:２３分で止まっている。",
  "他に何かないか探してみるが、これ以上何もさそうだ。",
  "",

] 

var O15 = o15text.length;
let data15 = sessionStorage.getItem('s4txt15');
var obj15 = function () {
  if(data15 != 'ok'){
    document.getElementById('write').innerHTML = o15text[o15];
    o15++;
  } 
  if(o15 == O15 + 1){
    sessionStorage.setItem('s4txt15','ok');
    data15 = sessionStorage.getItem('s4txt15');
  }
  if(data15 == 'ok'){
    console.log(data15);
    str = "看板が落下している。";
    document.getElementById('write').innerHTML = str;
  }
}
  

var o16 = 0;
var o16text = [
  "自動販売機がある。",
  "昔よく買っていたジュースがあったがリニューアル後に値段が上がって容量が減る憂き目にあった記憶がよぎる。",
  "どのみちこんな状況だ。一息ついている暇なんてないだろう。",
  "",
] 

var O16 = o16text.length;
let data16 = sessionStorage.getItem('s4txt16');
var obj16 = function () {
  if(data16 != 'ok'){
    document.getElementById('write').innerHTML = o16text[o16];
    o16++;
  } 
  if(o16 == O16 + 1){
    sessionStorage.setItem('s4txt16','ok');
    data16 = sessionStorage.getItem('s4txt16');
  }
  if(data16 == 'ok'){
    console.log(data16);
    str = "どうして値上げしたんだ…。探索を続けよう。";
    document.getElementById('write').innerHTML = str;
  }
}
  
  
  
var o17 = 0;
var o17text = [
  "入口の前に立つが自動ドアが反応せず、無理に開けようともびくともしない。",
  "中をのぞくと照明はついているみたいだが、人の姿を見つけることができない。",
  "",
  "注意深く覗いて見ると日めくりカレンダーがあった。どうやら今日の日付は7/16日の金曜日であるらしい。",
  "だがこの日付は1週間ほど前のはずだ。これは一体どういうことだろうか。",
  "",

] 

var O17 = o17text.length;
let data17 = sessionStorage.getItem('s4txt17');
var obj17 = function () {
  if(data17 != 'ok'){
    document.getElementById('write').innerHTML = o17text[o17];
    o17++;
  } 
  if(o17 == O17 + 1){
    sessionStorage.setItem('s4txt17','ok');
    sessionStorage.setItem('s4get1',true);
    data17 = sessionStorage.getItem('s4txt17');
  }
  if(data17 == 'ok'){
    console.log(data17);
    str = "もう調べることはないだろう。";
    document.getElementById('write').innerHTML = str;
  }
}
  
  
  
  
var o18 = 0;
var o18text = [
  "何かが歩道に真ん中に落ちているのが確認できる。",
  "これは...自分がよく使っているバッグだ。",
  "どうしてこんなところにあるのあろうか。",
  "とりあえず使えそうなものはないか、中身を確認することにした。",
  "...",
  "一通り確認が終わった。めぼしいものとしてパソコンと充電コードが入っていた。",
  "パソコンを開いてみるが、どうやらバッテリー切れのようだ",
  "どこか充電できそうなところはないだろうか。",
  "パソコンと充電コードを入手した。",

] 

var O18 = o18text.length;
let data18 = sessionStorage.getItem('s4txt18');
var obj18 = function () {
  if(data18 != 'ok'){
    document.getElementById('write').innerHTML = o18text[o18];
    o18++;
  } 
  if(o18 == O18 + 1){
    sessionStorage.setItem('s4txt18','ok');
    data18 = sessionStorage.getItem('s4txt18');
    sessionStorage.setItem('s4get3',true);
    sessionStorage.setItem('s4get4',true);
  }
  if(data18 == 'ok'){
    console.log(data18);
    str = "もう何も落ちていない。";
    document.getElementById('write').innerHTML = str;
  }
}
  
  
  
  