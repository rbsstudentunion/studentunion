



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


// Get the modal
var modal1 = document.getElementById('myModal-1');
var modal2 = document.getElementById('myModal-2');

// Get the button that opens the modal
var btn1 = document.getElementById("modalBtn-1");
var btn2 = document.getElementById("modalBtn-2");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

var bigspan1 = document.getElementsByClassName("bigclose")[0];
var bigspan2 = document.getElementsByClassName("bigclose")[1];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
bigspan1.onclick = function() {
    modal1.style.display = "none";
}

bigspan2.onclick = function() {
    modal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if( event.target == modal2){
    		modal2.style.display = "none";
    }
}
//bilde merch

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//bilde merch beigas




