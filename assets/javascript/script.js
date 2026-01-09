document.addEventListener('DOMContentLoaded', () => {


    // <!-------- Customers Review Section ------>


    const customersCarousel = document.getElementById('customers-carousel');
    if (customersCarousel) {
        const dots = document.querySelectorAll('.dot-indicators .dot');
        customersCarousel.addEventListener('slid.bs.carousel', function (event) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[event.to]?.classList.add('active');
        });
    }


    // <!-------- Purchase Section ------>


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
    thumbList.addEventListener('scroll', updateButtons);
    updateButtons();

    // for zoom effects
    const container = document.querySelector('.zoom-container');
    if (container && mainImg) {
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
    }

    // for counter
    const carousel = document.getElementById('carousel-purchase');
    if (carousel) {
        const counter = carousel.querySelector('.counter');
        const items = carousel.querySelectorAll('.carousel-item');
        // for progress bar
        const progressBar = document.getElementById('carousel-progress');
        const totalItems = items.length;

        const updateProgress = (index) => {
            if (!progressBar) return;
            const percent = ((index + 1) / totalItems) * 100;
            progressBar.style.width = `${percent}%`;
        };

        // Initial state
        updateProgress(0);
        if (counter) counter.textContent = `1 of ${totalItems}`;

        // Update on slide
        carousel.addEventListener('slid.bs.carousel', (e) => {
            const index = e.to;
            if (counter) counter.textContent = `${index + 1} of ${totalItems}`;
            updateProgress(index);
        });
    }

    // for toggle cards
    const oneTimeBtns = document.querySelectorAll('.oneTimeBtn');
    const subscribeBtns = document.querySelectorAll('.subscribeBtn');
    const oneTimeCards = document.querySelectorAll('.oneTimeCards');
    const subscribeCards = document.querySelectorAll('.subscribeCards');
    oneTimeBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            oneTimeCards.forEach(card => card.classList.remove('d-none'));
            subscribeCards.forEach(card => card.classList.add('d-none'));

            oneTimeBtns.forEach(b => {
                b.classList.add('custom-btn', 'text-light');
                b.classList.remove('custom-btn-outline');
            });

            subscribeBtns.forEach(b => {
                b.classList.add('custom-btn-outline');
                b.classList.remove('custom-btn', 'text-light');
            });
        });
    });
    subscribeBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            subscribeCards.forEach(card => card.classList.remove('d-none'));
            oneTimeCards.forEach(card => card.classList.add('d-none'));

            subscribeBtns.forEach(b => {
                b.classList.add('custom-btn', 'text-light');
                b.classList.remove('custom-btn-outline');
            });

            oneTimeBtns.forEach(b => {
                b.classList.add('custom-btn-outline');
                b.classList.remove('custom-btn', 'text-light');
            });
        });
    });

    // Scroll buttons for package list
    document.querySelectorAll('.package-carousel').forEach(carousel => {

        const img = carousel.querySelector('.carousel-img');
        if (!img) return;
        const scrollAmount = img.offsetWidth +10;


        const prevBtn = carousel.parentElement.querySelector('.swipe-left');
        const nextBtn = carousel.parentElement.querySelector('.swipe-right');

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });
        }
    });


});