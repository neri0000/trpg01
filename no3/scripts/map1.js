//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

var str = "";
document.getElementById('write').innerHTML = str;
document.getElementById('Iam').innerHTML = '<img src="../pic3/t1.png" alt="aa">';


FlagSet()
onoSet()
}


//初見セリフ
var map2OP = [
  "ここは、",
  "私の部屋だ。",
  "数分前までここに居たはずなのだが、どうも雰囲気が変だ。",
  "自分の部屋のはずなのに、変な感覚を覚える。",
  "そもそも何であの空間から此処に繋がってるんだ。",
  "と、後ろを振り返ってみると。入ってきたはずの扉が消えていた。",
  "一体、何がどうなっているんだ。",
  "...探索をして情報を集めよう。",
] 

var map2Max = map2OP.length;
var Ma = 0;
let map2 = sessionStorage.getItem('op');

var op = function () {
  if(map2 != 'end'){
    document.getElementById('write').innerHTML = map2OP[Ma];
    Ma++;
  }
  if(Ma == map2Max+1){
    sessionStorage.setItem('op', 'end');
    map2 = sessionStorage.getItem('op');
  }
  if(map2 == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//床セリフ
var yukaText = [
  "紙類が散らかっている。",
  "その一つ一つは、作品に成り損なったアイディア達だ。",
  "書いている時は楽しかった。",
  "最高の物語になると思った。",
  "...でも現実は、誰にも評価されなかったんだ。",
] 

var yukaMax = yukaText.length;
var yu = 0;
let yuka = sessionStorage.getItem('yuka');

var Yuka = function () {
  if(yuka != 'end'){
    document.getElementById('write').innerHTML = yukaText[yu];
    yu++;
  }
  if(yu == yukaMax+1){
    sessionStorage.setItem('yuka', 'end');
    yuka = sessionStorage.getItem('yuka');
  }
  if(yuka == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}


//机のセリフ
var tableText = [
  "机だ。",
  "先ほどまで使っていた机だ。",
  "机の上には未完成の脚本が散乱している。その多くは黒く塗りつぶされており、とても読めたものではない。",
  "「結局、これも没になったんだよね」",
  "",
  "",
  "使い古されたシャーペン。これは誕生日に友人から貰ったものだ。",
  "『強い筆圧でも、何度も書いても、芯が折れない』という宣伝文句で一時期流行ったモデル。",
  "シンプルなデザインで、とても気に入っている。",
  ".....",
  "「『芯が折れない』....か」",
  "",
  "ふと、机を調べていると脚本の下に固い感触があった。",
  "-スマホだ-",
  "画面を確認すると通知が大量に来ている。催促の内容ばかりだ。",
  "「.....」",
  "",
  "スマホの電源を切った。",
] 

var maxT = tableText.length;
var t = 0;
let tableF = sessionStorage.getItem('table');

var table = function () {
  if(tableF != 'end'){
    document.getElementById('write').innerHTML = tableText[t];
    t++;
  }
  if(t == maxT+1){
    sessionStorage.setItem('table', 'end');
    tableF = sessionStorage.getItem('table');
  }
  if(tableF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}


//棚のセリフ
var tanaText = [
  "木製の本棚。収まりきっていない本や紙束が床に落ちてしまっている。",
  "本の大半は小説だ。脚本の参考にしようと、色々な作品をかき集めていた日々を思い出す。",
  "しかし、可笑しい。自室の棚はここまで荒れていなかったはずなのだが...。",
] 
var maxF = tanaText.length;
var f = 0;
let tanaF = sessionStorage.getItem('tana');

var tana = function () {
  if(tanaF != 'end'){
    document.getElementById('write').innerHTML = tanaText[f];
    f++;
  }
  if(f == maxF+1){
    sessionStorage.setItem('tana', 'end');
    tanaF = sessionStorage.getItem('tana');
  }
  if(tanaF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//脚本１のセリフ
var book1Text = [
  "”空虚な森”　と書かれた脚本",
  "『暗い、森のただなかにいる。",
  "光は幾筋にも漏れてくるけれど、それに照らされる深緑色の地面は、ごく少ない。空を見上げれば、空は見えないけれど、緑のグラデーションが鮮やかに光の色を教えてくれる。",
  "生い茂る木々、湿った空気の合間を縫うように降り注ぐ陽光は、白い軌跡を残して地面に差す。",
  "そんな空間に、テレビが鎮座している。",
  "不自然に開けた場所に置かれたその”テレビ”は、不法投棄というには余りにも奇麗な状態で此方を見上げていた。",
  "画面には無限の暗闇が続いている。最も、何か映っている方が可笑しいのだが、神秘的な雰囲気に毒されたせいか多少の非現実も許せる気がしてくる...』",
  "-主人公がセリフを言い終えた後に暗転。（作業等の色は寒色系：要相談）-",
  "「これは、初めて書いた脚本だ。」",
] 
var maxb1 = book1Text.length;
var bo1 = 0;
let book1F = sessionStorage.getItem('book1');

var book1 = function () {
  if(book1F != 'end'){
    document.getElementById('write').innerHTML = book1Text[bo1];
    bo1++;
  }
  if(bo1 == maxb1+1){
    sessionStorage.setItem('book1', 'end');
    book1F = sessionStorage.getItem('book1');
  }
  if(book1F == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//脚本2のセリフ
var book2Text = [
  "”水中の夢は泡沫に消ゆ”　と書かれた脚本",
  "『...そして、彼は泉に沈んだ。",
  "ゆっくりと、しかし確実に体は底へと落ちていく。足掻こうとは思わなかった、このまま泡となって消えてしまいたかったからだ。",
  "水面は揺らぎ、歪んだ日差しが水中を優しく照らしている。",
  "青、水色、そして白。",
  "意識と共に視界から色が、消えた。』",
  "-場転を行う。大道具は衣装回収、舞台にボトルを配置する（ボトルの中身は手紙？：小道具と要相談）-",
  "「これは、初めて上映した作品だ。」",
  "",
  "大好きな作品だったけど、先生からは酷評だった。",
  "「視聴者には感想用紙を書いてもらったけど、結局怖くてまだ読めてないや...」",
  "...そもそも、その感想用紙は今どこにあるのだろう。",
  "-情報が追加されました-",
  "-入手した情報は右上から確認できます-",
] 
var maxb2 = book2Text.length;
var bo2 = 0;
let book2F = sessionStorage.getItem('book2');

var book2 = function () {
  if(book2F != 'end'){
    document.getElementById('write').innerHTML = book2Text[bo2];
    bo2++;
  }
  if(bo2 == maxb2+1){
    sessionStorage.setItem('book2', 'end');
    book2F = sessionStorage.getItem('book2');
    sessionStorage.setItem('get1', true);
  }
  if(book2F == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
    bo2++;
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

var Left2 = function () {
  var data = sessionStorage.getItem('newStage');
  if(data == 'true'){
    location.href = "map1-4.html";
  }
  else{
    location.href = "map1-3.html";
  }
}



///////////////////////////////////////////////////////
//ベッドのセリフ
var bedText = [
  "最後に横になったのはいつだろう...。",
  "",
  "",
  "ベッドの下に何か落ちてる？",
  "",
  "",
  "「なんか怖いけど、取ってみるか」",
  "-斧を入手した-",
  "-入手したアイテムは右上から確認出来ます。-",
] 
var maxBed = bedText.length;
var bedc = 0;
let bedF = sessionStorage.getItem('bed');

var bed = function () {
  if(bedF != 'end'){
    document.getElementById('write').innerHTML = bedText[bedc];
    bedc++;
  }
  if(bedc == maxBed+1){
    sessionStorage.setItem('bed', 'end');
    bedF = sessionStorage.getItem('bed');
    document.querySelector('.ono').style.display = "none";
    sessionStorage.setItem('get0', true);
  }
  if(bedF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
    bedc++;
  }
}

//時計のセリフ
var clockText = [
  "愛用の目覚まし時計だ。",
  "針が止まっている、故障だろうか。",
  "",
  "",
  "",
  "",
  "寝たいけれど、寝る暇がない。今日だってそうだった。",
  "...今日って、何日だっけ？",
  "なんだか意識がふわふわする。",
] 
var maxClock = clockText.length;
var clocC = 0;
let clocF = sessionStorage.getItem('clock');

var clock = function () {
  if(clocF != 'end'){
    document.getElementById('write').innerHTML = clockText[clocC];
    clocC++;
  }
  if(clocC == maxClock+1){
    sessionStorage.setItem('clock', 'end');
    clocF = sessionStorage.getItem('clock');
  }
  if(clocF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//時計の引き出しのセリフ
var hikiText = [
  "鍵が掛かっている。",
  "「えっ掛けた覚えないんだけど」",
  "",
  "",
  "",
  "",
  "寝たいけれど、寝る暇がない。今日だってそうだった。",
  "...今日って、何日だっけ？",
  "なんだか意識がふわふわする。",
] 
var maxHiki = hikiText.length;
var hikiC = 0;
let hikiF = sessionStorage.getItem('hiki');

var hiki = function () {
  if(hikiF != 'end'){
    document.getElementById('write').innerHTML = hikiText[hikiC];
    hikiC++;
  }
  if(hikiC == maxHiki+1){
    sessionStorage.setItem('hiki', 'end');
    hikiF = sessionStorage.getItem('hiki');
  }
  if(hikiF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//壁のイラストのセリフ
var iraText = [
  "以前遊びに来た友人に「殺風景だ」と言われたので、絵を飾ってみた。",
  "特に右下の「鮫」は一番のお気に入りだ。",
  "その上段にある二枚は友人が書いた「花」とネットで購入した油絵「虚空」",
  "そして左半分を占めるこれは...",
  "？",
  "「こんな絵だったけ」",
  "「...」",
  "まぁ、いいか。探索を続けよう。",
] 
var maxIra = iraText.length;
var iraC = 0;
let iraF = sessionStorage.getItem('irasuto');

var irasuto = function () {
  if(iraF != 'end'){
    document.getElementById('write').innerHTML = iraText[iraC];
    iraC++;
  }
  if(iraC == maxIra+1){
    sessionStorage.setItem('irasuto', 'end');
    iraF = sessionStorage.getItem('irasuto');
  }
  if(iraF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

///////////////////////////////////////////////////////
//壁のセリフ
var hibiText = [
  "部屋の一面が、ただの壁になっている。",
  "「しかもヒビ入ってるなぁ」",
  "ヒビの隙間からは冷たく湿った空気が流れてくる。",
  "壁は薄い。強い衝撃を与えれば壊せそうだ。",
  "",
  "",
  "「何かアイテムがあれば...」",
] 
var hibiT2 = [
  "「よし、この斧で」",
  "-斧を使って壁を破壊した-",
  "「どっこいせぇ！！！！！」",
] 
var maxHibi = hibiText.length;
var maxHibi2 = hibiT2.length;
var hibiC = 0;
var hibiC2 = 0;
let hibiF = sessionStorage.getItem('hibi');
let hibiF2 = sessionStorage.getItem('hibi2');

var hibi = function () {
  

  if(hibiF != 'end'){
    document.getElementById('write').innerHTML = hibiText[hibiC];
    hibiC++;
  }
  if(hibiC == maxHibi+1){
    sessionStorage.setItem('hibi', 'end');
    hibiF = sessionStorage.getItem('hibi');
  }
  if(hibiF == 'end'){
    console.log(hibiF);
    str = " ";
    document.getElementById('write').innerHTML = str;
  }

  let hibiItem = sessionStorage.getItem('get0');
  console.log(ono);
  if((hibiItem == 'false')||(hibiItem == 'true')){
    document.getElementById('write').innerHTML = hibiT2[hibiC2];
    hibiC2++;
  }
  if(hibiC2 == maxHibi2+1){
    sessionStorage.setItem('hibi2', 'end');
    hibiF2 = sessionStorage.getItem('hibi2');
  }
  if(hibiF2 == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
    location.href = "../map1/map1-4.html";
  }

}



//マップ2へ
var goText = [
  "壁を破壊した。",
  "人が一人通れるくらいの大きさまで穴を広げると、",
  "隙間から見える景色が鮮明になった。",
  "森だ。",
  "何故だか分からないが、この景色を前にすると心が落ち着いた。",
  "圧倒的な解放感を前に、冷たく新鮮な空気を肺いっぱいに吸い込んだ。",
  "部屋に何故森？...という常識的な思考と、破壊行動に対する躊躇といった通常の感覚は",
  "この時、壁と共に脆く崩れ落ちていったのかもしれない。",
  "-mapが更新されました-",
] 
var maxClock = goText.length;
var goC = 0;
let goF = sessionStorage.getItem('go');

var go = function () {
  if(goF != 'end'){
    document.getElementById('write').innerHTML = goText[goC];
    goC++;
  }
  if(goC == maxClock+1){
    sessionStorage.setItem('go', 'end');
    goF = sessionStorage.getItem('go');
  }
  if(goF == 'end'){
    console.log(goF);
    str = " ";
    document.getElementById('write').innerHTML = str;
    location.href = "../map2/map2-1.html";
    sessionStorage.setItem('map0', true);
    sessionStorage.setItem('newStage', true);
  }
}