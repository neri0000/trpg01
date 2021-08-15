
//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
  FlagSet();

  var str = "...";
  document.getElementById('write').innerHTML = str;
  document.getElementById('Iam').innerHTML = '<img src="pic3/t2.png" alt="aa">';

  
}

//OPセリフ
var text = [
  "...",
  "何気ない日常",
  "いつもと変わらない、繰り返しのような日々",
  "不思議なことも起こらなければ、ドラマチックな展開があるわけでもない。",
  "そんな毎日にこれといった不満はないが、単調な日々に何となく不満を覚える",
  "別に自分がそんな非日常的な世界に巻き込まれるような特別な存在であるとは露ほども思ってはいないが、どこにでもいる大多数のうちの一人ということに何となく嫌な気分になる",
  "しかし、自分から何か行動を起こす気にもなれず、そんな気持ちだけが自分の中に募っていく。",
  "大多数と同じというのならば、自分はどうしてここにいるのだろうか",
  "そんなことを考えながらでもここまで歩んできたのは、心のどこかで自分にも何か自分にしかない価値があるはずだと思っているからだろう。",
  "『価値』。言い換えれば『生きる意味』。",
  "自分は何のために生きているのだろうか。",
  "何か世間に誇れることをしたわけでも、誰かのために行動を起こしたこともない。当たり障りない平々凡々な人生",
  "......",
  "こんなことを考えていても、やはり何かする気になれない。きっとこれからもずっとこうなのだろう",
  "...これ以上考えるのはやめておこう。気持ちが沈んでいくだけだ。",
  "自分の意識を内側から外側に向けると、既に日付が変わりそうになっていることに気が付いた。ずいぶん長い時間考え込んでいたようだ",
  "明日も早い。そろそろ寝るべきだろう",
  "布団に潜り目を閉じる。",
  "目が覚めたらまたいつも通りの日々を送るのだろう",
  "これまでと何も変わらない日々を",
  "＿＿＿＿＿＿",
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
  "ふと目が覚めると体の節々が痛い。どうやら硬い床の上で寝ていたようだ。寝ているうちに布団から出てしまったのだろうか。",
  "薄暗い中、スマホで時間を確認しようとするが見当たらない。というより周囲の様子がおかしい。",
  "何も見当たらないし、床に触れている手には硬く冷たい感触が返ってくる。",
  "自分の部屋はこんなに殺風景ではないし、床には絨毯が敷いてあるはずはずだ。",
  "「...どこだよここ」",
  '薄暗い空間に自分の声が反響する',
  "頭上にかすかに光を放つ照明が存在しており、かろうじて周囲の様子を確認することができる。",
  "そこは自分が眠りについた自室ではなく、複数のドアが並ぶ見知らぬ部屋だ",
  "しばらく呆然としたあと、大声をあげて助けを求めたが反応は帰ってこない。どうやら自分から動くしかないようだ",
] 

var n = 0;
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
  "木製の扉だ。",
  "どうやらそれぞれ模様が違っているらしい。",
  "カギがかかっており、開く気配はない",
  "強引に空けようにも、まるで壁に取っ手が付いているかのようにびくともしない。どうやら別の場所を探ったほうがよさそうだ。",
  "",
  "ここはもう調べた",
] 

var max3 = text3.length;
var dr1 = function () {
  document.getElementById('write').innerHTML = text3[d1];
  d1++;
  if(d1 > max3 -1 ){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
  else{
    document.getElementById('write').innerHTML = text3[d1];
  }
}


//どあ２
var d2 = 0;
var textd2 = [
  "木製の扉だ。",
  "どうやらそれぞれ模様が違っているらしい。",
  "カギがかかっており、開く気配はない",
  "強引に空けようにも、まるで壁に取っ手が付いているかのようにびくともしない。どうやら別の場所を探ったほうがよさそうだ。",
  "",
  "ここはもう調べた",
] 

var maxd2 = textd2.length;
var dr2 = function () {
  document.getElementById('write').innerHTML = textd2[d2];
  d2++;
  if(d2 > maxd2 -1){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
  else{
    document.getElementById('write').innerHTML = textd2[d2];
  }
}

//どあ３
var d3 = 0;
var textd3 = [
  "木製の扉だ。",
  "どうやらそれぞれ模様が違っているらしい。",
  "カギがかかっており、開く気配はない",
  "強引に空けようにも、まるで壁に取っ手が付いているかのようにびくともしない。どうやら別の場所を探ったほうがよさそうだ。",
  "",
  "ここはもう調べた",
] 

var maxd3 = textd3.length;
var dr3 = function () {
  document.getElementById('write').innerHTML = textd3[d3];
  d3++;
  if(d3 > maxd3){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}


var d4 = 0;
var text4 = [
  "木製の扉だ。",
  "ドアノブを回すと抵抗なく動いた。どうやら開くようだ",
  "...",
  "この何もない部屋にいても何ができるわけでもない。先に進もう",
] 


//ドア4
var max4 = text4.length;
var dr4 = function () {
  document.getElementById('write').innerHTML = text4[d4];
  d4++;
  if(d4 > max4){
    str = " ";
    document.getElementById('write').innerHTML = str;
    location.href = "corridor.html";
  }
}








//アイテムリスト入手状況
function Flag() {
  let aaaa = new Array(4);
  for(let i=0; i<aaaa.length; i++){
    aaaa[i] = false;
  }
}



var Item = function () {
  for(let i=0; i<itemList.length; i++){
    if(aaaa[i]){
      document.getElementById('HAVE').innerHTML = itemlist[i];
    }
  }
}



//フラグ


//アイテムリスト
var itemlist = [
  "MAP",
  "情報：看板",//txt15
  "ペンとメモ帳",//txt17
  "パソコン",//2-1棚判定
  "充電コード",//2-2引き出し判定
]


function FlagSet() {
  for(let i=0; i<itemlist.length; i++){
    var k2 = 's4get'+i;//辞書の名前
    data = sessionStorage.getItem(k2);
    if(data == 'false'){
      sessionStorage.setItem(k2, true);
    }
  }
}


//アイテムの獲得設定
let count = 1;
let address = 'HAVE' + count;
var Item = function () {
  var data;
  for(let i=0; i<itemlist.length; i++){
    var k = 's4get'+i;
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


let changeElement = (el)=> {
    el.style.display='none';
}

let changeElementV = (e2)=> {
    e2.style.display='';
}


