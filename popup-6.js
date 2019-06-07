var windowWidth;
$(window).resize(function () {
  windowWidth = $(window).width();
  //console.log(windowWidth);
  if (windowWidth >= 1250 && ($('div').is('.popup-box'))) {
    $('div.popup-box').remove(); // убираю popup-меню на большом экране
  }
  if (windowWidth < 1250 && (!$('div').is('.slider-marker-bar'))) {
    console.log(windowWidth);
    $('.examples-block').append( // рисую полосу маркеров слайдов
      '<div class="slider-marker-bar">' +
      '<div class="slider-marker marker1"></div>' +
      '<div class="slider-marker marker2"></div>' +
      '<div class="slider-marker marker3"></div>' +
      '</div>');
    $('.marker1').css({ // генерирую стили для маркеров слайдов
      'border': '1px solid rgb(255, 78, 46)',
      'border-radius': '50%',
      'background-color': 'rgb(255, 78, 46)'
    });
    $('.marker2').css({ // генерирую стили для маркеров слайдов
      'border': '1px solid rgb(137, 147, 173)',
      'border-radius': '50%',
      'background-color': 'rgb(137, 147, 173)'
    });
    $('.marker3').css({ // генерирую стили для маркеров слайдов
      'border': '1px solid rgb(137, 147, 173)',
      'border-radius': '50%',
      'background-color': 'rgb(137, 147, 173)'
    });
  }
  if (windowWidth >= 1250 && ($('div').is('.slider-marker-bar'))) {
    $('div.slider-marker-bar').remove(); // убираю полосу маркеров слайдов
  }
});

$(function () {
  $('.slider-marker-bar').click(function () {
    console.log('marker 1');
/*    $('.marker1').css({ // генерирую стили для маркеров слайдов
      'border': '1px solid rgb(255, 78, 46)',
      'border-radius': '50%',
      'background-color': 'rgb(255, 78, 46)'
    });
    $('.marker2').css({ // генерирую стили для маркеров слайдов
      'border': '1px solid rgb(137, 147, 173)',
      'border-radius': '50%',
      'background-color': 'rgb(137, 147, 173)'
    });
    $('.marker3').css({ // генерирую стили для маркеров слайдов
      'border': '1px solid rgb(137, 147, 173)',
      'border-radius': '50%',
      'background-color': 'rgb(137, 147, 173)'
    });
    $('.examples-slider a:nth-of-type(1)').css({'background-image': 'url("img/сайт-1.png")'});
    $('.examples-slider a:nth-of-type(2)').css({'background-image': 'url("img/сайт-2.png")'});
    $('.examples-slider a:nth-of-type(3)').css({'display': 'none'});*/
  });
});

$(function () {
  $('.left-header-block').click(function () {
    windowWidth = $(window).width();
    console.log('burger');
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


$(window).resize(function () {
  windowWidth = $(window).width();
  if ($('div').is('.popup-menu') && windowWidth > 865) {
    $('.popup-menu').css('display', 'none'); // убрать всплывающее меню
    //$('.popup-menu').hide();
    $('.burge').css('background-image', 'url("img/burger-sign.png")'); // .burger в исходное состояние
  }
  if (windowWidth > 865) {
    $('.additional-input').hide(); // убрать дополнительный input
  }
  /*  if ($('div').is('.popup-menu') && windowWidth<865) {
    var shiftString = String(Math.round(windowWidth*.25)) + "px";
    $('.popup-menu').css('left', shiftString);
    console.log(shiftString);
  }*/
  /*  if ($('div').is('.popup-menu') && windowWidth<515) {
      var shiftString = '90px';
      $('.popup-menu').css('left', shiftString);
    }
    else {
      $('.popup-menu').css('left', '200px');
    }*/
});

$(function () {
  $('.burger').click(function () {
    if ($('.popup-menu').is(':visible')) {
      $('.burger').css('background-image', 'url("img/burger-sign.png")');
    } else {
      $('.burger').css('background-image', 'url("img/cruz-sign.png")');
      $('.additional-input').hide(); // убираю доп.input
    }
    $('.popup-menu').toggle(400);
  });
});

$(function () {
  $('a.header-logo-small').click(function () { // клик на псевдоэлемент
    if (!$('.popup-menu').is(':visible')) {
      $('.additional-input').toggle(300);
    }
    //console.log('press');
    if ($('.additional-input').is(':visible')) {
      $('.additional-input').css('display', 'block');
    }
  });
});