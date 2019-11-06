// https://learn.javascript.ru/dom-navigation
// https://learn.javascript.ru/modifying-document
// https://tproger.ru/translations/dom-javascript/
// https://learn.javascript.ru/multi-insert
// https://learn.javascript.ru/event-delegation

const elementButton = document.getElementById("my_call_button"); // кнопка Заказать звонок
const elementMenu = document.getElementById("menu_block"); // попап-меню
let styleMenu = elementMenu.style;
let elements = [];
//console.log(elementMenu);
//const closeMenu = document.getElementsByClassName("popup__form_close")[0]; // крестик закрытия меню

elementButton.addEventListener('click', function () { // обработчик кнопки Заказать звонок
  console.log('++');
  let cont;

  styleMenu.display = 'flex';
  //document.getElementByName("body").overflow = 'hidden';

  // формирую блок popup-меню
  elements.push(document.createElement('div')); // #0
  elements[0].classList.add('popup__form');
  elementMenu.appendChild(elements[0]);

  elements.push(document.createElement('div')); // #1
  elements[1].classList.add('popup__form_close');
  elements[1].setAttribute('onclick', 'closeFun()'); 
  elements[1].innerHTML = 
    `<div class="popup__form_close-intA">
    <div class="popup__form_close-intB"></div>
    </div>`;
  elements[0].appendChild(elements[1]);

  elements.push(document.createElement('h2')); // #2
  cont = document.createTextNode('Заказать звонок');
  elements[2].appendChild(cont);
  elements[0].appendChild(elements[2]);

  elements.push(document.createElement('p')); // #3
  cont = document.createTextNode('Представьтесь, мы Вам перезвоним');
  elements[3].appendChild(cont);
  elements[0].appendChild(elements[3]);

  let valueVal = '1a2b3e45c67d89f0';
  let name2 = 'WEB_FORM_ID';
  elements.push(document.createElement('form')); // #4
  elements[4].classList.add('popup__form-form');
  elements[4].classList.add('ajax-form');
  elements[4].method = 'POST'; 
  elements[4].name = 'form_name'; 
  elements[4].enctype = 'multipart/form-data';
  elements[4].innerHTML = 
    `<input type="hidden" name="sessid" id="sessid" value="${valueVal}">
    <input type="hidden" name="${name2}" value="1">
    <input type="hidden" name="web_form_submit" value="Отправить">`;
  elements[0].appendChild(elements[4]);

  elements.push(document.createElement('div')); // #5
  elements[5].classList.add('popup__formbox');
  elements[5].classList.add('popup__formbox-greyborder');
  elements[5].innerHTML = 
  `<input class="popup__formbox-input popup__formbox-inputneutral name-box" type="text" name="name" required >
    <label class="popup__formbox-text popup__formbox-textneutral">Ваше имя:*</label>`;
  elements[4].appendChild(elements[5]);

  elements.push(document.createElement('div')); // #6
  elements[6].classList.add('popup__formbox');
  elements[6].classList.add('popup__formbox-greyborder');
  elements[6].innerHTML = 
  `<input class="popup__formbox-input popup__formbox-inputneutral phone_mask" type="phone" name="phone" required >
    <label class="popup__formbox-text popup__formbox-textneutral">Телефон:*</label>`;
  elements[4].appendChild(elements[6]);

  elements.push(document.createElement('div')); // #7
  elements[7].classList.add('popup__formbox');
  elements[7].classList.add('popup__formbox-greyborder');
  elements[7].innerHTML = 
  `<input class="popup__formbox-input popup__formbox-inputneutral email_mask" type="email" name="email" required >
    <label class="popup__formbox-text popup__formbox-textneutral">Email:*</label>`;
  elements[4].appendChild(elements[7]);

  elements.push(document.createElement('div')); // #8
  elements[8].classList.add('popup__form_bottom');
  elements[8].innerHTML = 
  `<input id="popup__form_agree" type="checkbox" class="popup__form_check-input" checked="" >
    <label for="popup__form_agree" class="popup__form_check-label new_check">Я согласен на 
    <span>обработку персональных данных</span></label>`;
  elements[4].appendChild(elements[8]);

  elements.push(document.createElement('input')); // #9
  elements[9].classList.add('popup__form_button');
  elements[9].name = 'web_form_submit';
  elements[9].type = 'submit';
  elements[9].value = 'Отправить';
  elements[9].setAttribute('checked', true); 
  elements[4].appendChild(elements[9]);
  console.log(elements);

});

function closeFun() {
  console.log('x');

  elements[4].removeChild(elements[9]);
  elements[4].removeChild(elements[8]);
  elements[4].removeChild(elements[7]);
  elements[4].removeChild(elements[6]);
  elements[4].removeChild(elements[5]);

  elements[0].removeChild(elements[4]);
  elements[0].removeChild(elements[3]);
  elements[0].removeChild(elements[2]);
  elements[0].removeChild(elements[1]);
  
  elementMenu.removeChild(elements[0]);

  styleMenu.display = 'none';

  elements.splice(0, elements.length);
  console.log(elements);
}


console.log('**');

let selectedInput;
const inputSelect = document.querySelector('body');
//let inputBoxes = document.querySelectorAll('.popup__formbox');
//let inputSelect = document.querySelector('.popup__form_inputblock');
//console.log(inputSelect);
//console.log(inputBoxes);

inputSelect.onclick = function (event) {
  console.log('#');
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


/*function test() {
  let elem = document.getElementById('block1');
  let linkk = document.createElement('a');
  //var brr = document.createElement('br');

  linkk.innerHTML = 'go go';
  linkk.href = 'http://google.com';

  //elem.appendChild(br);
  elem.appendChild(linkk);
}*/
