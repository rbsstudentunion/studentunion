
(document).ready(function() {
var stickyNavTop = ('.site-header').offset().top;
 
var stickyNav = function(){
var scrollTop = (window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    ('.site-header').addClass('fixed');
} else {
    ('.site-header').removeClass('fixed'); 
}
};
 
stickyNav();
 
(window).scroll(function() {
  stickyNav();
});
});