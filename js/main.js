let slideIndex = 1;
// starting point

let showSlides = (x) => {
	let castPics = document.getElementsByClassName('charSlides');
	// define a variable name for the slideshow element

	if (x > castPics.length) {
		slideIndex = 1;
	}
	// if x is larger than the length of the slideshow, loop it back to the beginning

	if (x < 1) {
		slideIndex = castPics.length;
	}
	// if x is less than one, loop it around to the end

	let i = 0;
	// iterator

	while (i < castPics.length) {
		castPics[i].style.display = 'none';
		i++;
	}
	// hide everything

	castPics[slideIndex-1].style.display = 'block';
	// unhide the one before it's currently iterating
}

showSlides(slideIndex);
// start

let plusSlides = (x) => {
	showSlides(slideIndex += x);
}
// as +1 and -1 are passed as parameters on click, add that value to the """array""" value via the limiting mechanisms in the showSlides function


function openModal() {
	document.getElementById('modalwindow').style.display = "block";
	document.getElementById('closebutton').style.display = "inline-block";
}


function closeModal() {
	document.getElementById('modalwindow').style.display = "none";
	document.getElementById('closebutton').style.display = "none";
}
