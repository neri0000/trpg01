//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

var str = "";
document.getElementById('write').innerHTML = str;
document.getElementById('Iam').innerHTML = '<img src="../pic3/t1.png" alt="aa">';


FlagSet()
tapeSet() 
}


//歪んだ森、背景のセリフ
var back3Text = [
  "テレビのある場所から少し離れると、そこは何とも奇妙な空間だった。",
  "空から降りる光の雨は、地面の僅かな範囲を限定的に照らしている。それはまるでスポットライトのように、平凡な地面に特別な面積を演出している。",
  "その根は地面を盛り上げ、その葉は空を覆い隠す。数々の木が支配したこの一帯、いやこの空間は",
  "正しく『森』と呼ぶに相応しい。",
  "...",
  "どこまでも続く深い緑、両手を広げ緑色の空を仰ぐ。",
  "肺いっぱいに酸素を取り込み、深く息を吐く。なんだか浄化されていくような心地がする。",
  "こうやって深呼吸に近い呼吸を繰り返すたびに、漠然とした不安や焦燥感。色々なシガラミから解放されていく。",
  "-自由-",
  "狭く、言葉と数字に溢れた空間ではない、ここは広く澄んだ場所。",
  "-解放-",
  "明日の事や昨日の事、将来の予定や昔に交わした”約束”、脳に刻まれた現実的な要素の一つ一つが解けて、溶けて、馴染んでいく。",
  "ここは居心地がいい。",
  "深く沈んでいく意識はこの瞬間を待ち望んでいたように、ただひたすらと。五感の全てをこの場所に預ける。",
  "それは熱中か、没頭か、...はたまた逃避か。",
] 

var back3Max = back3Text.length;
var back3C = 0;
let back3F = sessionStorage.getItem('back3');

