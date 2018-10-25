var Main = (function () {
	// variables
	var ctr = 0;

	// object
	return {
		init: function () {
			// Toggle burder menu
			$('.hamburger').on('click', function(e) {
				$(this).toggleClass('is-active');
				$('.mobile-menu').toggleClass('is-active');
				$('body').toggleClass('unscrollable');
				e.preventDefault();
			});
		},

		//--------
		nocomma: null
	};
}());

// Init after the page has loaded
jQuery(Main.init);
