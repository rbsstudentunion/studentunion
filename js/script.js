



$(document).ready(function() {
var stickyNavTop = $('.site-header').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.site-header').addClass('sticky');
} else {
    $('.site-header').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});
});


var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});