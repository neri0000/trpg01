const para = document.querySelector('p');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

var view = 0;　　//いま自分がどこにいるのかを示す変数（0=タイトル）


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
        if (mouseX > width/5 && mouseX < width){
          if(mouseY > 0 && mouseY < height) {
          hit(width/5, 0, width/6, height/4);
          }
        }
      }
    }
  }

  function hit(x,y,w,h) {
    ctx.save();
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, w, h);
    ctx.restore();
  }
  ItemClick()
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


  function printView() {
    var img = new Image();
    if (view == 0) {
      ctx.fillStyle = "gray";
    　ctx.fillRect(0, 0, width, height);
      moveBtR();
      moveBtL();
    } else if (view == 1) {
      img.src = "pic3/1-1.jpg";
      img.onload = function(){
      ctx.drawImage(img, 0, 0, width, height);
      //ctx.fillStyle = "red";
    　//ctx.fillRect(0, 0, width, height);
			moveBtR();
      }
    } else if (view == 2) {
      var clock= new Image();
      clock.src = "pic3/1-2_clock2.png";
      img.src = "pic3/1-2.jpg";
      img.onload = function(){
      ctx.drawImage(img, 0, 0, width, height);
      ctx.drawImage(clock, width/5, 0, width/6, height/4);
      //ctx.fillStyle = "blue";
    　//ctx.fillRect(0, 0, width, height);
      item(width/5, 0, width/6, height/4);
			moveBtL();
      }
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
  function item(x,y,w,h) {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, w, h);
    ctx.restore();
  }
}
start();
