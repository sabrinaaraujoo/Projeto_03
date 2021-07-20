$(function() {

	$('nav a').click(function() {
		var href = $(this).atrr('href');
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop});

		return false;
	});

});