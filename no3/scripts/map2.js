//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

var str = "「！」";
document.getElementById('write').innerHTML = str;
//document.getElementById('Iam').innerHTML = '<img src="pic3/t2.png" alt="aa">';
document.getElementById('Iam').innerHTML = '<img src="../pic3/t1.png" alt="aa">';
}


//フラグ管理
function Flag() {
  let flagjudge = new Array(4);
  let trueEnd = false;

  for(let i=0; i<flagjudge.length; i++){
    flagjudge[i] = false;
  }

  if (flagjudge[0]) {
    trueEnd = true;
  }
}


function ItemClick(){
  // 追加ボタンをinputタグで作り、bodyタグの子要素に入れる
  let key = 0;
  const addButton = document.createElement('input');
  addButton.classList.add('addition');
  addButton.type = 'button';
  addButton.value = '追加';
  document.body.appendChild(addButton);

  // 追加ボタンをクリックしたら、ナンバー付の削除ボタンをinputタグで作る関数
  function buttonAdd() {
      const addButtonClick = document.getElementsByClassName('addition')[0];
      addButtonClick.addEventListener('click', ()=> {
          const delButton = document.createElement('input');
          delButton.classList.add('deletion');
          delButton.type = 'button';
          delButton.value = `${key}：削除`;
          document.body.appendChild(delButton);
          flag.flagjudge[key] = ture;
          key++;
          buttonDelete();
      }, false);
  }

  //クリックした削除ボタンを取る関数（実は非表示にするだけ）
  function buttonDelete() {
      for (let i = 0; i < key; i++) {
          const deleteButtonClick = document.getElementsByClassName('deletion')[i];
          deleteButtonClick.addEventListener('click', ()=> {
              deleteButtonClick.classList.add('hidden');
          }, false);
      }
  }

  buttonAdd()
}




//セリフ
var text = [
  "暗い、森のただなかにいる。",
  "光は幾筋にも漏れてくるけれど、それに照らされる深緑色の地面は、ごく少ない。空を見上げれば、空は見えないけれど、緑のグラデーションが鮮やかに光の色を教えてくれる。",
  "木の肌は視界を限りなく狭めてくる。もう一度、枝々に意識を傾けてみると、その何もないその空間に、白くて、透明な筋が見えた。",
  "幻想的な光景に息を飲む。",
  "生い茂る木々、湿った空気の合間を縫うように降り注ぐ陽光は、白い軌跡を残して地面に差す。",
  "そんな空間に、異様な存在が鎮座している。",
  "不自然に開けた場所に置かれた”テレビ”は、不法投棄というには余りにも奇麗な状態で此方を見上げていた。",
  "その画面には無限の暗闇が続いている。最も、何か映っている方が可笑しいのだが、神秘的な雰囲気に毒されたせいか多少の非現実も許せる気がしてくる。",
  "何故だかよくわからないが、私にはその”テレビ”が",
  "...とても神聖なものに見えた。",
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
  "テレビだ。何も映っていない。",
  "...。",
  "テレビの黒い画面は、私の姿を反射している。",
  "「素晴らしい。」",
  "「森の中のテレビというアンバランスな世界観はなかなかに刺激的だ。まるで、」",
  "--映画やドラマのワンシーンみたいだ。",
] 

var max2 = text2.length;
var t = 0;
var tv = function () {
  document.getElementById('write').innerHTML = text2[t];
  if(f > max3){
    t++;
  }
  if(t > max2){
    str = " ";
    document.getElementById('write').innerHTML = str;
  }
}

var f = 0;
var text3 = [
  "木の枝から紐のようなものが垂れ下がっている。",
  "よく見ようと近づくと、それは私の意図を察したかのように落ちてきた。",
  "--未使用の８ｍｍフィルムを入手した",
] 
var max3 = text3.length;
var film = function () {
  document.getElementById('write').innerHTML = text3[f];
  f++;
  if(f > max3){
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