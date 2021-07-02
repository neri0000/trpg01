
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//フラグ管理
function Flag() {
  let flagjudge = [];
  let trueEnd = false;

  for(let i=0; i<flagjudge.length; i++){
    flagjudge[i] = false;
  }

  if (flagjudge[0]) {
    trueEnd = true;
  }
}

//ウィンドウをクリックでフラグを対処
document.body.onclick = Room1()

function Room1() {
  const some = document.querySelector('p');
  some.textContent = "文字を変更"
}
first()
function first() {
  Flag();

  if (Flag.trueEnd) {
    End1();
  } else {
    End2();
  }
}


function End1() {
  const message = document.querySelector('.p');
  message.textContent = "finish!"
}

function End2() {
  const message = document.querySelector('.p');
  message.textContent = "finish?"

const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//フラグ管理
function Flag() {
  let flagjudge = [];
  let trueEnd = false;

  if (some) {
    flagjudge[0] = true;
  }

  if (flagjudge[0]) {
    trueEnd = true;
  }
}


function first() {
  Flag();

  //ウィンドウをクリックでフラグを対処
  document.body.onclick = Room1()

  function Room1() {
    const some = document.querySelector('.p');
    some.textContent = "文字を変更"
    Flag.flagjudge[0] = true;
  }
  
  if (Flag.trueEnd) {
    End1();
  } else {
    End2();
  }
}
first()

function End1() {
  const message = document.querySelector('.p');
  message.textContent = "finish!"
}

function End2() {
  const message = document.querySelector('.p');
  message.textContent = "finish?"
}