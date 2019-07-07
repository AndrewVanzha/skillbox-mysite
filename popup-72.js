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
    var paddingLeft = (windowWidth - 1170) / 2 - 150*0;
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

// формирование траектории смещения для символов, class__signString:String - класс "красного"/"белого" символа
// sign_startCoords:Array - начальная позиция, sign_endCoords:Array - конечная позиция
// startWindowWidth - ширина окна для начальной позиции, endWindowWidth - ширина окна для конечной позиции
function moveSign(class__signString, startWindowWidth, sign_startCoords, endWindowWidth, sign_endCoords) {
  var i = 0;
  var paramK;
  var paramC;
  var classString = '';

  classString += class__signString; // формирую строку нужного класса

  for (i = 0; i < sign_startCoords.length; i++) {
    var act__classString = classString + (i + 1); // формирую строку нужного класса
    paramK = (sign_startCoords[i][0] - sign_endCoords[i][0]) / (startWindowWidth - endWindowWidth);
    paramC = sign_startCoords[i][0] - paramK * startWindowWidth;
    var coordX = paramK * windowWidth + paramC;

    paramK = (sign_startCoords[i][1] - sign_endCoords[i][1]) / (startWindowWidth - endWindowWidth);
    paramC = sign_startCoords[i][1] - paramK * startWindowWidth;
    var coordY = paramK * windowWidth + paramC;

    paramK = (sign_startCoords[i][2] - sign_endCoords[i][2]) / (startWindowWidth - endWindowWidth);
    paramC = sign_startCoords[i][2] - paramK * startWindowWidth;
    var degS = paramK * windowWidth + paramC;

    paramK = (sign_startCoords[i][3] - sign_endCoords[i][3]) / (startWindowWidth - endWindowWidth);
    paramC = sign_startCoords[i][3] - paramK * startWindowWidth;
    var opacityE = paramK * windowWidth + paramC;

    $(act__classString).css({
      /*'transform': 'translate(' + coordX + 'px,' + coordY + 'px)'*/
      'transform': 'matrix(1, ' + degS + ', ' + -degS + ', 1, ' + coordX + ',' + coordY + ')',
      'opacity': opacityE
    });

  }
  //console.log(startWindowWidth);
  //console.log(endWindowWidth);
}

function setCoordsForSigns() { // управление символами в персональном и ценовом разделах 
  var i = 0;
  var desktopWidth = 1920 - 13;
  var tabletWidth = 1024 - 13; // 1024
  var telWidth = 320;
  var redSigns_wideWindow = [ // макс=5! начальная позиция для красных для 1920 (координата x, координата y, поворот, прозрачность)
    [240, 295, 0, 1],
    [370, 595, 0, 1],
    [118, 67, 0, 1],
    [777, 93, 0, 1],
    [955, 472, 0.5, 1],
  ];
  var redSigns_middleWindow = [ // макс=5! начальная позиция для красных для 1024
    [40, 535, 0, 1],
    [345, 485, 0, 1],
    [60, 57, -0.2, 1],
    [870, 50, 0, 1],
    [410, 142, 0.5, 1],
  ];
  var redSigns_narrowWindow = [ // макс=5! начальная позиция для красных для 320
    [35, 135, 0, 1],
    [185, 5, 0, 1],
    [38, 55, 0, 1],
    [130, 45, 0, 0],
    [260, 35, 0, 1],
  ];
  var whiteSigns_wideWindow = [ // макс=5! начальная позиция для белых для 1920
    [115, -20, 0, 1],
    [1564, -212, 0, 1],
    [10, -217, 0, 1],
    [1330, 17, 0.15, 1],
    [1652, -20, -0.25, 1],
  ];
  var whiteSigns_middleWindow = [ // макс=5! начальная позиция для белых для 1024
    [640, -65, 0, 0],
    [828, -70, 0, 1],
    [95, -340, -0.1, 1],
    [460, -58, 0, 1],
    [548, -172, 0, 0],
  ];
  var whiteSigns_narrowWindow = [ // макс=5! начальная позиция для белых для 320
    [140, -65, 0, 0],
    [178, -20, 0, 0],
    [95, -340, -0.1, 0],
    [60, -58, 0, 0],
    [248, -172, 0, 0],
  ];

  if (windowWidth > 1920) {
    moveSign('.red-sign', desktopWidth, redSigns_wideWindow, tabletWidth, redSigns_middleWindow); // двигаю все 5 красных символов в персональном разделе
    moveSign('.white-sign', desktopWidth, whiteSigns_wideWindow, tabletWidth, whiteSigns_middleWindow); // двигаю все 5 белых символов в ценовом разделе

  } else if (windowWidth <= 1920 && windowWidth > 1170) {
    moveSign('.red-sign', desktopWidth, redSigns_wideWindow, tabletWidth, redSigns_middleWindow); // двигаю все 5 красных символов в персональном разделе
    moveSign('.white-sign', desktopWidth, whiteSigns_wideWindow, tabletWidth, whiteSigns_middleWindow); // двигаю все 5 белых символов в ценовом разделе

  } else if (windowWidth <= 1170 && windowWidth > 1005) { // 1024px
    moveSign('.red-sign', desktopWidth, redSigns_wideWindow, tabletWidth, redSigns_middleWindow); // двигаю все 5 красных символов в персональном разделе
    moveSign('.white-sign', desktopWidth, whiteSigns_wideWindow, tabletWidth, whiteSigns_middleWindow); // двигаю все 5 белых символов в ценовом разделе

  } else {
    moveSign('.red-sign', desktopWidth, redSigns_wideWindow, telWidth, redSigns_narrowWindow); // двигаю все 5 красных символов в персональном разделе
    moveSign('.white-sign', desktopWidth, whiteSigns_wideWindow, telWidth, whiteSigns_narrowWindow); // двигаю все 5 белых символов в ценовом разделе
  }

  //console.log(windowWidth);
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
  setCoordsForSigns();
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
  setCoordsForSigns();
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
