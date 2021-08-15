//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
  FlagSet();

  var str = "";
  document.getElementById('write').innerHTML = str;
  document.getElementById('Iam').innerHTML = '<img src="../pic3/t1.png" alt="aa">';


  var htv = document.getElementById("htv");
  var hka = document.getElementById("hka");
  var hbook = document.getElementById("hbook");

  sessionStorage.setItem('nf', 'ok');
  


  htv.style.display='none';

  
  //hka.style.display='none';
  //hbook.style.display='none';
  
  
  let nf = sessionStorage.getItem('nf');
  //let af = sessionStorage.getItem('af');  
  //let kf = sessionStorage.getItem('kf');
  



/*
  if(af == 'ok'){
    changeElementV(hka);
  }

  if(kf == 'ok'){
    changeElementV(hbook);
  }

  */

  if(nf == 'ok'){
    changeElementV(htv);
  }  

}


//初見セリフ
var text = [
  "扉をくぐるとそこは真っ白な部屋だった。",
  "色がないのでわかりにくいがおそらく立方体の形をしている",
  "部屋全体を観察すると各壁付近に何か物が落ちていることが分かる",
  "また、後ろを振り返ると入ってきた扉がなくなっている。引き返すことはできないようだ。",

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
  "",
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
  "",
  "",
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
  location.href = "map3-3.html";
}
var Right = function () {
  location.href = "map3-2.html";
}
var rLeft = function () {
  location.href = "map3-1.html";
}
var lRight = function () {
  location.href = "map3-1.html";
}




//3-1

var o19 = 0;
var o19text = [
  "何の変哲もない目覚まし時計だ",
  "普段ならなんてことはないかもしれないがこんな状況なら話は別だ。",
  "針が止まっていることに気が付き、裏面を確認するとどうやらスイッチが切られているようだ",
  "針は１０：２３で止まっている",
  "...",
  "",
  "ここまで情報を出されれば嫌でも思いだす。自分はどうやら事故で負傷し、意識を失っているらしい。",
  "自分過ごしていたここ数日の日々はすべて夢の出来事だったのだろう",
  "今思えば随分と昨日や一昨日等の記憶が曖昧だ。もしかしたら状態が安定せず自分の体に贅沢な夢を見させる余裕がなかったのかもしれない。",
  "普段から生きることに積極的ではなかったとはいえ、そんなことに気が付くことができなかったなんて笑えてくる。",
  "それはともかくとして、今こんな夢を見ているということは木っとそれだけの余裕ができてきたということだろう。",
  "体の準備ができたのなら、後はきっと自分の意思だけだ。",
  "思い出す前なら目覚めることができなかったのかもしれない、何もできない自分に価値なんてないと思っていたから。",
  "でも今は違う。",
  "自分は知っている。それがとっさの行動であったのだとしても、誰かのために動くことができたということを。",
  "それは紛れもない『価値』であり、くすぶっていた自分ををやすための火種だ",
  "だからきっと大丈夫だ。",
  "これからも自分の価値に悩みながらも進んでいける。",
  "...",
  "さて、そろそろ目を覚ます時間だ。目覚まし時計の裏面にあるスイッチを入れた",
  "秒針が動き出し、事故が起きた時刻で止まっていた時間が動き出す。",
  "秒針が頂上に達し、けたたましい目覚ましに音が鳴り響くと同時に意識が薄れていく...",
  
] 

var O19 = 5;
var fin = o19text.length;
let data19 = sessionStorage.getItem('s4txt19');
let datafin = sessionStorage.getItem('s4txtfin');
var obj19 = function () {

  if(data20 == 'ok' && data21 == 'ok'){
    if(datafin != 'ok'){
      document.getElementById('write').innerHTML = o19text[o19];
      o19++;
    } 
    if(o19 == fin - 1){
      sessionStorage.setItem('s4txtfin','ok');
      datafin = sessionStorage.getItem('s4txtfin');
    }
  
    if(datafin == 'ok'){
      console.log(data19);
      str = "...";
      document.getElementById('write').innerHTML = str;
      location.href = "../corridor.html";
    }

  }
  else{


    if(data19 != 'ok'){
      document.getElementById('write').innerHTML = o19text[o19];
      o19++;
    } 
    if(o19 == O19){
      sessionStorage.setItem('s4txt19','ok');
      data19 = sessionStorage.getItem('s4txt19');
    }

    if(data19 == 'ok'){
      console.log(data19);
      str = "他を調べるべきだ。";
      document.getElementById('write').innerHTML = str;
    }

  }
}



var o20 = 0;
var o20text = [
  "これは...本だろうか。",
  "手に取ってみるとこれが日記だということが分かる。自分が書いている日記だ。",
  "大学に通い始めたときに気まぐれに買ったもので、何か文章にできるようなことがあった日にだけ書くようにしていたものだ。",
  "ページをめくっていくと一週間ほど前から更新がされていないようだ",
  "そこには次の日に友人らと外出する予定について書かれていた",
  "...",
  "おかしい、普段友人と外出したのならばその当日のことも書いているはずなのだが...",
  "日記を閉じてしばらく記憶を探るが、どうにも当日のことを思い出すことができない",
  "日記に書いてある通りならゲームセンターなどに行ったはずなのだが...",
  "...",
  "日記の日付を注意深く確認する。最終日は7/15となっている。どうやらもう一つの部屋の日付の前日のらしい。",
  "ということはもしかしたら自分は覚えていないだけで、あの部屋で見た事故を実際に見たのかもしれない。"
] 

var O20 = o20text.length;
let data20 = sessionStorage.getItem('s4txt20');
var obj20 = function () {
  if(data20 != 'ok'){
    document.getElementById('write').innerHTML = o20text[o20];
    o20++;
  } 
  if(o20 == O20 + 1){
    sessionStorage.setItem('s4txt20','ok');
    data20 = sessionStorage.getItem('s4txt20');
  }
  if(data20 == 'ok'){
    console.log(data20);
    str = "他を調べるべきだ。";
    document.getElementById('write').innerHTML = str;
  }
}


var o21 = 0;
var o21text = [
  "何か紙が挟まったボードのようだ。",
  "これは...病院のカルテだろうか。患者の情報についてまとめられている",
  "どうやら相当酷い怪我を負っているようだ。",
  "内容を追ってわかったことがある。どうやらこの患者は案版の落下から誰かをかばった人物のようだ。",
  "パソコンで読んだ人物だろう。",
  "そういえば名前を見ていなかったと気づき、確認する。",
  "そこには『自分の名前』が記されていた。",

] 

var O21 = o21text.length;
let data21 = sessionStorage.getItem('s4txt21');
var obj21 = function () {
  if(data21 != 'ok'){
    document.getElementById('write').innerHTML = o21text[o21];
    o21++;
  } 
  if(o21 == O21 + 1){
    sessionStorage.setItem('s4txt21','ok');
    data21 = sessionStorage.getItem('s4txt21');
  }
  if(data21 == 'ok'){
    console.log(data21);
    str = "他を調べるべきだ。";
    document.getElementById('write').innerHTML = str;
  }
}