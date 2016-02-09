$(document).ready(function() {
	(function() {
		var $bttn = $('#bttn'),
			$bttn2 = $('#bttn2'),
			$menu = $('#main_menu'),
			$action_area = $('#action_area > section'),
			$bod = $(document.body);
		$bttn.on('click', function() {
			var $this = $(this);
			$this.removeClass('pulse2').addClass('bttn__click').delay(700).hide(0, function() {
				$bod.css('background', 'none');
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
				$bttn.delay(1000).show(0, function() {
					$bod.css('background', 'url(images/bg.png) 0 0 / cover');
				}).addClass('pulse2');
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
	