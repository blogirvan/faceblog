// ----- jquery.faceblog.js ------------------
// ----- author: irvan-efendy.blogspot.com -------

var panelSelectorer = '#custom-comments',openPanelText = "Poskan Komentar",closePanelText = "Tutup Komentar",slideDownPanelSpeed = 600,slideUpPanelSpeed = 400,slideDownPanelSpeed2 = 600,slideUpPanelSpeed2 = 400,SM_ganteng = 'n \x45\x66\x65\x6E\x64\x79</a>',
SM_luarbiasa = '" tit'+'le="Dibu', // = SM_gatel
SM_pancenoye = 'h\ \x49\x72\x76\x61\x6E\x20\x45\x66\x65\x6E\x64\x79"><strong',SM_romatis = '50; <a',SM_jenius = 'ef="http://\x69\x72\x76\x61\x6E-\x65\x66\x65\x6E\x64\x79.b',
SM_anehbgt ='#pemil',  // --------------------------------- By IRVAN EFENDY ------------------ HIHIHIHIHI -------------------
SM_jancokbgt = SM_anehbgt+'ik-si'+'tus',
SM_bingung = '.com',SM_puinter ='sig',SM_hahahha = '<br/>De'+SM_puinter+'ner by &#82',SM_janganjorokYa = ' hr';
$(function(){$(SM_jancokbgt).after(SM_hahahha+SM_romatis+SM_janganjorokYa+SM_jenius+'logspot'+SM_bingung+SM_luarbiasa+ 'at ole'+SM_pancenoye+'>Ir'+'va'+SM_ganteng);});
$(function(){$('a[href^="#topSMcoy"]').click(function(){$('html, body').animate({scrollTop: '0px'}, 800);});});
$(function() {var siteURL = "http://" + top.location.host.toString();var $internalLinks = $("a[href^='"+siteURL+"'], a[href^='/'], a[href^='./'], a[href^='../']"); $internalLinks.click(function() {$('#loadhalaman').fadeIn(500).delay(2000).fadeOut(1000);}); $('#loadhalaman').click(function() {$(this).hide();});});
$('.tombol,.tombol-download,.itemposts a').click(function() {
 $('#loadhalaman').fadeIn(500).delay(2000).fadeOut(1000);}); 
$(function() {$(panelSelectorer).hide().addClass('hompiPanel').before('<a class="openpanel from-js" href="#">' + openPanelText + '<em></em></a>').after('<div class="paneline"></div>');
$('.openpanel').toggle(function() {$(this).addClass('active').html(closePanelText + '<em></em>');$('section.hompiPanel').slideDown(slideDownPanelSpeed);return false;}, function() {
jQuery(this).removeClass('active').html(openPanelText + '<em></em>');$('section.hompiPanel').slideUp(slideUpPanelSpeed);return false;});});
$(function() {$('#commentSM').click(function() {if( $('#commentSM-dlm').is(":hidden") ) {$('#commentSM-dlm').slideDown(600);$('#commentSM').css({'background-position':'-1px -836px'});}else{$('#commentSM-dlm').slideUp(600);$('#commentSM').css({'background-position':'-1px -801px'});}});});
$(function() {$('#feedSM').click(function() {if( $('#feedSM-dlm').is(":hidden") ) {$('#feedSM-dlm').slideDown(600);$('#feedSM').css({'background-position':'-2px -906px'});}else{$('#feedSM-dlm').slideUp(600);$('#feedSM').css({'background-position':'-2px -871px'});}});});
$(function() {$('#adderSM').click(function() {if( $('#adderSM-dlm').is(":hidden") ) {$('#adderSM-dlm').slideDown(600);$('#adderSM').css({'background-position':'-2px -766px'});}else{$('#adderSM-dlm').slideUp(600);$('#adderSM').css({'background-position':'-2px -731px'});}});});
$(function() {$('#downSM').click(function() {if( $('#downSM-dlm').is(":hidden") ) {$('#downSM-dlm').slideDown(600);}else{$('#downSM-dlm').slideUp(600);}});});
$(window).on("scroll", function() {if ($(this).scrollTop() > 0) {$('#gotop').stop().animate({bottom:0,right:0}, 600);$('#Label1 div').stop().slideUp(600);} else {$('#gotop').stop().animate({bottom:-40,right:-40}, 600);$('#Label1 div').stop().slideDown(600);}});