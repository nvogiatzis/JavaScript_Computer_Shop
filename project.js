'use strict';

var startsum = 0;
var specsum = 600;
var coloursum = 80;

window.onload = function () {
	const colour_btn_els = document.querySelectorAll('.colours .colour');
	const performance_btn_els = document.querySelectorAll('.performance .specs');
	const imagery_el = document.querySelector('.imagery');
	const image_el = document.querySelector('.imagery .image');

	for (let i = 0; i < performance_btn_els.length; i++) {
		let btn = performance_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.performance .specs.selected').classList.remove('selected');
			this.classList.add('selected');
			specsum = parseInt(this.value);		
		});
	}

	for (let i = 0; i < colour_btn_els.length; i++) {
		let btn = colour_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.colours .colour.selected').classList.remove('selected');
			this.classList.add('selected');
			image_el.src = "assets/" + this.dataset.name + '.jpg';
			imagery_el.style.backgroundColor = this.dataset.colour;
			coloursum = parseInt(this.value);
		});
	}	
}

function calculateTotal() {
	var boxes = document.getElementsByName("extra");
	var specsboxes = document.getElementsByName("specsextra");
	var sum = specsum + coloursum;
	
	for (var i=0; i < boxes.length; i++) {
		if (boxes[i].checked)
			sum += parseInt(boxes[i].value);
	}
	document.querySelector('input[name="total"]').value = ""+ sum.toString() + "\u20AC";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function budgetFunction() {
  document.getElementById("budgetDropdown").classList.toggle("show");
}

function midFunction() {
  document.getElementById("midDropdown").classList.toggle("show");
}

function highFunction() {
  document.getElementById("highDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.specs')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

