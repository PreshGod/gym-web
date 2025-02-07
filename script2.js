document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach((slide) => (slide.style.display = "none"));
        index++;
        if (index > slides.length) index = 1;
        slides[index - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    }

    showSlides();
});

/* Mobile Menu */
function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("show");
}
