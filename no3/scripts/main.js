//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');


  Flag()
  var str = "...";
  document.getElementById('write').innerHTML = str;
  document.getElementById('Iam').innerHTML = '<img src="pic3/t2.png" alt="aa">';
  document.getElementById('HAVE').innerHTML = str;
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
  "図書館、病院、森、...。ドラマは場所を限定しない。突然大きな熊に襲われたり、気づけば世界を救っていたり、やろうと思えば思うように創造できる机上の世界。",
  "カットも撮り直しもできない現実なんかより、ずっと自由だ。",
  "『お前のドラマは現実味がない』とはよく言われるが、物語の中くらい現実離れしたっていいと私は思う。",
  "だってその方が面白いから。",
  " ",
  "部屋の時計がカチリカチリと音を立てた。集中しているときにこそ、僅かな騒音がやけに大きく聞こえてしまうものだ。",
  "通常よりもいくらか濃い筆圧が、無意識にもその音にストレスを感じていることを告げる。時刻は深夜の2時を回っていた。",
  "？？「明日も早いし、もう寝るか。...というか寝たい。」",
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
  "？？「...ここは？」",
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
  "古めかしい木製の扉だ。",
  "ノブを握ると、以外にも鍵はかかっていないようだ。",
  " ",
  "「.........。」",
  "どこからか重厚な雰囲気が漏れ出す。",
  "--滝君のキーアイテムを入手した",
] 

var max3 = text3.length;
var myfunc3 = function () {
  document.getElementById('write').innerHTML = text3[d1];
  d1++;
  if(d1 > max3){
    str = " ";
    document.getElementById('write').innerHTML = str;
    aaaa[0] = true;
  }
}


//ドア3
var d3 = function () {
    location.href = "index2.html";
}


//アイテムリスト入手状況
function Flag() {
  let aaaa = new Array(4);
  for(let i=0; i<aaaa.length; i++){
    aaaa[i] = false;
  }
}

var itemlist = [
  "滝君のアイテム",
  "MAP",
  "８mmフィルム",
  "バールのようなもの"
]


var Item = function () {
  for(let i=0; i<itemList.length; i++){
    if(aaaa[i]){
      document.getElementById('HAVE').innerHTML = itemlist[i];
    }
  }
}





