// by Irvan Efendy
// irvan-efendy.blogspot.com

$(function() {

	// Append an emoticon bar before comment-form
	if (putEmoAbove) {
		$(putEmoAbove).before('<div class="emoWrap"> ;(( :)) :) :-) =)) ;( ;-( :d :-d @-) :p :o :&gt;) (o) [-( :-? (p) :-s (m) 8-) :-t :-b  b-( :-# =p~ $-) (-b) (f-) (x:) (;k) (=h) (:c) (~i) (r~) :gp: :wow: :rabbit: :kiss: :kopi: <center><br/><b>Click to see the code!</b><br/><i>To insert emoticon you must added at least one space before the code.</center></i></div>');
	}
	function emo(emo, imgRep, emoKey) {
		$(emoRange).each(function() {
			$(this).html($(this).html()
			.replace(/<br>(:|;|=|\^)/g, "<br> $1")
			.replace(emo, " <img src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
		});
	}
	emo(/\s;\(\(+/g, "http://1.bp.blogspot.com/-2Z7Cwe04x-Q/UH9THzWWJII/AAAAAAAACtA/ChwawyzYsDI/s1600/smile1.gif", ";((");
	emo(/\s:\)\)+/g, "http://4.bp.blogspot.com/-yXc7xHs5mXc/UKhVJLBfdaI/AAAAAAAADPY/LJKRsefyeao/s1600/sad.gif", ":))");
	emo(/\s:\)+/g, "http://2.bp.blogspot.com/-XdLZ_nr4QBY/VF9I4pN1i7I/AAAAAAAACdk/s9vonrhcKYU/s1600/ya.gif", ":)");
	emo(/\s:-\)+/g, "http://2.bp.blogspot.com/-P_fsHuVQKt8/VF9LBo4y0FI/AAAAAAAACd4/7DU8FwUv9Ao/s1600/cry.gif", ":-)");
	emo(/\s=\)\)+/g, "http://3.bp.blogspot.com/-WeTjMT8JDhg/UKhVHlZ88II/AAAAAAAADPI/b1gpiAvIkCc/s1600/icon_smile.gif", "=))");
	emo(/\s;\(+/g, "http://2.bp.blogspot.com/-bs2e9gRj748/UKhVNKLs2YI/AAAAAAAADQA/mF7lDNOChac/s1600/wee.gif", ";(");
	emo(/\s;-\(+/g, "http://1.bp.blogspot.com/-7I8DdEs58z0/UKhVKHT1yUI/AAAAAAAADPg/Lyzv-E74EdM/s1600/sadanimated.gif", ";-(");
	emo(/\s:d/ig, "http://3.bp.blogspot.com/-5zPfqshivtY/UKhVONWZnkI/AAAAAAAADQI/iCDxagcaj5s/s1600/wink.gif", ":d");
	emo(/\s:-d/ig, "http://4.bp.blogspot.com/-GEdX5rMpCZA/VF9Izb2xg7I/AAAAAAAACdM/UdD2UVfC2jk/s1600/haha.gif", ":-d");
	emo(/\s@-\)+/g, "http://4.bp.blogspot.com/-GGdRPfyalyM/VF9IxcHfQLI/AAAAAAAACc8/8-7aKPzOrOM/s1600/cool.gif", "@-)");
	emo(/\s:p/ig, "http://2.bp.blogspot.com/-DuPPAsTbzR8/VF9I0bf3c3I/AAAAAAAACdU/rI3gMIK39ME/s1600/smoking.gif", ":p");
	emo(/\s:o/ig, "http://4.bp.blogspot.com/-hPd-oj2Bzo4/UKhVLkmQjOI/AAAAAAAADPw/3O1iuAukZXg/s1600/thumb.gif", ":o");
	emo(/\s:&gt;\)+/g, "http://4.bp.blogspot.com/-ip66eq3uRI8/UKhVF-QK8lI/AAAAAAAADO4/P0G-1PcWpQs/s1600/applause.gif", ":&gt;)");
	emo(/\s\(o\)+/ig, "http://2.bp.blogspot.com/-yElQmFAIiII/UKhVMcObcQI/AAAAAAAADP4/-qdEpW8zCmY/s1600/thumbsup.gif", "(o)");
	emo(/\s\[-\(+/g, "http://1.bp.blogspot.com/-2NKY9Hciu1Q/U2xKuA6sSKI/AAAAAAAABUI/jMgZcwVcKrU/smiley-shocked.gif", "[-(");
	emo(/\s:-\?/g, "http://1.bp.blogspot.com/-eaUeP0dZ_LM/VF9IxYHLTjI/AAAAAAAACc0/w3Urc2UUFHE/s1600/confuse.gif", ":-?");
	emo(/\s\(p\)+/ig, "http://1.bp.blogspot.com/-5-VIBDzoY8A/U2xKsmJH4RI/AAAAAAAABT4/cgVqBfwwmMc/smiley-scared.gif", "(p)");
	emo(/\s:-s/ig, "http://3.bp.blogspot.com/-prD5v6jI3N8/VF9I3bfhb_I/AAAAAAAACdc/8gJ_l7Ee9sE/s1600/ugh.gif", ":-s");
	emo(/\s\(m\)+/ig, "http://1.bp.blogspot.com/-IoZJlpB0-dE/UKhVKnR0BDI/AAAAAAAADPo/Kz87N1Aj4X8/s1600/smile.gif", "(m)");
	emo(/\s8-\)+/ig, "http://4.bp.blogspot.com/-3kaQ8_QxO3Y/VF9I417uHbI/AAAAAAAACdo/G2RteelQUpw/s1600/vomit.gif", "8-)");
	emo(/\s:-t/ig, "http://4.bp.blogspot.com/-w1VfvgO2-e8/UKhVIT7XLhI/AAAAAAAADPQ/cJ0KDjEsoj4/s1600/rolleyes.gif", ":-t");
	emo(/\s:-b/ig, "http://2.bp.blogspot.com/-4cACzFY6btc/U2xKrupANzI/AAAAAAAABTo/8fVhhvbgY-s/s1600/smiley-laughing.gif", ":-b");
	emo(/\sb-\(+/ig, "http://2.bp.blogspot.com/-D_dYWMeNXV4/VF9H3O6rzGI/AAAAAAAACcs/Aqo92VaFw-Q/s1600/heart.png", "b-(");
	emo(/\s:-#/ig, "http://4.bp.blogspot.com/-yV1xnDPLOZ4/U2xKrMOD3XI/AAAAAAAABTY/xuxF2Nus3nU/s1600/smiley-goodluck.gif", ":-#");
	emo(/\s=p~/ig, "http://2.bp.blogspot.com/-V8vNHZ3TerE/U2xKqvDaBhI/AAAAAAAABTQ/e_zOhsLuOwo/s1600/smiley-confused.gif", "=p~");
	emo(/\s\$-\)+/ig, "http://1.bp.blogspot.com/--iI4kMyPCoI/VF9IxdahMLI/AAAAAAAACc4/x--hi_SNrYo/s1600/crazy.gif", "$-)");
	emo(/\s\(-b\)+/ig, "http://3.bp.blogspot.com/-tdkbm113siw/U2xKui-1hMI/AAAAAAAABUQ/pfQ0bPHfV4M/s1600/smiley-thankz.gif", "(-b)");
	emo(/\s\(f-\)+/ig, "http://1.bp.blogspot.com/-VkQPThMv8Js/VF9AI0KtHPI/AAAAAAAACcc/Ejl7lEdlD8o/s1600/jempol.png'", "(f-)");
	emo(/\s\(x:\)+/ig, "http://irvanefendyblogger.googlecode.com/files/029.gif", "(x:)");
	emo(/\s\(;k\)+/ig, "http://irvanefendyblogger.googlecode.com/files/030.gif", "(;k)");
	emo(/\s\(=h\)+/ig, "http://irvanefendyblogger.googlecode.com/files/031.gif", "(=h)");
	emo(/\s\(:c\)+/ig, "http://irvanefendyblogger.googlecode.com/files/032.gif", "(:c)");
	emo(/\s\(~i\)+/ig, "http://irvanefendyblogger.googlecode.com/files/033.gif", "(~i)");
	emo(/\s\(r~\)+/ig, "http://irvanefendyblogger.googlecode.com/files/034.gif", "(r~)");
	emo(/\s:gp:/ig, "http://irvanefendyblogger.googlecode.com/files/035.gif", ":gp:");
	emo(/\s:wow:/ig, "http://irvanefendyblogger.googlecode.com/files/036.gif", ":wow:");
	emo(/\s:rabbit:/ig, "http://irvanefendyblogger.googlecode.com/files/037.gif", ":rabbit:");
	emo(/\s:kiss:/ig, "http://irvanefendyblogger.googlecode.com/files/038.gif", ":kiss:");
	emo(/\s:kopi:/ig, "http://irvanefendyblogger.googlecode.com/files/039.gif", ":kopi:");
  
         // by Irvan Efendy
	// Show alert one times!
	$('.emoWrap').one("click", function() {
		if(emoMessage) {
			alert(emoMessage);
		}
	});
	// Click to show the code!
       // irvan-efendy.blogspot.com
	$('.emo').css('cursor', 'pointer').live("click", function(e) {
		$('.emoKey').remove();
		$(this).after('<input class="emoKey" type="text" size="6" value=" ' + this.alt + '" />');
		$('.emoKey').trigger("select");
		e.stopPropagation();
	});
	$(document).on("click", function() {
		$('.emoKey').remove();
	});

});