/* ========================================
   The Girls' School - Animations Module
   ======================================== */

(function () {
    'use strict';

    // Utility function for delays
    function getDelay(element) {
        return parseInt(element.dataset.delay) || 0;
    }

    function getDuration(element) {
        var durations = {
            'fast': '0.3s',
            'base': '0.5s',
            'slow': '0.8s',
            'slower': '1.2s'
        };
        return durations[element.dataset.duration] || '0.5s';
    }

    // Intersection Observer callback
    function handleIntersection(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var element = entry.target;
                var delay = getDelay(element);
                var duration = getDuration(element);

                setTimeout(function () {
                    element.classList.add('animated');

                    // Apply inline animation style
                    var animationType = element.dataset.animate;
                    if (animationType) {
                        element.style.animation = animationType + ' ' + duration + ' ease forwards';
                    }
                }, delay);

                // Unobserve if not repeatable
                if (!element.dataset.repeat) {
                    observer.unobserve(element);
                }
            }
        });
    }

    // Initialize scroll animations
    function initScrollAnimations() {
        var animatedElements = document.querySelectorAll('[data-animate]');

        if (!animatedElements.length) return;

        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        var observer = new IntersectionObserver(function (entries) {
            handleIntersection(entries, observer);
        }, observerOptions);

        animatedElements.forEach(function (element) {
            observer.observe(element);
        });
    }

    // Initialize staggered animations
    function initStaggeredAnimations() {
        var staggeredGrids = document.querySelectorAll('[data-stagger]');

        if (!staggeredGrids.length) return;

        var observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var grid = entry.target;
                    var children = Array.from(grid.children);
                    var staggerDelay = parseInt(grid.dataset.stagger) || 100;

                    children.forEach(function (child, index) {
                        setTimeout(function () {
                            child.classList.add('animated');
                        }, index * staggerDelay);
                    });

                    observer.unobserve(grid);
                }
            });
        }, observerOptions);

        staggeredGrids.forEach(function (grid) {
            observer.observe(grid);
        });
    }

    // Initialize FAQ accordion
    function initFAQAccordion() {
        var faqItems = document.querySelectorAll('.faq-item');

        if (!faqItems.length) return;

        faqItems.forEach(function (item) {
            var question = item.querySelector('.faq-question');

            if (!question) return;

            question.addEventListener('click', function () {
                var isActive = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(function (otherItem) {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');

                // Update aria-expanded
                question.setAttribute('aria-expanded', !isActive);
            });
        });
    }

    // Counter animation
    function animateCounter(element) {
        var target = parseInt(element.dataset.count);
        var suffix = element.dataset.suffix || '';
        var duration = 2000;
        var startTimestamp = null;

        function step(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;

            var progress = Math.min((timestamp - startTimestamp) / duration, 1);
            var easeProgress = 1 - Math.pow(1 - progress, 4);

            var current = Math.floor(easeProgress * target);
            element.textContent = current + suffix;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = target + suffix;
            }
        }

        window.requestAnimationFrame(step);
    }

    // Initialize counter animations
    function initCounterAnimations() {
        // Support multiple counter selectors
        var counters = document.querySelectorAll('.stat-value[data-count], .stat-number[data-count], .impact-number[data-count], .vol-number[data-count], .n-stat-number[data-count]');

        if (!counters.length) return;

        var observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        var observer = new IntersectionObserver(function (entries) {
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

    // Initialize Giving Tabs
    function initGivingTabs() {
        var tabs = document.querySelectorAll('.giving-tabs .tab-btn');
        var panels = document.querySelectorAll('.giving-panel');

        if (!tabs.length || !panels.length) return;

        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                var target = tab.dataset.tab;

                // Update active tab
                tabs.forEach(function (t) {
                    t.classList.remove('active');
                });
                tab.classList.add('active');

                // Update active panel with animation
                panels.forEach(function (panel) {
                    if (panel.id === target + '-panel') {
                        panel.classList.add('active');
                        // Trigger animations for panel content
                        var animatedElements = panel.querySelectorAll('[data-animate]');
                        animatedElements.forEach(function (el) {
                            el.classList.remove('animated');
                            setTimeout(function () {
                                el.classList.add('animated');
                            }, 100);
                        });
                    } else {
                        panel.classList.remove('active');
                    }
                });
            });
        });
    }

    // Initialize Progress Ring Animation
    function initProgressRing() {
        var progressRings = document.querySelectorAll('.progress-ring');

        if (!progressRings.length) return;

        var observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var ring = entry.target;
                    // Trigger animation
                    ring.style.strokeDashoffset = '68';
                    observer.unobserve(ring);
                }
            });
        }, observerOptions);

        progressRings.forEach(function (ring) {
            observer.observe(ring);
        });
    }

    // Initialize floating shapes animation
    function initFloatingShapes() {
        var shapes = document.querySelectorAll('.floating-shapes > *, .cta-shapes > *');

        shapes.forEach(function (shape, index) {
            shape.style.animationDelay = (index * 0.5) + 's';
        });
    }

    // Initialize all animations
    function initAnimations() {
        initScrollAnimations();
        initStaggeredAnimations();
        initFAQAccordion();
        initCounterAnimations();
        initGivingTabs();
        initProgressRing();
        initFloatingShapes();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
        initAnimations();
    }

    // Export for external use
    window.Animations = {
        init: initAnimations,
        animateCounter: animateCounter
    };

})();
