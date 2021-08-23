window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

var str = "";
document.getElementById('write').innerHTML = str;
document.getElementById('Iam').innerHTML = '<img src="../pic3/t1.png" alt="aa">';

  document.querySelector('.map1').style.display = "none";
  document.querySelector('.item1').style.display = "none";
  diceSet()
  }


var number = 0;
var numberView;
//判定値セット
function diceSet() {
  let bookF = sessionStorage.getItem('book2');
  let tableF = sessionStorage.getItem('table');
  let tapeflag = sessionStorage.getItem('tape');
  if(bookF == 'end'){
    number += 10;
  }
  if(tableF == 'end'){
    number += 10;
  }
  if(tapeflag == 'end'){
    number += 30;
  }

  numberView = "/" + number;
  document.getElementById("hantei").innerHTML = numberView;
  document.getElementById("hantei2").innerHTML = numberView;
  document.getElementById("hantei3").innerHTML = numberView;
}


//初見セリフ
var edBackText = [
  ".....",
  "!!!",
  "人影だ。",
  "しかし、どうもおかしい。",
  "水中の揺らぎではない。光の屈折などではない。",
  "その人物は、存在そのものが揺らいでいた。",
  "形状を保つのがやっとだと言わんばかりの荒れように、その人物が人間ではないことに気づく。",
  "その人は此方に気づく様子もなく、ただひたすらに落ちている瓶を拾っては並べている。",
  "整理、しているのだろうか。",
  "奥深くに隠していた思い出たちと共にあるこの人物は一体何者だろう。",
  "この人も、私にとって忘れ去りたい過去なのだろうか。",
  "-貴方は誰？-",
  "声をかけようと口を開くと、",
  "水が流れ込んできた。",
  "「...っ！」",
  "思い出したかのように水中の設定を持ってくるなよ！誰に向けるでもない怒りがこみ上げる。",
  "呼吸をしようにも鼻にも水が入りかける。完全に水中の感覚が再現されている。",
  "ならばと泳いで近づいて見ようとすると、体が動かない。",
  "まさか、これは",
  "ご都合設定金縛り。",
  "全く、もどかしい。矢張り声を出すしか手段はなさそうだ。",
  "残りの酸素からして、声を発するのは2回が限界だろう。",
  "覚悟を決め、もう一度口を開いた。",
  "-操作説明：ダイスロールについて-",
  "-これより画面中央にダイスロールが出現します。-",
  "-ダイスロールとは、ダイス（サイコロ）の出目を使った判定方法です。-",
  "-指定された数値よりも小さい値を出せば成功。指定された数値よりも大きい値を出せば失敗となります。-",
  "-指定された値、即ち判定値は”/50”のように表現されます。この場合は50以下の値を出せば成功です。-",
  "-ダイスの出目は1~100の範囲でランダムに決まります。-",
  "-チャンスは2回。-",
  "-幸運を-",
] 

var edBackMax = edBackText.length;
var edBackC = 0;
let edBackF = sessionStorage.getItem('edBack');

