$(document).ready(function () {

    var targetGoalMark = "";

    /*
     * Изменение цвета меню
     */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('nav').addClass('active');
        } else {
            $('nav').removeClass('active');
        }
    });

    /*
     * Маска для телефона у форм
     */
    $('input[data-field="phone"]').mask("+7 (999) 999-99-99");

    /*
     * Блок "как мы работаем", переключение вкладок
     */
    $('#block_6 .button').click(function () {
        if (!$(this).hasClass('active')) {
            $('#block_6 .button').removeClass('active');
            $(this).toggleClass('active');

            $('#block_6 .slide').toggleClass('active');
        }
    });

    /*
     * Переключение по пункту меню на нужный блок
     */
    $('nav ul span').click(function () {
        var block_id = $(this).data('block');
        var top = $('#block_' + block_id).offset().top - 76;

        $('html, body').animate({scrollTop: top}, 500);
    });

    /*
     * Блок "диагностика машины", всплывашка
     */
    var block_5 = $('#block_5');
    block_5.find('.items .item .align').click(function () {
        var id = $(this).data('id');
        block_5.find('.popup[data-id="' + id + '"]').css('display', 'flex');
    });

    block_5.find('.popup .close').click(function () {
        block_5.find('.popup').css('display', 'none');
    });

    /*
     * Блок "дистанционная проверка", переключение вкладок
     */
    var block_9 = $('#block_9');
    block_9.find('.buttons').not('.active').on('click', '.item', function () {
        // подсветка пункта
        block_9.find('.buttons .item').removeClass('active');
        $(this).toggleClass('active');

        // активация вкладки
        block_9.find('.slides .item').removeClass('active');
        block_9.find('.slides .item').eq($(this).index()).addClass('active');
    });

    /*
     * Блок "гарантии", всплывашка
     */
    var block_10 = $('#block_10');
    block_10.find('.items .button').click(function () {
        var id = $(this).data('id');
        block_10.find('.popup[data-id="' + id + '"]').css('display', 'flex');
    });

    block_10.find('.popup .close').click(function () {
        block_10.find('.popup').css('display', 'none');
    });

    /*
     * Блок "партнеры", слайдер
     */
    var block_12 = $('#block_12');
    block_12.find('.slider')
        .jcarousel({
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 2000,
            target: '+=1',
            autostart: true
        });

    /*
     * Форма 1 (сверху в главном блоке и снизу на карте)
     */
    $('.form_1 .button').click(function () {

        var _this = $(this);
        var form_1 = _this.parent();

        form_1.find('input').removeClass('error');
        form_1.find('.text_error').css('visibility', 'hidden');

        var count_error = 0;
        var name = form_1.find('input[data-field="name"]');
        var phone = form_1.find('input[data-field="phone"]');
        var targetGoalMark = this.getAttribute("data-target");

        if (!targetGoalMark) {
            targetGoalMark = "top_form";
        }

        if (name.val().length < 3) {
            name.addClass('error');
            count_error++;
        }
        if (phone.val().length < 2) {
            phone.addClass('error');
            count_error++;
        }
        if (count_error > 0) {
            form_1.find('.text_error').css('visibility', 'visible');
            return false;
        }

        yaCounter44727709.reachGoal(targetGoalMark);

        $.ajax({
            url: 'send.php',
            timeout: 10000,
            type: 'POST',
            cache: false,
            data: {
                'name': name.val(),
                'phone': phone.val(),
                'button': 'Оставить заявку на подбор'
            },
            success: function () {
                $('.form_1_result').css('display', 'flex');
            },
            error: function () {
                alert('Произошла ошибка! Пожалуйста, перезвоните нам по телефону, указанному в верхней части сайта.');
            },
            complete: function () {
                name.val('');
                phone.val('');
            }
        });
    });

    /*
     * Форма 1 результат (сверху в главном блоке и снизу на карте)
     */
    $('.form_1_result .close').click(function () {
        $('.form_1_result').css('display', 'none');
    });

    /*
     * Форма закрытие (всплывашка)
     */
    $('.form_2 .close').click(function () {
        $('.form_2').css('display', 'none');
        $('.form_2').find('.description').css('display', 'none');
    });

    /*
     * Форма отправка (всплывашка)
     */
    $('.form_2 .button').click(function () {
        var form_2 = $(this).closest('.form_2');

        form_2.find('input').removeClass('error');
        form_2.find('.text_error').css('display', 'none');

        var count_error = 0;
        var name = form_2.find('input[data-field="name"]');
        var phone = form_2.find('input[data-field="phone"]');
        var button = form_2.find('.title').text();

        if (name.val().length < 3) {
            name.addClass('error');
            count_error++;
        }
        if (phone.val().length < 2) {
            phone.addClass('error');
            count_error++;
        }
        if (count_error > 0) {
            form_2.find('.text_error').css('display', 'block');
            return false;
        }

        yaCounter44727709.reachGoal(targetGoalMark);

        $.ajax({
            url: 'send.php',
            timeout: 10000,
            type: 'POST',
            cache: false,
            data: {
                'name': name.val(),
                'phone': phone.val(),
                'button': button
            },
            success: function () {
                $('.form_1_result').css('display', 'flex');
            },
            error: function () {
                alert('Произошла ошибка! Пожалуйста, перезвоните нам по телефону, указанному в верхней части сайта.');
            },
            complete: function () {
                form_2.css('display', 'none');
                name.val('');
                phone.val('');
            }
        });
    });

    /*
     * Форма открытие (всплывашка)
     */
    $('.form_1_show').click(function () {
        var _this = $(this);
        var title = _this.data('title');
        var id = _this.data('id');

        $('.form_2').find('.title').html(title);
        $('.form_2').find('.description[data-id="' + id + '"]').css('display', 'block');
        $('.form_2').css('display', 'flex');
        var targetGoalMark = this.getAttribute("data-target");

        if (!targetGoalMark) {
            targetGoalMark = "popup_form";
        }
    });

    $(".video_button").click(function () {
        $('.overlay').fadeIn();
        $('.order-popup').fadeIn();
    });

    $('.overlay').click(function(){
        $('.overlay').fadeOut();
        $('.order-popup').fadeOut();
    });

    /*
     * Загрузка карты (внизу сайта)
     */
    var map;
    var address = 'ул. Героев Хасана, 92, офис 212';

    DG.then(function () {
        map = DG.map('map', {
            center: [57.954934, 56.264334],
            zoom: 16,
            touchZoom: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            fullscreenControl: false,
            zoomControl: false
        });

        DG.marker([57.954934, 56.264334]).addTo(map).bindPopup(address);
    });
});

window.onload = function () {
    var reviewSlider = document.querySelector(".review_slider");
    reviewSlider.innerHTML = document.querySelector(".reviews_template").innerHTML;

    var reviewsPopupBtn = document.querySelector(".open_reviews_popup");
    var reviewsPopup = document.querySelector(".popup_reviews");
    var reviewsPopupCloseButton = document.querySelector(".popup_reviews .close");
    var feedbackVk = document.getElementById("feedback_vk");

    reviewsPopupBtn.addEventListener("click", function (evt) {
        reviewsPopup.style.display = "flex";

        document.body.style.overflow = "hidden";
    });

    /*var observer = new MutationObserver(changeLink);

    observer.observe(feedbackVk, { attributes: true, childList: true, subtree: true });*/

    feedbackVk.addEventListener('DOMSubtreeModified', function () {
        console.log("rendered");
    }, false);



    reviewsPopupCloseButton.addEventListener("click", function (evt) {
        reviewsPopup.style.display = "none";

        document.body.style.overflow = "auto";
    });

    /*
 * Блок "отзывы", слайдер
 */
    var block_11 = $('#block_11');
    block_11.find('.slider').jcarousel();

    block_11.find('.control-prev')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    block_11.find('.control-next')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });
};