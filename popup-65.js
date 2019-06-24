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

function managePersonalImg() {  //  управление картинкой с автором
    if (windowWidth <= 980) {
        $('.author-pic div img').attr('src', 'img/man-320.png');
    } else {
        $('.author-pic div img').attr('src', 'img/man.png');
    }

}

function setLeftPaddingForNameLine() { // управление левым блоком в персональном разделе
    if (windowWidth > 1920) {
        var paddingLeft = (1920 - 1170) / 2;
        $('.personal-item .column-left').css({
            'padding-left': paddingLeft
        });
    } else if (windowWidth<=1920 && windowWidth>1170) {
        var paddingLeft = (windowWidth - 1170) / 2;
        $('.personal-item .column-left').css({
            'padding-left': paddingLeft
        });
    } else if (windowWidth<=1170 && windowWidth>1005) { // 1024px
        $('.personal-item .column-left').css({
            'padding-left': '20px'
        });
    } else {
        var paddingLeft = (windowWidth - 580 - 10) / 2;
        $('.personal-item .column-left').css({
            'padding-left': paddingLeft
        });
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
/*
function generateSymbols() {
    $('.pricing-button-position')
}
*/
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
    manageHeaderPhoneLine();
    managePersonalImg();
});

$(window).resize(function () {
    windowWidth = $(window).width();
    if (windowWidth >= 1250 && ($('div').is('.popup-box'))) {
        $('div.popup-box').remove(); // убираю popup-меню на большом экране
    }

    setLeftPaddingForNameLine();
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
