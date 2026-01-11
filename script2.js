
const gallery = document.getElementById('gallery');

// Sample data (replace with your own art collection)
let artCollection = [
  { title: 'A-T Walker 3', img: 'assets/cat2025ATW3.jpg' },
  { title: 'A-T Walker 2', img: 'assets/cat2024ATW2.jpg' },
  { title: 'A-T Walker 1', img: 'assets/cat2023ATW1.jpg' },
  { title: 'Space Car Blue Book / Mochidays', img: 'assets/cat2025SCBB2.jpg' },
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
      <p>${item.title}</p>
    `;
    gallery.appendChild(div);
  });
  itemsLoaded += itemsPerLoad;
}
