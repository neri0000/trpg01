//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

var str = "";
document.getElementById('write').innerHTML = str;
document.getElementById('Iam').innerHTML = '<img src="../pic3/t1.png" alt="aa">';


FlagSet()
tvSet()
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
  "",
  "",
  "「電源付くのかな？...」",
] 

var tvText2 = [
  "「さっき拾ったテープ、入るかな？」",
  "-白いテープをテレビにセットした-",
  "反応はない。",
  "「電源を付けないと...」",
  "-白いテープを失った。-",
  "",
] 

var tvMax = tvText.length;
var TVv = 0;
let tvF = sessionStorage.getItem('tv');
//テープフラグ回収
var tapeflag = sessionStorage.getItem('tape');
let tvF2 = sessionStorage.getItem('tv2');
//リモコンフラグ回収
let rimo = sessionStorage.getItem('get3');
let tv2F = sessionStorage.getItem('tv2');
let tv3F = sessionStorage.getItem('tv3');
var tv = function () {
  if((tapeflag == 'end')&&(tvF2 != 'end')){
    sessionStorage.setItem('tv', 'start');
    tvF = sessionStorage.getItem('tv');

    tvText = tvText2;
    tvMax = tvText.length;
  }
  if(tvF != 'end'){
    document.getElementById('write').innerHTML = tvText[TVv];
    TVv++;
  }
  if((TVv == tvMax+1)&&(tapeflag == 'end')){
    sessionStorage.setItem('tv2', 'end');
    tvF2 = sessionStorage.getItem('tv2');
    sessionStorage.setItem('get4', 'no');
    sessionStorage.removeItem('get4')
  }
  if(TVv == tvMax+1){
    sessionStorage.setItem('tv', 'end');
    tvF = sessionStorage.getItem('tv');
  }
  if(tvF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;

    if(((tapeflag == 'end'))&&((rimo == 'true')||(rimo == 'false'))){
      sessionStorage.setItem('tv2', 'true');
      document.querySelector('.tv2').style.display = "block";
      document.querySelector('.tv').style.display = "none";
    }
    if(((tapeflag != 'end'))&&((rimo == 'true')||(rimo == 'false'))){
      sessionStorage.setItem('tv3', 'true');
      document.querySelector('.tv4').style.display = "block";
      document.querySelector('.tv').style.display = "none";
    }
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
  "",
  "泉で斧を洗った。",
  "斧は元の鋭さを取り戻した。",
] 
var ikeText2 = [
  "息を飲むほど奇麗な泉だ。",
  "木の葉を縫うようにして落ちる陽光を、その水面が反射する。",
  "散った光はその周囲へと姿を消しては、また降りてくる。揺ぐようにして漂う光の粒が美しい。",
  "「.......」",
  "『自然に馴染み、見つけにくい姿をしているが。入り口は必ずどこかにあるのだから。』",
  "先ほど読んだ本の内容が頭をよぎる。",
  "もしも、入り口があるのだとするならば此処だと思う。確信はない、が感覚はある。",
  "泉を覗き込む。",
  "恐ろしい程透き通った水のお陰で底の様子が見える。岩がゴロゴロと沈んでおり魚は一匹もいなく、また光るものがある。",
  "その光は数か所に点在し大きさは様々。底の更に奥の方には窪みがあるが、此処からでは見えない。",
  "...",
  "自然と体が前に出ていたのだろう、",
  "「つい」や「うっかり」という言葉の通り、私は私の不用心によって足を滑らせた。",
  "「うっわぁああああああ」",
  "-mapが更新されました-",
  "場転。",
] 

var maxIke = ikeText.length;
var hibiC = 0;
let ikeF = sessionStorage.getItem('ike');
let ikeF2 = sessionStorage.getItem('ike2');
//でけぇ本のフラグ回収
let bigF = sessionStorage.getItem('bigBook');

var ike = function () {
  if((bigF == 'end')&&(ikeF2 != 'end')){
    sessionStorage.setItem('ike', 'start');
    ikeF = sessionStorage.getItem('ike');
    ikeText= ikeText2;
    maxIke = ikeText.length;
  }
  
  if(ikeF != 'end'){
    document.getElementById('write').innerHTML = ikeText[hibiC];
    hibiC++;
  }

  if((hibiC == maxIke+1)&&(bigF == 'end')){
    sessionStorage.setItem('ike2', 'end');
    ikeF2 = sessionStorage.getItem('ike2');
    hibiC++;
  }

  if(hibiC == maxIke+1){
    sessionStorage.setItem('ike', 'end');
    ikeF = sessionStorage.getItem('ike');
  }
  if(ikeF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
  if(ikeF2 == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
    sessionStorage.setItem('map1', true);
    location.href = "../map3/map3-1.html";
  }
}


//時計のテレビセリフ
var TV2Text = [
  "...。",
  "リモコンで電源を付けると、静寂を保っていたテレビが僅かに揺らいだ。",
  "映し出されたのは、",
  "「目覚まし時計？」",
  "この不気味でいて歪んだ空間に映し出された目覚まし時計は、唯一現実を感じさせる要素で",
  "しかし、どこか作り物のような、",
  "そんな気持ちにさせる。",
  "....",
  "この森は、テレビを中心に広がっている。",
  "探索をして得た情報だ。",
  "森の奥深く。具体的にはテレビが見えなくなるほど遠くに行くと、不思議と此処に戻ってきてしまうのだ。",
  "まるで引き寄せるように。いや、",
  "逃げられないと言わんばかりに...。",
] 

var TV2Text2 = [
  " ",
  "『リリリリリリリリリリ！』",
  "目覚ましの音は、此処から鳴っている。",
  "リモコンで電源を押しても画面は消えない。",
  "同様に、音量ボタンもチャンネルボタンも反応がない。",
  "音を止めるには、”破壊”するしかないようだ。",
  "しかし、",
  "テレビを中心にこの世界が広がっているのなら、",
  "テレビはこの世界の核のようなもの。",
  "「....」",
  "-斧でテレビを破壊しますか？-",
  "-本当によろしいのですね？-",
  "-次のクリックから描写が始まります。-",
] 

var TV2Max = TV2Text.length;
var TV2C = 0;
let TV2F = sessionStorage.getItem('TV2');

var TV2Max2 = TV2Text2.length;
var TV2C2 = 0;

var tv2 = function () {
  let taki = sessionStorage.getItem('taki');
  if(taki == 'end'){
    document.getElementById('write').innerHTML = TV2Text2[TV2C2];
    TV2C2++;
    if(TV2C2 == TV2Max2+1){
      str = " ";
      document.getElementById('write').innerHTML = str;
      location.href = "../ending/tv.html";
    }
  }
  else{
    if(TV2F != 'end'){
      document.getElementById('write').innerHTML = TV2Text[TV2C];
      TV2C++;
    }
    if(TV2C == TV2Max+1){
      sessionStorage.setItem('TV2', 'end');
      TV2F = sessionStorage.getItem('TV2');
    }
    if(TV2F == 'end'){
      str = " ";
      document.getElementById('write').innerHTML = str;
    }
  }
}


//砂嵐のテレビセリフ
var TV3Text = [
  "...。",
  "リモコンで電源を付けると、静寂を保っていたテレビが僅かに揺らいだ。",
  "映し出されたのは、",
  "「...砂嵐」",
  "テレビからはザーザーと耳障りな音が広がる。",
  "その音を聞くと、同時に胸がざわつく。",
  "思い出すのは、現実での苦痛。",
  "酷評・否定・絶望",
  "辛いことばかりだ。今日だって、書けないストーリーを文字として吐き出しては塗りつぶし、いくつもの世界を壊してきた。",
  "最後に寝たのはいつだったか。通知が止むのはいつになるのか。",
  "苦しいことばかりだ。",
  "悲しいことばかりだ。",
  "....それに比べるとここは居心地がいい。",
  "私が此処に存在していることが肯定されているような。",
  "そんな、感じがする。",
] 

var TV3Max = TV3Text.length;
var TV3C = 0;
let TV3F = sessionStorage.getItem('TV3');
var tv4 = function () {
  if(TV3F != 'end'){
    document.getElementById('write').innerHTML = TV3Text[TV3C];
    TV3C++;
  }
  if(TV3C == TV3Max+1){
    sessionStorage.setItem('TV3', 'end');
    TV3F = sessionStorage.getItem('TV3');
  }
  if(TV3F == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

