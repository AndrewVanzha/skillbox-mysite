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
  //const popupFragment = document.createDocumentFragment();
  
  elements.push(document.createElement('div')); // #0
  elements[0].classList.add('popup__form');
  elementMenu.appendChild(elements[0]);

  elements.push(document.createElement('div')); // #1
  elements[1].classList.add('popup__form_close');
  elements[1].setAttribute('onclick', 'closeFun()'); 
  elements[0].appendChild(elements[1]);

  elements.push(document.createElement('div')); // #2
  elements[2].classList.add('popup__form_close-intA');
  elements[1].appendChild(elements[2]);

  elements.push(document.createElement('div')); // #3
  elements[3].classList.add('popup__form_close-intB');
  elements[2].appendChild(elements[3]);

  elements.push(document.createElement('h2')); // #4
  cont = document.createTextNode('Заказать звонок');
  elements[4].appendChild(cont);
  elements[0].appendChild(elements[4]);

  elements.push(document.createElement('p')); // #5
  cont = document.createTextNode('Представьтесь, мы Вам перезвоним');
  elements[5].appendChild(cont);
  elements[0].appendChild(elements[5]);

  elements.push(document.createElement('form')); // #6
  elements[6].classList.add('popup__form-form');
  elements[6].classList.add('ajax-form');
  elements[6].method = 'POST'; 
  elements[6].name = 'form_name'; 
  elements[6].enctype = 'multipart/form-data'; 
  elements[0].appendChild(elements[6]);
  //elem1.setAttribute('method', 'POST'); 

  elements.push(document.createElement('div')); // #7
  elements[7].classList.add('popup__formbox');
  elements[7].classList.add('popup__formbox-greyborder');
  elements[6].appendChild(elements[7]);

  elements.push(document.createElement('input')); // #8
  elements[8].classList.add('popup__formbox-input');
  elements[8].classList.add('popup__formbox-inputneutral');
  elements[8].classList.add('name-box');
  elements[8].type = 'name';
  elements[8].name = 'name';
  elements[8].setAttribute('required', true); 
  elements[7].appendChild(elements[8]);

  elements.push(document.createElement('label')); // #9
  elements[9].innerHTML = 'Ваше имя:*';
  elements[9].classList.add('popup__formbox-text');
  elements[9].classList.add('popup__formbox-textneutral');
  elements[7].appendChild(elements[9]);

  elements.push(document.createElement('div')); // #10
  elements[10].classList.add('popup__formbox');
  elements[10].classList.add('popup__formbox-greyborder');
  elements[6].appendChild(elements[10]);

  elements.push(document.createElement('input')); // #11
  elements[11].classList.add('popup__formbox-input');
  elements[11].classList.add('popup__formbox-inputneutral');
  elements[11].classList.add('phone_mask');
  elements[11].type = 'phone';
  elements[11].name = 'phone';
  elements[11].setAttribute('required', true); 
  elements[10].appendChild(elements[11]);

  elements.push(document.createElement('label')); // #12
  elements[12].innerHTML = 'Телефон:*';
  elements[12].classList.add('popup__formbox-text');
  elements[12].classList.add('popup__formbox-textneutral');
  elements[10].appendChild(elements[12]);

  elements.push(document.createElement('div')); // #13
  elements[13].classList.add('popup__formbox');
  elements[13].classList.add('popup__formbox-greyborder');
  elements[6].appendChild(elements[13]);

  elements.push(document.createElement('input')); // #14
  elements[14].classList.add('popup__formbox-input');
  elements[14].classList.add('popup__formbox-inputneutral');
  elements[14].classList.add('email_mask');
  elements[14].type = 'email';
  elements[14].name = 'email';
  elements[14].setAttribute('required', true); 
  elements[13].appendChild(elements[14]);

  elements.push(document.createElement('label')); // #15
  elements[15].innerHTML = 'Email:*';
  elements[15].classList.add('popup__formbox-text');
  elements[15].classList.add('popup__formbox-textneutral');
  elements[13].appendChild(elements[15]);

  elements.push(document.createElement('div')); // #16
  elements[16].classList.add('popup__form_bottom');
  elements[6].appendChild(elements[16]);

  elements.push(document.createElement('input')); // #17
  elements[17].classList.add('popup__form_check-input');
  elements[17].id = 'popup__form_agree';
  elements[17].type = 'checkbox';
  elements[17].setAttribute('checked', true); 
  elements[16].appendChild(elements[17]);

  elements.push(document.createElement('label')); // #18
  elements[18].innerHTML = 'Я согласен на <span>обработку персональных данных</span>';
  elements[18].id = 'popup__form_agree';
  elements[18].classList.add('popup__form_check-label');
  elements[16].appendChild(elements[18]);

  elements.push(document.createElement('input')); // #19
  elements[19].classList.add('popup__form_button');
  elements[19].name = 'web_form_submit';
  elements[19].type = 'submit';
  elements[19].value = 'Отправить';
  elements[19].setAttribute('checked', true); 
  elements[6].appendChild(elements[19]);
  console.log(elements);

});

function closeFun() {
  console.log('x');

  elements[6].removeChild(elements[19]);
  
  elements[16].removeChild(elements[18]);
  elements[16].removeChild(elements[17]);
  elements[6].removeChild(elements[16]);
  
  elements[13].removeChild(elements[15]);
  elements[13].removeChild(elements[14]);
  elements[6].removeChild(elements[13]);
  
  elements[10].removeChild(elements[12]);
  elements[10].removeChild(elements[11]);
  elements[6].removeChild(elements[10]);
  
  elements[7].removeChild(elements[9]);
  elements[7].removeChild(elements[8]);
  elements[6].removeChild(elements[7]);

  elements[0].removeChild(elements[6]);
  elements[0].removeChild(elements[5]);
  elements[0].removeChild(elements[4]);

  elements[2].removeChild(elements[3]);
  elements[1].removeChild(elements[2]);
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
