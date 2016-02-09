$(document).ready(function() {
	//mobile navigation stuff
	(function() {
		var $bttn = $('#bttn'),
			$nav = $('#header_navbar'),
			$text = $('#top_ad-searchtours__tagline'),
			$hei = $nav.height();
			//slide the navigation menu down
		$bttn.on('click', function() {
			if ( $nav.css('display') == 'none') {
				$text.animate({'margin-top': '+='+$hei+'px'});
			} else { $text.animate({'margin-top': '-='+$hei+'px'}); }
			$nav.animate({height: 'toggle'});
		});
	})();
	//clear input value on click if default / set default value on blur if nothing in there
	(function() {
		var $input = $('#top_ad-searchtours').find('.default_input__text');
		$input.each(function() {
			var default_value = this.value;
       		$(this).focus(function(){
               if (this.value == default_value) { this.value = ''; }
       		});
       		$(this).blur(function(){
               if(this.value == '') { this.value = default_value; }
       		});
		});
	})();

	//adjust circles' (#find_a_tour) height
	(function() {
		var $wrap = $('#find_a_tour').find('.wrap');
		if (window.innerWidth >= 1024) {
			var $wrap_wid = $wrap.innerWidth();
			$wrap.innerHeight($wrap_wid);
		}
		$(window).resize(function() {
			if (window.innerWidth >= 1024) {
				var $wrap_wid = $wrap.innerWidth();
				$wrap.innerHeight($wrap_wid);
			}
		});
	})();
	//#promo covers mobile <=640px design (squares)
	(function() {
		var $promo_bit = $('#promo').find('.col-xs-6'),
			$wid = $promo_bit.innerWidth();
		if ( window.innerWidth > 640 ) {
			$promo_bit.innerHeight($wid * 0.77)
		} else {
			$promo_bit.innerHeight($wid);
		}
	})();
});