

var ul = document.getElementById('virsraksts');

ul.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI'){
      document.getElementById("kontents").classList.toggle("para");
    }
});




//document.querySelectorAll("slid").onclick = function() {
//	myFunction()};

//function myFunction() {
//    document.getElementById("kontents").classList.toggle("para");
//}