var back3 = function () {
  if(back3F != 'end'){
    document.getElementById('write').innerHTML = back3Text[back3C];
    back3C++;
  }
  if(back3C == back3Max+1){
    sessionStorage.setItem('back3', 'end');
    back3F = sessionStorage.getItem('back3');
  }
  if(back3F == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//歪んだ森、空のセリフ
var skyText = [
  "木々の葉が空を覆い隠している。",
  "風と共に位置を変えては重なり合い、陽光の行く手を阻んでは大きな隙間を開ける。見ていて飽きない。",
  "...",
  "意識を耳に向けると、葉同士のぶつかる音が聴こえる。",
  "......。",
  "ひそひそ...クスクス...",
  "笑い声が聞こえたような気がした。",
] 

var skyMax = skyText.length;
var skyC = 0;
let skyF = sessionStorage.getItem('sky');

var sky = function () {
  if(skyF != 'end'){
    document.getElementById('write').innerHTML = skyText[skyC];
    skyC++;
  }
  if(skyC == skyMax+1){
    sessionStorage.setItem('sky', 'end');
    skyF = sessionStorage.getItem('sky');
  }
  if(skyF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//ペンのセリフ
var penText = [
  "木に交じってペンが地面に刺さっている。或いは生えている。",
  "遠近感による錯覚かと思い、近づいて見るも距離が縮まるに連れてペンが大きくなっていく。",
  "どうやら見間違えではなく、木と変わらない大きさらしい。",
  "押したり引いたりしてみるも、余ほどしっかり刺さっているのかびくともしない。",
] 
var penText2 = [
  "木に交じってペンが地面に刺さっている。或いは生えている。",
  "遠近感による錯覚かと思い、近づいて見るも距離が縮まるに連れてペンが大きくなっていく。",
  "どうやら見間違えではなく、木と変わらない大きさらしい。",
  "押したり引いたりしてみるも、余ほどしっかり刺さっているのかびくともしない。",
  "",
  "よく観察してみると、反対側に文字が彫ってある。誰かの名前のようだ。",
  "『REIHI』",
  "....。",
  "REIHI、れいひ、怜日。",
  "「私の名前」",
  "そうだ、思い出した。これは私が誕生日に友人から貰ったペンだ。",
  "嬉しくて、そしてとても気に入っていて。",
  "脚本を書くときはいつもこれを使っていた。",
  "懐かしさによる暖かい思い出。",
  "しかし同時に。”何か”が心を締め付ける。”何か”が暖かい思い出に冷たい違和感を残している。",
  "-このペンは誰から貰ったんだっけ-",
  "突如として浮かび上がる疑問。当時に酷く頭が痛む。",
  "どうして、",
  "-こんなに悲しい気持ちになるんだろう-",
] 
var penMax = penText.length;
var penC = 0;
let penF = sessionStorage.getItem('pen');
//ペンフラグ回収
let tableF = sessionStorage.getItem('table');
var pen = function () {
  if(tableF == 'end'){
    penText = penText2;
    penMax = penText.length;
  }
  if(penF != 'end'){
    document.getElementById('write').innerHTML = penText[penC];
    penC++;
  }
  if(penC == penMax+1){
    sessionStorage.setItem('pen', 'end');
    penF = sessionStorage.getItem('pen');
  }
  if(penF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//フィルムのセリフ
var filmText = [
  "木の幹に巻き付いているのは、蔦。...のようなフィルムだ。",
  "フィルムをよく見ると、全てのコマに引っかかれたような跡がある。",
  "その線の細さから、針のようなもので削ったのだろう。１コマずつに小さな丸が書かれている。",
  "「たしかこれは、」",
  "学＿の＿業で作ったものだ。",
  "...うん？",
  "なんだか思考が濁る。",
  "忘れよう。面倒なことは全て忘れてしまおう。",
  "今は今を楽しもう。",
] 

var filmMax = filmText.length;
var filmC = 0;
let filmF = sessionStorage.getItem('film');

var film = function () {
  if(filmF != 'end'){
    document.getElementById('write').innerHTML = filmText[filmC];
    filmC++;
  }
  if(filmC == filmMax+1){
    sessionStorage.setItem('film', 'end');
    filmF = sessionStorage.getItem('film');
  }
  if(filmF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

//箱のセリフ
var boxText = [
  "光の固まっている場所に、光る何かがある。",
  "近づいて見るとそれは箱だった。",
  "３０ｃｍ程のガラスの箱。光って見えたのは反射だろう。",
  "蓋がされており、鍵は等はかかって居ない。",
  "しかし透明なので、蓋を開けずとも中身が確認できる。",
  "-中身は空-",
  "「何も入っていない」",
  "",
  "....。",
  "",
  "うーん...。",
  "",
  "「やっぱり気になるから開けちゃおう」",
  "蓋をそっと外した。",
  "瞬間！箱の中から勢いよく何かが飛び出してきた！！！！",
  "...なんて展開はなく。",
  "予想通り、ガラスの箱の中には本当に何も入っていなかった。",
  "-中身は空-",
  "「空っぽ」",
] 

var boxMax = boxText.length;
var boxC = 0;
let boxF = sessionStorage.getItem('box');

var box = function () {
  if(boxF != 'end'){
    document.getElementById('write').innerHTML = boxText[boxC];
    boxC++;
  }
  if(boxC == boxMax+1){
    sessionStorage.setItem('box', 'end');
    boxF = sessionStorage.getItem('box');
  }
  if(boxF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}


//箱のセリフ
var bigBookText = [
  "明らかにサイズ感のおかしい本がある。",
  "表示と背表紙に当たる場所には文字らしきものがあるが、汚れていて読めない。",
  "何とか中身を読もうと本を開くも、予想よりも重く、少ししか開かなかった。",
  "その隙間に体を滑り込ませ書かれている文字を読み上げる。",
  "-記憶と深層心理について-",
  "『人は誰しも忘れたい出来事を抱えて生きている』",
  "『特に、トラウマ・恐怖心といった強い印象を与える出来事については人の防御本能から』",
  "『記憶に蓋をしてしまう事がある。』",
  "『しかし一度体験した記憶は、そう簡単に抹消することが出来ないため』",
  "『記憶域の奥深く-深層に-隠してしまう傾向がある』",
  "",
  "",
  "『...本人が何かしらの衝撃を受けた場合、それがトリガーとなって記憶を戻すケースが見られる』",
  "『フラッシュバック。と呼ばれるものだ』",
  "『しかし、忘れ去るほどの記憶は、いずれも良くないものが想定されるため』",
  "『フラッシュバックは精神的な負担となる可能性がある』",
  "『...』",
  "『それでも取り戻したいというのなら、探してみるといい』",
  "『深層へ飛び込んでみるといい』",
  "『自然に馴染み、見つけにくい姿をしているが。入り口は必ずどこかにあるのだから。』",
] 

var bigBookMax = bigBookText.length;
var bigBookC = 0;
let bigBookF = sessionStorage.getItem('bigBook');

var bigBook = function () {
  if(bigBookF != 'end'){
    document.getElementById('write').innerHTML = bigBookText[bigBookC];
    bigBookC++;
  }
  if(bigBookC == bigBookMax+1){
    sessionStorage.setItem('bigBook', 'end');
    bigBookF = sessionStorage.getItem('bigBook');
  }
  if(bigBookF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}


//テープのセリフ
var tapeText = [
  "？",
  "先ほどまで何もなかったはずの場所にテープが落ちている",
  "白いテープだ。",
  "これは確か、ブラウン管テレビにセットできるはず。",
  "-テープを入手した-",
] 

var tapeMax = tapeText.length;
var tapeC = 0;
let tapeF = sessionStorage.getItem('tape');

var tape = function () {
  if(tapeF != 'end'){
    document.getElementById('write').innerHTML = tapeText[tapeC];
    tapeC++;
  }
  if(tapeC == tapeMax+1){
    sessionStorage.setItem('tape', 'end');
    tapeF = sessionStorage.getItem('tape');
    sessionStorage.setItem('get4', true);
    document.querySelector('.tape').style.display = "none";
  }
  if(tapeF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
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