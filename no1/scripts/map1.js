//ロード画面の表示
window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  
  var str = "…";
  document.getElementById('write').innerHTML = str;
  document.getElementById('Iam').innerHTML = '<img src="../pic1/t1.png" alt="aa">';
  FlagSet()
  }
  
  
  //初見セリフ
  var map2OP = [
    "...",
    "「...ここは？」",
    "...知らないはずの部屋に来た。",
    "...なのに",
    "この'懐かしい気持ち'は一体？",
  ] 
  var n = 0;
  var map2 = map2OP.length;
  let data = sessionStorage.getItem('nande');
  var op = function () {
    if(data!='nande'){
        document.getElementById('write').innerHTML = map2OP[n];
        n++;
    }
    if(n == map2+1){
        sessionStorage.setItem('nande', 'nande');
        data = sessionStorage.getItem('nande');
    }
    if(data == 'nande'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        
    }
  }
  
  
  //時計のセリフ
  var clockText = [
    "時計だ。",
    "「今は9時なんだ。」",
    "「...?」",
    "違った。",
    "この時計、壊れている。",
    "9時で止まっているだけだった。",
  ] 
  
  var maxClock = clockText.length;
  var c = 0;
  let dataC = sessionStorage.getItem('nande');
  var clock = function () {
    if(dataC!='nande'){
        document.getElementById('write').innerHTML = clockText[c];
        c++;
    }
    if(c === maxClock+1){
        sessionStorage.setItem('nande', 'nande');
        dataC = sessionStorage.getItem('nande');
    }
    if(dataC === 'nande'){
        str = "ここはもう調べた。";
        document.getElementById('write').innerHTML = str;
    }
  }
  
  //窓のセリフ
  var windowsText = [
    "窓だ。",
    "...",
    "...高さ的にここから脱出は無理そうだ。",
  ] 
  
  var maxWindows = windowsText.length;
  var w = 0;
  let dataW = sessionStorage.getItem('nande');
  var windows = function () {
    if(dataW!='nande'){
        document.getElementById('write').innerHTML = windowsText[w];
        w++;
    }
    if(w === maxWindows+1){
        sessionStorage.setItem('nande', 'nande');
        dataW = sessionStorage.getItem('nande');
    }
    if(dataW === 'nande'){
        str = "ここはもう調べた。";
        document.getElementById('write').innerHTML = str;
        
    }
  }
  
  //日記のセリフ
  var d = 0;
  var diaryText = [
    "日記がある。",
    "...読んでみよう。",
    "『〇月×日』",
    "『今日はお話の構想を練ることが出来た。』",
    "『明日早速書いてみよう。』",
    "『〇月〇日』",
    "『登場人物の設定がうまく書けない。』",
    "『設定を少し変えてみよう。』",
    "『〇月△日』",
    "『話をまとめることが出来た。』",
    "『設定を変えるだけでここまでうまくいくとは。』",
    "『あとは細部の脚色をしていこう。』",
    "『〇月▽日』",
    "『ついに物語が完成した。』",
    "『友達に見せてほしいと言われた。』",
    "『初めて誰かに見せるかも。』",
    "『どんな反応をしてくれるだろうか。』",
    "『〇月☆日』",
    "『友達に私が書いたお話を見せていたら』",
    "『うっかりクラスメートに見られてしまった。』",
    "『話の内容もすべて言いふらされた。』",
    "『...みんなに内容を馬鹿にされた。』",
    "『友達は良かったと言ってくれた。』",
    "『それでも...』",
    "『何だか信じることが出来なかった。』",
    "『△月×日」",
    "『最近お話を書く気になれない。』",
    "『馬鹿にされて以来書くのが恥ずかしくなった。』",
    "『...何してたんだろ。』",
    "...日記はここで終わっている。",
    "「これは...」",
    "...私の筆跡だ。",
    "「そっか...私...」",
    "「お話を書くのが怖くなって...」",
    "「それで...」",
    "「...」",
    "--日記を手に入れた"
  ] 
  var maxDiary = diaryText.length;
  let dataD = sessionStorage.getItem('nande');
  var diary = function () {
    if(dataD!='nande'){
        document.getElementById('write').innerHTML = diaryText[d];
        d++;
    }
    if(d === maxDiary+1){
        sessionStorage.setItem('nande', 'nande');
        dataD = sessionStorage.getItem('nande');
        sessionStorage.setItem('s1get3', true);
    }
    if(dataD === 'nande'){
        str = "ここはもう調べた。";
        document.getElementById('write').innerHTML = str;
        
    }
  }
  
  
  var Right = function () {
    location.href = "map1-2.html";
  }
  var Left = function () {
    location.href = "map1-3.html";
  }
  var rLeft = function () {
    location.href = "map1-1.html";
  }
  var lRight = function () {
    location.href = "map1-1.html";
  }
  
/////////////////////////////////////////
// map1-3関連

//ベッドのセリフ
var bedText = [
    "ベッドだ。",
    "少しサイズが小さい",
    "どこかでみたことあるような...？",
] 
  
var maxBed = bedText.length;
var be = 0;
let dataBe = sessionStorage.getItem('nande');
var bed = function () {
    if(dataBe!='nande'){
        document.getElementById('write').innerHTML = bedText[be];
        be++;
    }
    if(be === maxBed+1){
        sessionStorage.setItem('nande', 'nande');
        dataBe = sessionStorage.getItem('nande');
    }
    if(dataBe === 'nande'){
        str = "ここはもう調べた。";
        document.getElementById('write').innerHTML = str;
        
    }
}

//消しゴムのセリフ
var eraserText = [
    "消しゴムが落ちている。",
    "使いかけのようだ。",
    "どうしてこんなところに...",
    "「...!!」",
    "この消しゴムに見覚えがある。",
    "私が使っていたものだ。",
    "ブランドが独特で誰も使っていなかった覚えがある。",
    "「使いやすい消しゴムだったんだよなぁ...」",
    "「どうして使わなくなっちゃったんだっけ...」",
    "「...持っておこう。」",
    "--使いかけの消しゴムを手に入れた。",
] 
  
var maxEraser = eraserText.length;
var e = 0;
let dataE = sessionStorage.getItem('nande');
var eraser = function () {
    if(dataE!='nande'){
        document.getElementById('write').innerHTML = eraserText[e];
        e++;
    }
    if(e === maxEraser+1){
        sessionStorage.setItem('nande', 'nande');
        dataE = sessionStorage.getItem('nande');
        sessionStorage.setItem('s1get0', true);
    }
    if(dataE === 'nande'){
        str = "ここはもう調べた。";
        document.getElementById('write').innerHTML = str;
        
    }
}