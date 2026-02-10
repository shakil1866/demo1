/* ========================================
   Excellence Girls Academy - Main JavaScript
   ======================================== */

/**
 * DOM Content Loaded
 */
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all modules
    initPageLoader();
    initScrollAnimations();
    initTabs();
    initCarousel();
    initCounter();
    initParticles();
    initAccessibility();
    initNewsFilters();

    // Debug: Check filter buttons exist
    const filterBtns = document.querySelectorAll('.filter-btn');
    console.log('[DEBUG] Filter buttons found:', filterBtns.length);

    filterBtns.forEach(function (btn, index) {
        console.log('[DEBUG] Filter button', index, '- data-filter:', btn.dataset.filter);
    });
});

/**
 * Page Loader
 */
function initPageLoader() {
    const loader = document.getElementById('pageLoader');

    if (!loader) return;

    // Hide loader after animations complete
    window.addEventListener('load', function () {
        setTimeout(function () {
            loader.classList.add('hidden');
            document.body.style.overflow = 'visible';

            // Trigger hero animations after loader hides
            setTimeout(function () {
                triggerHeroAnimations();
            }, 300);
        }, 2500); // Loader duration
    });
}

/**
 * Hero Animations
 */
function triggerHeroAnimations() {
    const heroText = document.querySelector('.hero-text');
    const heroVisual = document.querySelector('.hero-visual');

    if (heroText) {
        heroText.setAttribute('data-animate', 'fade-up');
        heroText.classList.add('animated');
    }

    if (heroVisual) {
        heroVisual.setAttribute('data-animate', 'fade-left');
        heroVisual.classList.add('animated');
    }
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    if (!animatedElements.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');

                // Unobserve after animation
                if (!entry.target.dataset.repeat) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });
}

/**
 * Tab Functionality
 */
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.program-panel');

    if (!tabBtns.length || !tabPanels.length) return;

    tabBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const tabId = btn.dataset.tab;

            // Update buttons
            tabBtns.forEach(function (b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            // Update panels
            tabPanels.forEach(function (panel) {
                panel.classList.remove('active');
                if (panel.id === tabId) {
                    panel.classList.add('active');
                }
            });
        });
    });
}

/**
 * Carousel/Slider
 */
function initCarousel() {
    const slider = document.getElementById('newsSlider');
    const prevBtn = document.getElementById('newsPrev');
    const nextBtn = document.getElementById('newsNext');
    const dotsContainer = document.getElementById('newsDots');

    if (!slider) return;

    const cards = slider.querySelectorAll('.news-card');
    const cardsPerView = getCardsPerView();
    const totalCards = cards.length;
    const totalDots = Math.ceil(totalCards / cardsPerView);

    let currentSlide = 0;
    let autoPlayInterval;

    // Create dots
    if (dotsContainer && totalDots > 1) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('button');
            dot.className = 'dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
            dot.addEventListener('click', function () {
                goToSlide(i);
            });
            dotsContainer.appendChild(dot);
        }
    }

    function getCardsPerView() {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 2;
        if (window.innerWidth <= 1024) return 2;
        if (window.innerWidth <= 1200) return 3;
        return 4;
    }

    function goToSlide(slideIndex) {
        slideIndex = Math.max(0, Math.min(slideIndex, totalDots - 1));
        currentSlide = slideIndex;

        const cardWidth = cards[0].offsetWidth;
        const gap = 24;
        const scrollPosition = slideIndex * cardWidth * cardsPerView + (slideIndex * gap);

        slider.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        updateDots();
    }

    function updateDots() {
        if (!dotsContainer) return;

        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach(function (dot, index) {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        if (totalDots > 1) {
            autoPlayInterval = setInterval(nextSlide, 5000);
        }
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            nextSlide();
            resetAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            prevSlide();
            resetAutoPlay();
        });
    }

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

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
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Start auto-play
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        startAutoPlay();
    }
}

/**
 * Counter Animation
 */
function initCounter() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    if (!counters.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(function (counter) {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    function update() {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    update();
}

/**
 * Particle Effects
 */
function initParticles() {
    const container = document.getElementById('particles');

    if (!container) return;

    const particleCount = 20;
    const colors = ['#ffffff', 'rgba(126, 200, 200, 0.5)', 'rgba(255, 255, 255, 0.3)'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 6 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            animation: floatParticle ${duration}s ease-in-out ${delay}s infinite;
        `;

        container.appendChild(particle);
    }

    // Add keyframe for particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * News Filter Functionality
 */
function initNewsFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card, .news-card-large');

    if (!filterBtns.length || !newsCards.length) {
        console.log('[DEBUG] No filter buttons or news cards found');
        return;
    }

    console.log('[DEBUG] Initializing news filters with', newsCards.length, 'cards');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const filter = btn.dataset.filter;
            console.log('[DEBUG] Filter button clicked:', filter);

            // Update active state on buttons
            filterBtns.forEach(function (b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            // Filter news cards
            newsCards.forEach(function (card) {
                const category = card.dataset.category;

                if (filter === 'all' || category === filter) {
                    card.style.display = '';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Accessibility Features
 */
function initAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary);
        color: white;
        padding: 8px 16px;
        z-index: 10000;
        transition: top 0.3s;
    `;

    skipLink.addEventListener('focus', function () {
        skipLink.style.top = '0';
    });

    skipLink.addEventListener('blur', function () {
        skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Keyboard navigation for cards
    const cards = document.querySelectorAll('.news-card, .belief-card, .testimonial-card');
    cards.forEach(function (card) {
        const link = card.querySelector('a');
        if (link) {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'group');

            card.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    link.click();
                }
            });
        }
    });
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
