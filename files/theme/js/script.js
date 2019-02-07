$('body').on('click', '.js-send-md-stats', function() {
	ga('send', 'event', {
		eventCategory: 'мобильная',
		eventAction: 'скидка'
	});
	if(yaCounter40428465){
		yaCounter40428465.reachGoal('Mob_discount');
	}
});

$(window).on('load' ,function() {
	checkMobile();
});
$(window).on('resize' ,function() {
	checkMobile();
});

function checkMobile(){
	if($.browser.mobile || $(window).width()< 993){
		$('body').addClass('mobile');
	}else{
		$('body').removeClass('mobile');
	}
}

var mouseleave_count = 0;
$(document).mouseleave(function(){
    var cookie = $.cookie('close');
    if(cookie == null) {  
        $('#see-price').addClass(' _visible');
    }
});

$('body').on('click', '.js-never-show', function() {
    set_cookie();
});

$(document).mouseup(function (e) {
    var container = $("#see-price");
    if(container.hasClass('_visible')){
        if (container.has(e.target).length === 0){
            set_cookie();
        }
    }
});

function set_cookie(){
    var date = new Date();
    date.setTime(date.getTime() + (1000*60*30));

    $.cookie('close', '1', {expires: date}); 
}


//$('body').on('click', '.js-yandex-change-title', function() {
//    yandex = $(this).data('yandex');
//    $('.js-zamer').attr('data-yandex', yandex);
//});
////
(function() {
    var sendYandex = false;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        var formTop = $('.b-how-we-work-wrap').offset().top - windowHeight;
        var formBottom = $('.b-how-we-work-wrap').height() + formTop + windowHeight;

        if (scroll > formTop && scroll < formBottom && !sendYandex) {
            addYandexEvent('scroll');
            sendYandex = true;
        }
    });
})();

function addEventToGoogle(data) {
	ga('send', 'event', {
		eventCategory: data.gcategory,
		eventAction: data.gaction
	});

}


$(document).ready(function() {
   $(".various").fancybox({
      fitToView : true,
      autoSize : true,
      closeClick : false,
       arrows: false,
       scrolling: 'no',
      openEffect : 'none',
      closeEffect : 'none'
   });

});



$(window).load( function() {
	var hash = window.location.hash;
	if(hash && $(hash).length) {

		$(hash).click();
		$('html, body').animate({
			scrollTop: $('.b-hits').offset().top - 69
		});
	}
})

$('body').on('click', '._credit', function() {
	console.log($(this).data('credit'));
	$('#credit').val($(this).data('credit'));
});

$('body').on('click', '.b-halva-fix', function() {
    console.log(1);
    $('.js-halva-owl').parents('.owl-item').addClass('active');
});


(function() {

    var hash = window.location.hash;
    if(!hash) return;

    var element = $(window.location.hash);

    if( element.length ) {
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: element.offset().top - $('.b-fixed-menu').height()
            });
        }, 500);

    } else {

        var ids_str = hash.substring(1);
        if(!ids_str) return;
        var ids = ids_str.split('-');

        var model_selector = '.js-load-doors-models[data-item_id="'+ids[0]+'"]',
            door_selector = '.js-load-door-info[data-item_id="'+ids[1]+'"]';

        setTimeout(function () {
            if( $(model_selector).length )  {

                $(model_selector).click();

                $('html, body').animate({
                    scrollTop: $(model_selector).offset().top - $('.b-fixed-menu').height()
                });

                setTimeout(function () {
                    if( $(door_selector).length )  {
                        $(door_selector).click();
                    }
                }, 500);
            }
        }, 100);
    }

})();


