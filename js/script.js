

function selectItem(){var e=$.grep(items,function(e){return type==="156"&&e.d==dG&&e.c==cG||type==="155"&&e.d==dG});o=e[0].o;$("#name").html(e[0].name);$("#razm, #ves").val("")}(function(e){e.fn.decimalMask=function(t){function f(t){var n=e(t.currentTarget);if(n.val()!==t.data.ov){if(!u.test(n.val())){var r=n.val().match(o);n.val(r===null?"":r[0])}ov=t.data.ov=n.val()}}if(!t||!t.match){throw"Provide some mask to decimalMask plugin please."}var n,r=function(){n=t.match(/[0-9]{1,}/);return n!==null?n[0].length:0}(),i=function(){n=t.match(/[0-9]{1,}$/);return n!==null?n[0].length:0}(),s=function(){n=t.match(/,|\./);return n!==null?n[0]:null}(),o=null,u=null,a=/.*MSIE 8.*|.*MSIE 7.*|.*MSIE 6.*|.*MSIE 5.*/.test(navigator.userAgent)?"keyup propertychange paste":"input paste";if(s===null){u=new RegExp("^[0-9]{0,"+r+"}$");o=new RegExp("[0-9]{0,"+r+"}","g")}else{u=new RegExp("^[0-9]{0,"+r+"}"+(s==="."?"\\.":",")+"[0-9]{0,"+i+"}$|^[0-9]{0,"+r+"}"+(s==="."?"\\.":",")+"$|^[0-9]{0,"+r+"}$");o=new RegExp("[0-9]{0,"+r+"}"+(s==="."?"\\.":",")+"[0-9]{0,"+i+"}|[0-9]{0,"+r+"}"+(s==="."?"\\.":",")+"|[0-9]{0,"+r+"}","g")}this.attr("maxlength",r+i+(s===null?0:1)).val(this.val()?this.val().replace(".",s):this.val()).on(a,{ov:this.val()},f)}})(jQuery);var data=[{id:14907,t:155,name:" А1 8",o:2.53164557,d:8,c:""},{id:14908,t:155,name:" А1 10",o:1.620745543,d:10,c:""},{id:14909,t:155,name:" А1 12",o:1.126126126,d:12,c:""},{id:14910,t:155,name:" А1 14",o:.826446281,d:14,c:""},{id:14911,t:155,name:" А1 16",o:.632911392,d:16,c:""},{id:14912,t:155,name:" А1 18",o:.5,d:18,c:""},{id:14913,t:155,name:" А1 20",o:.4048583,d:20,c:""},{id:14914,t:155,name:" А1 22",o:.33557047,d:22,c:""},{id:14915,t:155,name:" А1 25",o:.25974026,d:25,c:""},{id:14916,t:156,name:" А3 в500с 6",o:4.504504505,d:6,c:"В500С"},{id:14917,t:156,name:" А3 25г2с 6",o:4.504504505,d:6,c:"25Г2С"},{id:14918,t:156,name:" А3 35гс 6",o:4.504504505,d:6,c:"35ГС"},{id:14919,t:156,name:" А3 а500с 8",o:2.53164557,d:8,c:"А500С"},{id:14920,t:156,name:" А3 а400с 8",o:2.53164557,d:8,c:"А400С"},{id:14921,t:156,name:" А3 в500с 8",o:2.53164557,d:8,c:"В500С"},{id:14922,t:156,name:" А3 25г2с 8",o:2.53164557,d:8,c:"25Г2С"},{id:14923,t:156,name:" А3 35гс 8",o:2.53164557,d:8,c:"35ГС"},{id:14924,t:156,name:" А3 а500с 10",o:1.620745543,d:10,c:"А500С"},{id:14925,t:156,name:" А3 в500с 10",o:1.620745543,d:10,c:"В500С"},{id:14926,t:156,name:" А3 25г2с 10",o:1.620745543,d:10,c:"25Г2С"},{id:14927,t:156,name:" А3 35гс 10",o:1.620745543,d:10,c:"35ГС"},{id:14928,t:156,name:" А3 35гс 12",o:1.126126126,d:12,c:"35ГС"},{id:14929,t:156,name:" А3 25г2с 12",o:1.126126126,d:12,c:"25Г2С"},{id:14930,t:156,name:" А3 в500с 12",o:1.126126126,d:12,c:"В500С"},{id:14931,t:156,name:" А3 а500с 12",o:1.126126126,d:12,c:"А500С"},{id:14932,t:156,name:" А3 а500с 14",o:.826446281,d:14,c:"А500С"},{id:14933,t:156,name:" А3 25г2с 14",o:.826446281,d:14,c:"25Г2С"},{id:14934,t:156,name:" А3 35гс 14",o:.826446281,d:14,c:"35ГС"},{id:14935,t:156,name:" А3 35гс 16",o:.632911392,d:16,c:"35ГС"},{id:14936,t:156,name:" А3 25г2с 16",o:.632911392,d:16,c:"25Г2С"},{id:14937,t:156,name:" А3 а500сп 16",o:.632911392,d:16,c:"А500СП"},{id:14938,t:156,name:" А3 а500с 16",o:.632911392,d:16,c:"А500С"},{id:14939,t:156,name:" А3 а500с 18",o:.5,d:18,c:"А500С"},{id:14940,t:156,name:" А3 25г2с 18",o:.5,d:18,c:"25Г2С"},{id:14941,t:156,name:" А3 35гс 18",o:.5,d:18,c:"35ГС"},{id:14942,t:156,name:" А3 35гс 20",o:.4048583,d:20,c:"35ГС"},{id:14943,t:156,name:" А3 25г2с 20",o:.4048583,d:20,c:"25Г2С"},{id:14944,t:156,name:" А3 а500с 20",o:.4048583,d:20,c:"А500С"},{id:14945,t:156,name:" А3 а500с 22",o:.33557047,d:22,c:"А500С"},{id:14946,t:156,name:" А3 25г2с 22",o:.33557047,d:22,c:"25Г2С"},{id:14947,t:156,name:" А3 35гс 22",o:.33557047,d:22,c:"35ГС"},{id:14948,t:156,name:" А3 35гс 25",o:.25974026,d:25,c:"35ГС"},{id:14949,t:156,name:" А3 25г2с 25",o:.25974026,d:25,c:"25Г2С"},{id:14950,t:156,name:" А3 а500с 25",o:.25974026,d:25,c:"А500С"},{id:14951,t:156,name:" А3 а500с 28",o:.207039337,d:28,c:"А500С"},{id:14952,t:156,name:" А3 25г2с 28",o:.207039337,d:28,c:"25Г2С"},{id:14953,t:156,name:" А3 35гс 28",o:.207039337,d:28,c:"35ГС"},{id:14954,t:156,name:" А3 35гс 32",o:.158478605,d:32,c:"35ГС"},{id:14955,t:156,name:" А3 25г2с 32",o:.158478605,d:32,c:"25Г2С"},{id:14956,t:156,name:" А3 а500с 32",o:.158478605,d:32,c:"А500С"},{id:14957,t:156,name:" А3 а500с 40",o:.101317123,d:40,c:"А500С"},{id:14958,t:156,name:" А3 35гс 40",o:.101317123,d:40,c:"35ГС"}];var o=0,dG=0,cG=0,type=0,items;$(function(){$("#type").change(function(){type=$("#type").val();if(type==="155"){$("#cDIV").hide();$('#c').parent().hide()}else{$("#cDIV").show();$('#c').parent().show()}var e=[],t=[];items=$.grep(data,function(e){return e.t==type});$("#c").html("");$("#d").html("");for(k in data){var n=data[k];if(n.t==type&&$.inArray(n.d,e)===-1){$("#d").append('<option value="'+n.d+'">'+n.d+"</option>");e.push(n.d)}if(type==="156"&&n.t==type&&$.inArray(n.c,t)===-1){$("#c").append('<option value="'+n.c+'">'+n.c+"</option>");t.push(n.c)}}$("#d").change()});$("#d").change(function(){dG=parseInt($("#d").val());var e=[];$.grep(items,function(t){if(t.d==dG){e.push(t.c)}});$("#c option").addClass("clear");for(k in items){var t=items[k];if(t.d==dG){$('#c option[value="'+t.c+'"]').removeClass("clear")}}if($.inArray(cG,e)===-1){cG=$("#c option:not(.clear):first").val();$("#c option:not(.clear):first").prop("selected",true)}selectItem()});$("#c").change(function(){cG=$("#c").val();var e=[];$.grep(items,function(t){if(t.c==cG){e.push(t.d)}});$("#d option").addClass("clear");for(k in items){var t=items[k];if(t.c==cG){$('#d option[value="'+t.d+'"]').removeClass("clear")}}if($.inArray(dG,e)===-1){dG=$("#d option:not(.clear):first").val();$("#d option:not(.clear):first").prop("selected",true)}selectItem()});$("#type").change();$("#razm, #ves").decimalMask("999999.9");$("#razm, #ves").keydown(function(){this.old=$(this).val()});$("#razm").keyup(function(e){e=e||window.event;if(e.keyCode==9)return true;if(this.old==$(this).val())return false;$("#ves").val(Math.ceil($("#razm").val()/o));$("#ves")[0].old=$("#ves").val()});$("#ves").keyup(function(e){e=e||window.event;if(e.keyCode==9)return true;if(this.old==$(this).val())return false;$("#razm").val(Math.floor($("#ves").val()*o*10)/10);$("#razm")[0].old=$("#razm").val()})})


