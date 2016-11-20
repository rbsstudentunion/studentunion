function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#content-anchor').offset().top;
    if (window_top > div_top) {
        $('#site-header').addClass('stick');
        $('#site-header-phantom').show();
    } else {
        $('#site-header').removeClass('stick');
        $('#site-header-phantom').hide();
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});