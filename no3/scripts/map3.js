//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

var str = "";
document.getElementById('write').innerHTML = str;
document.getElementById('Iam').innerHTML = '<img src="../pic3/t1.png" alt="aa">';


FlagSet()
edbtnSet()
}


//初見セリフ
var map3OP = [
  ".....!!",
  "泉に落ちた!",
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
var bin4Text2 = [
  "瓶だ。",
  "中に紙が入っている。",
  "『感想用紙：------",
  "-----いい作品だった。』",
  "....",
  "...たったの一行。",
  "ただそれだけの言葉に、どれほど救われたことか。",
  "どれほど勇気づけられたか。",
  "...初めて貰った「肯定」",
  "そうだ。",
  "私はただ、恐ろしかったんだ。",
  "世界を否定されることが。物語を終わらせることが。",
  "...",
  "だから、私にとって深く傷の残ったこの感想用紙を。私は記憶から消したんだ。",
  "その中に、望んだ言葉があったのに。それもろとも蓋をしたんだ。",
  "固く。固く。瓶に詰めたんだ。",
  "-ぱちりと、頭の中で当時の記憶が蘇る-",
  "それは決していい思い出ではなかったが。この痛みは、この経験は、確かに私のものだ。",
  "授業の一環で作った最初の映像作品。",
  "制作に関わったメンバーは勿論。受講者と先生が集まった上映会。",
  "他学科の学生や、希望があれば友人も参加できるというので、",
  "私は友人を一人、招待した。",
  "前から4番目。その一番端の席に居て、終始変わらぬ表情で作品を見つめていた。上映後、感想を聞いても答えてくれなくて",
  "でも、先生の反応が悪いと落ち込む私を励ましてくれて。そして映像作家の夢を一番応援してくれた。ある日の帰り道。",
  "....",
  "流れ込んでくる数々の記憶。同時に胸を締め付けるような違和感が強くなる。",
  "この場所の舞台は森",
  "そしてエンディングは水の中",
  "--間違いない。ここは、私の世界だ--",
  "",
  "体が軽い。今なら自由に動けそうだ。",
  "感想用紙は、いつの間にか姿を消した。",
  "水に溶けて消えたのか、泡となって消えたのか。理屈は分からないが確かに無くなっていた。",
  "代わりに、",
  "私の手の中には、小さな鍵が握られていた。",
  "-鍵を入手しました-",
] 

var bin4Text = [
  "瓶だ。",
  "中に紙が入っている。",
  "『感想用紙：------",
  "-----縺?＞菴懷刀縺?縺｣縺。』",
  "....",
  "文字が認識できない。",
  "得られなかった言葉の代わりに私は想像をする。",
  "きっとここに書かれていたものは、私が理解を拒むほど文章なのだろう。",
  "あの本に書かれていた。記憶に蓋をしてしまうものは大抵、良くない思い出なのだと。",
  "ならば、そういうことだろう。",
  "足元に転がる瓶を眺める。もう一度読もうとは思わない。",
  "「否定」に満ちた内容だった。",
  "辛く、悲しい。そして痛い。",
  "私はただ、恐ろしかったんだ。",
  "世界を否定されることが。物語を終わらせることが。",
  "...",
  "だから、私にとって深く傷の残ったこの感想用紙を。私は記憶から消したんだ。",
  "固く。固く。瓶に詰めたんだ。",
  "-ぱちりと、頭の中で当時の記憶が蘇る-",
  "それは決していい思い出ではなかった。",
  "授業の一環で作った最初の映像作品。",
  "制作に関わったメンバーは勿論。受講者と先生が集まった上映会。",
  "叩きのめされた講評。憐みの目線。笑い声。",
  "『才能が無いんじゃない？』",
  "....",
  "この場所の舞台は森",
  "そしてエンディングは水の中",
  "--間違いない。ここは、私の世界だ--",
  "もう誰にも否定されたくはない。私はこの世界（作品）が好きだったんだ。",
  "...",
  "体が軽い。今なら自由に動けそうだ。",
  "感想用紙は、いつの間にか姿を消した。",
  "水に溶けて消えたのか、泡となって消えたのか。理屈は分からないが確かに無くなっていた。",
  "代わりに、",
  "私の手の中には、小さな鍵が握られていた。",
  "-鍵を入手しました-",
] 

var bin4Max = bin4Text.length;
var bin4C = 0;
let bin4F = sessionStorage.getItem('bin4');
let bookF = sessionStorage.getItem('book2');
var bin4 = function () {
  let bin1 =sessionStorage.getItem('bin1');
  let bin2 =sessionStorage.getItem('bin2');
  let bin3 =sessionStorage.getItem('bin3');
  if((bin1 == 'end') && (bin2 == 'end') && (bin3 == 'end')){
    if(bookF == 'end'){
      bin4Text = bin4Text2;
      bin4Max = bin4Text.length;
    }
    if(bin4F != 'end'){
      document.getElementById('write').innerHTML = bin4Text[bin4C];
      bin4C++;
    }
    if(bin4C == bin4Max+1){
      bin4C++;
      sessionStorage.setItem('bin4', 'end');
      bin4F = sessionStorage.getItem('bin4');
      sessionStorage.setItem('get5', true);
      document.querySelector('.right2').style.display = "block";
    }
    if(bin4F == 'end'){
      str = " ";
      document.getElementById('write').innerHTML = str;
    }
  }
}


//ed1のセリフ
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


var Right = function () {
  location.href = "map2-2.html";
}
var Left = function () {
  location.href = "map3-3.html";
}
var rLeft = function () {
  location.href = "map2-1.html";
}
var lRight = function () {
  location.href = "map2-1.html";
}




//エンディングフェーズ
var finalText = [
  "-注意-",
  "-これより先は、エンディングになります。-",
  "-この物語のエンドロールを迎える意思が固まりましたら、続けてクリックしてください。-",
  "",
  "-充分な探索は済みましたか？-",
  "...",
  "-そうですか。-",
  "-いえ、疑っている訳ではありません-",
  "-それが貴方の「選択」なら、それも正解の一つです。-",
  "-謎の空間に飛んでからこの場所までの探索、お疲れ様です。-",
  "-それでは先にお進みください。-",
  "-良いエンディングを-",
] 

var finalMax = finalText.length;
var finalC = 0;
let finalF = sessionStorage.getItem('last');

var LeftEd = function () {
  if(finalF != 'end'){
    document.getElementById('write').innerHTML = finalText[finalC];
    finalC++;
  }
  if(finalC == finalMax+1){
    sessionStorage.setItem('last', 'end');
    finalF = sessionStorage.getItem('last');
  }
  if(finalF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
    location.href = "map3-3.html";
  }
}

//エンドセット
function edbtnSet() {
  var data2 = sessionStorage.getItem('bin4');
  let finalF = sessionStorage.getItem('last');
  if(finalF == 'end'){
    document.querySelector('.right2').style.display = "none";
  }
  else if(data2 == 'end'){
    document.querySelector('.right2').style.display = "block";
  }
}

