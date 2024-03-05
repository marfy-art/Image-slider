document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.img-content img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let slideInterval;

    // Show the first slide immediately
    slides[currentIndex].classList.add('active');

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
        slideInterval = setInterval(nextSlide, 3000); // Automatically slide every 3 seconds
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Event listeners for next and previous buttons
    nextBtn.addEventListener('click', function() {
        nextSlide();
        stopSlideShow();
        startSlideShow(); // Restart automatic slide show after manual navigation
    });

    prevBtn.addEventListener('click', function() {
        prevSlide();
        stopSlideShow();
        startSlideShow(); // Restart automatic slide show after manual navigation
    });

    // Start automatic slide show
    startSlideShow();
});
