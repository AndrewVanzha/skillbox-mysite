var windowWidth;
var numPic = 3;
windowWidth = $(window).width();
if (windowWidth<1250 && windowWidth>320) {
  numPic = 2;
}

$(document).ready(function () {
  windowWidth = $(window).width();
  //console.log(windowWidth);
  if (windowWidth > 1250) {
    if (!($('div.swiper-pagination').is('.hide-element'))) {
      $('div.swiper-pagination').addClass('hide-element');
    }
    $('.swiper-button-next').removeClass('hide-element');
    $('.swiper-button-prev').removeClass('hide-element');
  } else { // windowWidth <= 1250
    $('div.swiper-pagination').removeClass('hide-element');
    if (!($('div.swiper-button-next').is('.hide-element'))) {
      $('.swiper-button-next').addClass('hide-element');
    }
    if (!($('div.swiper-button-prev').is('.hide-element'))) {
      $('.swiper-button-prev').addClass('hide-element');
    }
  }
});

$(window).resize(function () {
  windowWidth = $(window).width();
  //console.log(windowWidth);
  if (windowWidth >= 1250 && ($('div').is('.popup-box'))) {
    $('div.popup-box').remove(); // убираю popup-меню на большом экране
  }
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