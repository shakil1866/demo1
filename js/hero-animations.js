/**
 * Hero Section Animations
 * Handles page-load animations for the hero section
 */

(function () {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function () {
        initHeroAnimations();
        initCounterAnimations();
    });

    /**
     * Initialize hero section animations
     */
    function initHeroAnimations() {
        // Add animate-in class to hero elements with staggered delays
        const heroElements = {
            '.hero-tag': 100,
            '.title-line:nth-child(1)': 200,
            '.title-line:nth-child(2)': 300,
            '.title-line:nth-child(3)': 400,
            '.hero-intro': 500,
            '.stat-item:nth-child(1)': 600,
            '.stat-item:nth-child(2)': 700,
            '.stat-item:nth-child(3)': 800,
            '.stat-item:nth-child(4)': 900,
            '.hero-cta': 1000,
            '.scroll-indicator': 1200
        };

        Object.entries(heroElements).forEach(([selector, delay]) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                setTimeout(() => {
                    el.classList.add('animate-in');
                }, delay);
            });
        });
    }

    /**
     * Initialize counter number animations
     */
    function initCounterAnimations() {
        const counterElements = document.querySelectorAll('.stat-number[data-count]');

        if (!counterElements.length) return;

        // Create intersection observer for counter animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counterElements.forEach(el => observer.observe(el));
    }

    /**
     * Animate a counter element
     */
    function animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const suffix = element.dataset.suffix || '';
        const duration = 2000;
        const startTimestamp = performance.now();

        // Add counting class for animation effect
        element.classList.add('counting');

        function step(timestamp) {
            if (!startTimestamp) return;

            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutQuart)
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            const current = Math.floor(easeProgress * target);

            // Format number with commas
            element.textContent = current.toLocaleString() + suffix;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                // Ensure final value is exact
                element.textContent = target.toLocaleString() + suffix;
            }
        }

        window.requestAnimationFrame(step);
    }

    /**
     * Easing function - easeOutQuart
     */
    function easeOutQuart(x) {
        return 1 - Math.pow(1 - x, 4);
    }

})();
