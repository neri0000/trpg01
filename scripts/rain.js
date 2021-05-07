const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//ランダム設定
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

//成形
function Shape(x, y, velY) {
  this.x = x;
  this.y = y;
  this.velY = velY;
}

//雨の設定
function Rain(x, y, step,size) {
  Shape.call(this,x,y,step);
  this.size = size;
}

Rain.prototype = Object.create(Shape.prototype);
Rain.prototype.constructor = Rain;


//描画処理
Rain.prototype.draw = function() {
  c.beginPath();
  c.fillStyle = 'rgb(0, 0, 0,0.3)';
  c.lineWidth = 0.5;
  c.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  c.fill();
};

//更新
Rain.prototype.update = function() {
  if((this.y + this.size) >= height) {
    this.y = 0;
    this.x = random(this.size,width-this.size);
  }
  this.y += this.velY;
};



const rains = [];

while(rains.length < 10) {
  const size = random(2,5);
  let rain = new Rain(
    random(size,width - size),
    random(size,height - size),
    size*0.3,size
  );
  rains.push(rain);
}

function loop() {
  c.fillStyle = 'rgba(193, 189, 189)';
  c.fillRect(0,0,width,height);

  for(let i = 0; i < rains.length; i++) {
      rains[i].draw();
      rains[i].update();
  }
  requestAnimationFrame(loop);
}
loop();
