var windowWidth;
var numPic = 3;
windowWidth = $(window).width();
if (windowWidth < 1250 && windowWidth > 981) {
    numPic = 2;
} else if (windowWidth < 981) {
    numPic = 1;
} else {
    numPic = 3;
}

function setLeftEdgePopupMenu() {
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

function setLeftPaddingForNameLine() {
    if (windowWidth > 1250) {
        var paddingLeft = (windowWidth - 1170) / 2;
        $('.personal-item .column-left').css({
            'padding-left': paddingLeft
        });
    } else {
        $('.personal-item .column-left').css({
            'padding-left': '0'
        });
    }
}

function manageSwiperPaginationAndButtons() {
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
        $('.unit-box img').css({
            'width': '320px',
            'height': 'auto',
            'background-size': 'auto'
        });
    }

    setLeftPaddingForNameLine();
    manageSwiperPaginationAndButtons();
    setLeftEdgePopupMenu();
});

$(window).resize(function () {
    windowWidth = $(window).width();
    if (windowWidth >= 1250 && ($('div').is('.popup-box'))) {
        $('div.popup-box').remove(); // убираю popup-меню на большом экране
    }

    manageSwiperPaginationAndButtons();
    setLeftPaddingForNameLine();
    setLeftEdgePopupMenu();
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

/*
$(window).resize(function () {
    windowWidth = $(window).width();
    if ($('div').is('.popup-menu') && windowWidth > 865) {
        $('.popup-menu').css('display', 'none'); // убрать всплывающее меню
        $('.burger').css('background-image', 'url("img/burger-sign.png")'); // .burger в исходное состояние
    }
    if (windowWidth > 865) {
        $('.additional-input').hide(); // убрать дополнительный input
    }
});*/
/*
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
});*/
/*
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
});*/