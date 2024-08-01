document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carouselExampleAutoplaying');
    carousel.addEventListener('slide.bs.carousel', function () {
        const captions = carousel.querySelectorAll('.carousel-caption');
        captions.forEach((caption) => {
            caption.classList.remove('fade-in');
            void caption.offsetWidth; // Trigger reflow to restart the animation
            caption.classList.add('fade-in');
        });
    });
});
