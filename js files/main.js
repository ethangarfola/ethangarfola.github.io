let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function goToBuild() {
    const buildPages = ['arc.html', 'solar.html', 'stasis.html', 'strand.html', 'void.html'];
    window.location.href = `html files/${buildPages[currentSlide]}`;
}
