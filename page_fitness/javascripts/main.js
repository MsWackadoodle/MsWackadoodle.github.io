$(document).ready(function() {
	//footer, make round social icons
	(function() {
	  if (window.innerWidth > 992) {	
		var $foot_soc = $('#footer_social__icons').find('li'),
			$foot_soc_a = $foot_soc.find('a'),
			$foot_soc_w = $foot_soc.width();
		$foot_soc_a.css({'height': $foot_soc_w+'px',
						'line-height': $foot_soc_w+'px'}); 
		$(window).resize(function() {
			$foot_soc_w = $foot_soc.width();
			$foot_soc_a.css({'height': $foot_soc_w+'px',
							'line-height': $foot_soc_w+'px'}); 
		});
	  }
	})();
	//
	(function() {
		var $bttn = $('#bttn'),
			$bttn_close = $('#bttn_close'),
			$header = $('header'),
			$nav = $('#nav_header'),
			$icons = $('#footer_social__icons');
		$bttn.on('click', function() {
			var $this = $(this);
			// find out if this is appropriate;
			$header.append('<div class="overlay"></div>');
			$header.find('.container-fluid').append('<div class="col-xs-12 col-sm-12" id="header_social"></div>');
			$nav.css('display', 'flex');
			$icons.appendTo($header.find('#header_social'));
			$header.siblings().hide();
			$this.fadeOut(600);
			$bttn_close.fadeIn(1000);
		});
		$bttn_close.on('click', function() {
			var $this = $(this),
				$ol = $('.overlay'),
				$footer = $('#footer_social');
			// is this/
			$ol.remove();
			$icons.appendTo('#footer_social');
			$('#header_social').remove();
			$nav.hide();
			$header.siblings().show();
			$this.fadeOut(600);
			$bttn.fadeIn(1000);
		})
	})();
});