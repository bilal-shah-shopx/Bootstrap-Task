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

// Scroll buttons for thumbnails
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

// for toggle large screens
const oneTimeBtnLg = document.getElementById('oneTimeBtnLg');
const subscribeBtnLg = document.getElementById('subscribeBtnLg');
const oneTimeCardsLg = document.getElementById('oneTimeCardsLg');
const subscribeCardsLg = document.getElementById('subscribeCardsLg');

oneTimeBtnLg.addEventListener('click', () => {
    oneTimeCardsLg.classList.remove('d-none');
    oneTimeCardsLg.classList.add('d-lg-flex');
    subscribeCardsLg.classList.add('d-none');
    subscribeCardsLg.classList.remove('d-lg-flex');

    oneTimeBtnLg.classList.add('custom-btn', 'text-light');
    oneTimeBtnLg.classList.remove('custom-btn-outline');

    subscribeBtnLg.classList.add('custom-btn-outline');
    subscribeBtnLg.classList.remove('custom-btn', 'text-light');
});

subscribeBtnLg.addEventListener('click', () => {
    subscribeCardsLg.classList.remove('d-none');
    subscribeCardsLg.classList.add('d-lg-flex');
    oneTimeCardsLg.classList.add('d-none');
    oneTimeCardsLg.classList.remove('d-lg-flex');

    subscribeBtnLg.classList.add('custom-btn', 'text-light');
    subscribeBtnLg.classList.remove('custom-btn-outline');

    oneTimeBtnLg.classList.add('custom-btn-outline');
    oneTimeBtnLg.classList.remove('custom-btn', 'text-light');
});


// for medium screen
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


// Scroll buttons for package list

const scrollAmount = document.querySelector('.carousel-img').offsetWidth + 8;

const packageList = document.getElementById('package-carousel');
const btnLeft = document.getElementById('swipe-left');
const btnRight = document.getElementById('swipe-right');

btnLeft.addEventListener('click', () => {
    packageList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
    packageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});