$('body').on('click', '.js-door-hit', function() {
	var door_title = $(this).parents('.b-slider-bestsellers__door-item').find('.b-slider-bestsellers__model').text();
	$('#door_hit_title').val(door_title);
	console.log(door_title);
});
$('body').on('click', '.js-copy-fields', function() {
    var $form = $('#door_send_order');
    addValuetToInput($form, 'door_cat', $('.b-top-slider__item_active .b-top-slider__caption').text());
    addValuetToInput($form, 'door_model', $('#js-product .b-title_2').text());
    addValuetToInput($form, 'door_color', $('input[name="door-color"]:checked').siblings('img').attr('alt'));
    addValuetToInput($form, 'door_glass', $('input[name="glass-color"]:checked + label img').attr('alt'));
    addValuetToInput($form, 'door_size', $('input[name="door-dimensions"]:checked + label').text());

    var add = [];
    if ($('[name="transoms"]').prop('checked')) add.push($('[name="transoms"] + label span + span').text());
    if ($('[name="doorhandle"]').prop('checked')) add.push($('[name="doorhandle"] + label span + span').text());
    if ($('[name="stoppers"]').prop('checked')) add.push($('[name="stoppers"] + label span + span').text());
    add = add.join(', ');

    addValuetToInput($form, 'door_add', add);

});

function addValuetToInput($form, inputName, value) {
    $form.find('[name="' + inputName + '"]').val(value);
}

function show_success_message(response) {
    $('#success p.message').html(response.message);
    // $('#success .title').html(response.title);
    $('a.popup-success').click();
}

function show_error_message(response, $form) {
    var $error_el = $form.find('[name="' + response.field + '"]');
    $error_el.addClass('error').focus();
    if($form.data('no_message')){

    }
    else{
        if (response.message) {
            $form.append('<p class="error">' + response.message + '</p>');
        }
    }
}

function show_alt_error_message(response, $form) {
    $form.find('#alt_error').html(response.message);
}

// время на сайте больше одной минуты
setTimeout(function() {
    addYandexEvent('Time');
}, 60000);
$('body').on('click', '._yandex-click', function() {
	addYandexEvent($(this).data('yandex'));
});
function addYandexEvent(event) {
	 if(yaCounter40428465){
	 	 yaCounter40428465.reachGoal(event);
	 }
}

$('body').on('click', '.catalog_file_submit', function (e){
        $form = $('#f_catalog');
        if(!$form.children('input[name=phone]').val()){
            e.preventDefault();
        }
        $form.find('#alt_error').html('');
   		 $('#f_catalog').ajaxSubmit({
		 	dataType:  'json',
		 	data: { handler: 'Poster', command: 'get_catalog' },
		 	success: function(response) {
		 		if(!response.result) {
		 			show_alt_error_message(response, $form);
		 		} else {
                    show_success_message(response);
		 	        setTimeout(function() {
                    if ($form.data('click')) {
                        $($form.data('click')).click();
                    }
                }, 2000)
		 		}
		 	}
		 });
});

$('body').on('click', '.door_catalog_download', function (e){

        $form = $('#f_door_catalog');
        if(!$('.phone_download').val()){
            e.preventDefault();
        }
        console.log($('.phone_download').val());

        $form.find('#alt_error').html('');
   		 $('#f_door_catalog').ajaxSubmit({
		 	dataType:  'json',
		 	data: { handler: 'Poster', command: 'get_catalog' },
		 	success: function(response) {
		 		if(!response.result) {
		 			show_alt_error_message(response, $form);
		 		} else {
                    show_success_message(response);
		 	        setTimeout(function() {
                    if ($form.data('click')) {
                        $($form.data('click')).click();
                    }
                }, 2000)
		 		}
		 	}
		 });
});

$('body').on('submit', '.poster', function() {
    var $form = $(this);
    var h = $form.data('handler');
    if (!h) h = 'Poster';
    $form.find('input.error, textarea.error').removeClass('error');
    if(!$form.data('get-catalog')){
        $form.find('p.error').remove();
    } else{
        $form.find('#alt_error').html('');
    }

    $form.ajaxSubmit({
        dataType: 'json',
        data: {
            handler: h,
            command: $form.data('command')
        },
        success: function(response) {
            if (!response.result) {
                if($form.data('get-catalog')){
                    show_alt_error_message(response, $form);
                } else{
                    show_error_message(response, $form);
                    }
            } else {
                $form.resetForm();
                show_success_message(response);
                addYandexEvent($form.data('yandex'));
                addEventToGoogle($form.data());
                if($form.data('get-catalog')){
                    window.location.href = 'files/items/1/file_catalog.'+file_catalog;
                }
                setTimeout(function() {
                    if ($form.data('click')) {
                        $($form.data('click')).click();
                    }
                }, 2000)
            }
        }
    });
    return false;
});
