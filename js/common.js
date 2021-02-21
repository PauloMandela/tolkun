$(function() {
	$('.papa').click(function() {
			$(this).next('.menu3').slideToggle();
			$(this).find('div').toggleClass('papa2');
			return false;
	});
	$('#sandwich').click(function() {
		$(this).toggleClass('active')
		if ($(this).hasClass('active')) {
			$('#menu').fadeIn();
		} else {
			$('#menu').fadeOut();
		}
			// $(this).fadeTo(100, 0.4).fadeTo(100, 1);
			// $('#menu').toggleClass('menuha').toggleClass('menuha2');
	});
	over = true;
	$('#brand-btn').click(function() {
			if (over) {
					$(this).fadeTo(100, 0.4).fadeTo(100, 1, function() {
							$('#overlay').show();
							$('#overlay ul').removeClass('daun2').addClass('daun');
							$('.main').addClass('blur');
					});
			} else {
					$(this).fadeTo(100, 0.4).fadeTo(100, 1, function() {
							$('#overlay ul').removeClass('daun').addClass('daun2');
							setTimeout(function() {
									$('#overlay').fadeOut(300);
									$('.main').removeClass('blur');
							}, 500);
					});
			}
			over = !over;
	});
	$('#overlay').click(function() {
			$('#overlay ul').removeClass('daun').addClass('daun2');
			setTimeout(function() {
					$('#overlay').fadeOut(300);
					$('.main').removeClass('blur');
			}, 500);
			over = true;
	})
})