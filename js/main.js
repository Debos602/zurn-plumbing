(function ($) {
	"use strict";
	$(document).ready(function () {
		$(".pipe-image").beforeAfter();
		$(".guarantee").hover(
			function () {
				$(this)
					.find(".animation")
					.addClass("animate__animated wow animate__flipInX");
			},
			function () {
				$(this)
					.find(".animation")
					.removeClass("animate__animated wow animate__flipInX");
			}
		);
		new WOW().init();
	});
})(jQuery);