$(function(){
	if ($("#map").length && $("#map").data('coord')) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}
	       
	var nowTime = new Date();
	//console.log(nowTime);
	var weekday = nowTime.getDay();
	weekday = weekday==0?7:weekday;		
	day_offset = 60*60*24 - (((nowTime.valueOf()/1000) % (60*60*24))+(3600*4));
	var diffSecs = Math.floor(((7-weekday)*1000*60*60*24)+(day_offset*1000));
	
	dif(Math.floor(diffSecs / 1000));
	
	
	
	
	ib.init();
	// �?нициализирем все формы 
	//ib.validation.initAllForms();
	$('.phone').mask('+7 (999) 999-99-99')
	//
	$('form').submit(function(){
		return false;
	})
	
	
	ib.vwo_wrapper.on('click','.open-modal',function(){
		var modal = $(this).data('modal');
		ib.showModal(modal);	
		return false;
	})
	ib.vwo_wrapper.on('click','#overlay ,.modals .close, .modals .close-text',function(){		
		ib.hideModal();	
		return false;
	})
	// Скользящие ссылки
	
	ib.vwo_wrapper.on('click','.scroll-link', function(){
		var id = $(this).attr('href'),
			offset = $(this).data('offset'),
			dugration = $(this).data('dugration');
		ib.scroll({
			top:id,
			offset : (offset)?offset:0,
			dugration : (dugration)?dugration:700,
		});	
		return false;
	});
	
	ib.vwo_wrapper.on('click','.slide-title',function(){
		var block = $(this).attr('href'),
			that = $(this),
			dugr = $(this).data('dugration');			
		$(block).slideToggle(dugr, function(){
			//console.log($('span',that).text())
			if ($('span',that).text() == 'Посмотреть больше примеров'){
				$('span',that).text('Скрыть примеры');
			}else{
				$('span',that).text('Посмотреть больше примеров');
			}
		});
		return false;
	});
	
})


