
const gallery = document.getElementById('gallery');

// Art collection with additional info
let artCollection = [
  {
    title: 'A-T Walker 3',
    img: 'assets/cat2025ATW3.jpg',
    description: '2025<br> full color <br> 24 pages<br> Click to <a href="https://www.etsy.com/listing/4414766789/a-t-walker-3?ref=shop_home_feat_1&sr_prefetch=1&pf_from=shop_home&frs=1&logging_key=495bdd1665d4daba2074d20e37ce5f5da81435f7%3A4414766789" target="_blank" rel="noopener noreferrer">buy</a>'
  },
  {
    title: 'A-T Walker 2',
    img: 'assets/cat2024ATW2.jpg',
    description: '2024<br> full color <br> <a href="https://www.etsy.com/listing/1811161037/a-t-walker-2?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_5&frs=1&logging_key=e6cb65250d4cf0b5ddf2e748f66facbcd4e7f898%3A1811161037" target="_blank" rel="noopener noreferrer">buy</a>'
  },
  {
    title: 'A-T Walker 1',
    img: 'assets/cat2023ATW1.jpg',
    description: '2023<br> full color <br> <a href="https://www.etsy.com/listing/1591054760/a-t-walker-1?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_6&frs=1&logging_key=623740c23e380b62bd445301c4a596b799ad20f6%3A1591054760" target="_blank" rel="noopener noreferrer">buy</a>'
  },
  {
    title: 'Space Car Blue Book 2',
    img: 'assets/cat2025SCBB2.jpg',
    description: '2025<br> split zine with Mochidays by Mochiwei<br> full color<br> Click to <a href="https://www.etsy.com/listing/4401766662/space-car-blue-book-mochidays?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_2&frs=1&logging_key=adb1129a4bcd23127b2d9a08691dbe17a086e6b3%3A4401766662 target="_blank" rel="noopener noreferrer">buy</a>'
  }
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
    `;
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
    <p>${item.description}</p>
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