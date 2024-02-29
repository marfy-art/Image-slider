document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.img-content img');
    let currentIndex = 0;

    function goToSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show the current slide
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    }

    function startSlideShow() {
        setInterval(nextSlide, 2000); // Automatically slide every 2 seconds
    }

    startSlideShow();
});