ib = {
	
	overlay: null,
	modal_dugration : 500,
	vwo_wrapper: null,
	
	errors: {
		
		required: 'Поле не должно быть пустым',
		email: 'Не правильно заполнено поле email'
	},
	init:function(){
		this.vwo_wrapper = $('#root_container');
		this.overlay = $('#overlay');
		this.validation.initAllForms();
	},

	/*
	*	на вход склас/id либо готовый обьект
	*/
	showModal: function(modal){
		if (typeof(modal) != 'object'){
			var modal = $(modal);
		}	
		modal.fadeIn(this.modal_dugration);			
		this.overlay.fadeIn(this.modal_dugration);		
	},	
	hideModal: function(){
		$('.modals > div').fadeOut(this.modal_dugration);			
		this.overlay.fadeOut(this.modal_dugration);		
	},	
	/*
	* На вход число или обьект 
	* и смещение 
	*/
	scroll:function(options){		
		options = $.extend({
	      	top:0, 
	     	offset:0,
	     	dugration:700
	    }, options);
	    if (typeof(options.top) == 'object'){
	    	options.top = options.top.offset().top;
	    }else if(typeof(options.top) == 'string'){	    	
	    	options.top = $(options.top).offset().top;	    	
	    }	  
		$("html:not(:animated),body:not(:animated)").animate({scrollTop:options.top+options.offset}, options.dugration);
	},
	
	validation:{
		
		initAllForms:function(){
			var that = this;
			$('form').each(function(){		
				var form = $(this); 
				$(this).submit(function(){
					re = that.validateForm($(this));
					// выводим ошибки 
					that.printError($(this),re.errors);
					//console.log(re)
					if (re.status == true){
						$(this).ajaxSubmit(function (h) {
							if (form.hasClass('form-login')) {document.location.reload(); return;}
							if ($('body').data('metrika') && window['yaCounter'+$('body').data('metrika')]) window['yaCounter'+$('body').data('metrika')].reachGoal('request');
							if (window._gaq) _gaq.push(['_trackEvent','Form','Sent']);
							$('.modals > div').fadeOut(this.modal_dugration);
							ib.showModal('#success');
						});
					}					
				})
			})
		},
		validateForm: function(form){									
			var error = {status:true,errors:[]}, // типо все ок, чтобы не перепутать				
				that = this;
			form.find('input[type="text"]').each(function(i){
				var $this = $(this),
					type = $this.data('valid'),
					name = $this.attr('name');
				// Если поле обязательное 	
				if ($this.hasClass('required')){
					// ищем обработчик 
					if (typeof(type) != 'undefined'){
						type_status = that[type]($this);	
									
					}else{
					// проверяем на заполненость
						if ($this.hasClass('required')){
							type_status = that.required($this);
							
						}
					}
					if (!type_status.status){
						error.status = false;						
						error.errors[i] = type_status.error;
						
					};
				}else{
					// Если не обязательное 
					// и не пустое 
					
					if ($(this).val() || $.trim($(this).val()) !== ''){
						if (typeof(type) != 'undefined'){
						res = that[type]($this);l(res);
						if (res.status == false){
							error.status = false;
							error.errors[i] = res.error;						
						};
					}}else{
						$(this).removeClass('error')
					}		
				}	
				
				
 			})
 			return error;
		},
		/*
		* Проверка на email
		*/
		email:function(input){
			if(!/^[\w0-9.]+@[\w0-9]+(\.[\w0-9]+)+$/.test(input.val())){
				input.addClass('error').removeClass('success');
				return {status:false,error:ib.errors.email}
			}else{
				input.removeClass('error').addClass('success');
				return {status:true,error:''}
			}		
			
		},
		/*
		* Проверка на заполненость 
		*
		*/
		required:function(input){
			if (!input.val() || $.trim(input.val()) == ''){
				input.addClass('error').removeClass('success');		
				
				return {status:false,error:ib.errors.required}
			}else{
				input.removeClass('error').addClass('success');
				return {status:true,error:''}
			}
		},
		/*
		* � аспечатка ошибок 
		*/
		printError:function(form, errors){			
			// Сначала производим зачистку
			form.find('span.error').remove();
			form.find('.error-block').empty();
			
			if (form.hasClass('print-error')){
				form.find('input[type="text"]').each(function(i){
					if (errors[i]){
						$(this).after('<span class="error">'+errors[i]+'</span>');
					}
				})	
			}else if(form.find('.error-block').length){
				var i=0;			
				while (i < errors.length) {
					if (errors[i]){
						form.find('.error-block').append('<span>'+errors[i]+'</span>');
					}
					i++;
				}
			}

		},
	
		
	}
	
}


