//ロード画面の表示
window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  
  var str = "…";
  document.getElementById('write').innerHTML = str;
  document.getElementById('Iam').innerHTML = '<img src="../pic1/t1.png" alt="aa">';
  FlagSet()
  }
  
  
  //初見セリフ
  var map2OP = [
    "...",
    "「...教室？」",
    "...どこかの教室のようだ。",
    "...なんでここに教室？",
  ] 
  var n = 0;
  var map2 = map2OP.length;
  let data = sessionStorage.getItem('nande');
  var op = function () {
    if(data!='nande'){
        document.getElementById('write').innerHTML = map2OP[n];
        n++;
    }
    if(n == map2+1){
        sessionStorage.setItem('nande', 'nande');
        data = sessionStorage.getItem('nande');
    }
    if(data == 'nande'){
        str = " ";
        document.getElementById('write').innerHTML = str;
        
    }
  }
  
  
  //時計のセリフ
  var clock2Text = [
    "時計だ。",
    "「今は9時なんだ。」",
    "「...?」",
    "違った。",
    "この時計、壊れている。",
    "9時で止まっているだけだった。",
  ] 
  
  var maxClock2 = clock2Text.length;
  var c2 = 0;
  let dataC2 = sessionStorage.getItem('nande');
  var clock = function () {
    if(dataC2!='nande'){
        document.getElementById('write').innerHTML = clock2Text[c2];
        c2++;
    }
    if(c2 === maxClock2+1){
        sessionStorage.setItem('nande', 'nande');
        dataC2 = sessionStorage.getItem('nande');
    }
    if(dataC2 === 'nande'){
        str = "ここはもう調べた。";
        document.getElementById('write').innerHTML = str;
    }
  }
  
  //自由帳のセリフ
  var no = 0;
  var noteText = [
    "自由帳がある。",
    "中身は何だろう。",
    "...創作されたお話がたくさん書かれている。",
    "「これって...」",
    "「私が書いたやつだ...」",
    "「...懐かしいなぁ。」",
    "--自由帳を手に入れた。",
  ] 
  var maxNote = noteText.length;
  let dataN = sessionStorage.getItem('nande');
  var note = function () {
    if(dataN!='nande'){
        document.getElementById('write').innerHTML = noteText[no];
        no++;
    }
    if(no === maxNote+1){
        sessionStorage.setItem('nande', 'nande');
        dataN = sessionStorage.getItem('nande');
        sessionStorage.setItem('s1get1', true);
    }
    if(dataN === 'nande'){
        str = "ここはもう調べた。";
        document.getElementById('write').innerHTML = str;
        
    }
  }
  
  //読みかけの本のセリフ
  var b = 0;
  var bookText = [
    "本がある。",
    "しおりがついている。",
    "読みかけのようだ。",
    "...",
    "「いや、これ...」",
    "「私が読みかけのやつだ。」",
    "「どうしてこんなところに...」",
    "--読みかけの本を手に入れた。",
  ] 
  var maxBook = bookText.length;
  let dataB = sessionStorage.getItem('nande');
  var book = function () {
    if(dataB!='nande'){
        document.getElementById('write').innerHTML = bookText[b];
        b++;
    }
    if(b === maxBook+1){
        sessionStorage.setItem('nande', 'nande');
        dataN = sessionStorage.getItem('nande');
        sessionStorage.setItem('s1get2', true);
    }
    if(dataB === 'nande'){
        str = "ここはもう調べた。";
        document.getElementById('write').innerHTML = str;
        
    }
  }
  
  var Right = function () {
    location.href = "map2-1.html";
  }
  var Left = function () {
    location.href = "map2-3.html";
  }
  var rLeft = function () {
    location.href = "map2-2.html";
  }
  var lRight = function () {
    location.href = "map2-2.html";
  }
  