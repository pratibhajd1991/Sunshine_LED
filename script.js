const durationButtons = document.querySelectorAll('.duration-button');
const summaryDuration = document.getElementById('summary-duration');
const summaryPrice = document.getElementById('summary-price');
const summaryDate = document.getElementById('summary-date');
const summaryTime = document.getElementById('summary-time');
const eventDate = document.getElementById('event-date');
const eventTime = document.getElementById('event-time');
const priceMap = {1: '₹1,999', 5: '₹9,499', 10: '₹16,999'};
const labelMap = {1: 'Hourly', 5: 'Half-Day', 10: 'Full-Day'};
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let activeSlide = 0;

if (durationButtons.length) {
    durationButtons.forEach(button => {
        button.addEventListener('click', () => {
            durationButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const hours = button.dataset.hours;
            summaryDuration.textContent = labelMap[hours];
            summaryPrice.textContent = priceMap[hours];
        });
    });
}

if (eventDate) {
    eventDate.addEventListener('input', () => {
        summaryDate.textContent = eventDate.value;
    });
}

if (eventTime) {
    eventTime.addEventListener('input', () => {
        summaryTime.textContent = eventTime.value;
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