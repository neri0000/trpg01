//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
  FlagSet();

var str = "";
document.getElementById('write').innerHTML = str;
document.getElementById('Iam').innerHTML = '<img src="../pic3/t1.png" alt="aa">';

var hdg = document.getElementById("hdg");
hdg.style.display='none';
let data18 = sessionStorage.getItem('s4txt18');

  if(data18 == 'ok'){
    changeElementV(hdg);
  }
}


//初見セリフ
var text = [
  "部屋に入ると見覚え家具が置いてあるのが見えた。どうやら自分の部屋のようだ。",
  "大学に入り一人暮らしをするために借りた1Kの部屋だが、玄関、キッチンにつながる扉が入口になってしまっているようだ",
  "机の向こうに窓が設置されているが、曇っており外が確認できない。",
  "よく見ると部屋全体にうっすらと埃が積もっている。まるで長期休暇で帰省し、帰宅した直後のようだ。",
  "...",
  "なぜ部屋がこんな状況になっているのかわからないが、何か使えるものがあるかもしれない。部屋を探索しよう",
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
  "最初にいた部屋で目覚める前はここで眠りについたはずだ。",
  "ここで眠りにつけば元に戻ったりはしないだろうか",
  "...",
  "",
  "...やはり一度くらい試してみるべきだろうか",
  "",
  "",
  "意を決してベッドにもぐりこんだ！",
  "...特に何も起きる気配はない",
  "埃まみれになってしまった！探索へのやる気が下がった...",
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

//もう一度もぐりこむ気にはなれない



var Left = function () {
  location.href = "map2-3.html";
}
var Right = function () {
  location.href = "map2-2.html";
}
var rLeft = function () {
  location.href = "map2-1.html";
}
var lRight = function () {
  location.href = "map2-1.html";
}




//2-1

var o1 = 0;
var o1text = [
  "小さな棚だ。",
  "漫画本や小物、ぬいぐるみなどが収められている。",
  "最上段の少年漫画は中間の巻が抜かれてる。読むためにまとめて抜いたのだろうか",
  "",
] 

var O1 = o1text.length;
let data1 = sessionStorage.getItem('s4txt1');
var obj1 = function () {
  if(data1 != 'ok'){
    document.getElementById('write').innerHTML = o1text[o1];
    o1++;
  } 
  if(o1 == O1 + 1){
    sessionStorage.setItem('s4txt1','ok');
    data1 = sessionStorage.getItem('s4txt1');
  }
  if(data1 == 'ok'){
    console.log(data1);
    str = "もう調べることはないだろう。";
    document.getElementById('write').innerHTML = str;
  }
}


var o2 = 0;
var o2text = [
  "机に備え付けられている引き出しだ。",
  "中を確認すると新品の大学ノートとメモ帳、筆記用具が入っている。",
  "",
  "メモ長には課題に関することから個人的な内容までいろいろなことが書かれている。",
  "一番最近書かれたものを確認すると、ある週の簡易的なスケジュールが書かれていた。",
  "課題の提出予定や外出の予定などが曜日のみ書かれた表に綴られている。",
  "どうやら、メモ帳には十分な残りページがあるようだ。",
  "何かに使えるかもしれない。持っていこう。",
  "メモ帳とペンを手人れた。",
] 


var O2 = o2text.length-2;
let data2 = sessionStorage.getItem('s4txt2');
var obj2 = function () {

  if(data2 != 'ok'){
    document.getElementById('write').innerHTML = o2text[o2];
    o2++;
  } 
  if(o2 == O2 + 1){
    sessionStorage.setItem('s4txt2','ok');
    sessionStorage.setItem('s4get2',true);
    data2 = sessionStorage.getItem('s4txt2');
  }

  if(data2 == 'ok'){
      console.log(data2);
      str = "他に気になるものはない。";
      document.getElementById('write').innerHTML = str;
  }
}




var o3 = 0;
var o3text = [
  "戸棚がおいてある",
  "開くと上段に服、中段に下着と運動着、下段に冬物のマフラーや手袋が入っている。",
  "大してファッションに興味がないせいか、服の枚数が少ない",
  "ここには使えそうなものは無さそうだ",
] 

var O3 = o3text.length;
let data3 = sessionStorage.getItem('s4txt3');
var obj3 = function () {
  if(data3 != 'ok'){
    document.getElementById('write').innerHTML = o3text[o3];
    o3++;
  } 
  if(o3 == O3 + 1){
    sessionStorage.setItem('s4txt3','ok');
    data3 = sessionStorage.getItem('s4txt3');
  }
  if(data3 == 'ok'){
    console.log(data3);
    str = "もう調べることはないだろう。";
    document.getElementById('write').innerHTML = str;
  }
}



var o4 = 0;
var o4text = [
  "窓だ。",
  "本来ならば正面にある通りが見えているはずなのだが、曇っていて外が見えない。",
  "また、その曇り窓からうっすら見える風景もどうやら見知ったものと違うようだ",
  "基本真っ白だが、時たま端のほうに様々な色が見えている",
  "...だめだ、皆目見当もつかない",
] 

var O4 = o4text.length;
let data4 = sessionStorage.getItem('s4txt4');
var obj4 = function () {
  if(data4 != 'ok'){
    document.getElementById('write').innerHTML = o4text[o4];
    o4++;
  } 
  if(o4 == O4 + 1){
    sessionStorage.setItem('s4txt4','ok');
    data4 = sessionStorage.getItem('s4txt4');
  }
  if(data4 == 'ok'){
    console.log(data4);
    str = "もう調べることはないだろう。";
    document.getElementById('write').innerHTML = str;
  }
}


var o5 = 0;
var o5text = [
  "普段寝ることに使っているベッドだ。",
] 

var O5 = o5text.length;
let data5 = sessionStorage.getItem('s4txt5');
var obj5 = function () {
  if(data5 != 'ok'){
    document.getElementById('write').innerHTML = o5text[o5];
    o5++;
  } 
  if(o5 == O5 + 1){
    sessionStorage.setItem('s4txt5','ok');
    data5 = sessionStorage.getItem('s4txt5');
  }
  if(data5 == 'ok'){
    console.log(data5);
    str = "もう調べることはないだろう。";
    document.getElementById('write').innerHTML = str;
  }
}


//2-2

var o6 = 0;
var o6text = [
  "本棚を確認すると随分と収められている本が少ない。",
  "入居と同時に買ったものだが、自分が思っていた以上に本を買わなかったためだ。",
  "数冊しかない本の中に1冊買った覚えのない本がある。どうやら夢について書かれている本のようだ。",
  "ふと本を開いてみると、そのページに書かれた見出しが目に入る",
  "『極限状態の人間が見る夢と与える影響について』",
  "『本人への聞き取りから、病気や事故などによって意識を失った人間が夢を見ていることがあるということわかっている。』",
  "『それは様々な内容のものが存在するが、外界を認識できるようなものや、普段と同じような日々を過ごしているといったものである。』",
  "『対象の状態にもよるが、夢がポジティブな影響を与えてくれることがあるようだ』",
  "『夢の影響を受けて、前向きな考えを持つことで対象の状態が良くなるといったものだ。』",
  "『単なる心理効果にすぎないのかもしれないが、それが実際に対象の生死を分けたかもしれないというのは...』",
  "以降は筆者自信の考えが述べられている。",
] 

var O6 = o6text.length;
let data6 = sessionStorage.getItem('s4txt6');
var obj6 = function () {
  if(data6 != 'ok'){
    document.getElementById('write').innerHTML = o6text[o6];
    o6++;
  } 
  if(o6 == O6 + 1){
    sessionStorage.setItem('s4txt6','ok');
    data6 = sessionStorage.getItem('s4txt6');
  }
  if(data6 == 'ok'){
    console.log(data6);
    str = "もう調べることはないだろう。";
    document.getElementById('write').innerHTML = str;
  }
}


var o7 = 0;
var o7text = [
  "使っていないコンセントのさし口がある。",
  "そういえば先ほど拾ったパソコンのバッテリーが切れていたはずだ",
  "電気が来ているならここで電源をとることができそうだ。",
  "...!",
  "よし！電気は来ているらしい。パソコンを立ち上げることができた。",
  "パソコンを起動するとブラウザが起動しており、そこにはニュースサイトが映されていた。",
  "どうやら一週間ほど前に起きた事故に関する記事のようだ。",
  "老朽化した建築物の看板が落下し、歩道を通行していた人物にあたってしまったらしい",
  "どうやらその人物は看板が落下したときに下を歩いていた子供をかばって重傷を負ったらしい",
  "記事に付属した写真を確認すると、あの通りにある商店のようだ",
  "記事を読み終わった後に別のページを開こうとしたり、ソフトを起動しようとしてもパソコンは反応しない",
  "どうやらこの画面しか映せないようだ",
  "...",
  "あの道につながるドアといいこのパソコンといいどうにも意味深だ。何を伝えたいのだろうか",
  "",

] 

var O7 = o7text.length;
let data7 = sessionStorage.getItem('s4txt7');
var obj7 = function () {
  if(data7 != 'ok'){
    document.getElementById('write').innerHTML = o7text[o7];
    o7++;
  } 
  if(o7 == O7 + 1){
    sessionStorage.setItem('s4txt7','ok');
    data7 = sessionStorage.getItem('s4txt7');
  }
  if(data7 == 'ok'){
    console.log(data7);
    str = "パソコンはニュースサイト以外映してくれないようだ";
    document.getElementById('write').innerHTML = str;
  }
}



var o8 = 0;
var o8text = [
  "部屋に入った時、正面に見えていた棚だ。",
  "横から見て時に変わったところはない。",
] 

var O8 = o8text.length;
let data8 = sessionStorage.getItem('s4txt8');
var obj8 = function () {
  if(data8 != 'ok'){
    document.getElementById('write').innerHTML = o8text[o8];
    o8++;
  } 
  if(o8 == O8 + 1){
    sessionStorage.setItem('s4txt8','ok');
    data8 = sessionStorage.getItem('s4txt8');
  }
  if(data8 == 'ok'){
    console.log(data8);
    str = "もう調べることはないだろう。";
    document.getElementById('write').innerHTML = str;
  }
}



var o9 = 0;
var o9text = [
  "壁掛けの時計だ",
  "特に異常なく動いていることが確認できる。",
  "しかし、こんなよくわからない空間で確認する時間に何の意味があるのだろうか。",
  "この時計の動きを信用するのなら時間を測ることぐらいは出来そうだ。",
] 

var O9 = o9text.length;
let data9 = sessionStorage.getItem('s4txt9');
var obj9 = function () {
  if(data9 != 'ok'){
    document.getElementById('write').innerHTML = o9text[o9];
    o9++;
  } 
  if(o9 == O9 + 1){
    sessionStorage.setItem('s4txt9','ok');
    data9 = sessionStorage.getItem('s4txt9');
  }
  if(data9 == 'ok'){
    console.log(data9);
    str = "もう調べることはないだろう。";
    document.getElementById('write').innerHTML = str;
  }
}











