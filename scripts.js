$(document).ready(function() {
    $(".b-works__items").jcarousel({
        scroll: 3
    });

    $(".fancybox").fancybox({
        helpers : {
            title : null
        },
        width: '70%',
        height: '70%'
    });
    $(".fancybox.iframe").fancybox({
        'autoScale'     	: false,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'type'				: 'iframe',
        'height'			: '350px',
        'width'			: '820px',
        'fitToView'			: false,
        'autoSize'			: false
    });

    $('input[name=phone]').mask("+7 (999) 999-9999");


    $('.b-works__link-more').click(function(){
        if($(this).hasClass('active'))
        {
            $(this).removeClass('active');
            $(this).html("Показать еще");
            $(this).parent().find('.b-works__items').animate({
                height : "189px"
            },500);
        }
        else{
            $(this).addClass('active');
            $(this).html("Скрыть");
            $(this).parent().find('.b-works__items').animate({
                height : "390px"
            },500);
        }
    });

    $("#sticky_item").stick_in_parent();
});


function scrollToPos(a){
	var tag = $(a);
	var tagPos = tag.offset().top - 70 + 'px';
	$("html, body").animate({scrollTop: tagPos}, 1500, $.easie(.19, 1, .22, 1));
}
function getCall(selector, goal) {
    var options = {
        beforeSubmit: function() {
            $(selector).validate({
                showErrors: function(errorMap, errorList) {
                    $("input.required", selector).removeClass("error");

                    $(errorList).each(function() {
                        $(this.element, selector).addClass("error");
                    });
                }
            });
            return $(selector).valid();
        },
        success: function() {
            window.location.href = "thankyou.htm"/*tpa=http://kaliningrad.master-ppu.com/thankyou*/;
            /*$.fancybox("<h3 style='padding: 1em 0; text-align: center;color:#41af05;'>Ваша заявка успешно принята</h3>", {
            afterClose : function() {
                $(selector).each(function(){
                    this.reset();
                });
                return;
            }});*/
        }
    };
    $(selector).ajaxForm(options);
    $(selector).submit();
//            yaCounter1.reachGoal(goal);
}

function orderMore(a){
    if($(a).hasClass('active')){
        $(a).removeClass('active');
        $('.'+$(a).attr('id')).fadeOut();
    }
    else{
        $(a).addClass('active');
        $('.'+$(a).attr('id')).fadeIn();
    }
};
