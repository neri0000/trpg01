window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
    FlagSet();
  
    var str = "...";
    document.getElementById('write').innerHTML = str;
    document.getElementById('Iam').innerHTML = '<img src="pic3/t2.png" alt="aa">';

    var hdoor = document.getElementById("hdoor");
    hdoor.style.display='none';
    let data7 = sessionStorage.getItem('s4txt7');

    if(data7 == 'ok'){
      changeElementV(hdoor);
    }
}  
  
  
  
  var textc = [
    "扉をくぐると一本の廊下と2枚の扉が見えた。",
    "何があるのかと警戒していたが、まだ何かあるというわけではなさそうだ。",
    "進める場所は左右の扉のどちらかのようだ。",
    "さて、どちらに進もうか...",
    "",
  
  ] 
  
  var n = 0;
  var maxc = textc.length;
  var cor = function () {
      if(n < max2){
        document.getElementById('write').innerHTML = textc[n];
        n++;
      }
      if(n > maxc){
        str = " ";
        document.getElementById('write').innerHTML = str;
      }
  }



  var door1 = function () {
    location.href = "map1/map1-1.html";
  }
  var door2 = function () {
    location.href = "map2/map2-1.html";
  }
  

  
  var dor3 = 0;
  var textdor3 = [
    "先ほどまでなかったはずの扉が目に入った。",
    "急になかったはずの扉が現れるなんておかしな話だが、今更驚きはしない",
    "しかし何があるかわからない。他の部屋の探索をが済んだのなら進んでみてもいいだろう",
    "",
    "進もう",
    "",
    "『※注意：この先に進むとエンディングかタイトルに戻るかの選択となります。本当に進みますか？』",
    "",
    "『...』",
    "『次のクリックで先に進みます。タイトルに戻るなら右上のtitleからお戻りください。よいエンディングを』",
  ] 
  
  let hdoor = document.getElementById('hdoor');
  var maxdor3 = textdor3.length;
  var door3 = function () {
    document.getElementById('write').innerHTML = textdor3[dor3];
    dor3++;
    if(dor3 > maxdor3){
      str = " ";
      document.getElementById('write').innerHTML = str;
      location.href = "map3/map3-1.html";
    }
  }

  
  
  