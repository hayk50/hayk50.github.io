/* JQUERY */

//Ваша заявка успешно отправлена! Ожидайте ответа оператора в ближайшее время

if (!jQuery.migrateTrace) {
    var JQeuryScript = document.createElement('script');
    //JQeuryScript.src = "jquery-3.0.0.min.js"/*tpa=https://code.jquery.com/jquery-3.0.0.min.js*/;
    JQeuryScript.src = "jquery-1.11.3.min.js"/*tpa=https://code.jquery.com/jquery-1.11.3.min.js*/;
    JQeuryScript.src = "jquery-ui.min.js"/*tpa=https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js*/;
    document.head.appendChild(JQeuryScript);
    var JQeuryMigrateScript = document.createElement('script');
    JQeuryMigrateScript.src = "jquery-migrate-1.2.1.js"/*tpa=https://code.jquery.com/jquery-migrate-1.2.1.js*/;
    document.head.appendChild(JQeuryMigrateScript);

}

var $ = jQuery.noConflict();
//Переподключение к сокету в случае обрыва
!function(a,b){"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports?module.exports=b():a.ReconnectingWebSocket=b()}(this,function(){function a(b,c,d){function l(a,b){var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,!1,!1,b),c}var e={debug:!1,automaticOpen:!0,reconnectInterval:1e3,maxReconnectInterval:3e4,reconnectDecay:1.5,timeoutInterval:2e3};d||(d={});for(var f in e)this[f]="undefined"!=typeof d[f]?d[f]:e[f];this.url=b,this.reconnectAttempts=0,this.readyState=WebSocket.CONNECTING,this.protocol=null;var h,g=this,i=!1,j=!1,k=document.createElement("div");k.addEventListener("open",function(a){g.onopen(a)}),k.addEventListener("close",function(a){g.onclose(a)}),k.addEventListener("connecting",function(a){g.onconnecting(a)}),k.addEventListener("message",function(a){g.onmessage(a)}),k.addEventListener("error",function(a){g.onerror(a)}),this.addEventListener=k.addEventListener.bind(k),this.removeEventListener=k.removeEventListener.bind(k),this.dispatchEvent=k.dispatchEvent.bind(k),this.open=function(b){h=new WebSocket(g.url,c||[]),b||k.dispatchEvent(l("connecting")),(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","attempt-connect",g.url);var d=h,e=setTimeout(function(){(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","connection-timeout",g.url),j=!0,d.close(),j=!1},g.timeoutInterval);h.onopen=function(){clearTimeout(e),(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","onopen",g.url),g.protocol=h.protocol,g.readyState=WebSocket.OPEN,g.reconnectAttempts=0;var d=l("open");d.isReconnect=b,b=!1,k.dispatchEvent(d)},h.onclose=function(c){if(clearTimeout(e),h=null,i)g.readyState=WebSocket.CLOSED,k.dispatchEvent(l("close"));else{g.readyState=WebSocket.CONNECTING;var d=l("connecting");d.code=c.code,d.reason=c.reason,d.wasClean=c.wasClean,k.dispatchEvent(d),b||j||((g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","onclose",g.url),k.dispatchEvent(l("close")));var e=g.reconnectInterval*Math.pow(g.reconnectDecay,g.reconnectAttempts);setTimeout(function(){g.reconnectAttempts++,g.open(!0)},e>g.maxReconnectInterval?g.maxReconnectInterval:e)}},h.onmessage=function(b){(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","onmessage",g.url,b.data);var c=l("message");c.data=b.data,k.dispatchEvent(c)},h.onerror=function(b){(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","onerror",g.url,b),k.dispatchEvent(l("error"))}},1==this.automaticOpen&&this.open(!1),this.send=function(b){if(h)return(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","send",g.url,b),h.send(b);throw"INVALID_STATE_ERR : Pausing to reconnect websocket"},this.close=function(a,b){"undefined"==typeof a&&(a=1e3),i=!0,h&&h.close(a,b)},this.refresh=function(){h&&h.close()}}return a.prototype.onopen=function(){},a.prototype.onclose=function(){},a.prototype.onconnecting=function(){},a.prototype.onmessage=function(){},a.prototype.onerror=function(){},a.debugAll=!1,a.CONNECTING=WebSocket.CONNECTING,a.OPEN=WebSocket.OPEN,a.CLOSING=WebSocket.CLOSING,a.CLOSED=WebSocket.CLOSED,a});

function getElement(url, selector, c) {
    request(new XMLHttpRequest());

    // https://cors-anywhere.herokuapp.com/
    // https://cors-proxy.htmldriven.com/?url= // Для этого второй inner
    // https://cors.now.sh/

    function request(xhr) {
        xhr.open('GET', 'https://cors-anywhere.herokuapp.com/' + url, true); // https://cors-proxy.htmldriven.com/?url= / cors-anywhere.herokuapp.com / crossorigin.me / https://cors.now.sh /
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var html = document.createElement('div');

                   // html.innerHTML = JSON.parse(xhr.responseText).body;
                    html.innerHTML = xhr.responseText; //для остальных:
                    c(html.querySelector(selector));
                }
            }
        }
    }
}

//определение тач-девайса
var isTouchDevice = !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
var widgetHtml = isTouchDevice ? 'https://talker24.ru/widget/mobile.html' : 'https://talker24.ru/widget/widget.html';

