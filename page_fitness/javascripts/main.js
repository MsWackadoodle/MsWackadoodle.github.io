$(document).ready(function() {
	(function() {
		var $foot_soc = $('#footer__social').find('li'),
			$foot_soc_a = $foot_soc.find('a'),
			$foot_soc_w = $foot_soc.width();
		$foot_soc_a.css({'height': $foot_soc_w+'px',
						'line-height': $foot_soc_w+'px'}); 
		$(window).resize(function() {
			$foot_soc_w = $foot_soc.width();
			$foot_soc_a.css({'height': $foot_soc_w+'px',
							'line-height': $foot_soc_w+'px'}); 
		})
	})();
});