var edback = function () { 
  if(edBackF != 'end'){
    document.getElementById('write').innerHTML = edBackText[edBackC];
    edBackC++;
  }
  if(edBackC == edBackMax+1){
    sessionStorage.setItem('edBack', 'end');
    edBackF = sessionStorage.getItem('edBack');
    document.querySelector('.dice').style.display = "block";
  }
  if(edBackF == 'end'){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}


//初見セリフ
var criticalText = [
  "",
  "決定的成功（クリティカル）",
  "「貴方は、誰？」",
  "正直、自分でも何て発音したか聞き取れていない。",
  "吐き出す空気が耳元で音を立てていたからだ。",
  "しかし、それでも、",
  "声は届いたようだ。",
  "彼はゆっくりとこちらを振り返る。少し驚いたように目を見開くと、消え入りそうな笑顔を見せた。",
  "",
  "彼の顔を認識した瞬間、パキリと頭の中で音がした。",
  "--１番大きな瓶（記憶）が、割れた音がした。",
  "...",
  "......",
  ".........",
  "それは私が大学に通い始めた、脚本をまだ書けていた頃の記憶。",
  "脚本を書くのが楽しくて。初めてフィルムに触った時、針を使って円を刻み込む授業では心が躍った。",
  "いつかこのフィルムには円ではなく、私の書いた物語が刻まれるのだろうと思っていた。",
  "初めての映像作品、その公開では良い評価を貰えなかった。感想からも評判の悪さが伝わったし、当然落ち込んだ。",
  "そんな時だ、",
  "友人が私を励ましてくれたんだ。",
  "そいつは...いや、「彼」は最高の友だった。",
  "ある日、私の誕生日に一本のペンをくれた。それは『芯が折れない』という宣伝文句のペン。",
  "遠回しな励ましだが、彼らしいと思った。",
  "上映会では、感想を言ってくれなかったのだが、どう思っていたのだろう。感想用紙のどれかにあるのだろうか。",
  "とにかく、長い付き合いの最高の友人。私の夢を応戦してくれた唯一の理解者。",
  "私が脚本を書けなくなったのは、そのすぐ後だった。",
  "...",
  "7/16日の金曜日。",
  "その日、私は友人4人と遊ぶ約束をしていた。",
  "待ち合わせ時間が迫るにつれてメンツが集まってくるも、彼だけが来なかった。",
  "遅刻の連絡も無いので、寝坊ではないかと誰かが言った。",
  "もしかしたらスマホの電源か切れているかなんかで、待ち合わせ場所を探しているかもしれない。",
  "そう思った私は、友人らにそう告げ周囲を探しに行った。",
  "少し歩いたところに、大きな人だかりがあった。何やら騒いでいる様子。",
  "路上ミュージシャンか、お忍びの有名人か。とも思ったがどうも様子がおかしい。",
  "ちょっとした好奇心。人ごみを掻き分けて最前へ出た。",
  "大人たちの大声と、子供の泣き声。",
  "...背後から鳴り響く救急車のサイレンの音。",
  "見覚えのある鞄が落ちている。",
  "人だかりの中心。",
  "瓦礫の下から僅かに見える左手。",
  "道を開けろと、誰かの声。",
  "赤い、泉。",
  "「-------!!」",
  "そこに、”彼”は居た。",
  "...",
  "-あぁ、そりゃあ遅刻するよな-",
  "...",
  "映像作品の評価が悪かっただけのことで、記憶に蓋をするか。",
  "答えは”否”だ。",
  "映像作品や感想会はただの付属に過ぎない。その根本にはもっと大きな原因が",
  "そう、”トラウマ”があった。",
  "7/16日の金曜日。その後の記憶は今もなお曖昧だ。",
  "ただその日以降、私の記憶には大きな穴が開いた。",
  "あれ程大好きだった創作も、まるで内容が浮かばなくなった。",
  "それでも時間は進む。重なる課題と脚本制作。『芯の折れた』私は、その全てが苦痛だった。",
  "...",
  "全ての記憶を思い出した今、本来の自分がやっと帰ってきた今。最早思い残すことは無いだろう。",
  "いつの間にか自由になっていた体でそっと地面を蹴る。兎にも角にもまずは呼吸をしないとそろそろキツイ。",
  "『....リリリリ』",
  "水面が近づくにつれて、何やら甲高い騒音が聞こえてきた。",
  "『リリリリリリリリリリリリリリリ！！』",
  "この音は恐らく、目覚まし時計の音。",
  "水中でこの音量ならば、地上は相当うるさいはずだ。",
  "さっさと音源を止めなければ。",
  "",
] 
var diceTText = [
  "",
  "成功した。",
  "溢れ出る酸素の隙間から振動する微かな音程が、その意思を伝える。",
  "”貴方は誰ですか？”",
  "それは雑音でしかないような、滑稽な発音だった。",
  "それでも、その声は届いたようだった。",
  "その人はゆっくりと此方を振り返った。",
  "いや、",
  "正確には”振り返ろうとした”。",
  "振り返り様、私と目が合ったかと思うとたちまち泡となって消えてしまったのだ。",
  "",
  "結局見えたのは横顔だけ。しかし、その顔を見て",
  "--１番大きな瓶（記憶）が割れた音がした。",
  "...",
  "......",
  ".........",
  "それは私が大学に通い始めた、脚本をまだ書けていた頃の記憶。",
  "脚本を書くのが楽しくて。初めてフィルムに触った時、針を使って円を刻み込む授業では心が躍った。",
  "いつかこのフィルムには円ではなく、私の書いた物語が刻まれるのだろうと思っていた。",
  "初めての映像作品、その公開では良い評価を貰えなかった。感想からも評判の悪さが伝わったし、当然落ち込んだ。",
  "そんな時だ、",
  "友人が私を励ましてくれたんだ。",
  "そいつは...いや、彼は最高の友だった。",
  "ある日、私の誕生日に一本のペンをくれた。それは『芯が折れない』という宣伝文句のペン。",
  "遠回しな励ましだが、彼らしいと思った。",
  "上映会では、感想を言ってくれなかったのだが、どう思っていたのだろう。感想用紙のどれかにあるのだろうか。",
  "とにかく、長い付き合いの最高の友人。私の夢を応戦してくれた唯一の理解者。",
  "私が脚本を書けなくなったのは、そのすぐ後だった。",
  "...",
  "7/16日の金曜日。",
  "その日、私は友人4人と遊ぶ約束をしていた。",
  "待ち合わせ時間が迫るにつれてメンツが集まってくるも、彼だけが来なかった。",
  "遅刻の連絡も無いので、寝坊ではないかと誰かが言った。",
  "もしかしたらスマホの電源か切れているかなんかで、待ち合わせ場所を探しているかもしれない。",
  "そう思った私は、友人らにそう告げ周囲を探しに行った。",
  "少し歩いたところに、大きな人だかりがあった。何やら騒いでいる様子。",
  "路上ミュージシャンか、お忍びの有名人か。とも思ったがどうも様子がおかしい。",
  "ちょっとした好奇心。人ごみを掻き分けて最前へ出た。",
  "大人たちの大声と、子供の泣き声。",
  "...そして、救急車のサイレンの音。",
  "折り重なる影の黒と、救急ランプの赤。二色に染められた空間。",
  "見覚えのある鞄が落ちている。",
  "人だかりの中心。",
  "瓦礫の下から僅かに見える左手。",
  "道を開けろと、誰かの声。",
  "赤い、泉。",
  "「-------!!」",
  "そこに、”彼”は居た。",
  "...",
  "-あぁ、そりゃあ遅刻するよな-",
  "...",
  "映像作品の評価が悪かっただけのことで、記憶に蓋をするか。",
  "答えは”否”だ。",
  "映像作品や感想会はただの付属に過ぎない。その根本にはもっと大きな原因が",
  "そう、”トラウマ”があった。",
  "7/16日の金曜日。その後の記憶は今もなお曖昧だ。",
  "ただその日以降、私の記憶には大きな穴が開いた。",
  "あれ程大好きだった創作も、まるで内容が浮かばなくなった。",
  "それでも時間は進む。重なる課題と脚本制作。『芯の折れた』私は、その全てが苦痛だった。",
  "...",
  "全ての記憶を思い出した今、本来の自分がやっと帰ってきた今。最早思い残すことは無いだろう。",
  "いつの間にか自由になっていた体でそっと地面を蹴る。兎にも角にもまずは呼吸をしないとそろそろキツイ。",
  "『....リリリリ』",
  "水面が近づくにつれて、何やら甲高い騒音が聞こえてきた。",
  "『リリリリリリリリリリリリリリリ！！』",
  "この音は恐らく、目覚まし時計の音。",
  "水中でこの音量ならば、地上は相当うるさいはずだ。",
  "さっさと音源を止めなければ。",
  "",
] 
var fumbleText = [
  "",
  "致命的失敗（ファンブル）",
  "「ぐぁっ....がぁ...」",
  "声を発するタイミングが悪かったのか、水が気管に入った。",
  "最悪だ。",
  "咄嗟に咳き込んでしまったため、残りの酸素をすべて吐き出す。",
  "予想をしていなかった息の使い方により、パニックになる。生存本能からか、既に私の足は動いていた。",
  "地面を強く蹴り、浮上する。",
  "吐き出した空気ともがきによって大量の気泡が上がる。視界は最悪。",
  "緊急浮上の中、もう一度その姿を確認しようとするも、そこにはすでに誰もいなかった。",
  "幻...だったのだろうか。",
  "...",
  "『....リリリリ』",
  "水面が近づくにつれて、何やら甲高い騒音が聞こえてきた。",
  "『リリリリリリリリリリリリリリリ！！』",
  "この音は恐らく、目覚まし時計の音。",
  "水中でこの音量ならば、地上は相当うるさいはずだ。",
  "さっさと音源を止めなければ。",
  "",
] 


var dice1Text = [
  "",
  "失敗した。",
  "「あなｔッ....」",
  "酸素が足りず、途中で途切れてしまった。",
  "正直、苦しい。あまり長くは持たないだろう。",
  "次で、届けなければ。",
  "",
] 
var dice2Text = [
  "",
  "失敗した。",
  "「....」",
  "思っていたよりも、残りの酸素は無かったらしく。発音にすら至らなかった。",
  "無呼吸。",
  "もう限界だ。",
  "幸い金縛りは溶けたようだが、今更肩を叩きに行ける程の余裕はない。",
  "今すぐ水面へ行かなければ。",
  "地面を蹴り、一気に浮上する。",
  "ふと、もう一度彼の方を見る。",
  "この角度からなら顔が見えるかもしれない。或いは私の陰で、存在に気付いてくれるかもしれない。",
  "しかしそんな期待は脆くも崩れ去った。",
  "見下ろすとそこには誰もおらず、気泡のみが存在していた。",
  "",
  "感覚で理解する。『きっと彼は、泡となって消えてしまったのだろう。』",
  "...",
  "『....リリリリ』",
  "水面が近づくにつれて、何やら甲高い騒音が聞こえてきた。",
  "『リリリリリリリリリリリリリリリ！！』",
  "この音は恐らく、目覚まし時計の音。",
  "水中でこの音量ならば、地上は相当うるさいはずだ。",
  "さっさと音源を止めなければ。",
  "",
] 

var dice1kMax = dice1Text.length;
var dice1C = 0;
let dice1F = sessionStorage.getItem('dice1');
let button = sessionStorage.getItem('btn');
var dice = function () {
  button = sessionStorage.getItem('btn');
  if(button == 'end'){
    if((dicenum <= number)&&(dicenum == 1)){
      dice1kMax = criticalText.length;
      if(dice1F != 'end'){
        document.getElementById('write').innerHTML = criticalText[dice1C];
        dice1C++;
      }
      if(dice1C == 9){
        var element = document.getElementById("buble"); 
        element.style.backgroundImage = 'url(../pic3/edSp.png)';
      }
      if(dice1C == dice1kMax+1){
        sessionStorage.setItem('dice1', 'end');
        dice1F = sessionStorage.getItem('dice1');
        document.querySelector('.dice').style.display = "none";
      }
      if(dice1F == 'end'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        takiSet()
        rollSet()
        location.href = "../map2/map2-2.html";
      }
    }
    else if(dicenum <= number){
      dice1kMax = diceTText.length;
      if(dice1F != 'end'){
        document.getElementById('write').innerHTML = diceTText[dice1C];
        dice1C++;
      }
      if(dice1C == 11){
        var element = document.getElementById("buble"); 
        element.style.backgroundImage = 'url(../pic3/ed2.png)';
      }
      if(dice1C == dice1kMax+1){
        sessionStorage.setItem('dice1', 'end');
        dice1F = sessionStorage.getItem('dice1');
        document.querySelector('.dice').style.display = "none";
      }
      if(dice1F == 'end'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        takiSet()
        rollSet()
        location.href = "../map2/map2-2.html";
      }
    }
    else{
      if(dice1F != 'end'){
        document.getElementById('write').innerHTML = dice1Text[dice1C];
        dice1C++;
      }
      if(dice1C == dice1kMax+1){
        sessionStorage.setItem('dice1', 'end');
        dice1F = sessionStorage.getItem('dice1');
        document.querySelector('.seconddice').style.display = "block";
        document.querySelector('.dice').style.display = "none";
      }
      if(dice1F == 'end'){
        str = " ";
        document.getElementById('write').innerHTML = str;
      }
    }
    if(dicenum == 100){
      dice1kMax = fumbleText.length;
      if(dice1F != 'end'){
        document.getElementById('write').innerHTML = fumbleText[dice1C];
        dice1C++;
      }
      if(dice1C == dice1kMax+1){
        sessionStorage.setItem('dice1', 'end');
        dice1F = sessionStorage.getItem('dice1');
        document.querySelector('.dice').style.display = "none";
      }
      if(dice1F == 'end'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        takiSet()
        location.href = "../map2/map2-2.html";
      }
    }
  }
}

var dice2kMax = dice2Text.length;
var dice2C = 0;
let dice2F = sessionStorage.getItem('dice2');
let button2 = sessionStorage.getItem('btn2');
var dice2 = function () {
  button2 = sessionStorage.getItem('btn2');
  if(button2 == 'end'){
    if((dicenum <= number)&&(dicenum == 1)){
      dice2kMax = criticalText.length;
      if(dice2F != 'end'){
        document.getElementById('write').innerHTML = criticalText[dice2C];
        dice2C++;
      }
      if(dice2C == 9){
        var element = document.getElementById("buble"); 
        element.style.backgroundImage = 'url(../pic3/edSp.png)';
      }
      if(dice2C == dice2kMax+1){
        sessionStorage.setItem('dice2', 'end');
        dice2F = sessionStorage.getItem('dice2');
        document.querySelector('.seconddice').style.display = "none";
      }
      if(dice2F == 'end'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        takiSet()
        rollSet()
        location.href = "../map2/map2-2.html";
      }
    }
    else if(dicenum <= number){
      dice2kMax = diceTText.length;
      if(dice2F != 'end'){
        document.getElementById('write').innerHTML = diceTText[dice2C];
        dice2C++;
      }
      if(dice2C == 11){
        var element = document.getElementById("buble"); 
        element.style.backgroundImage = 'url(../pic3/ed2.png)';
      }
      if(dice2C == dice2kMax+1){
        sessionStorage.setItem('dice2', 'end');
        dice2F = sessionStorage.getItem('dice2');
        document.querySelector('.seconddice').style.display = "none";
      }
      if(dice2F == 'end'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        takiSet()
        rollSet()
        location.href = "../map2/map2-2.html";
      }
    }
    else{
      if(dice2F != 'end'){
        document.getElementById('write').innerHTML = dice2Text[dice2C];
        dice2C++;
      }
      if(dice2C == 14){
        var element = document.getElementById("buble"); 
        element.style.backgroundImage = 'url(../pic3/ed2.png)';
      }
      if(dice2C == dice2kMax+1){
        sessionStorage.setItem('dice2', 'end');
        dice2F = sessionStorage.getItem('dice2');
        document.querySelector('.seconddice').style.display = "none";
      }
      if(dice2F == 'end'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        takiSet()
        location.href = "../map2/map2-2.html";
      }
    }
    if(dicenum == 100){
      dice2kMax = fumbleText.length;
      if(dice2F != 'end'){
        document.getElementById('write').innerHTML = fumbleText[dice2C];
        dice2C++;
      }
      if(dice2C == dice2kMax+1){
        sessionStorage.setItem('dice2', 'end');
        dice2F = sessionStorage.getItem('dice2');
        document.querySelector('.seconddice').style.display = "none";
      }
      if(dice2F == 'end'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        sessionStorage.setItem('taki', 'end');
        takiSet()
        location.href = "../map2/map2-2.html";
      }
    }
  }
}
/*
var dice3kMax = dice3Text.length;
var dice3C = 0;
let dice3F = sessionStorage.getItem('dice2');
let button3 = sessionStorage.getItem('btn2');
var dice3 = function () {
  button3 = sessionStorage.getItem('btn3');
  if(button3 == 'end'){
    if(dicenum == 1){
      dice3kMax = criticalText.length;
      if(dice3F != 'end'){
        document.getElementById('write').innerHTML = criticalText[dice3C];
        dice3C++;
      }
      if(dice3C == 9){
        var element = document.getElementById("buble"); 
        element.style.backgroundImage = 'url(../pic3/edSp.png)';
      }
      if(dice3C == dice3kMax+1){
        sessionStorage.setItem('dice3', 'end');
        dice3F = sessionStorage.getItem('dice3');
        document.querySelector('.seconddice').style.display = "none";
      }
      if(dice3F == 'end'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        location.href = "../map2/map2-2.html";
      }
    }
    else if(dicenum <= number){
      dice3kMax = diceTText.length;
      if(dice3F != 'end'){
        document.getElementById('write').innerHTML = diceTText[dice3C];
        dice3C++;
      }
      if(dice1C == 11){
        var element = document.getElementById("buble"); 
        element.style.backgroundImage = 'url(../pic3/ed2.png)';
      }
      if(dice3C == dice3kMax+1){
        sessionStorage.setItem('dice3', 'end');
        dice3F = sessionStorage.getItem('dice3');
        document.querySelector('.seconddice').style.display = "none";
      }
      if(dice3F == 'end'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        location.href = "../map2/map2-2.html";
      }
    }
    else{
      if(dice3F != 'end'){
        document.getElementById('write').innerHTML = dice3Text[dice3C];
        dice3C++;
      }
      if(dice3C == 14){
        var element = document.getElementById("buble"); 
        element.style.backgroundImage = 'url(../pic3/ed2.png)';
      }
      if(dice3C == dice3kMax+1){
        sessionStorage.setItem('dice3', 'end');
        dice3F = sessionStorage.getItem('dice3');
        document.querySelector('.lastdice').style.display = "none";
      }
      if(dice3F == 'end'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        location.href = "../map2/map2-2.html";
      }
    }
    if(dicenum == 100){
      dice3kMax = fumbleText.length;
      if(dice3F != 'end'){
        document.getElementById('write').innerHTML = fumbleText[dice3C];
        dice3C++;
      }
      if(dice3C == dice3kMax+1){
        sessionStorage.setItem('dice3', 'end');
        dice3F = sessionStorage.getItem('dice3');
        document.querySelector('.lastdice').style.display = "none";
      }
      if(dice3F == 'end'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        location.href = "../map2/map2-2.html";
      }
    }
  }
}
*/

var dicenum;
function start() {
  dicenum = Math.floor(Math.random() * 100) + 1;
  sessionStorage.setItem('btn', 'end');
  document.getElementById("output").innerHTML = dicenum;
  document.querySelector('.diceButton').style.display = "none";
}

function start2() {
  dicenum = Math.floor(Math.random() * 100) + 1;
  sessionStorage.setItem('btn2', 'end');
  document.getElementById("output2").innerHTML = dicenum;
  document.querySelector('.diceButton2').style.display = "none";
}

function start3() {
  dicenum = Math.floor(Math.random() * 100) + 1;
  sessionStorage.setItem('btn3', 'end');
  document.getElementById("output3").innerHTML = dicenum;
  document.querySelector('.diceButton3').style.display = "none";
}