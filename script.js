//your JS code here. If required.
// Get all the images
const images = document.querySelectorAll('img');

// Get the reset and verify buttons
const resetBtn = document.getElementById('reset');
const verifyBtn = document.getElementById('verify');

// Get the paragraph for displaying the result
const para = document.getElementById('para');

// Get the h3 tag for displaying the instruction message
const h3 = document.getElementById('h');

// Shuffle an array
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

// Generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Reset the state to the initial state
function resetState() {
	// Hide the reset button and verify button
	resetBtn.style.display = 'none';
	verifyBtn.style.display = 'none';

	// Remove the selected class from all the images
	images.forEach(image => {
		image.classList.remove('selected');
	});

	// Hide the paragraph for displaying the result
	para.style.display = 'none';

	// Display the instruction message
	h3.innerText = 'Please click on the identical tiles to verify that you are not a robot.';
}

// Shuffle the images and assign class names to them
function shuffleImages() {
	// Generate a random number between 1 and 5 to choose the image to repeat
	const repeatIndex = getRandomNumber(1, 5);

	// Generate an array of class names
	const classNames = ['img1', 'img2', 'img3', 'img4', 'img5'];

	// Add the class names to the images
	images
