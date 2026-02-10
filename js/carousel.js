/* ========================================
   Excellence Girls Academy - Carousel Module
   ======================================== */

(function () {
    'use strict';

    /**
     * Carousel Module
     */
    const Carousel = {
        init: function () {
            this.initNewsCarousel();
            this.initTestimonialCarousel();
            this.initImageCarousel();
        },

        /**
         * News & Events Carousel
         */
        initNewsCarousel: function () {
            var slider = document.getElementById('newsSlider');
            var prevBtn = document.getElementById('newsPrev');
            var nextBtn = document.getElementById('newsNext');
            var dotsContainer = document.getElementById('newsDots');

            if (!slider) return;

            var cards = slider.querySelectorAll('.news-card');
            var currentSlide = 0;
            var autoPlayInterval;
            var isAutoPlaying = false;

            // Calculate slides per view
            function getSlidesPerView() {
                var width = window.innerWidth;
                if (width <= 480) return 1;
                if (width <= 768) return 2;
                if (width <= 1024) return 2;
                if (width <= 1200) return 3;
                return 4;
            }

            var slidesPerView = getSlidesPerView();
            var totalSlides = Math.ceil(cards.length / slidesPerView);

            // Create dots
            if (dotsContainer && totalSlides > 1) {
                dotsContainer.innerHTML = '';
                for (var i = 0; i < totalSlides; i++) {
                    var dot = document.createElement('button');
                    dot.className = 'dot' + (i === 0 ? ' active' : '');
                    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
                    dot.addEventListener('click', function (e) {
                        e.preventDefault();
                        goToSlide(this.dataset.slide);
                    }.bind({ dataset: { slide: i } }));
                    dotsContainer.appendChild(dot);
                }
            }

            function updateDots() {
                if (!dotsContainer) return;
                var dots = dotsContainer.querySelectorAll('.dot');
                dots.forEach(function (dot, index) {
                    dot.classList.toggle('active', index === currentSlide);
                });
            }

            function goToSlide(slideIndex) {
                slideIndex = Math.max(0, Math.min(slideIndex, totalSlides - 1));
                currentSlide = slideIndex;

                var cardWidth = cards[0].offsetWidth;
                var gap = 24; // CSS gap value
                var scrollPosition = slideIndex * cardWidth * slidesPerView + (slideIndex * gap);

                slider.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });

                updateDots();
            }

            function nextSlide() {
                goToSlide(currentSlide + 1);
            }

            function prevSlide() {
                goToSlide(currentSlide - 1);
            }

            function startAutoPlay() {
                if (totalSlides > 1) {
                    isAutoPlaying = true;
                    autoPlayInterval = setInterval(nextSlide, 5000);
                }
            }

            function stopAutoPlay() {
                isAutoPlaying = false;
                clearInterval(autoPlayInterval);
            }

            function resetAutoPlay() {
                stopAutoPlay();
                if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    startAutoPlay();
                }
            }

            // Event listeners
            if (prevBtn) {
                prevBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    prevSlide();
                    resetAutoPlay();
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    nextSlide();
                    resetAutoPlay();
                });
            }

            // Touch/swipe support
            var touchStartX = 0;
            var touchEndX = 0;

            slider.addEventListener('touchstart', function (e) {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoPlay();
            }, { passive: true });

            slider.addEventListener('touchend', function (e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                resetAutoPlay();
            }, { passive: true });

            function handleSwipe() {
                var swipeThreshold = 50;
                var diff = touchStartX - touchEndX;

                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                }
            }

            // Pause on hover (desktop only)
            if (window.innerWidth > 768) {
                slider.addEventListener('mouseenter', stopAutoPlay);
                slider.addEventListener('mouseleave', resetAutoPlay);
            }

            // Handle scroll snap
            slider.addEventListener('scroll', function () {
                var scrollLeft = slider.scrollLeft;
                var cardWidth = cards[0].offsetWidth + 24;
                var newSlide = Math.round(scrollLeft / cardWidth);
                currentSlide = Math.max(0, Math.min(newSlide, totalSlides - 1));
                updateDots();
            });

            // Handle resize
            var resizeTimeout;
            window.addEventListener('resize', function () {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(function () {
                    var newSlidesPerView = getSlidesPerView();
                    if (newSlidesPerView !== slidesPerView) {
                        slidesPerView = newSlidesPerView;
                        totalSlides = Math.ceil(cards.length / slidesPerView);

                        // Recreate dots
                        if (dotsContainer && totalSlides > 1) {
                            dotsContainer.innerHTML = '';
                            for (var i = 0; i < totalSlides; i++) {
                                var dot = document.createElement('button');
                                dot.className = 'dot' + (i === 0 ? ' active' : '');
                                dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
                                dotsContainer.appendChild(dot);
                            }
                        }

                        goToSlide(0);
                    }
                }, 250);
            });

            // Start autoplay
            if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                startAutoPlay();
            }
        },

        /**
         * Testimonials Carousel
         */
        initTestimonialCarousel: function () {
            // Implementation for testimonial carousel if needed
            // Can be added as a horizontal scroll with cards
        },

        /**
         * Generic Image Carousel
         */
        initImageCarousel: function () {
            // Generic carousel for images
            var carousels = document.querySelectorAll('[data-carousel]');

            carousels.forEach(function (carousel) {
                var slides = carousel.querySelectorAll('[data-slide]');
                var prevBtn = carousel.querySelector('[data-prev]');
                var nextBtn = carousel.querySelector('[data-next]');

                if (!slides.length) return;

                var currentSlide = 0;

                function showSlide(index) {
                    slides.forEach(function (slide, i) {
                        slide.style.display = i === index ? 'block' : 'none';
                        slide.classList.toggle('active', i === index);
                    });
                }

                if (prevBtn) {
                    prevBtn.addEventListener('click', function () {
                        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                        showSlide(currentSlide);
                    });
                }

                if (nextBtn) {
                    nextBtn.addEventListener('click', function () {
                        currentSlide = (currentSlide + 1) % slides.length;
                        showSlide(currentSlide);
                    });
                }

                // Initialize first slide
                showSlide(0);
            });
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            Carousel.init();
        });
    } else {
        Carousel.init();
    }

    // Export for external use
    window.Carousel = Carousel;
})();
