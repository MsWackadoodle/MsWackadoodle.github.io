$(document).ready(function() {
	(function () {
		//initial 
		//$bg_h, $a_tg and later addition to $bg_cont skewY rule
		 //are all depend on initial css and should be 
		 //changed accordingly
		var $bg_cont = $('#bg_main'),
			$body_h = $(document.body).innerHeight(),
			$body_w = $(document.body).innerWidth(),
			$bg_h = $body_h * 0.7,
			$bg_w = $body_w;
			//skewY, 15 or 30 degree, tangent
		if ( $body_w > $body_h ) { 
			var $a_tg = Math.tan(Math.PI * (15/180)); 
		} else { var $a_tg = Math.tan(Math.PI * (30/180)); }

		//calculations
			//cathenus, a half of added height to a container 
		var $cath = ( $bg_w / 2 ) * $a_tg,
			//how low the container has slidden down 
			$slid_result = $bg_h+($cath),
			//thus how low should its bottom left get
			$substr = $body_h - $slid_result;
		if ( $body_w > $body_h ) { $bg_cont.css('top', $substr ) }
		 	else {
		 		$bg_cont.css({'top': $substr, 
		 				  'transform': 'skewY(-30deg)',
		 				  '-webkit-transform': 'skewY(-30deg)',
		 				  '-moz-transform': 'skewY(-30deg)',
		 				  '-ms-transform': 'skewY(-30deg)',
		 				  '-o-transform' : 'skewY(-30deg)'
		 	});
		}
	})();
	(function() {
		var $be_anim = $('i.fa');
		$be_anim.on('mouseenter', function() {
			$(this).addClass('sku')
		});
		$be_anim.on('mouseleave', function() {
			$(this).removeClass('sku')
		});
	})();

	(function() {
		var $bttn = $('#bttn'),
			$bttn2 = $('#bttn2'),
			$menu = $('#main_menu'),
			$action_area = $('#action_area > section');
		$bttn.on('click', function() {
			var $this = $(this);
			$this.removeClass('pulse2').addClass('bttn__click').delay(700).hide(0, function() {
				$this.removeClass('bttn__click');
				$menu.show('fold', 1000);
				$bttn2.delay(1000).show(0);
			});
		});
		$bttn2.on('click', function() {
			var $this = $(this);
			$this.addClass('bttn__click').delay(700).hide(0, function() {
				$this.removeClass('bttn__click');
				$menu.hide('fold', 1000);
				$action_area.hide();
				$bttn.delay(1000).show(0).addClass('pulse2');
			});
		});
	})();
	(function() {
		var $menu_item = $('#main_menu').find('a');			
		$menu_item.on('click', function() {
			var $this = $(this),
				$show = $('#action_area').find('#' + $this.html().toLowerCase());
				$showing = $('#action_area').find('section').filter(function() { return $(this).css("display") == "block" });
				console.log($showing);
			$showing.length > 0 ? $showing.hide('pulsate', { times: '1' }, 250, function() {
				$show.show().css('opacity', '1');
			}) : $show.show();
		});
	})();
});
	