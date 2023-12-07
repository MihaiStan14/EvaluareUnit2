
let index = 0;
let transitionDelay = 3000;
var titlu=document.getElementById("sT");
let slideContainer = document.querySelector(".row");

let slides = slideContainer.querySelectorAll(".column");
function showSlide(slideNumber) {
	for (let slide of slides) {
		slide.style.transition = `all ${transitionDelay/1000}s linear`;
		}
slides.forEach((slide, i) => {
	slide.style.display = i == slideNumber ? "block" : "none";
});
	index++;
	if (index >= slides.length) {
		index = 0;
	}
}
	setInterval (() => showSlide(index), transitionDelay);
titlu.addEventListener("dblclick",showSlide(index));
