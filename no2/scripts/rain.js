const para = document.querySelector('p');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

var view = 0;　　//いま自分がどこにいるのかを示す変数（0=タイトル）

/*

var particles = Particles.init({
  selector: '.background',
  sizeVariations: 10,
  color: ['#00bbdd', '#404B69', '#DBEDF3'],
  connectParticles: true
});

*/

function start() {
  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, width, height);
  moveBtR();
  moveBtL();

  canvas.addEventListener("mousedown", mouseDownHandler, false);
  function mouseDownHandler(e) {　//マウスがクリックされたら動く関数
    var rect = e.target.getBoundingClientRect();
    mouseX = Math.floor(e.clientX - rect.left);
    mouseY = Math.floor(e.clientY - rect.top);　//マウスポインタの位置を取得
    if (view == 0) {
      if (mouseX > 100 && mouseX < 150) {
        if (mouseY > height / 2 - 30 && mouseY < height / 2 + 30) {
          view = 1;
          printView();
        }
      }
      if (mouseX > width - 150 && mouseX < width - 100) {
        if (mouseY > height / 2 - 30 && mouseY < height / 2 + 30) {
          view = 2;
          printView();
        }
      }
    } else if (view == 1) {
      if (mouseX > width - 150 && mouseX < width - 100) {
        if (mouseY > height / 2 - 30 && mouseY < height / 2 + 30) {
          view = 0;
          printView();
        }
      }
    } else if (view == 2) {
      if (mouseX > 100 && mouseX < 150) {
        if (mouseY > height / 2 - 30 && mouseY < height / 2 + 30) {
          view = 0;
          printView();
        }
      }
    }
  }

  function printView() {
    var img = new Image();
    if (view == 0) {
      img.src = "../../picture/main_bg.png";
      ctx.fillStyle = "gray";
      ctx.fillRect(0, 0, width, height);
      moveBtR();
      moveBtR();
      moveBtL();
    } else if (view == 1) {
      img.src = "../../picture/main_bg.png";
      ctx.fillStyle = "#708090";
      ctx.fillRect(0, 0, width, height);
      moveBtR();
    } else if (view == 2) {
      img.src = "../../picture/main_bg.png";
      ctx.fillStyle = "#333333";
      ctx.fillRect(0, 0, width, height);
      moveBtL();
    }
  }

  function moveBtL() {
    ctx.beginPath();
    ctx.moveTo(100, height / 2);
    ctx.lineTo(150, height / 2 - 30);
    ctx.lineTo(150, height / 2 + 30);
    ctx.closePath();　　//3つの点を線で結んで三角形にしています
    ctx.fillStyle = "#ffffff";
    ctx.fill();　　//白で塗りつぶします
  }
  function moveBtR() {
    ctx.beginPath();
    ctx.moveTo(width - 100, height / 2);
    ctx.lineTo(width - 150, height / 2 - 30);
    ctx.lineTo(width - 150, height / 2 + 30);
    ctx.closePath();
    ctx.fillStyle = "#ffffff";
    ctx.fill();
  }
}
start();
