jQuery(document).ready(function() {

	var navOffset = jQuery("site-header").offset().top;

	jQuery(window).scroll(function() {
		var scrollPos = jQuery(window).scrollTop();
	
		if (scrollPos >= navOffset) {
			jQuery("site-header").addClass("fixed");
		}	else {
			jQuery("site-header").removeClass("fixed");

	});


});