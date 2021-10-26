var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var grad = document.getElementById("gradient");

color1.addEventListener("input", function(){
	grad.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = grad.style.background + ";";
})

color2.addEventListener("input", function(){
	grad.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = grad.style.background + ";";
})

