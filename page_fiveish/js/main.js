$(document).ready(function() {
// ******************  HEADER  ******************
// ******************          ******************
	//stuffing
	(function() {
		if (window.innerWidth > 850) {
			var $hs = $('#head_second');
			$hs.find('.col-xs-6').removeClass('col-xs-6').addClass('col-xs-3');
			$('#head_third').removeClass('col-xs-12').addClass('col-xs-6').insertAfter('#head_second .col-xs-3:first');
		}
		if (window.innerWidth < 850 ) {
			$('#navb').append('<input type="button" value="Войти" id="login_bttn">');
		} else {
			$hs.find('#bttn_n_search').append('<input type="button" value="Войти" id="login_bttn">');
		}
	})();
	//sliding #navb menu 
	(function() {
		var $b = $('#bttn'),
			$t = $('#navb'),
			$cf = $('header > .container-fluid:first'),
			$p = $t.css('right');
		$b.on('click', function() {
			if ( $t.hasClass('not_visible') == true ) {
				$t.animate({'right': 0}, 2000, function() {
					$t.removeClass('not_visible').addClass('def_visible');
				});
				$cf.animate({'width': '70%', 'margin-left': 0}, 2000);
				$('#head_third').find('a').animate({'font-size': '-=4px'}, 2000);
				$('#main_search').hide();
			} else {
				$t.animate({'right': $p}, 2000, function() {
					$t.removeClass('def_visible').addClass('not_visible');
					$('#main_search').show();
				});
				$cf.animate({'width': '100%', 'margin-left': 'auto'}, 2000);
				$('#head_third').find('a').animate({'font-size': '+=4px'}, 2000);
			}
		});
	})();
// ******************  MAIN  ******************
// ******************        ******************
	//#main_carousel text fitting
	(function() {
		if (window.innerWidth > 850) {
			var $from_to = $('#carousel_main').find('.item .car_c_1'),
				$init_txt = $from_to.find('h2').html(),
				$aft_txt = $init_txt.split(' '),
				$fin = '';
			//each word of description hould occupy its own line  
			for ( var i=0; i < $aft_txt.length; i++) {
				$fin += ($aft_txt[i] + '<br>');
			}
			//get rid of initial, insert the new
			$from_to.find('h2').remove();
			$from_to.find('h3').after('<h2>'+$fin+'</h2>');
		}
	})();


	//#recipes autoheight 
	(function() {
		if(window.innerWidth >= 992) {
			var $img = $('.img_recipe > img'),
				$hei = $('#recipes').find('.img_recipe').innerWidth()/1.5;
			$img.css('height', $hei);
		}
	})();
	//#recipes 'show more' stuff 
	(function() {
		if(window.innerWidth <=640) {
			var $recipes = $('#recipes');
			$recipes.find('.img_recipe:first').addClass('rec_showed').nextAll().hide().addClass('rec_hiddn');
			$recipes.append('<input type="button" class="more" value="Показать больше">');
			var $butt = $('.more');
			$butt.on('click', function() {
				$recipes.find('.rec_hiddn:first').show().removeClass('rec_hiddn').addClass('rec_showed');
				if ($recipes.find('.rec_showed:last').next().hasClass('rec_hiddn') === false ) {
					
					$(this).fadeOut('fast');
				}
			})
		}
	})();


	//#stickers carousel main panel
	(function() {
		var $l_arr = $('#stickers .fa-angle-left'),
			$r_arr = $('#stickers .fa-angle-right'),
			$wind = $(window).innerWidth();

		window.innerWidth > 992 ? creation(6,6) : creation(3,6);
		//arrow control =/
			$l_arr.hide();
			//in case there's nothing to slide
			if($('.liwrap').length == 1) { $r_arr.hide() }
		//getting down to business
		$r_arr.on('click', function() {
			return rightClick(function() {
				$l_arr.show();
				if ($('.stick_show').next().is(':last-of-type')) {
					$r_arr.hide();
				}
			})
		});
		$l_arr.on('click', function() {
			return leftClick(function() {
				$r_arr.show();
				if ($('.stick_show').prev().is(':first-of-type')) {
					$l_arr.hide();
				}
			})
		});
	})();


	//#get_acard: wrap the section accordingly
	(function() {
		if (window.innerWidth > 992) {
			var $gac = $('#get_acard');
			for(var i=0;i<2;i++) {
				var $d = document.createElement('div');
				$($d).appendTo($gac)
			}
			$gac.find('div:first').addClass('col-md-7 col-lg-6');
			$gac.find('div:last').addClass('col-md-5 col-lg-4 col-lg-offset-2');
			$gac.children().not('img, div').appendTo('#get_acard .col-md-7');
			$gac.find('>img').appendTo('#get_acard .col-md-5')
		}
	})();

// ******************  FOOTER  ******************
// ******************          ******************
	//850px footer show/hide submenus 
	(function() {
		$('.fa-angle-down').on('click', function() {
			var $ul = $(this).next();
			$ul.css('display') == 'none' ?
				$ul.fadeIn(1000) :
					$ul.fadeOut(500)
		});
	})();
	//show full footer 
	(function() {
		if (window.innerWidth > 1199) {
			var $fc = $('footer').find('.footer_categories');
			$('#footer_links').removeClass('col-xs-12').addClass('col-xs-8');
			$('#footer_address').addClass('col-xs-4').appendTo('footer .bg_gray:first')
		}
	})();

// ******************    ******************
// ******************    ******************
	function rightClick(cb) {
		var $sh = $('.stick_show'),
			$iw = $('#stickers').innerWidth();
		$sh.animate({'left': '-'+$iw+'px'}, 3000, function() {
			$(this).removeClass('stick_show').hide().addClass('l_queued');
		});
		$sh.next().css('left', $iw).show().animate({'left': '-='+$iw+'px'}, 3000, function() {
			$(this).removeClass('r_queued').addClass('stick_show');
		});
		cb();
	}
	function leftClick(cb) {
		var $sh = $('.stick_show'),
			$iw = $('#stickers').innerWidth();
		$sh.animate({'left': '+'+$iw+'px'}, 3000, function() {
			$(this).removeClass('stick_show').hide().addClass('r_queued');
		});
		$sh.prev().show().animate({'left': '0px'}, 3000, function() {
			$(this).removeClass('l_queued').addClass('stick_show');
		});
		cb();
	}
	function creation(showing, total) {
		//create a carcass
		for (var i=0; i<total; i++) {
			var $doc = document.createElement('div');
			var $i = document.createElement('i');
			$($doc).addClass('col-xs-'+12/showing+' li').append($i).appendTo('#stickers');
		}
		//wrap every 'showing now' divs 
		var $li = $('#stickers').find('.li'); 
		for (var i = 0; i < $li.length; i+=showing) {
		  	$li.slice(i, i+showing).wrapAll('<div class="col-xs-12 liwrap"></div>');
		}
		//the first gets shown, others get queued
		$('#stickers .liwrap:first').addClass('stick_show');
		$('.stick_show').nextAll().hide().addClass('r_queued');
	}

// ******************    ******************
// ******************    ******************
	//show modal 
	(function() {
		var $d = document.createElement('div');
		$($d).prependTo('main').addClass('modal').css({
			'display': 'block',
			'margin': '0 auto',
			'padding': '40px',
			'width': '50%',
			'height': 'auto',
			'position': 'absolute',
			'top': '20%',
			'left': '25%',
			'background-color': 'white',
			'z-index': '9999999',
			'text-align': 'center'
		}).attr('id', 'sticker');

		var $mod = $('.modal'),
		    $s = $("#sticker"),
    	    $pos = $s.position();  

    	$(window).scroll(function() {
        	var $windowpos = $(window).scrollTop();

	        if ( $windowpos >= $pos.top ) {
	            $s.addClass("stick");
	        } else {
	            $s.removeClass("stick"); 
	        }
    	});
    	//some crap
		$mod.append('<i class="fa fa-paper-plane-o" style="font-size:60px"><h2 class="text-center" style="margin: 20px 0">Hi</h2>')
			.append('<i class="fa fa-times-circle-o" style="font-size:30px;position:absolute;right:5%">')
			.append('<h3 class="text-center">This page was checked over using 640px, 480px, 992px, 1024px and 1200px physical screen width, and has compatibility with latest versions of FF, Chrome and IE. </h3>')
			.append('<p style="margin-top:20px">*note: it has no live transitions between these screen sizes; refresh the page in that case</p>')
			.hide().delay(3000).fadeIn(2000, function() {
				$mod.find('i.fa-times-circle-o').on('click', function() {
					$mod.fadeOut(1000).remove();
				})
			});
	})();
});