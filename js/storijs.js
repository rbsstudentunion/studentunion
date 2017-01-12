
var elements = document.getElementsByTagName('li')
for(var i=0;i<elements.length;i++)
	elements[i].onclick = myFunction;
  
 function myFunction(e) {
 	this.classList.toggle('para');
}