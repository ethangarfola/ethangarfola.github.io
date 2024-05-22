let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

showSlide(slideIndex);

prevButton.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
});

nextButton.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
});

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}
