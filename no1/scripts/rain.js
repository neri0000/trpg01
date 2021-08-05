
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

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

const events = window.document;

//ウィンドウをクリックでフラグを対処
events.body.onclick = Room1()

function Room1() {
  const some = document.querySelector('p');
  some.textContent = "文字を変更"

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
}
