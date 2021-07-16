//ロード画面の表示
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');


//ふわっと
var scrollAnimationElm = document.querySelectorAll('.sa');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 200;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);
}


//セリフ

var text = [
  " ",
  "埃が積もっている...しばらく誰かに使われた形跡は無さそうだ。",
  "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい",
  "うううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううううう"
] 

var n = 1;
var max = text.length;

var myfunc = function () {
  var str = "あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ";
  document.getElementById('write').innerHTML = text[n] ;
  n++;
  if(n > max){
    n = 0;
  }
}
