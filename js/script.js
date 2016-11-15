jQuery(document).ready(function()
{
var navOffset = jQuery("site-header").offset().top;

jQuery(window).scroll(function() {
var scrollPos = jQuery(window).scrollTop();
jQuery(".status").html(scrollPos);
});


});