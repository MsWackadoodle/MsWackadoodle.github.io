$(document).ready(function() {

	//move a 'speech arrow' around a p tag 
	(function() {
		if (window.innerWidth < 768) {
			$('.bubble').addClass('bubula_d').removeClass('bubula_r');
			$('#customers .col-md-4').css('margin-bottom', '15px');
		} else if (window.innerWidth < 992) {
			$('.bubble').addClass('bubula_r').removeClass('bubula_d');
		} else {
			$('.bubble').addClass('bubula_d').removeClass('bubula_r');
		}
	})();
	//similar
	(function() {
		$(window).resize(function() {
			if (window.innerWidth < 768) {
				$('.bubble').addClass('bubula_d').removeClass('bubula_r');
				$('#customers .col-md-4').css('margin-bottom', '15px');
			} else if (window.innerWidth < 992) {
				$('.bubble').addClass('bubula_r').removeClass('bubula_d');
			} else {
				$('.bubble').addClass('bubula_d').removeClass('bubula_r');
			}
		});
	})();

	//clear input fields on click
	(function(){
		$('input[type=text]').on('click', function() {
			//an input have an id which begins with 'send' e.g. 'sendName'(see html l285)
			var init = $(this).attr('id').slice(4);
			if ( $(this).attr('value', init) ) {
				$(this).attr('value', '')
			}
		});
	})();

	//on resolution < 768px add vertical line to the upper navbar on the left
	(function() {
		var $nb = $('.navbar.navbar-default');
		$('.navbar-toggle').click(function() {
			//                   vv-toggled? 
			$('#navb').hasClass('in') ? $nb.css('border-left', 'none') : $nb.css('border-left', '2px solid white');
		});
	})();

	//move #social icons to the upper toggled menu, hide #social div
	(function() {
		if (window.innerWidth < 560) {
			//hide anyway
			$('#social').hide();
			//if toggled, move icons to the menu
			$('.navbar-toggle').click(function() {
				var $ext = $('#extract-social'),
					$app = $('#append-social');
				if ($app.find('a').length === 0) {
					$ext.find('a').css({
										'font-size':'30px',
										'color': '#C5C6C7'}).appendTo('#append-social');
					$app.find('a:even').css('margin', '10px 18px 10px 0px');
					$app.find('a:first').css('margin-right', '20px');
					$app.find('a:first').next().after("</br>");
				} else {
					$app.find('a').appendTo('#extract-social');
					$app.find('br').remove();
				}
			});	
		} else {
			$('#social').show();
		}		
	})();

	//show adescription of price tabs on click
	(function() {
		var $pt = $('.pricetab');
		if (window.innerWidth < 768) {
			$pt.find('h2').after('<p class="pt_expand">What\'s there?</p>');
			var $pt_exp = $('.pt_expand');
			$pt_exp.css('cursor', 'pointer');
			$pt_exp.on('click', function() {
				var $sibs = $(this).siblings('ul');
				$sibs.css('display') === 'none' ? $sibs.fadeIn(1000) : $sibs.fadeOut(1000);
			});
		}
	})();
	//description too
	(function() {
		var $d = $('#distinctive_h3').height(),
			$pt = $('#pricing').find('.pricetab').not(':nth-of-type(2)');
		if (window.innerWidth >= 768) {
			//'+30' does mean that h3 el-t has 15px 0px padding; if changed
			//in css rule, it has to be changed here.
			//i could've written code in here to automatize that, but i wont. 
			$pt.css('margin-top', $d+30);
		}
		$(window).resize(function() {
			var $d = $('#distinctive_h3').height();
			window.innerWidth >= 768 ?
				$pt.css('margin-top', $d+30) :
					$pt.css('margin-top', 0);
		});
	})();
});