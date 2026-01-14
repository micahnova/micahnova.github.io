// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('open');
});

// Image carousel logic
const images = [
  "assets/AT_Walker_01.jpg",
  "assets/Lightningbug_01.jpg",
  "assets/Nella_03.jpg",
  "assets/spacecarbluebook01.jpg",
  "assets/Robot_Babysitter_01.jpg",
  "assets/grisja01.jpg",
  "assets/Skull01.jpg"
];
let currentIndex = 0;

const carouselContainer = document.getElementById('carouselContainer');
function showImage(index) {
  carouselContainer.innerHTML = `<img id="carouselImage" src="${images[index]}" alt="Slideshow Image">`;
}
showImage(currentIndex);

// Tap/click navigation
carouselContainer.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Swipe gesture support
let startX = null;
carouselContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
carouselContainer.addEventListener('touchend', (e) => {
  if (startX === null) return;
  let endX = e.changedTouches[0].clientX;
  let diff = endX - startX;
  if (Math.abs(diff) > 50) { // swipe threshold
    if (diff < 0) {
      // Swipe left: next image
      currentIndex = (currentIndex + 1) % images.length;
    } else {
      // Swipe right: previous image
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    showImage(currentIndex);
  }
  startX = null;
});
``