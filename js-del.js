class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this); // (*)
  }

  save() {
    console.log('сохраняю');
  }

  load() {
    console.log('загружаю');
  }

  search() {
    console.log('ищу');
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  };
}

new Menu(menu);


let selectedBox;
let divInt = document.querySelector('.block');
//console.log(divInt);

divInt.onclick = function (event) {
  let target = event.target; // где был клик?
  console.log(target);
  console.log(this);
  console.log(target.classList);
  console.log(target.className);

  if (target.tagName != 'DIV') return; // не на DIV? тогда не интересует

  highlight(target); // подсветить DIV
};

function highlight(box) {
  if (selectedBox) { // убрать существующую подсветку, если есть
    selectedBox.classList.remove('highlight');
  }
  selectedBox = box;
  selectedBox.classList.add('highlight'); // подсветить новый div
}


let selectedBox2;
let divSelect = document.querySelector('.block2');
//console.log(divSelect);

divSelect.onclick = function (event) {
  let target = event.target; // где был клик?
  console.log(target);
  console.log(this);
  console.log(target.classList);

  if (target.classList[1] == 'box22') console.log(target.classList[1]);
  if (target.classList[0] != 'box') return; // не на .box? тогда не интересует

  highlight2(target); // подсветить .box
};

function highlight2(box) {
  if (selectedBox2) { // убрать существующую подсветку, если есть
    selectedBox2.classList.remove('highlight');
  }
  selectedBox2 = box;
  selectedBox2.classList.add('highlight'); // подсветить новый div
}


console.log('**');

let selectedInput;
let inputSelect = document.querySelector('body');
//let inputBoxes = document.querySelectorAll('.popup__formbox');
//let inputSelect = document.querySelector('.popup__form_inputblock');
//console.log(inputSelect);
//console.log(inputBoxes);

inputSelect.onclick = function (event) {
  let target = event.target; // где был клик?
  //console.log(target);
  //console.log(this);
  //console.log(target.classList);

  //if (target.classList[2] == 'name-box') console.log(target.classList[2]);
  if (target.classList[0] != 'popup__formbox-input') { // click не на input? тогда убрать всю подсветку
    if (selectedInput) { // убрать существующую подсветку, если есть
      if (selectedInput.value == '') { // в исходное состояние, если пустая строка
        selectedInput.parentElement.classList.remove('popup__formbox-solidborder'); // убрал сплошную рамку у родителя
        selectedInput.parentElement.classList.add('popup__formbox-greyborder'); // добавил серую рамку у родителя
        selectedInput.classList.remove('popup__formbox-inputactive'); // убрал белый цвет фона
        selectedInput.classList.add('popup__formbox-inputneutral'); // добавил серый цвет фона
        selectedInput.nextElementSibling.classList.remove('popup__formbox-textactive'); // убрал заголовок с границы у последующего элемента
        selectedInput.nextElementSibling.classList.add('popup__formbox-textneutral'); // спустил заголовок на поле у последующего элемента
      }
    }
    return;
  }

  highlight3(target); // подсветить input
};

function highlight3(box) {
  //console.log('selectedInput');
  //console.log(selectedInput);
  if (selectedInput) { // убрать существующую подсветку, если есть
    //console.log(selectedInput.value);
    if (selectedInput.value == '') { // в исходное состояние, если пустая строка
      selectedInput.parentElement.classList.remove('popup__formbox-solidborder'); // убрал сплошную рамку у родителя
      selectedInput.parentElement.classList.add('popup__formbox-greyborder'); // добавил серую рамку у родителя
      selectedInput.classList.remove('popup__formbox-inputactive'); // убрал белый цвет фона
      selectedInput.classList.add('popup__formbox-inputneutral'); // добавил серый цвет фона
      selectedInput.nextElementSibling.classList.remove('popup__formbox-textactive'); // убрал заголовок с границы у последующего элемента
      selectedInput.nextElementSibling.classList.add('popup__formbox-textneutral'); // спустил заголовок на поле у последующего элемента
    }
  }
  selectedInput = box;
  //console.log(selectedInput);
  //console.log(selectedInput.parentElement);
  //console.log(selectedInput.nextElementSibling);

  // подсветить новый input
  selectedInput.parentElement.classList.remove('popup__formbox-greyborder'); // убрал серую рамку у родителя
  selectedInput.parentElement.classList.add('popup__formbox-solidborder'); // добавил сплошную рамку у родителя
  selectedInput.classList.remove('popup__formbox-inputneutral'); // убрал серый цвет фона
  selectedInput.classList.add('popup__formbox-inputactive'); // добавил белый цвет фона
  selectedInput.nextElementSibling.classList.remove('popup__formbox-textneutral'); // убрал заголовок с поля у последующего элемента
  selectedInput.nextElementSibling.classList.add('popup__formbox-textactive'); // поднял заголовок на границу у последующего элемента

}