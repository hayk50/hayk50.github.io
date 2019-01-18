$(document).ready(function() {

		$(".your-phone input, .phone, #phone").mask("+7 (999) 999-99-99");
	$("input.your-phone").mask("+7 (999) 999-99-99");	

	$('.page-header .action-menu button').click(function() {
		$('.page-header .wrap-menu').slideToggle();
	});

	$('.popup-open').click(function(){
		$('.height_potolok').val($('#input-size2').val());
		$('.width_potolok').val($('#input-size1').val());
		$('.type_potolok').val($('.select.active select').val());
		
	});

	$('.top-slider').owlCarousel({
		navigation : false,
		pagination : true,
		autoPlay: true, 
		singleItem: true,
	    items:1,
	    autoHeight: false,
		mouseDrag: false,
		touchDrag: false
	});

	$('a[href^="#"]').click(function(){
	    
		var el = $(this).attr('href');
		$('body,html').animate({scrollTop: $(el).offset().top}, 1000);
	});
	$('.material_potolok').val('Эконом');
	$('.wrap-radio input').click(function(){
		 var val=$(this).val();
		 var id=$(this).attr('id');
		 $('.select').css('display','none');
		 $('.select').removeClass('active');
		 $('.type'+val).css('display','block');
		 $('.type'+val).addClass('active');
		 $('.material_potolok').val($(this).parent().find('label').text());

	});

 	$('.popup-open').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});



	$('.calculator #input-size1').on('input', function() {
		var val = $(this).val();
		if (val < 0) {
			$(this).val(1);
			val = 1;
		}
		if (val > 20) {
			$(this).val(20);
			val = 20;
		}
		$('.calculator #range1').val(val);
		calculator();
	});
	$('.calculator #input-size2').on('input', function() {
		var val = $(this).val();
		if (val < 0) {
			$(this).val(1);
			val = 1;
		}
		if (val > 20) {
			$(this).val(20);
			val = 20;
		}
		$('.calculator #range2').val(val);
		calculator();
	});
	$('.calculator #range1').on('input', function() {
		var val = $(this).val();
		$('.calculator #input-size1').val(val);
		calculator();
	});
	$('.calculator #range2').on('input', function() {
		var val = $(this).val();
		$('.calculator #input-size2').val(val);
		calculator();
	});



	$(window).load(function(){verticalAlignImg('.list-advantages .item-advantages .wrap-img');}).resize(function(){verticalAlignImg('.list-advantages .item-advantages .wrap-img');});
	$(window).load(function(){myEqual('.list-advantages .item-advantages .wrap-title');}).resize(function(){myEqual('.list-advantages .item-advantages .wrap-title');});
	$(window).load(function(){myEqual('.list-advantages .item-advantages .wrap-text');}).resize(function(){myEqual('.list-advantages .item-advantages .wrap-text');});


	
});



function calculator() {
	var size1 = $('.calculator #input-size1').val();
	var size2 = $('.calculator #input-size2').val();
	if (!!size1) {
		console.log('size1');
	}
	else {
		size1 = 0;
	}
	if (!!size2) {
		console.log('size2');
	}
	else {
		size2 = 0;
	}
	$('.calculator #width-square span').text(size1);
	$('.calculator #length-square span').text(size2);
	var total = size1 * size2;
	$('.calculator #sum-input').val(total);
}



function myEqual(element) {
	$(element).css({'height':'auto'});
	var blocks = $(element);
	if (blocks.length > 0) {
		var max_height = 0;
		blocks.each(function () {
			var height = $(this).innerHeight();
			if (max_height < height) max_height = height;
		});
		max_height = max_height+'px';
		$(element).css({'height':max_height});
	}
}



function rectangle(element) {
	$(element).css({'height':'auto'});
	var blocks = $(element);
    var max_height = 0;
	if (blocks.length > 0) {
    	blocks.each(function () {
		var height = $(this).innerHeight();
		if (max_height < height) max_height = height;
    });
    max_height = max_height+'px';
    $(element).css({'height':max_height});
  }
}



function wrapMainMenu() {
	$('#wrap-main-menu').css({'min-height':'auto'});
	var height = $('#wrap-main-menu .main-menu').innerHeight();
	$('#wrap-main-menu').css({'min-height':height});
}



function verticalAlignImg(element) {
	$(element).css({'height':"auto", 'line-height':"auto"});
	var wrap_blocks = $(element);
	var blocks = $(element + ' img');
	if (blocks.length > 0) {
		var max_height = 0;
		var max_img_height = 0;

		wrap_blocks.each(function () {
			var height = $(this).outerHeight();
			console.log(height);
			if (max_height < height) max_height = height;
		});
		max_height = max_height+'px';

		blocks.each(function () {
			var height = $(this).innerHeight();
			if (max_img_height < height) max_img_height = height;
		});
		max_img_height = max_img_height+'px';

		$(element).css({'height':max_height, 'line-height':max_img_height});
	}
}