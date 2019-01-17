$(document).ready(function(){
    
    if ($(".gallery").length) {
        $(".gallery .item").each(function(){
            $(this).attr("rel", "fbox-gallery");
        });
    }
    
    
    var mac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
    var android = navigator.platform.match(/(Android)/i) ? true : false;

      if (mac) {
        $(".js-font-fix").each(function(){
           var thisElement = $(this),
               thisElementCSS = thisElement.css("line-height");

            var lineHeight = +(thisElementCSS.replace('px', ''));
            thisElement.css("line-height", (lineHeight + 4) + "px");
        });
          
        $(".js-height-fix").each(function(){
           var thisElement = $(this),
               thisElementCSS = thisElement.innerHeight();

            thisElement.css("height", (thisElementCSS + 4) + "px");
        });
          
          $("body").addClass("os-mac");
      }
    
    
    
    
    function getOS() {
      var userAgent = window.navigator.userAgent,
          platform = window.navigator.platform,
          macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
          windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
          iosPlatforms = ['iPhone', 'iPad', 'iPod'],
          os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
      } else if (/Android/.test(userAgent)) {
        os = 'Android';
      } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
      }

      return os;
    }

    
    if (getOS() == "Windows") {
        $("body").addClass("os-windows");
    }
    
    if (getOS() == "iOS") {
        //alert("Я знаю, что сидишь с айфона")
    }
    
    if (getOS() == "Android") {
        $(".js-font-fix").each(function(){
           var thisElement = $(this),
               thisElementCSS = thisElement.css("line-height");

            var lineHeight = +(thisElementCSS.replace('px', ''));
            thisElement.css("line-height", (lineHeight + 4) + "px");
        });
          
        $(".js-height-fix").each(function(){
           var thisElement = $(this),
               thisElementCSS = thisElement.innerHeight();

            thisElement.css("height", (thisElementCSS + 4) + "px");
        });
        
        $("body").addClass("os-android");
    }
    
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
    function popupFunction(){  
        if(iOS == true) {
            var scrollTop = $(window).scrollTop();
            var windowH = $(window).innerHeight();
            
            //$("body").addClass("pop-up-open");
            $("body").css({
                "position": "fixed",
                "top": "-" + scrollTop + "px",
                "height": windowH + "px",
                "width": "100%"
            });
            $("body").attr("data-top", scrollTop + "px");
            
            if (scrollTop >= 52) {
                $(".header_bottom").css({
                    "position": "fixed",
                    "top": "0"
                });
                $("#nav_menu").addClass("ios-fixed");
            } else {
                $(".header_bottom").removeAttr("style");
                $("#nav_menu").removeClass("ios-fixed");
            }
        } 
    }

    function popupCloseFunction(){
        if(iOS == true) {
            var scTop = $("body").attr("data-top");
            var suffix = scTop.match(/\d+/); // 123456
            $("body").removeClass("pop-up-open");
            $("body").removeAttr("style");
            $(".header_bottom").removeAttr("style");
            $("#nav_menu").removeClass("ios-fixed");
            
            $("html, body").scrollTop(parseInt(suffix));
        }
    }
    
    $("#gallery_slider img").each(function(){
        var thisImage = $(this);

        if ((thisImage.innerWidth()) > (thisImage.innerHeight())) {
            thisImage.addClass("horizontal");
        } else {
            thisImage.addClass("vertical");
        }
    });
    
    
    
    /*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        alert("android, mac");
    }*/
    
    if ($("#products_slider").length) {
        $('#products_slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            fade: true,
            touchMove: true,
            draggable: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 20000,
            prevArrow: $('#header_arrows .arrow.prev'),
            nextArrow: $('#header_arrows .arrow.next')
        });
    }
    
    if ($(".fancybox").length){  
        $(".fancybox").fancybox({
            afterShow: function(){
                $(".fancybox-wrap").swipe( {
                    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                        if(direction == "left"){
                            $.fancybox.prev(direction);
                        }else{
                            $.fancybox.prev(direction);
                        }
                    }
                });
            },
        });
    }
    
    
    if (screen.width > 1040) {
        $("#cart_fixed").hover(
          function() {
           $("#tooltip").stop( true, true ).fadeIn();
          }, function() {
            $("#tooltip").stop( true, true ).fadeOut();
          }
        );
    }
    
    if (screen.width <= 1040) {
        
    }
    
    $("#catalog_tabs .tab").on("click", function(e){
        e.preventDefault();
        
        var thisTab = $(this),
            thisLink = thisTab.attr("data-href"),
            contentBlock = $(thisLink);
        
        $("#catalog_tabs .tab").not(thisTab).removeClass("active");
        thisTab.addClass("active");
        $("#catalog_content .content").not(contentBlock).hide();
        contentBlock.fadeIn();
    });
    
    if ($("#gallery_slider").length) {
        $('#gallery_slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            swipe: true,
            touchMove: false,
            draggable: false,
            fade: false,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 20000,
            prevArrow: $('#gallery_arrows .arrow.prev'),
            nextArrow: $('#gallery_arrows .arrow.next'),
            responsive: [
                
                {
                  breakpoint: 1000,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                  breakpoint: 500,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
              ]
        });
    }
    
    $("button.js-anchor").on("click",function(e){
        e.preventDefault();
        var thisHref = $(this).attr("data-href");
        var plansOffset=$(thisHref).offset().top,
            plansOffsetTop = $(window).scrollTop(),
            plansOffsetDesctop = plansOffset - 118,
            plansOffsetMobile = plansOffset - 108;
        
        $("html, body").animate({
            scrollTop:plansOffsetDesctop
        },500);
    });
    
    $("a.js-anchor").on("click",function(e){
        e.preventDefault();
        
        if((iOS == true) && ( screen.width <= 1000 )) {
            $("body").removeClass("pop-up-open");
            $("body").removeAttr("style");
            $(".header_bottom").removeAttr("style");
            $("#nav_menu").removeClass("ios-fixed");
        }
        
        var thisHref = $(this).attr("href");
        var plansOffset=$(thisHref).offset().top,
            plansOffsetTop = $(window).scrollTop(),
            plansOffsetDesctop = plansOffset - 118,
            plansOffsetMobile = plansOffset - 68;
        
        
        
        if( screen.width <= 1000 ) {
            
            $("html, body").animate({
                scrollTop:plansOffsetMobile
            },500);
        } else {
            $("html, body").animate({
                scrollTop:plansOffsetDesctop
            },500);
        }
        
        /*
        if ((($(this).hasClass("nimax-menu__link")) || ($(this).hasClass("calc_btn"))) && ( screen.width > 1130 )) {
            popupCloseFunction();
            $(".modal").removeClass("opened");
            $("html, body").removeClass("locked");
            $("body").removeAttr("style");
            $('#header-top').removeClass('not-modal');
            $('.submit').removeAttr('disabled');
            
            $("#overlay").fadeOut();
            $("#nav_menu").removeClass("opened");
            $("html, body").removeClass("locked");
            $("html, body").animate({
                scrollTop:plansOffsetDesctop
            },500);
        }
        
        if(( screen.width < 1130 ) && ( screen.width > 760 )) {
            $("#nav_menu").fadeOut();
            $("#overlay").fadeOut();
            $("#nav_menu").removeClass("opened");
            $("html, body").removeClass("locked");
            $("html, body").animate({
                scrollTop:plansOffsetDesctop
            },500);
        }
        
        if( screen.width <= 760 ) {
            $("#nav_menu").fadeOut();
            $("#overlay").fadeOut();
            $("#nav_menu").removeClass("opened");
            $("html, body").removeClass("locked");
            
            
            if (plansOffsetTop > plansOffset) {
                $("html, body").animate({
                    scrollTop:plansOffsetMobile
                },500);
            }
            
            if (plansOffsetTop < plansOffset) {
                $("html, body").animate({
                    scrollTop:plansOffset
                },500);
            }
        } else {
            $("html, body").animate({
                scrollTop:plansOffsetDesctop
            },500);
        }
        */
    });
    
    
    
    
    
    
    var CounterVal = sessionStorage.getItem("counter");
    var CartVal = sessionStorage.getItem("cartHtml");
    var CartSum = +(sessionStorage.getItem("cartSum"));
    
    if (CounterVal > 0) {
        $("#counter").text(CounterVal);
        $("#input-counter").val(CounterVal);
        $("#total_cost span").text(CartSum.toLocaleString());
        $("#input-all-cost").val(CartSum);
        $("#tooltip span").text(CartSum.toLocaleString());
        $("#cart_list").html(CartVal);
        $("#cart_fixed").show();
    }
    
    $(".js_catalog_item").each(function(key, item) {
          var itemIdName = 'item' + key;
          this.id = itemIdName;
          var itemId = '#' + itemIdName;
    });
    
    $('.js_tel').on('keydown', function(e){
      if(e.key.length == 1 && e.key.match(/[^0-9+'"]/)){
        return false;
      };
    });
    
    $("#cart_list .cart_list_item").each(function(){
        var thisDataId = $(this).attr("data-id"),
            addedDiv = "#" + thisDataId;
        
        $(addedDiv + " .js-add").addClass("added");
        $(addedDiv + " .js-add span").text("Добавлено");
        $("#modal_cart " + addedDiv).hide();
    });
    
    $(".js-add").on("click", function(e){
        e.preventDefault();
        
        var thisBtn = $(this),
            thisBtnSpan = $(this).children("span"),
            thisProduct = $(this).attr("data-product"),
            thisCost = +($(this).attr("data-cost")),
            thisImg = $(this).attr("data-img"),
            thisId = $(this).parents(".js_catalog_item").attr("id");
        
        if (!thisBtn.hasClass("added")) {
            thisBtnSpan.text("Добавлено");
            thisBtn.addClass("added");
            thisBtn.prop('disabled', true);
            
            var actualCount = +($("#input-counter").val());
            var allCost = +($("#input-all-cost").val());
            $("#input-counter").val(actualCount+1);
            $("#counter").text(actualCount+1);
            sessionStorage.setItem("counter",actualCount+1);
            sessionStorage.setItem("cartSum",thisCost + allCost);
            
            $("#input-all-cost").val(thisCost + allCost);
            $("#tooltip span").text((thisCost + allCost).toLocaleString());
            $("#total_cost span").text((thisCost + allCost).toLocaleString());
            
            var cartItem = 
                '<li class="cart_list_item" data-id="'+thisId+'">' +
                    '<div class="cart_list_item_wrap">' +
                        '<div class="i-img">' +
                            '<img src="'+thisImg+'" alt="">' +
                        '</div>' +
                        '<div class="i-title">' +
                            '<p>' +
                                thisProduct +
                            '</p>' +
                        '</div>' +
                        '<input type="hidden" class="num_hidden" value="1">' +
                        '<div class="i-buttons" data-cost="'+thisCost+'">' +
                            '<button class="minus"></button>' +
                            '<input type="number" class="num" value="1" max="100" min="0">' +
                            '<button class="plus"></button>' +
                        '</div>' +
                        '<p class="i-cost js-font-fix" data-cost="'+thisCost+'">' +
                            '<span>'+thisCost+'</span> р.' +
                        '</p>' +
                        '<div class="i-delete"></div>' +
                    '</div>' +
                    '<input type="hidden" class="item_hidden item_hidden_title" value="'+thisProduct+'">' +
                    '<input type="hidden" class="item_hidden item_hidden_count" value="1">' +
                    '<input type="hidden" class="item_hidden item_hidden_cost" value="'+thisCost+'">' +
                    '<input type="hidden" class="item_hidden item_hidden_img" value="'+thisImg+'">' +
                    '<input type="hidden" class="item_hidden_final" value="">' +
                '</li>';
            
            $(".empty_cart").remove();
            $("#cart_list").append(cartItem);
            $("#tooltip").stop( true, true ).fadeIn();
            
            setTimeout(function () {
                $("#tooltip").stop( true, true ).fadeOut();
            }, 500);
            
            if (thisBtn.hasClass("js-other-btn")) {
                var thisParentItem = $(this).parents(".js_catalog_item");
                    thisParentItem.hide();
                
            }
            
            var cartHtml = $("#cart_list").html();
            sessionStorage.setItem("cartHtml",cartHtml);
            
        }
        
    });
    
    $('.getModal').on('click', function(e){
        e.preventDefault();
        var target_modal = $(this).attr('data-href');
        $(target_modal).arcticmodal({
            beforeOpen: function(data, el) {
                popupFunction();
            },
            beforeClose: function(data, el) {
                popupCloseFunction();
            }
        });
    });

    $('button.getModal').on('click', function(e){
        e.preventDefault();
        var target_modal = $(this).val();
        $(target_modal).arcticmodal({
            beforeOpen: function(data, el) {
                popupFunction();
            },
            beforeClose: function(data, el) {
                popupCloseFunction();
            }
        });
    });

    $('.modal_close').on('click', function(){
        $(this).arcticmodal('close');
    });
    
    $(".num").each(function(){
        var thisNum = $(this),
            thisHiddenNumVal = thisNum.parent().prev().val();
        thisNum.val(thisHiddenNumVal);
    })
    
    $("#cart_list").on("click", ".minus", function() {
        var thisBtn = $(this);
        var $quantityNum = $(this).next("input");
        var $cost = +($(this).parent().attr("data-cost"));
        var $itemCost = $(this).parent().next().children("span");
        var allCost = +($(this).parent().next().attr("data-cost"));
        var allCount = +($("#input-counter").val());
        var numHidden = $(this).parent().prev(".num_hidden");
        var $itemParent = $(this).parents(".cart_list_item"),
            $itemHiddenNum = $itemParent.children(".item_hidden_count"),
            $itemHiddenCost = $itemParent.children(".item_hidden_cost");

          if ($quantityNum.val() > 1) {
            $quantityNum.val(+$quantityNum.val() - 1);
            $itemHiddenNum.val(+$quantityNum.val());
              numHidden.val(+$quantityNum.val());
              
             // $("#input-all-cost").val(allCost - $cost);
            //$("#tooltip span").text(allCost - $cost);
            //$("#total_cost span").text(allCost - $cost);
            $itemCost.text(allCost - $cost);
              $itemHiddenCost.val(allCost - $cost);
              thisBtn.parent().next().attr("data-cost", allCost - $cost);
              $("#input-counter").val(allCount-1);
              sessionStorage.setItem("counter",allCount-1);
              $("#counter").text(allCount-1);
              
              var sum=0;
                $("#cart_list .i-cost").each(function() {
                var this_ = $(this);
                
                sum+= +(this_.attr("data-cost"));
                  $("#total_cost span").text(sum.toLocaleString());
                    $("#input-all-cost").val(sum);
                    $("#tooltip span").text(sum);
                    sessionStorage.setItem("cartSum",sum);
              });
          }
        
        var cartHtml = $("#cart_list").html();
        sessionStorage.setItem("cartHtml",cartHtml);
    });
    
    $("#cart_list").on("click", ".plus", function() {
        var thisBtn = $(this);
        var $quantityNum = $(this).prev("input");
        var $cost = +($(this).parent().attr("data-cost"));
        var $itemCost = $(this).parent().next().children("span");
        var allCost = +($(this).parent().next().attr("data-cost"));
        var allCount = +($("#input-counter").val());
        var numHidden = $(this).parent().prev(".num_hidden");
        var $itemParent = $(this).parents(".cart_list_item"),
            $itemHiddenNum = $itemParent.children(".item_hidden_count"),
            $itemHiddenCost = $itemParent.children(".item_hidden_cost");
        
        if ($quantityNum.val() < 99) {
            $quantityNum.val(+$quantityNum.val() + 1);
            $itemHiddenNum.val(+$quantityNum.val());
            numHidden.val(+$quantityNum.val());
            
            //$("#input-all-cost").val(allCost + $cost);
           // $("#tooltip span").text($cost + allCost);
            //$("#total_cost span").text($cost + allCost);
            $itemCost.text($cost + allCost);
            $itemHiddenCost.val($cost + allCost);
            thisBtn.parent().next().attr("data-cost", allCost + $cost);
            $("#input-counter").val(allCount+1);
            $("#counter").text(allCount+1);
            sessionStorage.setItem("counter",allCount+1);
            
            var sum=0;
            $("#cart_list .i-cost").each(function() {
                var this_ = $(this);
                
                sum+= +(this_.attr("data-cost"));
                  $("#total_cost span").text(sum.toLocaleString());
                    $("#input-all-cost").val(sum);
                    $("#tooltip span").text(sum);
                sessionStorage.setItem("cartSum",sum);
              });
          }
        
        var cartHtml = $("#cart_list").html();
        sessionStorage.setItem("cartHtml",cartHtml);
    });
    
   
    
    $("#cart_list").on("click", ".i-delete", function() {
        var thisItem = $(this).parents(".cart_list_item");
        var allCost = +($("#input-all-cost").val());
        var thisId = "#" + ($(this).parents(".cart_list_item").attr("data-id"));
        
        if (thisId == "#undefined") {
            $("#header_btn span").text("Добавить к заказу гирлянду");
            $("#header_btn").removeAttr('disabled');
            $("#header_btn").removeClass('added');
        }
        
        thisItem.remove();
        if ($(thisId).css('display') == 'none') {
            $(thisId).fadeIn();
        }
        
        var sum=0;
            $("#cart_list .i-cost").each(function() {
            var this_ = $(this);

            sum+= +(this_.attr("data-cost"));
              $("#total_cost span").text(sum.toLocaleString());
              $("#input-all-cost").val(sum);
                $("#tooltip span").text(sum);
                sessionStorage.setItem("cartSum",sum);
          });
        
        var ItemCount = $("#cart_list .cart_list_item").length;
        
        $(thisId + " .js-add").removeClass("added");
        $(thisId + " .js-add").removeAttr('disabled');
        $(thisId + " .js-add span").text('В корзину');
        
        var sum2 = 0;
        $("http://romanticcorp.ru/wp-content/themes/rosebear/js/input.num").each(function(){
            sum2+= +($(this).val());
            $("#input-counter").val(sum2);
            $("#counter").text(sum2);
        });

        $("#total_input").val(sum);
        
        if (ItemCount == 0) {
            $("#cart_list").append("<li class='empty_cart'>Ваша корзина пуста</li>");
            $("#total_cost span").text("0");
            $("#input-counter").val(0);
            $("#counter").text("0");
            $("#input-all-cost").val(0);
            $("#tooltip span").text("0");
        }
        
        var cartHtml = $("#cart_list").html();
        sessionStorage.setItem("cartHtml",cartHtml);
    });
    
    function scrollbarWidth() {
        var block = $('<div>').css({'height':'50px','width':'50px'}),
            indicator = $('<div>').css({'height':'200px'});

        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();    
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }
    
    $(window).on('resize',function() {
        if( window.innerWidth <= 1000 ){
            var windowW = $(window).innerWidth();
            var wrap = $("#header .wrap").innerWidth();
            var margin = (windowW-wrap);
            var width = $(".catalog_item").innerWidth();
            
            
            $("#catalog_content .content").each(function(){
                var thisWrap = $(this),
                    thisScroll = thisWrap.children(".scroll_wrap"),
                    length = thisWrap.find(".catalog_item").length,
                    fixPixel = 4;
                
                if (/Windows Phone/i.test(navigator.userAgent)) {
                    var fixPixel = 3;
                }
                
                thisScroll.width((width*length) + (15*(length-1)) + margin + scrollbarWidth() + fixPixel);
                thisScroll.children(".catalog_item:first-child").css("margin-left", (margin/2) + "px");
            });
            
            $(window).on("scroll", function() {
                var scroll = $(window).scrollTop();

                if ((scroll>50) && (!$('#header').hasClass("not-modal"))) {
                $('#header').addClass('fixed');
                $('#cart_fixed').addClass('fixed');
                } else {
                $('#header').removeClass('fixed');
                $('#cart_fixed').removeClass('fixed');
                }
            });
            
            $("a.js-anchor").on("click", function(){
                $("#nav_menu").fadeOut();
                $("#overlay").fadeOut();
                $("#nav_menu").removeClass("opened");
                $("html, body").removeClass("locked");
            });
            
        }
        
        if( window.innerWidth <= 1000 ) {
            
            
                var thisWrap = $(".advantages .wrap"),
                    thisScroll = thisWrap.children(".wrap_float"),
                    length = thisWrap.find(".advantages_item").length,
                    width = 275;
            
            if( window.innerWidth <= 420 ) {
                var width = 253;
            }
                
                thisScroll.width((width*length) + (23*(length-1)) + margin + scrollbarWidth() + 1);
                thisScroll.children(".advantages_item:first-child").css("margin-left", (margin/2) + "px");
                
        } else {
            $(window).on("scroll", function() {
                var scroll = $(window).scrollTop();

                if ((scroll>0) && (!$('#header').hasClass("not-modal"))) {
                $('#header').addClass('fixed');
                } else {
                $('#header').removeClass('fixed');
                }
            });
        }
    });
    
    $(window).trigger('resize');
    
    $("#menu_hum").on("click", function(e){
       e.preventDefault();
        
        $("#nav_menu").fadeToggle();
        $("#nav_menu").toggleClass("opened");
        $("#overlay").fadeToggle();
        $("html, body").toggleClass("locked");
        //popupFunction();
        
        if ($("#nav_menu").hasClass("opened")) {
            
            popupFunction();
        } else {
            popupCloseFunction();
        }
        
    });
    
    $("#overlay").on("click", function(e){
       e.preventDefault();
        $("#nav_menu").fadeOut();
        $("#overlay").fadeOut();
        $("#nav_menu").removeClass("opened");
        $("html, body").removeClass("locked");
        //popupCloseFunction();
    });
    
    
    $('body').on("click", function() {
        if (($("#input-counter").val() == '0') || ($("#input-counter").val() == 0)) {
            $("#cart_fixed").fadeOut();
        }
        else {
            $("#cart_fixed").fadeIn();
        }
    });
    
    /********************  forms  *********************/  
    $('.js_form').on('submit', function(e){
        e.preventDefault();
        var thisUrl = window.location.href;
        
        $(this).find('.submit').prop('autofocus', true);
        var self = $(this),
            selfCheck = self.find('input[type=checkbox]'),
            selfCheckLabel = selfCheck.next('label');
        self.find('input').css('outline','none');
        
        if ( $(this).hasClass('cart_form') ) {
            $("#cart_list .cart_list_item").each(function(){
                var thisItem = $(this),
                    thisFinalInput = thisItem.children(".item_hidden_final"),
                    thisFinalTitleVal = thisItem.children(".item_hidden_title").val(),
                    thisFinalCountVal = thisItem.children(".item_hidden_count").val(),
                    thisFinalCostVal = thisItem.children(".item_hidden_cost").val(),
                    thisFinalImgLink = thisItem.children(".item_hidden_img").val();
                


                /*thisFinalInput.val(thisFinalTitleVal +", " + thisFinalCountVal + " шт, на сумму " + thisFinalCostVal + " рублей;");*/
                thisFinalInput.val('<tr style="border-bottom: 2px solid #e5e5e5;"><td style="width: 170px; padding: 17px 0;"><img style="border-radius: 15px;" src="'+thisFinalImgLink+'" alt=""></td><td style="padding: 17px 0;"><p><b>'+thisFinalTitleVal+'</b></p></td><td style="padding: 17px 0;"><p style="padding: 0 15px;"><b>'+thisFinalCountVal+'</b> шт</p></td><td style="padding: 17px 0; text-align: center;"><p style="margin: 0; font-size: 14px;">На сумму:</p><p style="margin: 0; font-weight: 600;">'+thisFinalCostVal+'</p></td></tr>');
                console.log(thisFinalInput.val());
            });

            var $input_hidden = $('#input-all-order-list'), //инпут, куда записываем значения

            $box = $('#modal_cart .item_hidden_final'); //класс чекбокса

            var values = [];

            $box.each(function() {
              values.push(this.value);
            });

            $input_hidden.val(values.join(''));
        }
        
        var proceed = true;

        self.find('.js_input').each(function(){
            if ($(this).val() == "") {
                $(this).css('border-color','red');
                setTimeout(function () {
                    $('.js_input').removeAttr('style');
                    $('.submit').removeAttr('disabled');
                }, 1500);
                proceed = false;
            }
        });

        if(selfCheck.prop("checked") == false) {
            selfCheckLabel.addClass("warning");
            $('.submit').removeAttr('disabled');
            setTimeout(function () {
                    selfCheckLabel.removeClass("warning");
                }, 1500);
            proceed = false;
        }

        if(proceed) {

            if ( $(this).hasClass('cart_form') ) {
                var success_modal = $("#thanks");
                var send_data = $(this).serialize();
                var send_url = document.location.origin + '/wp-content/themes/rosebear/send_cart.php';
                
            }
            
            else if ( $(this).hasClass('price_form') ) {
                var success_modal = $("#success");
                var send_data = $(this).serialize();
                var send_url = document.location.origin + '/wp-content/themes/rosebear/send_price.php';
            }
            
            else if ( $(this).hasClass('callback_form') ) {
                var success_modal = $("#success");
                var send_data = $(this).serialize();
                var send_url = document.location.origin + '/wp-content/themes/rosebear/send_callback.php';
            }

            else {
                var success_modal = $("#success");
                var send_data = $(this).serialize();
                var send_url = document.location.origin + '/wp-content/themes/rosebear/send.php';
            }


            if ($(this).data('redirect')) {
                var succes_page = $(this).data('redirect');
                if (typeof succes_page == "undefined") {

                }
            }
            $.ajax({
                type: "POST",
                url: send_url,
                data: send_data,
                success: function (data) {
                    $.arcticmodal('close');
                    success_modal.arcticmodal();
                    $('.js_input').val('');
                    $('.submit').removeAttr('disabled');
                    
                    if ( self.hasClass('price_form') ) {
                        window.location.href = document.location.origin + '/wp-content/themes/rosebear/pdf/prices.pdf';
                        
                    }
                    
                    if ( self.hasClass('cart_form') ) {
                        localStorage.clear();
                        $("#cart_list").html('<li class="empty_cart">Ваша корзина пуста</li>');
                        $(".js_catalog_item").removeAttr('style');
                        $(".js_catalog_item .js-add").removeClass('added');
                        $(".js_catalog_item .js-add span").text('В корзину');
                        
                        $("#counter").text("0");
                        $("#input-counter").val(0);
                        $("#total_cost span").text("0");
                        $("#input-all-cost").val(0);
                        $("#tooltip span").text("0");
                        $("#cart_fixed").hide();
                    }
                    
                    if ( self.hasClass('opt_form') ) {
                        yaCounter51808985.reachGoal('medved_opt');
                    }
                    
                    if ( !self.hasClass('opt_form') ) {
                        yaCounter51808985.reachGoal('medved_rozn');
                    }
                    
                },
                error: function (xhr, str) {
                    alert("ошибка");
                    $('.submit').removeAttr('disabled');
                }
            });
        }

        return false;
    });
});	

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
{
    if ((isChrome && (screen.width > 1050)) || (isSafari && (screen.width > 1050))) {
        $("body").append('<script defer src="/wp-content/themes/rosebear/js/smoothscroll.min.js"></sc' + 'ript>');
    }
}