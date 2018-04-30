const css = document.querySelector ("h3");
const color1 = document.querySelector (".color1");
const color2 = document.querySelector (".color2");
const color3 = document.querySelector ("color3");
const body = document.getElementById ("gradient");
const colorChange = document.querySelector("colorChange");

const setGradient() => 	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value
		+ ","
		+ color2.value
		+ ")";
	css.textContent = body.style.background + ";";

const textGradient () =>
	colorChange.style.color = color3.value;

color1.addEventListener ("input", setGradient);
color2.addEventListener ("input", setGradient);
color3.addEventListener ("input", textGradient);