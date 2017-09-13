



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
var modal = document.getElementById('myModal');

var mercpic = document.getElementById("mercpic");
var mercpic1 = document.getElementById("mercpic1");
// Get the button that opens the modal

// Get the <span> element that closes the modal
var close = document.getElementById("close");

var bigclose = document.getElementById("bigclose");
// When the user clicks the button, open the modal 

  document.getElementById("myBtn").onclick = function() {
    modal.style.display = "block";
  }




// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
}

bigclose.onclick = function() {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
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

// Get the modal
var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal

// Get the <span> element that closes the modal
var close1 = document.getElementById("close1");

var bigclose1 = document.getElementById("bigclose1");
// When the user clicks the button, open the modal 

  document.getElementById("myBtn1").onclick = function() {
    modal1.style.display = "block";
  }




// When the user clicks on <span> (x), close the modal
close1.onclick = function() {
    modal1.style.display = "none";
}

bigclose1.onclick = function() {
    modal1.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
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

//bilde merch beingas