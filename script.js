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

const translations = {
    en: {
        lang: 'en',
        pageTitle: 'LED Screen Rental India',
        eyebrow: 'Sunshine Enterprises',
        headline: 'Promote Your Brand with <span>Our LED Rentals</span>',
        heroCopy: 'Bring your event, activation, or live show to life with premium LED screens, quick setup, and professional service across India.',
        viewPortfolio: 'View Portfolio',
        portfolioTitle: 'Event Portfolio',
        portfolioSubtitle: 'Browse successful LED rental activations and live screens deployed for concerts, weddings, product launches, and more.',
        galleryBrand: 'Brand Launch',
        galleryFestival: 'Festival Stage',
        galleryCorporate: 'Corporate Event',
        galleryConcert: 'Live Concert',
        galleryWedding: 'Wedding Display',
        galleryExpo: 'Expo Booth',
        trustTitle: 'Trusted by Events Across India',
        trustSubtitle: 'Fast delivery, expert installation, and modern LED experiences that keep audiences engaged.',
        testimonial1: '“The LED screen rental made our product launch unforgettable. Quick setup and instant support from the team.”',
        testimonial1Name: 'Riya from Event House',
        testimonial2: '“Excellent visuals, flexible duration options, and a smooth booking process for our wedding reception.”',
        testimonial2Name: 'Aditya, Brand Manager',
        testimonial3: '“Perfect choice for our corporate activation. The display quality was sharp and drew a huge crowd.”',
        testimonial3Name: 'Priya, Campaign Lead',
        feature1Title: 'Quick Setup',
        feature1Text: 'Same-day installations and lightning-fast delivery across India.',
        feature2Title: 'Pro Support',
        feature2Text: 'Technical assistance during the entire rental period for flawless operation.',
        feature3Title: 'Flexible Plans',
        feature3Text: 'Hourly, half-day, and full-day packages tailored to your event schedule.',
        footerText: 'Sunshine Enterprises • Fast LED screen hire for events & brand promotions',
        contactLink: 'Contact on WhatsApp',
        whatsappHref: 'https://api.whatsapp.com/send?phone=919999999999&text=Hello%20LED%20Rental%20India%20team,%20I%20need%20a%20quote.'
    },
    mr: {
        lang: 'mr',
        pageTitle: 'LED स्क्रीन भाडे भारत',
        eyebrow: 'सनशाइन एंटरप्रायझेस',
        headline: 'आमच्या <span>LED भाड्याने</span> आपला ब्रँड शानदार करा',
        heroCopy: 'आपल्या कार्यक्रमाला, अॅक्टिवेशनला किंवा लाईव्ह शोला प्रीमियम LED स्क्रीनसह जगा, जलद सेटअप आणि भारतभर व्यावसायिक सेवा.',
        viewPortfolio: 'पोर्टफोलिओ पहा',
        portfolioTitle: 'इव्हेंट पोर्टफोलिओ',
        portfolioSubtitle: 'कॉन्सर्ट, लग्न, उत्पादन लाँच आणि इतर कार्यक्रमांमध्ये यशस्वी LED भाडे तैनाती आणि लाईव्ह स्क्रीनची उदाहरणे पहा.',
        galleryBrand: 'ब्रँड लॉन्च',
        galleryFestival: 'फेस्टिव्हल स्टेज',
        galleryCorporate: 'कॉर्पोरेट इव्हेंट',
        galleryConcert: 'लाइव्ह कॉन्सर्ट',
        galleryWedding: 'वेडिंग डिस्प्ले',
        galleryExpo: 'एक्स्पो बूथ',
        trustTitle: 'भारतभरच्या कार्यक्रमांद्वारे विश्वासार्ह',
        trustSubtitle: 'जलद वितरण, तज्ञ स्थापना आणि आधुनिक LED अनुभव जे प्रेक्षकांना गुंतवून ठेवतात.',
        testimonial1: '“आमच्या ब्रँड लॉन्चला LED स्क्रीन भाड्याने अविस्मरणीय बनवले. जलद सेटअप आणि संघाकडून तत्काळ समर्थन.”',
        testimonial1Name: 'रिया, इव्हेंट हाऊस',
        testimonial2: '“उत्कृष्ट व्हिज्युअल्स, लवचिक कालावधी आणि आमच्या विवाह रिसेप्शनसाठी उत्कृष्ट सेवा.”',
        testimonial2Name: 'आदित्य, ब्रँड मॅनेजर',
        testimonial3: '“आमच्या कॉर्पोरेट अॅक्टिवेशनसाठी परिपूर्ण निवड. प्रदर्शन गुणवत्ता तीक्ष्ण होती आणि मोठी गर्दी आकर्षित केली.”',
        testimonial3Name: 'प्रिया, कॅम्पेन लीड',
        feature1Title: 'जलद सेटअप',
        feature1Text: 'भारतभर जलद प्रतिष्ठापन आणि वितरण.',
        feature2Title: 'प्रो समर्थन',
        feature2Text: 'समोरील संपूर्ण भाडे कालावधीसाठी तांत्रिक सहाय्य.',
        feature3Title: 'लवचिक योजना',
        feature3Text: 'आपल्या कार्यक्रमाच्या वेळापत्रकानुसार तासिक, अर्धा दिवस आणि पूर्ण दिवस पॅकेज.',
        footerText: 'सनशाइन एंटरप्रायझेस • कार्यक्रम आणि ब्रँड प्रोमोशनसाठी जलद LED स्क्रीन भाडे',
        contactLink: 'व्हॉट्सअॅपवर संपर्क करा',
        whatsappHref: 'https://api.whatsapp.com/send?phone=919999999999&text=Hello%20LED%20Rental%20India%20team,%20मला%20कोट%20हवी%20आहे.'
    }
};

const translateElements = document.querySelectorAll('[data-i18n]');
const languageSelect = document.getElementById('language-select');
const languageButtons = document.querySelectorAll('.lang-flag');
const whatsappLink = document.getElementById('whatsapp-link');

function applyLanguage(language) {
    const activeTranslation = translations[language] || translations.en;
    document.documentElement.lang = activeTranslation.lang;
    document.title = activeTranslation.pageTitle;
    translateElements.forEach(el => {
        const key = el.dataset.i18n;
        if (key && activeTranslation[key]) {
            el.innerHTML = activeTranslation[key];
        }
    });
    if (whatsappLink) {
        whatsappLink.href = activeTranslation.whatsappHref;
    }
    if (languageSelect) {
        languageSelect.value = language;
    }
    languageButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.lang === language);
    });
    localStorage.setItem('siteLanguage', language);
}

languageButtons.forEach(button => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

if (languageSelect) {
    languageSelect.addEventListener('change', event => applyLanguage(event.target.value));
}

const savedLanguage = localStorage.getItem('siteLanguage') || 'en';
applyLanguage(savedLanguage);