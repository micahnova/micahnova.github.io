
const gallery = document.getElementById('gallery');

// Art collection with additional info
let artCollection = [
  {
    title: 'A-T Walker 3',
    img: 'assets/cat2025ATW3.jpg',
    description: '2025<br> full color <br> 24 pages'
  },
  {
    title: 'A-T Walker 2',
    img: 'assets/cat2024ATW2.jpg',
    description: '2024<br> full color <br> 24 pages'
  },
  {
    title: 'A-T Walker 1',
    img: 'assets/cat2023ATW1.jpg',
    description: '2023<br> full color <br> 24 pages'
  },
  {
    title: 'Space Car Blue Book 2',
    img: 'assets/cat2025SCBB2.jpg',
    description: '2025<br> split zine with Mochidays by Mochiwei<br> full color<br> 24 pages'
  }
];

// Sort by title alphabetically
artCollection.sort((a, b) => a.title.localeCompare(b.title));

let itemsLoaded = 0;
const itemsPerLoad = 12;
let currentIndex = 0; // Track current image in lightbox

// Load initial items
loadMoreItems();

// Infinite scroll
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadMoreItems();
  }
});

function loadMoreItems() {
  const nextItems = artCollection.slice(itemsLoaded, itemsLoaded + itemsPerLoad);
  nextItems.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'art-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" />
      <p class="title">${item.title}</p>
    `;
    div.addEventListener('click', () => openLightbox(itemsLoaded + index));
    gallery.appendChild(div);
  });
  itemsLoaded += itemsPerLoad;
}

// Lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxInfo = document.getElementById('lightbox-info');
const closeBtn = document.querySelector('.close');

// Open lightbox
function openLightbox(index) {
  currentIndex = index;
  showLightboxItem(currentIndex);
  lightbox.style.display = 'flex';
}

// Show item in lightbox
function showLightboxItem(index) {
  const item = artCollection[index];
  lightboxImg.src = item.img;
  lightboxImg.alt = item.title;
  lightboxInfo.innerHTML = `
    <h2>${item.title}</h2>
    <p>${item.description}</p>
  `;
}

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// Swipe support
let startX = 0;
lightbox.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

lightbox.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diffX = startX - endX;

  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      // Swipe left → next image
      currentIndex = (currentIndex + 1) % artCollection.length;
    } else {
      // Swipe right → previous image
      currentIndex = (currentIndex - 1 + artCollection.length) % artCollection.length;
    }
    showLightboxItem(currentIndex);
  }
});