function l(e){
	//console.log(e);
}



function dif(diffSecs) {
	sec = Math.floor(diffSecs % 60);
	mins = Math.floor(diffSecs / 60) % 60;
	hours = Math.floor(diffSecs / 60 / 60) % 24;
	days = Math.floor(diffSecs / 60 / 60 / 24);

	//days = Math.floor(diffSecs / 60 / 60 / 24);
	var temp = convert(sec, ['секунда', 'секунды', 'секунд'], true);
	$('.timer .secunds').html(temp[0]);
	$('.string-time .ssecunds').html(temp[1]);	
	
	var temp = convert(mins, ['минута', 'минуты', 'минут'], true);
	$('.timer .minutes').html(temp[0]);
	$('.string-time .mminutes').html(temp[1]);
	
	
	var temp = convert(hours, ['час', 'часа', 'часов'], true);
	$('.timer .hurses').html(temp[0]);
	$('.string-time .hhours').html(temp[1]);
	
	var temp = convert(days, ['день', 'дня', 'дней']);
	$('.timer .days').html(temp[0]);
	$('.string-time .ddays').html(temp[1]);
	/*var temp = convert(days, ['С‡� °СЃ', 'С‡� °СЃ� °', 'С‡� °СЃ� ѕ� І']);
	$('.timer .days').html(temp[0]);
	$('.timer .measure-days').html(temp[1]);*/
	//var temp = convert(days, ['� ґ� µ� ЅСЊ', '� ґ� ЅСЏ', '� ґ� Ѕ� µ� №']);
	

	if (diffSecs > 0)
	{
		t = setTimeout(function() {
			dif(diffSecs - 1)
		}, 1000);
	}
}
function convert(n, ar, tt) {
	var o = n % 10;
	var l, g;
	switch (o) {
		case 1:
			l = 0;
			break;
		case 2:
		case 3:
		case 4:
			l = 1;
			break;
		default:
			l = 2;
			break;
	}

	var g = n % 100;
	if (g == 10 || g == 11 || g == 12 || g == 13 || g == 14) {
		l = 2;
	}
	if (n < 10 && tt == true){
	   ee = '0'+n;
	  }else{
	   ee = n;
	  }
	return [ee, ar[l]];
}



var map;
function initialize() {
	var coords = $("#map").data('coord').split(',');
	var center = $("#map").data('center').split(',');
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(center[0],center[1]),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(coords[0],coords[1]),
        map: map,
        title: ""
    });
}

