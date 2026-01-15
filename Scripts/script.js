const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('portfolio-next');
const prevButton = document.getElementById('portfolio-prev');

let currentIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});
updateCarousel();

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

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});