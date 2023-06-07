// JavaScript
const images = [
  "../LandingPage/EmilyGordon1.png",
  "../LandingPage/EmilyGordon2.png",
  "../LandingPage/EmilyGordon3.png",
  "../LandingPage/EmilyGordon4.png",
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function displayRandomImage() {
  const randomImage = getRandomImage();
  const imgElement = document.getElementById("random-image");
  imgElement.src = randomImage;
}

// Display initial image
displayRandomImage();

// // Display a new image every 5 seconds
// setInterval(displayRandomImage, 200);

const imgContainer = document.getElementById("image-container");
const imgElement = document.getElementById("random-image");

let intervalId;

imgElement.addEventListener("mouseover", function() {

  intervalId = setInterval(displayRandomImage, 300);
});

imgElement.addEventListener("mouseleave", function() {
  
  clearInterval(intervalId);

});

var element = document.getElementById('art-gallery');

element.addEventListener('wheel', function(e) {
  e.preventDefault();
  var delta = e.deltaY || e.detail || e.wheelDelta;
  var scrollLeft = element.scrollLeft;
  element.scrollLeft = scrollLeft + delta;
});



const text = "This is the text to be typed out.";
const delay = 100; // Delay between each character (in milliseconds)

const typingTextElement = document.getElementById('typing-text');
const typingCursorElement = document.createElement('span');
typingCursorElement.classList.add('typing-cursor');
typingTextElement.appendChild(typingCursorElement);

let index = 0;

function typeNextCharacter() {
  typingTextElement.textContent += text[index];
  index++;

  if (index < text.length) {
    setTimeout(typeNextCharacter, delay);
  } else {
    typingCursorElement.classList.remove('typing-cursor');
  }
}

typeNextCharacter();