getElement(widgetHtml, '#talker24', function (element) {
    var widget = document.getElementById('widget');
    //обновление локала клиентов
    if (!localStorage.getItem('new_local')) {
      //  console.log('старый локал');
        localStorage.clear();
        localStorage.setItem('new_local', '1');
      //  console.log('локал очищен');
    }
    //
    var dialogBox = localStorage.getItem('dialog_box') ? JSON.parse(localStorage.getItem('dialog_box')) : [];

    widget.innerHTML = element.innerHTML;

    var genStyle = document.createElement('link');
    genStyle.rel = "stylesheet";
    genStyle.id = 'general_style';
    genStyle.href = isTouchDevice ? "https://talker24.ru/widget/css/mobile.css" : "https://talker24.ru/widget/css/general.css";
    document.head.appendChild(genStyle);

    var style = document.createElement('link');
    style.rel = "stylesheet";
    style.id = 'widget_style';
    style.href = "widgetGreen.css"/*tpa=https://talker24.ru/widget/css/widgetGreen.css*/;
    document.head.appendChild(style);

    //плагин ввбора даты
    var datepickerScript = document.createElement('script');
    datepickerScript.src = "zebra_datepicker.min.js"/*tpa=https://cdn.jsdelivr.net/npm/zebra_datepicker/dist/zebra_datepicker.min.js*/;
    document.head.appendChild(datepickerScript);
    var datepickerStyle = document.createElement('link');
    datepickerStyle.rel = "stylesheet";
    datepickerStyle.href = "zebra_datepicker.min.css"/*tpa=https://cdn.jsdelivr.net/npm/zebra_datepicker/dist/css/default/zebra_datepicker.min.css*/;
    document.head.appendChild(datepickerStyle);

    //Анимация набора текста
    var typeitScript = document.createElement('script');
    typeitScript.src = "typeit.min.js"/*tpa=https://cdn.jsdelivr.net/npm/typeit@5.10.1/dist/typeit.min.js*/;
    document.head.appendChild(typeitScript);

    var offlineChatOn = false;

    dialogBox.forEach(function(item, i) {
        text_in_dialog = item.sender == 'client' ? '<div class="client_message"><div class="icon_left_my_dialog">  <div class="inline_block">      </div>  <span> '+ item.msg +' <div class="time_on_window_dialog"> '+ item.time +' </div> </span> </div> </div>'
            : '<div class="operator_message"><div class="image_dialog_operator"><span>' + item.msg + '<div class="time_on_window_dialog"> ' + item.time + ' </div> </span> </div> </div>';
        jQuery("#talker_widget #dialog_listening").append(text_in_dialog);
    });

   if (localStorage.getItem("chat_open") == 'true' &&  localStorage.getItem('in_message')  ) { //Если человек общается в чате чат бот не показываем
        setTimeout(function () {
         //   console.log("Сработал тайм 500");
            jQuery('#message_text').removeClass('talker_dispnone');
                                       jQuery('.file-upload').removeClass('talker_dispnone');
                                       jQuery('.call_operator').addClass('talker_dispnone');
               jQuery('#talk_chat_ico').click();
        },500)
    }



    //определение страны и города клиента 10 000 запросов в час
    // Пример ответа:
    //     "ip": "http://talker24.ru/widget/js/95.29.69.185",
    //     "country_code": "RU",
    //     "country_name": "Russia",
    //     "region_code": "SMO",
    //     "region_name": "Smolenskaya Oblast'",
    //     "city": "Smolensk",
    //     "zip_code": "214000",
    //     "time_zone": "Europe/Moscow",
    //     "latitude": 54.7817,
    //     "longitude": 32.04,
    //     "metro_code": 0
    //console.log(data, null, 2);
    //console.log(JSON.stringify(data, null, 2));
    //
    //альтернативнй сервис без ограничений, возращает только ip
    // $.getJSON('//api.ipify.org?format=jsonp&callback=?', function(data) {
    //     console.log(JSON.stringify(data, null, 2));
    // });
    // +
    //Требуется параметр IP-адреса
    // $.getJSON('//geoip.nekudo.com/api/<ip_address>', function(data) {
    //     console.log(JSON.stringify(data, null, 2));
    // });



    /*  $.getJSON('http://api.ipify.org/?format=json', function(data) { //Определение ip
    //  console.log(JSON.stringify(data, null, 2));
      var ip = data.ip;
       // console.log ('Ваш ip '+ip);
        localStorage.setItem("ip", ip);
    });
   */

   // $.getJSON('https://api.ipstack.com/'+localStorage.getItem('ip')+'?access_key=08f7fe7684390ca04bfa08d55f2ddd27', function(data) {
  //  $.getJSON('https://api.sypexgeo.net/3AGxf/json/'+localStorage.getItem('ip'), function(data) {



        var wigetSettings;
        var CountMessWS = 0;
        var chatBotActivity = false;
        var chatBotMessageArr = false;
        var chatBotComplete = false;
        var chatBotDialog = '';
        //   var ws = new WebSocket("ws://talker24.ru:8010");

        var widget_id = document.getElementById('widget_id').value;

        // Маска для телефона
        !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("http://talker24.ru/widget/js/focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("http://talker24.ru/widget/js/blur.mask",v).on("http://talker24.ru/widget/js/keydown.mask",w).on("http://talker24.ru/widget/js/keypress.mask",x).on("http://talker24.ru/widget/js/input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("http://talker24.ru/widget/js/input.mask").on("http://talker24.ru/widget/js/input.mask",u),A()})}})});

        //для чата
    var uuid = GenUuid();

        function GenUuid() {

            if (localStorage.getItem('uuid')) {
                return localStorage.getItem('uuid');
            }
            else{
                new_uuid = Math.random().toString().slice(-7);
                localStorage.setItem('uuid',new_uuid);
                return new_uuid;

            }
        }

    var ws = new ReconnectingWebSocket("wss://talker24.ru:8010/?talkeruser="+uuid+""); //Открытие сокета
            ws.onopen = function () {

                getParametrsForWidget();

                setTimeout(function () {
                    jQuery("#popup__toggle").removeClass('talker_dispnone');
                },100);

                if (localStorage.getItem('user_data') == 'void'){
                    checkUserData();
                }

                user_email = localStorage.getItem('user_email') ? localStorage.getItem('user_email') : "";
                user_phone = localStorage.getItem('user_phone') ? localStorage.getItem('user_phone') : "";

                findAndAddUSer();

            };
if (localStorage.getItem('waitoperator')>0) { //Если мы ждем оператора
    console.log ("Ждем оператора 01");
    whait_answer_for_operator(); //Ожидается ли соединение с оператором?
}


            function findAndAddUSer() {
                if (localStorage.getItem('user_name')) { //Если пользователь уже сохранен в локале
                            var clientType = 'refresh_client';
                            var uuid = localStorage.getItem('uuid');
                            var user_name = localStorage.getItem('user_name');
                            var user_city = localStorage.getItem('user_city');
                            var user_email = localStorage.getItem('user_email') ? localStorage.getItem('user_email') : "";
                            var user_phone = localStorage.getItem('user_phone') ? localStorage.getItem('user_phone') : "";

                            entering_values_of_form (user_name,user_email,user_phone);
                 //   console.log ("Обновляем клиента "+uuid);
                            ws.send('{"type":"'+ clientType +'","user_name":"'+ user_name +'","user_email":"'+ user_email +'","user_phone":"'+ user_phone +'","location":"' + user_city + '","title":"' + document.title.replace(/"/g,"'") + '","link":"' + window.location.href.replace(/"/g,"'") + '","uuid":"' + uuid + '","widget_id":"' + widget_id + '"}');

                            ws.send('{"type":"check_active_opertors"}');


                        } else { // Отправляем запрос на нового пользователя
                            get_city_client_sipex_geo();
                          /*

                            var clientType = 'new_client';
                            var uuid = GenUuid();

                            if (localStorage.getItem('user_city')) {
                                var user_no_name = localStorage.getItem('user_city');


                            }
                            else {
                                var user_no_name = "Гость"; //Получаем город клиента из функции
                               console.log ("Юзер без города "+user_no_name);
                                var user_city = 'Не определено';
                                        }

                            var user_name = user_no_name +' '+ uuid;

                            var user_city = user_city;

                            localStorage.setItem("uuid", uuid);
                            localStorage.setItem("user_city", user_city);
                            localStorage.setItem("user_name", user_name);
                            */
                        }
            }



          function get_city_client_sipex_geo() { //Определение города клиента

              $.getJSON('https://api.sypexgeo.net/3AGxf/json/')
                  .done(function (data) {
                      console.log('Получено ' + JSON.stringify(data) + " Город " + data.city);
                      if (data.city != null) {
                          console.log('Ваш город ' + data.city.name_ru);
                          user_city = data.city.name_ru;
                          saveUserOnLocalWithCity(user_city);
                      }
                      else {
                          console.log('Город не определен');
                          user_city = "Гость";
                          saveUserOnLocalWithCity(user_city);
                      }
                  });

          }

          function saveUserOnLocalWithCity(city) {

              var clientType = 'new_client';
              var uuid = GenUuid();
              var user_name = city +' '+ uuid;
              localStorage.setItem("uuid", uuid);
              localStorage.setItem("user_city", city);
              localStorage.setItem("user_name", user_name);
console.log ("Новый клиент "+uuid);
              ws.send('{"type":"'+ clientType +'","user_name":"'+ user_name +'","user_email":"'+ user_email +'","user_phone":"'+ user_phone +'","location":"' + user_city + '","title":"' + document.title.replace(/"/g,"'") + '","link":"' + window.location.href.replace(/"/g,"'") + '","uuid":"' + uuid + '","widget_id":"' + widget_id + '"}');
              ws.send('{"type":"check_active_opertors"}');

          }

        if (localStorage.getItem('offlineChat')) {
            offlineChat(true);
        }

        document.cookie = "talker_user_id="+uuid;



        function entering_values_of_form(user_name,user_email,user_phone) { //Заполняем контактную форму из локала, если есть там данные
            // document.getElementById("talker_name_client").value = user_name;  //Имя убираем, чтобы не записывало как Гость
            document.getElementById("talker_email_client").value = user_email;
            document.getElementById("talker_phone_client").value = user_phone;
            document.getElementById("talker_message_email_client").value = user_email; //Заполняем в контактной форме емейл для удобства
        }


        function sendPongToServer() {
//console.log ('Pong');
            if (wigetSettings.activity && localStorage.getItem('in_message')) { //Если виджет активен и есть кнопка написать оператору
         //   if (wigetSettings.chatBotConnectVariants.match("Дождаться ответа оператора в чате") && wigetSettings.activity) { //Если виджет активен и есть кнопка написать оператору
                time = Date.now();

                            ws.send('{"type":"pong","time_board":"' + time + '","user_id":"' + uuid + '"}');
                            }



        }

        setInterval(sendPongToServer, 3000);


        if (isTouchDevice) {
            jQuery('#talker_widget').addClass('mobile_talker_widget');

            //вёрстка для мобильного устройства
        }

        function getParametrsForWidget() {
            var time = Date.now();

            if (localStorage.getItem('widget_settings')) { //Если настройки есть в локале
                wigetSettings = JSON.parse(localStorage.getItem('widget_settings'));
                wigetSettings.avatar = wigetSettings.avatar;
                document.querySelector('.bac_tolk_side_img').src = 'https://talker24.ru' + wigetSettings.avatar;

                var lastTimeUpdate = wigetSettings.time; //Время последнего обновления параметров виджета
                var timeForGhost = +time - +lastTimeUpdate;

                if (timeForGhost > 300000) { //Если время больше 5 минут - получаем новые настройки
                    NoParametrsForWidget();
                    localStorage.removeItem('waitoperator');
                    localStorage.removeItem('chat_open');
                    localStorage.removeItem('in_message');
                    localStorage.removeItem('on_dialog');
                    return false;
                }

                if (!wigetSettings.activity) { //Если виджет не активен скрываем его
                    jQuery('#widget').addClass('talker_dispnone');
                    return false;
                }


                if (isTouchDevice && wigetSettings.devices=='only_desc') { //Проверяем устройство и настройки для отображения (Десктоп / Мобильный)
                    jQuery('#widget').addClass('talker_dispnone');
                    return false;

                }

                if (!isTouchDevice && wigetSettings.devices=='only_mobile') { //Если только мобильные активированы
                    jQuery('#widget').addClass('talker_dispnone');
                    return false;
                }



                if (wigetSettings.copyright=='false') { //Проверка на копирайт
                                    jQuery('#talker24_copyright').addClass('talker_dispnone');


                                }




                var social_vk =wigetSettings.social_vk ? "<a id='talker_social_vk' title='Напишите нам в ВК' target='_blank' href="+wigetSettings.social_vk+"><img src=https://talker24.ru/widget/image/icons/vk_ico.png><span class=tooltip>Напишите нам в ВК</span></a>" : "";
                var social_fb = wigetSettings.social_fb ? "<a id='talker_social_fb' title='Напишите нам в Facebook' target='_blank' href="+wigetSettings.social_fb+"><img src=https://talker24.ru/widget/image/icons/fb_ico.png><span class=tooltip>Напишите нам в Facebook</span></a>" : "";
                var social_twitter = wigetSettings.social_twitter ? "<a id='talker_social_twitter' title='Напишите нам в Twitter' target='_blank' href="+wigetSettings.social_twitter+"><img src=https://talker24.ru/widget/image/icons/twitter_ico.png><span class=tooltip>Напишите нам в Twitter</span></a>" : "";
                var social_insta =wigetSettings.social_insta ? "<a id='talker_social_insta' title='Напишите нам в Istagram' target='_blank' href="+wigetSettings.social_insta+"><img src=https://talker24.ru/widget/image/icons/insta_ico.png><span class=tooltip>Напишите нам в Istagram</span></a>" : "";
                var social_whats_app = wigetSettings.social_whats_app ? "<a id='talker_social_whats_app' title='Напишите нам в WhatsApp' target='_blank' href=https://wa.me/"+wigetSettings.social_whats_app+"><img src=https://talker24.ru/widget/image/icons/whatsapp_ico.png><span class=tooltip>Напишите нам в WhatsApp</span></a>" : "";
                var social_viber = wigetSettings.social_viber ? "<a id='talker_social_viber' title='Напишите нам в Viber' target='_blank' href=viber://chat?number="+wigetSettings.social_viber+"><img src=https://talker24.ru/widget/image/icons/viber_ico.png><span class=tooltip>Напишите нам в Viber</span></a>" : "";

                var social_icons_in_header = social_vk+ ''+social_fb+ '' +social_twitter+ '' +social_insta+ '' +social_whats_app+''+social_viber;

                document.getElementById('talker_oper_name').innerText = wigetSettings.operator_name ? wigetSettings.operator_name : 'Оператор';
                document.getElementById('talker_oper_work').innerText = wigetSettings.operator_position ? wigetSettings.operator_position : 'Консультант';
                document.getElementById('talk_social_icons').innerHTML = social_icons_in_header;
                if (wigetSettings.video_avatar) {
                    jQuery('.qc-avatar-video').attr("src", "https://talker24.ru" + wigetSettings.video_avatar);
                } else {
                    jQuery('.qc-avatar-video').remove();

                 //   wigetSettings.avatar = wigetSettings.avatar ? wigetSettings.avatar : '1522751205.jpg'/*tpa=http://talker24.ru/dist/img/avatars/operators/1522751205.jpg*/;
                //    document.querySelector('.bac_tolk_side_img').src = 'https://talker24.ru' + wigetSettings.avatar;


                }
                if (isTouchDevice) { //Ставим фото аватар если мобильное устройство
                //    document.querySelector('.bac_tolk_side_img').src = 'https://talker24.ru' + wigetSettings.avatar;
                        }

                document.getElementById('talker_oper_img').src = 'https://talker24.ru' + wigetSettings.avatar;

                //wigetSettings.position_on_page = 'left'; //
                 if (wigetSettings.position_on_page == 'right') {
                     jQuery('#widget').addClass('talker_right_position');
                 }

                     if (wigetSettings.position_on_page == 'left') {
                         jQuery('#widget').addClass('talker_left_position');
                      //   document.getElementById('popup__toggle').style.left = '20%';
                       //  document.getElementById('talker_widget').style.left = '20%';

                       //  document.getElementById('talker_phone_slice').style.right = '-325px';
                 }
                var currentStyle = document.getElementById('widget_style');
                if (currentStyle.href.match(/widget\/css\/widget(.*)\.css/i)[1].toLowerCase() != wigetSettings.widget_color) {
                    currentStyle.href = 'https://talker24.ru/widget/css/widget' + wigetSettings.widget_color[0].toUpperCase() + wigetSettings.widget_color.slice(1) + '.css';
                }

                if (wigetSettings.invite_type == "chat_bot") { // Если тип ча-бот

                    if (wigetSettings.repeat_open_dialog=='all_page') {
                       ws.send('{"type":"get_chat_bot_questions","widget_id":"'+ widget_id +'","uuid":"' + uuid + '"}');
                    }
                }

                    if(wigetSettings.invite_type == "automessage") { // Если тип атосообщение

                        console.log("Откроем приглашение в диалог через 5 сек");
                    setTimeout(function () {
                        greetings(wigetSettings.auto_message ? wigetSettings.auto_message : 'Здравствуйте, Чем я могу Вам помочь?');
                    },
                        wigetSettings.time_to_invite ? (wigetSettings.time_to_invite * 1000) : 5000
                    );
                }
                insertModalFormTalker(); //Подгружаем генератор клиентов
            }
            else {
                console.log("Нет параметров для виджета");
                NoParametrsForWidget();
            }

            return true;
        }

        function NoParametrsForWidget() {
            ws.send('{"type":"update_widget_settings","widget_id":"'+ widget_id +'","uuid":"' + uuid + '"}');
            setTimeout(function () {
                getParametrsForWidget();
                //wigetSettings = JSON.parse(localStorage.getItem('widget_settings')).data.parametrs[0];
            },100);

        }

        ws.onmessage = function (event) {
            var Data = JSON.parse(event.data);
            GetMessageFromOperator (Data);
           // console.log('SON.parse(event.data));
        };

        ws.onclose = function (event) {
            //location.reload();
        };



        function GetMessageFromOperator(msg) {

            switch (msg.type) { //Проверяем тип сообщения

                case 'operator_message':
                    PasrNewLineinWidget (msg);
                    operator_stop_write (msg);
                    stop_wait_operaor();
                    break;

                case 'operator_write_message':
                    operator_write_message (msg);
                    break;

                case 'operator_stop_write':
                    operator_stop_write (msg);
                    break;

            case 'operator_include_id_dialog':
                console.log ("Наш диалог принят");
                stop_wait_operaor();
                    break;

                case 'ParametrsForWiidget':
                    updateWidgetSettings(msg);
                    break;

                case 'upload_file_urls':
                    uploadFile(msg.upload_url,msg.download_url)
                    break;

                case 'chat_bot_questions':
                    if (!chatBotActivity && !chatBotComplete) {
                        activateChatBot(msg);
                    }
                    break;

                case 'activity_operators_changes':
                    if (msg.active_operators == '0') {
                        offlineChat(true);
                        localStorage.setItem('offlineChat', 'on');
                    } else if(offlineChatOn) {
                        offlineChat(false);
                        localStorage.removeItem('offlineChat');
                    }
                    break;
            }
        }

        jQuery('.call_operator').click(function (e) {
            chatBotActivity = false;
            sendClientMessge('<span class=service_mes_adm>Клиент прервал диалог с чат-ботом и позвал оператора<b/>');
            dialog_listening.innerHTML = '';
            showOperatorMessage('Приглашение к диалогу отправлено! Пожалуйста, дождитесь ответа оператора');
            jQuery('#message_text').removeClass('talker_dispnone');
            jQuery('.file-upload').removeClass('talker_dispnone');
            jQuery('.call_operator').addClass('talker_dispnone');

            localStorage.setItem('in_message', true); //Ведет диалог

            chatBotComplete = true;
            localStorage.setItem('waitoperator', Date.now());
            whait_answer_for_operator(); //Ожидается ли соединение с оператором?
        });

        function whait_answer_for_operator(value) { //Если ожидается соединение с оператором

            var intervalId = window.setInterval(function() {

                 if (localStorage.getItem('waitoperator') && localStorage.getItem('waitoperator')!=null) {
                     var we_wait = (+Date.now() - +localStorage.getItem('waitoperator'))/1000 | 0;
                                     user_whait_operator(we_wait);
                                     console.log ("Мы ждем "+we_wait+ " сек.");
                 }
                 else {
                     clearInterval(intervalId);
                 }

            }, 1000);



        }




        function activateChatBot(msg) {
            if (!msg.res) {

                setTimeout(function () {
                    console.log("Сработал таймаут на автоприглашение");
                    greetings(wigetSettings.auto_message ? wigetSettings.auto_message : 'Здравствуйте, Чем я могу Вам помочь?');
                }, wigetSettings.time_to_invite ? (wigetSettings.time_to_invite * 1000) : 5000);
            } else {
                chatBotActivity = true;
                jQuery('#message_text').addClass('talker_dispnone');
                jQuery('.file-upload').addClass('talker_dispnone');
                if (wigetSettings.chatBotConnectVariants.match("Дождаться ответа оператора в чате")) {
                    jQuery('.call_operator').removeClass('talker_dispnone');
                }
                //.talker_widget_button
                //<button class="talker_widget_button talker_dispnone">Позвать оператора</button>
                chatBotMessageArr = msg.res;
                setTimeout(function () {


                  //      console.log("Сработал тайм 500");

                        if (localStorage.getItem('in_message')) { //Если дивалог с ботом был прерван и идет беседа

                        }
                        else {
                         //   console.log('Показываем следующий вопрос');
                            showNextChatBotMessage(); // Показываем следующий вопрос
                        }



                    if (isTouchDevice) {
                        jQuery(".talk_new_mes_ico").removeClass('talker_dispnone');
                        jQuery('#popup__toggle').mouseover();
                    } else {
                        setTimeout(function () {
                            jQuery('#talk_chat_ico').click();
                        },100)
                    }
                },
                     wigetSettings.time_to_invite ? (wigetSettings.time_to_invite * 1000) : 5000

           //     1000 //Если чат бот - показываем сообщение при клике на иконку чата сразу, а не ждем установленного лимита в админке
                 );
            }

        }

        function showNextChatBotMessage() {
            var nextMessage = chatBotMessageArr.shift();
            if (!nextMessage) {
                chatBotActivity = false;
                chatBotCompleteScript();
                return false;
            }

            var msgClass = 'chatBotMessage' + Date.now().toString().slice(-4);
            var msg = nextMessage.title + '<br>';
            type = JSON.parse(nextMessage.type);

            switch (Object.keys(type)[0]) {
                case "select":
                    var variants = JSON.parse(nextMessage.variants);
                    variants.forEach(function(item, i, arr){
                        variants[i] = '<div class="alignleft displayblock"><a href = "javascript:void(0);" class="js-chat-bot-variants">- '+ item +'</a></div>';
                    });
                    variants = variants.join(' ');
                    showChatBotMessage(msg,msgClass,variants);
                    //showOperatorMessage(msg1);
                    break;

                case 'date':
                    dateClass = 'datePicker'+ Date.now().toString().slice(-3);
                    var dataPick = '<span class='+ dateClass +'>Выберите дату: </span>';
                    //showOperatorMessage(dataPick);

                    function showZDate() {
                        var date = new Date();
                        jQuery('.' + dateClass).Zebra_DatePicker({
                            //container:	jQuery('#talker_widget'),
                            open_icon_only: true,
                            show_select_today: "Сегодня",
                            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Аввгуст', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                            days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                            direction: 1,
                            format: 'd m Y',
                            onSelect: function (date) {
                                showAnswer(date);
                                jQuery(this).parent().parent().remove(); //деактивация календаря
                                showNextChatBotMessage();
                            },
                            onOpen: function () {
                                jQuery('.Zebra_DatePicker').css({
                                    'left': 'auto',
                                    'right': '45px',
                                    'z-index': '2147483648'
                                });
                            }
                        });
                    }
                    showChatBotMessage(msg,msgClass,dataPick,false,showZDate);
                    break;

                case 'operator_message':
                    showChatBotMessage(msg,msgClass,false,true);
                    stop_wait_operaor();
                    break;

                default:
                    var textBox = '<input type="text" class="chatBotTextAnswer" placeholder="Введите ответ и нажмите Enter">';
                    //showOperatorMessage(textBox,msgClass);
                    // jQuery('#message_text').removeClass('talker_dispnone');
                    // jQuery('.file-upload').removeClass('talker_dispnone');
                    // inputClass = 'input'+ Date.now().toString().slice(-3);
                    // msg += '<input placeholder="Введите сообщение и нажмите Enter" class=' + inputClass + '>';
                    //'#talker_textarea_block';
                    showChatBotMessage(msg,msgClass,textBox);
                    break
            }
            //return msg;
        }

        jQuery('#dialog_listening').on('keyup', '.chatBotTextAnswer', function (e) {
            if(event.keyCode == 13 && this.value!=''){
                e.preventDefault();
                showAnswer(this.value);
                jQuery(this).hide(1000);
                showNextChatBotMessage();
            }
        });

        function chatBotCompleteScript() {
            var entityMap = {
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;',
              '/': '&#x2F;',
              '`': '&#x60;',
              '=': '&#x3D;'
            };


           // chatBotDialog = dialog_listening.innerHTML.trim().replace(/\n/g,"\\n").replace(/<img.*?>/g,"");
            chatBotDialog = dialog_listening.innerHTML.trim().replace(/<img.*?>/g,""); //Удаление из строки изображений
          //  chatBotDialog = chatBotDialog.replace(/<a.*?>/g,""); //Удаление из строки ссылок
          //  chatBotDialog = chatBotDialog.replace(/<div class="time_on_window_dialog".*?>/g,""); //Удаление из строки ссылок
            chatBotDialog = chatBotDialog.replace(/<div class="time_on_window_dialog".*?<\/div>/g,''); //Удаление из строки времени
            chatBotDialog = chatBotDialog.replace(/<a.*?<\/a>/g,''); //Удаление из строки ссылок
            chatBotDialog = chatBotDialog.replace(/<span style="display: none; position: relative; font: inherit; color: inherit; visibility: hidden;" class="ti-cursor">.*?<\/span>/g,''); //Удаление из строки
            chatBotDialog = chatBotDialog.replace(/<div class="inline_block">&nbsp;<\/div>/g,''); //Удаление из строки
            chatBotDialog = chatBotDialog.replace(/ , /g,''); //Удаление из строки
            chatBotDialog = chatBotDialog.replace(/,,/g,''); //Удаление из строки
            chatBotDialog = chatBotDialog.replace(/,,,/g,''); //Удаление из строки
            chatBotDialog = chatBotDialog.replace(/,,,,/g,''); //Удаление из строки
            chatBotDialog = chatBotDialog.replace(/,,,,,/g,''); //Удаление из строки
            chatBotDialog = chatBotDialog.replace(/,,,,,,/g,''); //Удаление из строки
            chatBotDialog = chatBotDialog.replace(/  /g,''); //Удаление из строки
            chatBotDialog = chatBotDialog.replace(/ {1,}/g," ");
            chatBotDialog = chatBotDialog.replace(/,<\/div/g,'</div'); //Удаление из строки
            chatBotDialog = chatBotDialog.replace(/Вы ответили/g,'Ответ'); //Удаление из строки
            chatBotDialog = chatBotDialog.replace(/"/g,''); //Удаление из строки
            chatBotDialog = chatBotDialog.replace(/^"(.*)"$/, '');
            chatBotDialog = chatBotDialog.replace(/\r|\n/g, '')
            chatBotDialog = chatBotDialog.replace(/(^"|"$)/g, '');
            chatBotDialog = chatBotDialog.replace(/' '/g, '');
            chatBotDialog = chatBotDialog.replace(/<input.*?>/g,''); //Удаление из строки input

      //      chatBotDialog = chatBotDialog.replace(/\n+/g,'\n')

          //   console.log(chatBotDialog);
        //     console.log(JSON.parse('{"message":"'+chatBotDialog+'"}'));
          //  chatBotDialog = JSON.parse({"message":''+chatBotDialog+''});
          //  chatBotDialog = escapeHtml(chatBotDialog);
           // chatBotDialog = chatBotDialog.replace(/<[^>]+>/g,'');

         //   chatBotDialog = ' Диалог не передается<br>';

            function escapeHtml (string) {
              return String(string).replace(/[&<>"'`=\/]/g, function (s) {
                return entityMap[s];
              });
            }

            variantsLinks = '';
            var variants = JSON.parse(wigetSettings.chatBotConnectVariants);
            variants.forEach(function(item, i, arr){
                variantsLinks += '<div class="alignleft displayblock"><a href = "javascript:void(0);" class="js-chat-bot-complete-choice" id="complete_choice_"' + (i+1) + '">' + item + '</a></div>';
            });
       //     console.log(variants);
            showChatBotMessage('',"ChatBotCompleteMsg",variantsLinks);
        }

        jQuery('#dialog_listening').on('click', '.js-chat-bot-variants',  function () {
            jQuery(this).parent().children('a').removeClass('js-chat-bot-variants');// деактивация ссылок
            showAnswer(this.innerText);
            showNextChatBotMessage();
        });

        jQuery('#dialog_listening').on('click', '.js-chat-bot-complete-choice',  function () {
            jQuery(this).parent().children('a').removeClass('js-chat-bot-complete-choice');// деактивация ссылок
            var msgClas = 'chatBotMessage' + Date.now().toString().slice(-4);
            switch (this.innerText) {
                case "Выслать на почту":
                    var mailBox =   '<form class="js_send_contacts"><div>' +
                        '<p id="insert_your_name">Ваше имя:</p>' +
                        '<input type="text" id="chat_bot_dialog_name" placeholder="Имя">' +
                        '<p id="insert_your_email">Ваш email:<span class="required_field">*</span></p>' +
                        '<input type="text" id="chat_bot_dialog_email" placeholder="http://talker24.ru/widget/js/email@mail.ru" required>' +
                        '</div>' +
                        '<br><button type="submit" class="js-email-picked submit_clients_contacts">Отправить</button></form>';
                    showOperatorMessage(mailBox,msgClas);
                    break;

                case 'Позвонить мне':
                    var phoneBox =  '<form class="js_send_contacts"><div>' +
                        '<p id="insert_your_name" class="insert_your_name">Ваше имя:</p>' +
                        '<input type="text" id="chat_bot_dialog_name" placeholder="Имя">' +
                        '<p id="insert_your_phone">Ваш телефон:<span class="required_field">*</span></p>' +
                        '<input type="text" id="chat_bot_dialog_phone" required placeholder="8(___) ___-__-__">' +
                        '</div>' +
                        '<button class="js-phone-picked submit_clients_contacts">Отправить</button></form>';
                    showOperatorMessage(phoneBox,msgClas);
                    jQuery(chat_bot_dialog_phone).mask("8(999) 999-99-99");

                    var el=document.getElementById('chat_bot_dialog_name');
                    el.focus();
                    el.setSelectionRange(el.value.length,el.value.length);

                    break;

                case 'Дождаться ответа оператора в чате':
                    //console.log(chatBotDialog);
                    whait_answer_for_operator();
                    var user_name = localStorage.getItem('user_name');
                    ws.send('{"type":"new_message_dialog","message":"<span class=service_mes_adm>Диалог с чат-ботом:</span>","name":"'+user_name+'","link":"'+window.location.href.replace(/"/g,"'")+'","user_id":"'+uuid+'","widget_id":"' + widget_id + '"}');
                    ws.send('{"type":"new_message_dialog","message":"'+chatBotDialog+'","name":"'+user_name+'","link":"'+window.location.href.replace(/"/g,"'")+'","user_id":"'+uuid+'","widget_id":"' + widget_id + '"}');
                    ws.send('{"type":"new_message_dialog","message":"<span class=service_mes_adm>Клиент ожидает ответа оператора</span>","name":"'+user_name+'","link":"'+window.location.href.replace(/"/g,"'")+'","user_id":"'+uuid+'","widget_id":"' + widget_id + '"}');
               //     showChatBotMessage(wigetSettings.auto_message ? wigetSettings.auto_message : 'Ваша заявка успешно отправлена! Ожидайте ответа оператора в ближайшее время',msgClas);
                    jQuery('#message_text').removeClass('talker_dispnone');
                    jQuery('.file-upload').removeClass('talker_dispnone');
                    jQuery('.call_operator').addClass('talker_dispnone');

                    break;

                default:
                    break
            }
            chatBotComplete = true;
        });


        jQuery('#dialog_listening').on('submit', '.js_send_contacts',  function (e) {
            e.preventDefault();
            var msgClas = 'chatBotMessage' + Date.now().toString().slice(-4);
            var name = chat_bot_dialog_name.value;
            var button = jQuery(this).children('button');
            //button.hide(800)
            if (button.hasClass("js-email-picked")) {
                var email = chat_bot_dialog_email.value;
                var dialog = '<span class=service_mes_adm>Диалог с чат-ботом:</span>';
                dialog += chatBotDialog;
                dialog += '<span class=service_mes_adm>Клиент ожидает ответа на указанную почту</span>';
                console.log('Нажал');
                ws.send('{"type":"send_message_back","name":"'+name+'","message":"'+dialog+'","email":"'+email+'","link":"'+window.location.href.replace(/"/g,"'")+'","user_id":"'+uuid+'","widget_id":"' + widget_id + '"}');
                disableDobleAction();
            } else if (button.hasClass("js-phone-picked")) {
                console.log('Нажал + phone');
                var phone = chat_bot_dialog_phone.value;
                var dialog = '<span class=service_mes_adm>Диалог с чат-ботом:</span>';
                dialog += chatBotDialog;
                dialog += '<span class=service_mes_adm>Клиент ожидает ответа на указанный телефонный номер</span>';
                ws.send('{"type":"send_phone_call","phone":"'+phone+'","message":"'+dialog+'","name":"'+name+'","link":"'+window.location.href.replace(/"/g,"'")+'","user_id":"'+uuid+'","widget_id":"' + widget_id + '"}');

                disableDobleAction();

            }
                showChatBotMessage(wigetSettings.auto_message ? wigetSettings.auto_message : 'Ваша заявка успешно отправлена! Ожидайте ответа оператора в ближайшее время',msgClas);
                return false;
        });

          function disableDobleAction() {
            localStorage.setItem('dialog_box',''); //Очищаем локал после отправки заявки
                            jQuery("#chat_bot_dialog_name").attr("disabled", true);
                            jQuery("#chat_bot_dialog_phone").attr("disabled", true);
                            jQuery(".submit_clients_contacts").attr("disabled", true);
                            jQuery("#chat_bot_dialog_email").attr("disabled", true);
                            jQuery(".submit_clients_contacts").css("display", "none");
        }

        function showAnswer(message) {
            showClientMessge('<span class=service_mes_adm>Вы ответили:</span> ' + message);
        }

        function greetings(auto_message) {
            console.log ("Прошло ".Date.now() - localStorage.getItem('on_dialog'));
            if (!localStorage.getItem('on_dialog') || (Date.now() - localStorage.getItem('on_dialog') > 8*60*60*1000)) {

                jQuery("#auto_message").remove();
                jQuery("#talker_widget #dialog_listening").append('<div class="operator_message" id="auto_message"><div class="image_dialog_operator"><span>' + auto_message + '<div class="time_on_window_dialog"> ' + new Date().toLocaleTimeString().slice(0, -3) + ' </div> </span> </div> </div>');
                if (isTouchDevice) {
                    jQuery(".talk_new_mes_ico").removeClass('talker_dispnone');
                    jQuery('#popup__toggle').mouseover();
                } else {
                    setTimeout(function () {
                        jQuery('#talk_chat_ico').click();
                    },100)
                }
                ws.send('{"type":"auto_message_sended","widget_id":"' + widget_id + '"}');
            }
        }

        function sendOperatorMessage(message) {
            showOperatorMessage(message);
            ws.send('{"type":"new_message_dialog","message":"'+message.replace(/"/g,"'")+'","name":"'+user_name+'","link":"'+window.location.href.replace(/"/g,"'")+'","user_id":"'+uuid+'","widget_id":"' + widget_id + '"}');
        }

        function showOperatorMessage(message) {
            jQuery("#talker_widget #dialog_listening").append('<div class="operator_message" id="message"><div class="image_dialog_operator"><span>' + message + '<div class="time_on_window_dialog"> ' + new Date().toLocaleTimeString().slice(0, -3) + ' </div> </span> </div> </div>');
            dialog_listening.scrollTop = dialog_listening.scrollHeight; //Прокрутка
        }

        function showChatBotMessage(msg,msgClass,variants,next,func) {

            dialog_listening.scrollTop = dialog_listening.scrollHeight; //Прокрутка
            jQuery("#talker_widget #dialog_listening").append('<div class="operator_message" id="message"><div class="image_dialog_operator"><span><div class="' + msgClass + '"></div><div class="time_on_window_dialog"><img src="https://talker24.ru' + wigetSettings.avatar + '" class="chat_bot_avatar"></div></span></div></div>');
            //jQuery("#talker_widget #dialog_listening").append('<div class="operator_message" id="message"><div class="image_dialog_operator type-it4" ><span>' + msg + '<div class="time_on_window_dialog"> ' + new Date().toLocaleTimeString().slice(0, -3) + ' </div> </span> </div> </div>');
            //'<img src="https://talker24.ru' + wigetSettings.avatar + '" class="chat_bot_avatar"></img>'
            // jQuery('.' + msgClass).typeIt({
            //     strings: msg, //+ '<div class="time_on_window_dialog"><img src="https://talker24.ru' + wigetSettings.avatar + '" class="chat_bot_avatar"></div>',
            //     cursor: false,
            //     speed: 50,
            //     afterComplete: function(instance) {
            //         //-- Execute your code here.
            //         alert(111);
            //     }
            // });
            if (msg) {

                var instance = new TypeIt('.' + msgClass, {
                    strings: msg, //+ '<div class="time_on_window_dialog"><img src="https://talker24.ru' + wigetSettings.avatar + '" class="chat_bot_avatar"></div>',
                    cursor: false,
                    speed: 50,
                    lifeLike: true,
                    afterStep: function(step, queue, instance) {
                        dialog_listening.scrollTop = dialog_listening.scrollHeight; //Прокрутка
                    },
                    afterComplete: function(instance) {
                        if (variants) {
                            jQuery("."+msgClass).append(variants);
                        }
                        dialog_listening.scrollTop = dialog_listening.scrollHeight; //Прокрутка
                        if (next) {
                      //      console.log("Показываем следующий шаг 02");
                            showNextChatBotMessage();
                        }
                        if (func) {
                            func();
                        }
                    }
                });
                jQuery('.ti-container').css('display','block');
                jQuery('.ti-cursor').css('display','none');
            } else {
                jQuery("."+msgClass).append(variants);
                dialog_listening.scrollTop = dialog_listening.scrollHeight; //Прокрутка
            }
        }

        function sendClientMessge(oper_message) {
            var time = new Date().toLocaleTimeString().slice(0,-3);
            if (!localStorage.getItem('user_data')) {
                checkUserData();
            }

            showClientMessge(oper_message);
            //on_dialog
            localStorage.setItem('on_dialog', Date.now());
            saveDialog(oper_message, 'client', time);
            var uuid = localStorage.getItem('uuid');
            var user_name = localStorage.getItem('user_name');
            ws.send('{"type":"new_message_dialog","message":"'+oper_message.replace(/"/g,"'")+'","name":"'+user_name+'","link":"'+window.location.href.replace(/"/g,"'")+'","user_id":"'+uuid+'","widget_id":"' + widget_id + '"}');

            document.getElementById("message_text").value = ''; //очистка инпута для ввода
            var block = document.getElementById("dialog_listening"); //Прокрутка
            block.scrollTop = block.scrollHeight; //Прокрутка
        }

        function showClientMessge(message) {
            jQuery("#talker_widget #dialog_listening").append('<div class="client_message"><div class="icon_left_my_dialog">  <div class="inline_block">    </div>  <span> '+message+' <div class="time_on_window_dialog"> '+ new Date().toLocaleTimeString().slice(0, -3) +' </div> </span> </div> </div>');
            dialog_listening.scrollTop = dialog_listening.scrollHeight; //Прокрутка
        }

        function operator_write_message() {
            document.getElementById("talker_oper_write_mess").innerHTML = 'Оператор набирает сообщение...';
            jQuery("#talker_textarea_block .talker_oper_write_mess").removeClass('talker_dispnone');
        }

        function user_whait_operator(sec) {

            document.getElementById("talker_oper_write_mess").innerHTML = 'Ожидаем оператора '+sec+' сек. <a href="#" id="talker_close_dialog">Закончить диалог </a>';
            jQuery("#talker_textarea_block .talker_oper_write_mess").removeClass('talker_dispnone');
        }

         jQuery('#talker_oper_write_mess').click(function () {
              console.log ("Закрываем диалог");
             localStorage.removeItem('waitoperator');
             localStorage.removeItem('chat_open');
             localStorage.removeItem('in_message');
             localStorage.removeItem('on_dialog');
             jQuery("#talker_oper_write_mess").addClass('talker_dispnone');
             jQuery("#message_text").addClass('talker_dispnone');
             jQuery(".file-upload").addClass('talker_dispnone');

            var mailBox =   '<form class="js_send_contacts"><div>' +
                '<p id="we_are_ofline_talker">Сейчас все опреаторы заняты, остаьте Ваши контакты, первый освободившийся менеджер с Вами свяжется</p>' +
                                   '<p id="insert_your_name">Ваше имя:</p>' +
                                   '<input type="text" id="chat_bot_dialog_name" placeholder="Имя">' +
                                   '<p id="insert_your_email">Ваш email:<span class="required_field">*</span></p>' +
                                   '<input type="text" id="chat_bot_dialog_email" placeholder="http://talker24.ru/widget/js/email@mail.ru" required>' +
                                   '</div>' +
                                   '<br><button type="submit" class="js-email-picked submit_clients_contacts">Отправить</button></form>';
                               showOperatorMessage(mailBox);
        });

        function stop_wait_operaor() {
              var wait = false;
            whait_answer_for_operator(wait);
             // console.log ("Удаляем ожидаение оператора");
            localStorage.removeItem('waitoperator');
            document.getElementById("talker_oper_write_mess").innerHTML = '';
            jQuery("#talker_textarea_block .talker_oper_write_mess").addClass('talker_dispnone');
        }

        function operator_stop_write() {
            jQuery("#talker_textarea_block .talker_oper_write_mess").addClass('talker_dispnone');
        }

        function PasrNewLineinWidget(data) {
            var time = new Date().toLocaleTimeString().slice(0, -3);
            saveDialog(data.message, 'operator', time);
            showOperatorMessage(data.message);
            //  document.getElementById("message_text").value = ''; //очистка инпута для ввода
            var block =  document.getElementById("dialog_listening"); //Прокрутка
            block.scrollTop = block.scrollHeight; //Прокрутка
            playNotif(); //Звук

        }

        function updateWidgetSettings (res) {
            res.data.parametrs[0].time = Date.now();
            localStorage.setItem("widget_settings", JSON.stringify(res.data.parametrs[0]));
        }

        function checkUserData() {
            document.getElementById("talker_info_client").style.display = 'block';
            localStorage.setItem('user_data', 'void');
        }

        function saveCheckUserData() {

            document.getElementById("talker_info_client").style.display = 'none';
            var taked_user_name = document.getElementById("talker_name_client").value.replace(/"/g,"'");
            var user_name = taked_user_name ? taked_user_name : localStorage.getItem('user_name');
            var user_email = document.getElementById("talker_email_client").value.replace(/"/g,"'");
            var user_phone = document.getElementById("talker_phone_client").value.replace(/"/g,"'");
          //  console.log ("Клиент # "+uuid+" представился: n: "+user_name+' e: '+user_email+ ' p: '+user_phone);
            var user_data = '"user_name":"' + user_name + '","user_email":"' + user_email + '","user_phone":"' + user_phone + '","uuid":"' + uuid + '","title":"' + document.title.replace(/"/g,"'") + '","link":"' + window.location.href.replace(/"/g,"'") + '"';
            ws.send('{"type":"update_name_communiation",' + user_data + ',"user_id":"' + uuid + '","widget_id":"' + widget_id + '"}');
            localStorage.setItem('user_data', '{'+ user_data +'}');
            localStorage.setItem('user_name', user_name);
            localStorage.setItem('user_email', user_email);
            localStorage.setItem('user_phone', user_phone);
            entering_values_of_form(user_name, user_email, user_phone); //Передаем в форму сохраненные данные
        }

        jQuery('#talker_save_client_data').click(function () {
            saveCheckUserData();

        });

        jQuery('#talk_mobile_phone_ico').click(function () { //Заказ обратного звонка
            jQuery("#talker_widget").removeClass('talker_dispnone');
            jQuery("#talker_call_back_button").removeClass('talker_dispnone');
            jQuery('#talker_name_client').focus();
            jQuery("#popup__toggle").addClass('talker_dispnone'); //Убираем виджет кроме чата
            setTimeout(function () {
                var block = document.getElementById("dialog_listening"); //Прокрутка
                block.scrollTop = block.scrollHeight; //Прокрутка
            }, 500);
        });

        talk_message_ico.addEventListener("click", messageOnClick);
        function messageOnClick() { //письмо
            jQuery("#talker_widget").removeClass('talker_dispnone');
            jQuery("#talker_message_back_button").removeClass('talker_dispnone');
            //прячем сообщения чата
            jQuery('.operator_message').css("display", 'none');
            jQuery('.client_message').css("display", 'none');
            jQuery('#talker_message_email_client').focus();
            jQuery("#popup__toggle").addClass('talker_dispnone'); //Убираем виджет кроме чата
            setTimeout(function () {
                var block = document.getElementById("dialog_listening"); //Прокрутка
                block.scrollTop = block.scrollHeight; //Прокрутка
            }, 500);
        }


        jQuery('#uploadedFile').change(function (ev) {
            loadFileImg.src = '20x20_loading.gif'/*tpa=https://talker24.ru/20x20_loading.gif*/;
            //var formData = new FormData();
            //formData.append('photo', file);
            ws.send('{"type":"upload_file","file_name":"' + ev.target.files[0].name + '","uuid":"' + uuid + '"}');

            //loadFileImg.src = 'upload_ico.png'/*tpa=https://talker24.ru/assets/widget/icons_cons_white/upload_ico.png*/

            // var request = new XMLHttpRequest();
            // request.o pen('POST', 'https://crossorigin.me/https://talker24.ru/admin/dialogFile');
            // request.send(formData);
            // request.addEventListener('load', function () {
            //     console.log (request.responseText);
            // })

            // fetch('https://talker24.ru/admin/dialogFile', { body: formData, method: 'POST' })
            //     .then(
            //         function (data) {
            //             console.log(data);
            //         },
            //         function (data) {
            //             console.log(data);
            //         }
            //     );
        });

        function uploadFile(upload_url,download_url) {
            $.ajax({
                type: 'PUT',
                url: upload_url,//"<YOUR_PRE_SIGNED_UPLOAD_URL_HERE>",
                // Content type must much with the parameter you signed your URL with
                contentType: 'binary/octet-stream',
                // this flag is important, if not set, it will try to send data as a form
                processData: false,
                // the actual file is sent raw
                data: uploadedFile.files[0]
            })
                .success(function() {
                    sendUploadedFile(download_url);
                })
                .error(function() {
                    console.log('File NOT uploaded');
                    console.log( arguments,arguments[0].responseText);
                    return false;
                });
        }

        function sendUploadedFile(download_url) {
            var time = new Date().toLocaleTimeString().slice(0,-3);
            var fileMessage = '<span class=service_mes_adm>Передан файл:<span class=service_mes_adm> <a href=\'' + download_url + '\'>' + uploadedFile.files[0].name + '</a>';
            sendMesage(fileMessage);
            saveDialog(fileMessage, 'client', time);
            loadFileImg.src = 'upload_ico.png'/*tpa=https://talker24.ru/assets/widget/icons_cons_white/upload_ico.png*/;
            showClientMessge(fileMessage);
        }

        jQuery('#talk_send_phone').click(function (e) { //Отправка телефона для десктопа
            var phone = document.getElementById("talker_number_phone").value;

            if (phone.length<16) {

                jQuery("#talker_number_phone").css( //Подсвечиваем красным
                    {'border': '1px solid #ff6b6b'}
                );

            }
            else {
                jQuery("#talker_number_phone").css( //Подсвечиваем красным
                    {'border': 'none'}
                );
                var user_name = localStorage.getItem('user_name');
                ws.send('{"type":"send_phone_call","phone":"'+phone+'","message":"","name":"'+user_name+'","link":"'+window.location.href.replace(/"/g,"'")+'","user_id":"'+uuid+'","widget_id":"' + widget_id + '"}');
                sendMesage('Клиент заказал обратный звонок на номер: ' + phone);
                document.getElementById("talker_number_phone").value = ''; //очистка инпута для ввода
                jQuery("#talker_complete").removeClass('talker_dispnone');
                jQuery('.img-circleblock').trigger('click'); //Находим первый и кликаем по нему

                setTimeout(function () {
                    jQuery("#talker_complete").addClass('talker_dispnone');
                }, 2000);
            }

        });

        jQuery('#talker_save_call_back_but').click(function (e) { //Обратный звонок
            var name = document.getElementById("talker_callback_name_client").value.replace(/"/g,"'");
            var phone = document.getElementById("talker_callback_phone_client").value;

            if (phone.length<16 || name.length==0) {
                jQuery("#talker_callback_phone_client").css( //Подсвечиваем красным
                    {'border': '1px solid #ff6b6b'}
                );
                jQuery("#talker_callback_name_client").css( //Подсвечиваем красным
                    {'border': '1px solid #ff6b6b'}
                );
console.log ("Что-то не заполнено");
            }
            else {
                jQuery("#talker_callback_phone_client").css( //Подсвечиваем красным
                    {'border': 'none'}
                );
                jQuery("#talker_callback_name_client").css( //Подсвечиваем красным
                    {'border': 'none'}
                );
                console.log ("Имя "+name+" Телефон "+phone);
                ws.send('{"type":"send_call_back","phone":"'+phone+'","message":"","name":"'+name+'","link":"'+window.location.href.replace(/"/g,"'")+'","user_id":"'+uuid+'","widget_id":"' + widget_id + '"}');
                sendMesage('Клиент заказал обратный звонок на номер: ' + phone);
                document.getElementById("talker_callback_phone_client").value = ''; //очистка инпута для ввода
                document.getElementById("talker_callback_name_client").value = ''; //очистка инпута для ввода
                jQuery("#talker_complete").removeClass('talker_dispnone');
                jQuery('#talker_close_button').trigger('click'); //Находим первый и кликаем по нему

                setTimeout(function () {
                    jQuery("#talker_complete").addClass('talker_dispnone');
                }, 3000);
            }

        });

        jQuery('#talker_save_message_but').click(function (e) { //Отправка сообщения для моб. версии
            var email = document.getElementById("talker_message_email_client").value.replace(/"/g,"'");
            var text = document.getElementById("talker_message_text_client").value.replace(/"/g,"'");

            if (email.length == 0 || name.text == 0) {
                jQuery("#talker_message_email_client").css( //Подсвечиваем красным
                    {'border': '1px solid #ff6b6b'}
                );
                jQuery("#talker_message_text_client").css( //Подсвечиваем красным
                    {'border': '1px solid #ff6b6b'}
                );

            }
            else {
                jQuery("#talker_message_email_client").css( //Подсвечиваем красным
                    {'border': 'none'}
                );
                jQuery("#talker_message_text_client").css( //Подсвечиваем красным
                    {'border': 'none'}
                );
                var user_name = localStorage.getItem('user_name');
                ws.send('{"type":"send_message_back","name":"'+user_name+'","message":"'+text+'","email":"'+email+'","link":"'+window.location.href.replace(/"/g,"'")+'","user_id":"'+uuid+'","widget_id":"' + widget_id + '"}');
                //sendMesage('Клиент оставил письмо с адреса: ' + email);
                document.getElementById("talker_message_email_client").value = ''; //очистка инпута для ввода
                document.getElementById("talker_message_text_client").value = ''; //очистка инпута для ввода
                jQuery("#talker_complete").removeClass('talker_dispnone');
                jQuery('#talker_close_button').trigger('click'); //Находим первый и кликаем по нему

                setTimeout(function () {
                    jQuery("#talker_complete").addClass('talker_dispnone');
                }, 3000);
            }

        });

        jQuery('.img-circleblock').click(function (e) {
            jQuery("#talker_phone_slice").addClass('talker_dispnone'); //Убираем ввод телефона
            jQuery("#talker_widget").addClass('talker_dispnone'); //Убираем ввод телефона
            jQuery(".talker_icons").removeClass('phone-active');

        });

        jQuery('#talk_phone_ico').click(function (e) { //Событие на телефон
            jQuery("#talker_phone_slice").removeClass('talker_dispnone');
            jQuery(".talker_icons").removeClass('ico_hover');
            jQuery(".talker_icons").addClass('phone-active');
        });

        talk_chat_ico.addEventListener("click", chatOnClick); //Событие при клике на




        function chatOnClick() { //функция открытия окна чата при клике на иконку чата
            if (wigetSettings.invite_type == 'automessage') {
                jQuery("#talker_widget").removeClass('talker_dispnone');
                jQuery("#popup__toggle").addClass('talker_dispnone'); //Убираем виджет кроме чата
                localStorage.setItem("chat_open", true);
                setTimeout(function () {
                    var block = document.getElementById("dialog_listening"); //Прокрутка
                    block.scrollTop = block.scrollHeight; //Прокрутка
                }, 500);
            }
            if (wigetSettings.invite_type == 'chat_bot') {
                jQuery("#talker_widget").removeClass('talker_dispnone');
                jQuery("#popup__toggle").addClass('talker_dispnone'); //Убираем виджет кроме чата
                localStorage.setItem("chat_open", true);
                setTimeout(function () {
                    var block = document.getElementById("dialog_listening"); //Прокрутка
                    block.scrollTop = block.scrollHeight; //Прокрутка
                }, 500);
                ws.send('{"type":"get_chat_bot_questions","widget_id":"'+ widget_id +'","uuid":"' + uuid + '"}');

            }

        }



        jQuery('#close_call_back_form').click(function (e) { //Закрытие формы обратного звонка
            jQuery("#talker_call_back_button").addClass('talker_dispnone');
        });
        // jQuery('#close_message_back_form').click(function (e) { //Закрытие формы обратного звонка
        //     jQuery("#talker_message_back_button").addClass('talker_dispnone');
        //     jQuery('#talker_close_button').trigger('click'); //Находим первый и кликаем по нему
        // });

        jQuery('#talker_close_button').click(function (e) { //Закрытие чата
            jQuery("#popup__toggle").removeClass('talker_dispnone'); //Убираем виджет кроме чата
            jQuery("#talker_widget").addClass('talker_dispnone'); //Убираем виджет кроме чата
            jQuery("#talker_call_back_button").addClass('talker_dispnone');
            jQuery("#talker_message_back_button").addClass('talker_dispnone');
            //возращаем сообщения чата
            jQuery('.operator_message').css("display", 'block');
            jQuery('.client_message').css("display", 'block');
            localStorage.setItem("chat_open", 'false');
        });

        jQuery('#popup__toggle').mouseover(function (e) { //Показ иконок
            jQuery(".talker_icons").addClass('ico_hover'); //Вызжает панель
        });
        jQuery('#popup__toggle').mouseout(function (e) { //Скрытие иконок приотводе наведения
            setTimeout(function () {
                //    jQuery(".talker_icons").removeClass('ico_hover');
            }, 5000);
        });

        jQuery(function(){
            jQuery("#talker_number_phone").mask("8(999) 999-99-99");
            jQuery("#talker_callback_phone_client").mask("8(999) 999-99-99");
        });

        function saveDialog(msg, sender, time) {
            if (dialogBox.length > 9) {
                dialogBox = dialogBox.slice(1, 10);
            }
            dialogBox.push({msg: msg, sender: sender, time: time});
            localStorage.setItem('dialog_box', JSON.stringify(dialogBox));
        }

        jQuery("#message_text").keyup(function(event){ //Отправка сообщения
            var oper_message = jQuery("#message_text").val().replace(/"/g,"'");
            //console.log(oper_message);
            if(event.keyCode == 13 && oper_message!=''){
                event.preventDefault();
                sendClientMessge(oper_message);
            } else {
                setTimeout(function () {
                    var oper_message = document.getElementById("message_text").value.replace(/"/g,"'");
                    if (oper_message.length > 1) {
                        ws.send('{"type":"client_service_message","service":"typing_insight","event":"input_changed","new_val":"'+oper_message+'","uuid":"'+uuid+'","widget_id":"' + widget_id + '"}');
                    }
                }, 100);
            }
        });

        function sendMesage(msg) {
            var user_name = localStorage.getItem('user_name');
            ws.send('{"type":"new_message_dialog","message":"'+msg+'","name":"'+user_name+'","link":"'+window.location.href.replace(/"/g,"'")+'","user_id":"'+uuid+'","widget_id":"' + widget_id + '"}');
        }

        function offlineChat(enabled) {
            if (enabled) {
                offlineChatOn = true;
                jQuery('.offline-notice').text('К сожалению, в настоящий момент никого из консультантов нет в сети. Вы можете оставить письмо, указав свой электронный адрес.');
                talk_chat_ico.removeEventListener("click", chatOnClick);
                talk_chat_ico.addEventListener("click", messageOnClick);
                if (talker_widget.className != "talker_dispnone") {
                    jQuery('#talk_chat_ico').trigger("click");
                }
            } else {
                offlineChatOn = false;
                jQuery('.offline-notice').text('');
                talk_chat_ico.removeEventListener("click", messageOnClick);
                talk_chat_ico.addEventListener("click", chatOnClick);
            }
        }

        document.onmousemove = function (ev) {
            if (ev.screenY < 85 && !chatBotActivity && !chatBotComplete) {
                greetings(wigetSettings.auto_message ? wigetSettings.auto_message : 'Здравствуйте, Чем я могу Вам помочь?');
            }
        }

          jQuery('body').on('click', '#submin_talker_generator',  function () { //Отправка заявки с формы генератор клиента

        //  console.log("Отправка генератора клиентов");
                  var phone = document.getElementById("phone_generator_talker").value;

                  if (phone.length<16) {

                      jQuery("#phone_generator_talker").css ( //Подсвечиваем красным
                          {'border': '1px solid #ff6b6b'}


                      );
                     ;
                  }
                  else {
                      jQuery("#phone_generator_talker").css( //Убираем Подсвечиваем красным
                          {'border': 'none'}
                      );
                      ws.send('{"type":"send_phone_call","phone":"'+phone+'","message":"","name":"'+user_name+'","link":"'+window.location.href.replace(/"/g,"'")+'","user_id":"'+uuid+'","widget_id":"' + widget_id + '"}');
                      sendMesage('Заявка с формы Генератор Клиентов: ' + phone);
                      document.getElementById("phone_generator_talker").value = ''; //очистка инпута для ввода
                      jQuery("#talker_complete").removeClass('talker_dispnone');
                      jQuery('.img-circleblock').trigger('click'); //Находим первый и кликаем по нему

                      jQuery('#talker_span_close_form').trigger('click'); //Находим первый и кликаем по нему


                      setTimeout(function () {
                          jQuery("#talker_complete").addClass('talker_dispnone');
                      }, 2000);
                  }

              });



      function insertModalFormTalker() { //Функция подгрузки формы генератора клиентов
          wigetSettings = JSON.parse(localStorage.getItem('widget_settings')); // Получем настройки виджета из локала
          var title_generator = wigetSettings.title_generator ? wigetSettings.title_generator : 'Уходите?';
          var generator_image = wigetSettings.generator_image ? wigetSettings.generator_image : 'https://talker24.ru/widget/image/generator/first.png';
          var button_generator = wigetSettings.button_generator ? wigetSettings.button_generator : 'Отправить';
          var desc_generator = wigetSettings.desc_generator ? wigetSettings.desc_generator : 'У нас есть отличное предложение специально для Вас!';

          var talker_modal_form = document.createElement('div'); // is a node
          talker_modal_form.innerHTML = '<div class="arcticmodal-overlay-talker talker_dispnone" style="background-color: rgb(0, 0, 0); opacity: 0.7;"></div>'+
          '<div class="arcticmodal-container-talker talker_dispnone" style=""><table class="arcticmodal-container_i_talker"><tbody><tr><td class="arcticmodal-container_talker2"><section class="talker_offer">'+
              '<span id="talker_span_close_form">Закрыть</span>'+
              '<div class="talker_modal_left_column">'+
              '<h2>'+title_generator+'</h2>'+
              '<p>'+desc_generator+'</p>'+
              '<input name="phone_generator" id="phone_generator_talker" class="phone_generator" type="text" placeholder="Ваш номер телефона">'+
                  '<button class="submin_talker_generator" id="submin_talker_generator">'+button_generator+'</button>'+
              '</div>'+
              '<div class="talker_modal_right_column">'+
                  '<img src="'+generator_image+'">'+
              '</div>'+
              '</section>'+
              '<div class="talker24_copyright"> <a target="_blank" href="https://talker24.ru/"> Помогаем покупать - Talker24.ru </a></div>'+
              '</td></tr></tbody></table></div>'+
                  '<audio id="talker_audio" preload="auto"> <source src="https://talker24.ru/widget/notification.mp3" type="audio/ogg; codecs=vorbis"></audio>'

          ;
          document.body.appendChild(talker_modal_form);
      }

    jQuery(document).mouseleave(function () {

        wigetSettings = JSON.parse(localStorage.getItem('widget_settings')); // Получем настройки виджета из локала
        var time = Date.now(); //Текущее время Unix
        var last_generator_open = localStorage.getItem('talker_generator_time') ? localStorage.getItem('talker_generator_time') : time;


        var repeat_generator = 300000;
        var timeForGhost = +time - +last_generator_open; //Разница между текущим временем и последним открытием

        if (wigetSettings.repeat_generator) {
            var repeat_generator = wigetSettings.repeat_generator*1000; //
        }
            //Время последнего запуска
        var nu = (+repeat_generator - +timeForGhost) / 1000;
        //console.log ('Генератор клиентов откроется через '+ nu +' сек.');



        if (timeForGhost > repeat_generator || !localStorage.getItem('talker_generator_time')) { //Если время больше 5 минут - отправляем запрос

            var active_generator = wigetSettings.active_generator;

            if (active_generator) {
                playNotif(); //Звук при открытии генератора клиентов
                jQuery(".arcticmodal-overlay-talker").removeClass('talker_dispnone');
                            jQuery(".arcticmodal-container-talker").removeClass('talker_dispnone');
                jQuery("#phone_generator_talker").mask("8(999) 999-99-99");

            }
            localStorage.setItem('talker_generator_time', time); //Записываем вермя вызова генератора как текущее

        }




    });

    jQuery('body').on('click', '#talker_span_close_form',  function () { //Закрытие формы генератор клиентов
        jQuery(".arcticmodal-overlay-talker").addClass('talker_dispnone');
        jQuery(".arcticmodal-container-talker").addClass('talker_dispnone');
    });

jQuery('body').on('click', '.arcticmodal-overlay-talker',  function () { //Закрытие формы генератор клиентов
        jQuery(".arcticmodal-overlay-talker").addClass('talker_dispnone');
        jQuery(".arcticmodal-container-talker").addClass('talker_dispnone');
    });


function playNotif() { //Функция проигрывания звука при сообщениее
    var context = new AudioContext();
             var audio = document.getElementById('talker_audio');
             audio.play();

   }



});
