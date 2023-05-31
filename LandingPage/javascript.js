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