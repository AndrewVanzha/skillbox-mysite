var windowWidth;
var numPic = 3;
var rs1X;
var rs1Y;

windowWidth = $(window).width();
if (windowWidth < 1250 && windowWidth > 981) {
  numPic = 2;
} else if (windowWidth < 981) {
  numPic = 1;
} else {
  numPic = 3;
}

function setLeftEdgePopupMenu() { // управление левым краем всплывающего меню
  windowWidth = $(window).width();
  if (windowWidth <= 1250) {
    var el = $('.left-header-block');
    var varOffset = el.offset();
    $('.popup-box').css({
      top: varOffset.top + 70,
      left: varOffset.left + 5
    });
    //console.log(varOffset.left);
  } else {
    $('.popup-box').css({
      'left': 0
    });
    //console.log(windowWidth);
  }

}

function manageHeaderPhoneLine() { // управление телефонным блоком в заголовке
  if (windowWidth <= 790) {
    $('.header-phone-line').css({
      'display': 'inline-block'
    });
    //console.log(varOffset.left);
  } else {
    $('.header-phone-line').css({
      'display': 'none',
    });
    //console.log(windowWidth);
  }

}

function managePersonalImg() { //  управление картинкой с автором
  if (windowWidth <= 980) {
    $('.author-pic div img').attr('src', 'img/man-320.png');
  } else {
    $('.author-pic div img').attr('src', 'img/man.png');
  }

}

function setLeftPaddingForNameLine() { // управление левым блоком в персональном разделе и символами
  if (windowWidth > 1920) {
    var paddingLeft = (1920 - 1170) / 2;
    $('.personal-item .column-left').css({ // двигаю край левого блока в персональном разделе
      'padding-left': paddingLeft
    });
  } else if (windowWidth <= 1920 && windowWidth > 1170) {
    var paddingLeft = (windowWidth - 1170) / 2;
    $('.personal-item .column-left').css({
      'padding-left': paddingLeft
    });
  } else if (windowWidth <= 1170 && windowWidth > 1005) { // 1024px
    $('.personal-item .column-left').css({
      'padding-left': '20px'
    });
  } else {
    var paddingLeft = (windowWidth - 580 - 10) / 2;
    $('.personal-item .column-left').css({
      'padding-left': paddingLeft
    });
  }
  //console.log(windowWidth);
}

// формирование левого смещения для символов, class__signString:String - класс "красного"/"белого" символа
// windowWidth - ширина окна, paddingLeft - общее базовое смещение, sign_leftEdge:Array - индивидуальное начальное смещение
function scatterSign(class__signString, windowWidth, sign_endCoords) {
  var i = 0;
  var classString = '.small-elements ';
  classString += class__signString; // формирую строку нужного класса

  var act__classString = classString + (i + 1); // формирую строку нужного класса
  $(act__classString).css({
    'left': '0px' // двигаю символ №i в заданном разделе
  });
/*  for (i = 0; i < sign_leftEdge.length; i++) {
    var act__classString = classString + (i + 1); // формирую строку нужного класса
    $(act__classString).css({
      'left': paddingLeft + sign_leftEdge[i] * windowWidth + 'px' // двигаю символ №i в заданном разделе
    });
    //console.log(act__classString);
    //console.log(sign_leftEdge[i]);
  }*/

  //console.log(sign_leftEdge.length);
}

// формирование смещения для символов, class__signString:String - класс "красного"/"белого" символа
// windowWidth - ширина окна, sign_startCoords:Array - начальная позиция, sign_endCoords:Array - конечная позиция
function moveSign(class__signString, windowWidth, sign_startCoords, sign_endCoords) {
  var i = 0;
  var classString = '.small-elements ';
  var paramK;
  var paramC;

  classString += class__signString; // формирую строку нужного класса

  for (i = 0; i < sign_startCoords.length; i++) {
    var act__classString = classString + (i + 1); // формирую строку нужного класса
    paramK = (sign_startCoords[i][0] - sign_endCoords[i][0]) / (1920 - 1024);
    paramC = sign_startCoords[i][0] - paramK * 1920;
    rs1X = paramK * windowWidth + paramC;

    paramK = (sign_startCoords[i][1] - sign_endCoords[i][1]) / (1920 - 1024);
    paramC = sign_startCoords[i][1] - paramK * 1920;
    rs1Y = paramK * windowWidth + paramC;

    $(act__classString).css({
      'transform': 'translate(' + rs1X + 'px,' + rs1Y + 'px)'
    });

    console.log(act__classString);
    console.log(rs1X);
    console.log(rs1Y);
  }

  //console.log(sign_leftEdge.length);
}

