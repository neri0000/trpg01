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
  ".....!!",
  "池に落ちた!",
  "思っていたより深かった!",
  "泳ぐのは得意な方だ。と、手足を動かそうとした時全身に緊張が走った。",
  "曰く、これは金縛り。",
  "こんな時に!!",
  ".....!!",
  "絶体絶命・大ピンチ",
  "徐々に沈んでいく体、遠のく水面を睨む。口から漏れ出た酸素はシャボン玉のように空へと舞い上がる。もうダメだ。",
  "-息が",
  "-止まる",
  "...",
  "......",
  ".........",
  "「あれ」",
  "エンドロールが流れるはずだった意識は、予想を超えて正常で。待っても来ない苦しさに、息が出来ることに気が付いた。",
  "「というかなんで声が出るんだ？」",
  "感触は水。体に服がまとわりつく感覚はある。",
  "これは一体...",
] 

var map3Max = map3OP.length;
var Ma = 0;
let map3 = sessionStorage.getItem('op3');

var op3 = function () {
  if(map3 != 'end'){
    document.getElementById('write').innerHTML = map3OP[Ma];
    Ma++;
  }
  if(Ma == map3Max+1){
    sessionStorage.setItem('op3', 'end');
    map3 = sessionStorage.getItem('op3');
  }
  if(map3 == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}



//瓶1のセリフ
var bin1Text = [
  "瓶だ。",
  "中に紙が入っている。",
  "取り出して読んでみる。この際紙が濡れるとかそういうのは気にしない。",
  "『感想用紙：作品ですが、基本的に何を伝えたいものなのかが分かりませんでした。ストーリーも非現実的な展開が多く主人公に共感できませんでした。』",
  "....",
  "現実味がないなんてそんなこと、分かってるさ。",
  "それでも私は.....",
  "...やめておこう。",
] 

var bin1Max = bin1Text.length;
var bin1C = 0;
let bin1F = sessionStorage.getItem('bin1');

var bin1 = function () {
  if(bin1F != 'end'){
    document.getElementById('write').innerHTML = bin1Text[bin1C];
    bin1C++;
  }
  if(bin1C == bin1Max+1){
    sessionStorage.setItem('bin1', 'end');
    bin1F = sessionStorage.getItem('bin1');
  }
  if(bin1F == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//瓶2のセリフ
var bin2Text = [
  "瓶だ。",
  "中に紙が入っている。",
  "『感想用紙：水中都市？樹海？テーマがばらばらでよくわからない作品だった。正直、つまらないです。』",
  "....",
  "テーマがばらばらなのも、ちゃんと分かっている。",
  "分かっているが.....",
  "...好きだったんだ、この作品が。",
] 

var bin2Max = bin2Text.length;
var bin2C = 0;
let bin2F = sessionStorage.getItem('bin2');

var bin2 = function () {
  if(bin2F != 'end'){
    document.getElementById('write').innerHTML = bin2Text[bin2C];
    bin2C++;
  }
  if(bin2C == bin2Max+1){
    sessionStorage.setItem('bin2', 'end');
    bin2F = sessionStorage.getItem('bin2');
  }
  if(bin2F == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//瓶3のセリフ
var bin3Text = [
  "瓶だ。",
  "中に紙が入っている。開けると中に閉じ込められていた空気が舞い上がった。",
  "『感想用紙：1シーン単位で見ると、奇麗な構図なのですが全体で引いてみると支離滅裂です。大半の人は「面白い」とは思わないでしょう。』",
  "....",
  "作りたいものを、作りたかった。",
  "ただ.....",
  "...それだけなのに、どうしてこうも心が苦しいのだろう。",
] 

var bin3Max = bin3Text.length;
var bin3C = 0;
let bin3F = sessionStorage.getItem('bin3');

var bin3 = function () {
  if(bin3F != 'end'){
    document.getElementById('write').innerHTML = bin3Text[bin3C];
    bin3C++;
  }
  if(bin3C == bin3Max+1){
    sessionStorage.setItem('bin3', 'end');
    bin3F = sessionStorage.getItem('bin3');
  }
  if(bin3F == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//瓶4のセリフ
var bin4Text = [
  "瓶だ。",
  "中に紙が入っている。",
  "『感想用紙：------",
  "-----貴方の作品が大好きです。』",
  "....",
  "...たったの一行。",
  "ただそれだけの言葉に、どれほど救われたことか。",
  "どれほど勇気づけられたか。",
  "...初めて貰った「肯定」",
  "そうだ。私がこの道に進んだのは、自分の好きを極める為だった。",
  "私の世界を形にしたかったんだ。",
  ".......",
  ".......",
  "「もう、”起きよう”」",
  "最初から分かっていた。",
  "こんな展開は、王道だもんね。",
  "",
  "起きなければ。",
  "私の世界（ストーリー）を完成させねば。",
  ".......",
  "意思を固めた瞬間。まるで思い出したかの様に、息が苦しくなった。",
  "”溺れる”",
  "いいや、違う。",
  "これは",
  "",
  "...目覚めである。",
] 

var bin4Max = bin4Text.length;
var bin4C = 0;
let bin4F = sessionStorage.getItem('bin4');

var bin4 = function () {
  let bin1 =sessionStorage.getItem('bin1');
  let bin2 =sessionStorage.getItem('bin2');
  let bin3 =sessionStorage.getItem('bin3');
  if((bin1 == 'end') && (bin2 == 'end') && (bin3 == 'end')){
    if(bin4F != 'end'){
      document.getElementById('write').innerHTML = bin4Text[bin4C];
      bin4C++;
    }
    if(bin4C == bin4Max+1){
      sessionStorage.setItem('bin4', 'end');
      bin4F = sessionStorage.getItem('bin4');
    }
    if(bin4F == 'end'){
      str = " ";
      document.getElementById('write').innerHTML = str;
      location.href = "map3-2.html";
    }
  }
}


//瓶3のセリフ
var text = [
  "..................",
  "「うぅ.....」",
  "目を覚ますと、そこは自室だった。",
  "ペンを握ったまま、寝落ちしてしまったらしい。首が猛烈に痛い。",
  "息が苦しかったのは、この寝方のせいだろう。",
  "....どうやら、寝室の扉へ向かったところからが既に夢だったらしい。眠りたい願望が体を抜け出したみたいだ。",
  "「うっわぁ通知すんごい」",
  "通知の大半は予想通り、班員からだった。",
  "ただし、1つだけ予想を外れていたことがある。",
  "それはメールの内容だ。脚本の催促や、指摘ばかりだろうと思っていたその文面は...。",
  "『連絡途絶えたけど大丈夫！？ついに倒れたか！？ごめん！今まで頼りっきりだった...』",
  "『今バイト終わった！今日から制作全力で打ち込めるぜ！取り敢えずなに手伝えばいい？？...』",
  "『前回挙げてくれた脚本の案なんだけど、凄くいいと思う。今細かい部分の修正をしています。』",
  ".......",
  ".......",
  "数時間か数分間の逃避行の末、現実は思ったよりも悪くない展開を迎えた。",
  "手のひらを返したような班員からの言葉。",
  "今更何を...と思わなかったと言えば嘘になる。彼らの気遣いと言葉に、嬉しくないと言えば、それも嘘になる。",
  "それでも、こうして胸が暖かくなるのは。やはり好きだからなのだろう。",
  "",
  "取り敢えず、返信は後ででいいだろう。",
  "今、",
  "やっとテーマが決まったんだ。",
  "",
  "end1「机上の世界」",
] 

//導入セリフ表示
var n = 0;
var max = text.length;
var ed = function () {
  document.getElementById('write').innerHTML = text[n];
  n++;
  if(n > max){
    str = " ";
    document.getElementById('write').innerHTML = str;
    n = 0;
    location.href = "../../index.html";
  }
}





