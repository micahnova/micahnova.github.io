
const gallery = document.getElementById('gallery');

// Sample data (replace with your own art collection)
let artCollection = [
  { title: 'A-T Walker 3', img: 'assets/cat2025ATW3.jpg' },
  { title: 'A-T Walker 2', img: 'assets/cat2024ATW2.jpg' },
  { title: 'A-T Walker 1', img: 'assets/cat2023ATW1.jpg' },
  { title: 'Space Car Blue Book 2', img: 'assets/cat2025SCBB2.jpg', description: 'and <b>Mochidays</b> by Mochiwei' },
  // Add more items here...
];

// Sort by title alphabetically
artCollection.sort((a, b) => a.title.localeCompare(b.title));

let itemsLoaded = 0;
const itemsPerLoad = 12;

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
  nextItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'art-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" />
      <p class="title">${item.title}</p>
      <p class="description">${item.description || ''}</p>
    `;
    // Make each item clickable to open lightbox
    div.addEventListener('click', () => openLightbox(item));
    gallery.appendChild(div);
  });
  itemsLoaded += itemsPerLoad;
}

// Lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxInfo = document.getElementById('lightbox-info');
const closeBtn = document.querySelector('.close');

// Open lightbox with image and info
function openLightbox(item) {
  lightbox.style.display = 'flex';
  lightboxImg.src = item.img;
  lightboxImg.alt = item.title;
  lightboxInfo.innerHTML = `
    <h2>${item.title}</h2>
    <p>${item.description || 'No additional info available.'}</p>
  `;
}

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
window.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});
