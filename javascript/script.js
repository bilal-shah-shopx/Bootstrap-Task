// Thumbnail click changes main image
const thumbnails = document.querySelectorAll('.thumbnail-btn');
const mainImg = document.getElementById('main-img');

thumbnails.forEach(btn => {
    btn.addEventListener('click', () => {
        mainImg.src = btn.dataset.img;
        thumbnails.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Scroll buttons
const thumbList = document.getElementById('thumbnail-list');
const btnUp = document.getElementById('thumb-up');
const btnDown = document.getElementById('thumb-down');
btnUp.addEventListener('click', () => {
    thumbList.scrollBy({ top: -488, behavior: 'smooth' });
});
btnDown.addEventListener('click', () => {
    thumbList.scrollBy({ top: 488, behavior: 'smooth' });
});

function updateButtons() {
    btnUp.disabled = thumbList.scrollTop === 0;
    btnDown.disabled = thumbList.scrollTop + thumbList.clientHeight >= thumbList.scrollHeight;
}

// Update on scroll
thumbList.addEventListener('scroll', updateButtons);

updateButtons();

// for zoom effects
const container = document.querySelector('.zoom-container');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    mainImg.style.transformOrigin = `${x}% ${y}%`;
    mainImg.style.transform = 'scale(2)';
});

container.addEventListener('mouseleave', () => {
    mainImg.style.transformOrigin = 'center center';
    mainImg.style.transform = 'scale(1)';
});

// for counter
const carousel = document.getElementById('carousel-purchase');
const counter = carousel.querySelector('.counter');
const items = carousel.querySelectorAll('.carousel-item');

carousel.addEventListener('slid.bs.carousel', (e) => {
    counter.textContent = `${e.to + 1} of ${items.length}`;
});

// for progress bar
const progressBar = document.getElementById('carousel-progress');
const totalItems = items.length;

function updateProgress(index) {
    const percent = ((index + 1) / totalItems) * 100;
    progressBar.style.width = `${percent}%`;
}

// Initial state
updateProgress(0);

// Update on slide
carousel.addEventListener('slid.bs.carousel', (e) => {
    const activeIndex = [...items].findIndex(item =>
        item.classList.contains('active')
    );
    updateProgress(activeIndex);
});

// for toggle
 const oneTimeBtn = document.getElementById('oneTimeBtn');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const oneTimeCards = document.getElementById('oneTimeCards');
    const subscribeCards = document.getElementById('subscribeCards');
    oneTimeBtn.addEventListener('click', () => {
        oneTimeCards.classList.remove('d-none');
        subscribeCards.classList.add('d-none');
        oneTimeBtn.classList.add('custom-btn', 'text-light');
        oneTimeBtn.classList.remove('custom-btn-outline');
        subscribeBtn.classList.add('custom-btn-outline');
        subscribeBtn.classList.remove('custom-btn', 'text-light');
    });
    subscribeBtn.addEventListener('click', () => {
        subscribeCards.classList.remove('d-none');
        oneTimeCards.classList.add('d-none');
        subscribeBtn.classList.add('custom-btn', 'text-light');
        subscribeBtn.classList.remove('custom-btn-outline');
        oneTimeBtn.classList.add('custom-btn-outline');
        oneTimeBtn.classList.remove('custom-btn', 'text-light');
    });
const carouselInner = document.querySelector('#package-carousel .carousel-item .d-flex');
const images = document.querySelectorAll('#package-carousel .carousel-img');
let index = 0;
function slideCarousel() {
  const imgWidth = images[0].offsetWidth + 10;
  index++;
  if (index > images.length - Math.floor(carouselInner.parentElement.offsetWidth / imgWidth)) {
    index = 0;
  }
  carouselInner.style.transform = `translateX(-${index * imgWidth}px)`;
}
setInterval(slideCarousel, 2000);