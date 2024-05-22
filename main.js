let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlidePage() {
    let pageUrl = ""; // Add your page URLs here
    switch (currentSlide) {
        case 0:
            pageUrl = "page1.html";
            break;
        case 1:
            pageUrl = "page2.html";
            break;
        case 2:
            pageUrl = "page3.html";
            break;
        case 3:
            pageUrl = "page4.html";
            break;
        case 4:
            pageUrl = "page5.html";
            break;
        default:
            pageUrl = "error.html";
    }
    window.location.href = pageUrl;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nextBtn").addEventListener("click", nextSlide);
    document.getElementById("prevBtn").addEventListener("click", prevSlide);
    document.getElementById("showMeBtn").addEventListener("click", goToSlidePage);
});
