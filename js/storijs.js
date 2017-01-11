var slid = .slid;
var storijs = .storijs;

$slid.on('click', function () {

	$storijs.toggleClass('js-panel-open')
});
document.getElementById("virsraksts").onclick = function() {
	myFunction()};

function myFunction() {
    document.getElementById("kontents").classList.toggle("para");
}
