document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Portfolio Carousel Logic ---
    const track = document.querySelector('.carousel-track');
    // Safety check: only run if the track exists on this page
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.getElementById('portfolio-next');
        const prevButton = document.getElementById('portfolio-prev');
        let currentIndex = 0;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        nextButton?.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });

        prevButton?.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });
    }

    // --- 2. Scroll Indicator Logic ---
    const sections = document.querySelectorAll('.page-section');
    const steps = document.querySelectorAll('.step');

    window.addEventListener('scroll', () => {
        let activeIndex = 0;
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
                activeIndex = index;
            }
        });
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === activeIndex);
        });
    });

    // --- 3. Pricing Swiper Initialization ---
    // This requires the Swiper library to be linked in HTML above this file
    const pricingSwiper = new Swiper('.pricing-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true, // Changed to true so it doesn't get stuck
        grabCursor: true,

        watchOverflow: false,
        centeredSlides: false,
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Adaptive Layout
        breakpoints: {
            // Tablet: Show 2 cards
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // Desktop: Show 3 cards
            1200: {
                slidesPerView: 3,
                spaceBetween: 40 // More breathing room for your 550px cards
            }
        }
    });
});