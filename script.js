const durationButtons = document.querySelectorAll('.duration-button');
const summaryDuration = document.getElementById('summary-duration');
const summaryPrice = document.getElementById('summary-price');
const summaryStartDate = document.getElementById('summary-start-date');
const summaryEndDate = document.getElementById('summary-end-date');
const summaryStartTime = document.getElementById('summary-start-time');
const summaryEndTime = document.getElementById('summary-end-time');
const eventStartDate = document.getElementById('event-start-date');
const eventEndDate = document.getElementById('event-end-date');
const eventStartTime = document.getElementById('event-start-time');
const eventEndTime = document.getElementById('event-end-time');
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

if (eventStartDate) {
    eventStartDate.addEventListener('input', () => {
        summaryStartDate.textContent = eventStartDate.value;
        if (eventEndDate.value < eventStartDate.value) {
            eventEndDate.value = eventStartDate.value;
            summaryEndDate.textContent = eventEndDate.value;
        }
        eventEndDate.min = eventStartDate.value;
    });
}

if (eventEndDate) {
    eventEndDate.addEventListener('input', () => {
        summaryEndDate.textContent = eventEndDate.value;
        if (eventEndDate.value < eventStartDate.value) {
            eventEndDate.value = eventStartDate.value;
            summaryEndDate.textContent = eventEndDate.value;
        }
    });
}

if (eventStartTime) {
    eventStartTime.addEventListener('input', () => {
        summaryStartTime.textContent = eventStartTime.value;
    });
}

if (eventEndTime) {
    eventEndTime.addEventListener('input', () => {
        summaryEndTime.textContent = eventEndTime.value;
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