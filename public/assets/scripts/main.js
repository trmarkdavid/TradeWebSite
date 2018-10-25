var Main = (function () {
	// variables
	var ctr = 0;

	// object
	return {
		init: function () {
			var l = $("#navbar-toggler");
			l.on("click", function(o) {
				l.toggleClass("is-active")
			});                                                 
		},

		//--------
		nocomma: null
	};
}());

// Init after the page has loaded
jQuery(Main.init);