function setCoordsForSignes() { // управление символами в персональном и ценовом разделах 
  var i = 0;
  var redSigns_startCoords = [ // макс=5! начальная позиция для красных для 1920
    [370, 245],
    [674, 378],
    [138, 147],
    [170, 787],
    [952, 540],
  ];
  var redSigns_endCoords = [ // макс=5! начальная позиция для красных для 1024
    [640, 65],
    [578, 360],
    [157, 75],
    [150, 888],
    [548, 872],
  ];
  var whiteSigns_startCoords = [ // макс=5! начальная позиция для белых для 1920
    [370, 245],
    [674, 378],
    [138, 147],
    [170, 787],
    [952, 540],
  ];
  var whiteSigns_endCoords = [ // макс=5! начальная позиция для белых для 1024
    [640, 65],
    [578, 360],
    [157, 75],
    [150, 888],
    [548, 872],
  ];

  if (windowWidth > 1920) {
    //paddingLeft = (windowWidth - 1920) / 2;
    moveSign('.red-sign', windowWidth, redSigns_startCoords, redSigns_endCoords); // двигаю все 5 красных символов в персональном разделе
    moveSign('.white-sign', windowWidth, whiteSigns_startCoords, whiteSigns_endCoords); // двигаю все 5 белых символов в ценовом разделе

  } else if (windowWidth <= 1920 && windowWidth > 1170) {
    moveSign('.red-sign', windowWidth, redSigns_startCoords, redSigns_endCoords); // двигаю все 5 красных символов в персональном разделе
    moveSign('.white-sign', windowWidth, whiteSigns_startCoords, whiteSigns_endCoords); // двигаю все 5 белых символов в ценовом разделе

  } else if (windowWidth <= 1170 && windowWidth > 1005) { // 1024px
    moveSign('.red-sign', windowWidth, redSigns_startCoords, redSigns_endCoords); // двигаю все 5 красных символов в персональном разделе
    moveSign('.white-sign', windowWidth, whiteSigns_startCoords, whiteSigns_endCoords); // двигаю все 5 белых символов в ценовом разделе

  } else {
    moveSign('.red-sign', windowWidth, redSigns_startCoords, redSigns_endCoords); // двигаю все 5 красных символов в персональном разделе
    moveSign('.white-sign', windowWidth, whiteSigns_startCoords, whiteSigns_endCoords); // двигаю все 5 белых символов в ценовом разделе
  }

  console.log(windowWidth);
}

function manageSwiperPaginationAndButtons() { // управление окном pagination и кнопками в слайдере
  if (windowWidth > 1250) {
    if (!($('div.swiper-pagination').is('.hide-element'))) {
      $('div.swiper-pagination').addClass('hide-element'); // убираю pagination на большом экране
    }
    $('.swiper-button-next').removeClass('hide-element');
    $('.swiper-button-prev').removeClass('hide-element');
  } else { // windowWidth <= 1250
    $('div.swiper-pagination').removeClass('hide-element');
    if (!($('div.swiper-button-next').is('.hide-element'))) {
      $('.swiper-button-next').addClass('hide-element'); // убираю стрелку справа на большом экране
    }
    if (!($('div.swiper-button-prev').is('.hide-element'))) {
      $('.swiper-button-prev').addClass('hide-element'); // убираю стрелку слева на большом экране
    }
  }
}

$(document).ready(function () {
  windowWidth = $(window).width();
  //console.log(windowWidth);
  if (windowWidth <= 370) {
    $('.unit-box img').css({ // задаю размеры картинки для слайдера для узкого экрана
      'width': '320px',
      'height': 'auto',
      'background-size': 'auto'
    });
  }

  setLeftPaddingForNameLine();
  //setLeftForSignes();
  setCoordsForSignes();
  manageSwiperPaginationAndButtons();
  setLeftEdgePopupMenu();
  manageHeaderPhoneLine();
  managePersonalImg();
});

$(window).resize(function () {
  windowWidth = $(window).width();
  if (windowWidth >= 1250 && ($('div').is('.popup-box'))) {
    $('div.popup-box').remove(); // убираю popup-меню на большом экране
  }

  setLeftPaddingForNameLine();
  setCoordsForSignes();
  manageSwiperPaginationAndButtons();
  setLeftEdgePopupMenu();
  manageHeaderPhoneLine();
  managePersonalImg();
});

$(function () {
  $('.left-header-block').click(function () {
    windowWidth = $(window).width();
    setLeftEdgePopupMenu();
    //console.log('burger');
    if (windowWidth < 1250 && (!$('div').is('.popup-box'))) {
      $('.header-line').append( // вывожу popup-меню
        '<div class="popup-box">' +
        '<div class="nav-list">' +
        '<li><a href="#">Услуги</a></li>' +
        '<li><a href="#">Портфолио</a></li>' +
        '<li><a href="#">Стоимость</a></li>' +
        '</div>' +
        '</div>');
    } else {
      $('div.popup-box').remove(); // убираю popup-меню на малом экране
    }
  });
});

// https://stackoverflow.com/questions/10237731/css3-transitions-inside-jquery-css