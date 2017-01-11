

document.getElementById("virsraksts").onclick = function() {
	myFunction()};

function myFunction() {
    document.getElementById("kontents").classList.toggle("para");
}

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});