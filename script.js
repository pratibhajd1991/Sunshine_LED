const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let activeSlide = 0;

function updateSlider() {
    if (slides) {
        slides.style.transform = `translateX(-${activeSlide * 100}% )`;
        dots.forEach((dot, index) => dot.classList.toggle('active', index === activeSlide));
    }
}

let autoSlide = setInterval(() => {
    activeSlide = (activeSlide + 1) % (dots.length || 1);
    updateSlider();
}, 5200);

const sliderSection = document.querySelector('.slider');
if (sliderSection) {
    sliderSection.addEventListener('mouseenter', () => clearInterval(autoSlide));
    sliderSection.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            activeSlide = (activeSlide + 1) % (dots.length || 1);
            updateSlider();
        }, 5200);
    });
}

if (dots.length) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            activeSlide = Number(dot.dataset.slide);
            updateSlider();
        });
    });
}