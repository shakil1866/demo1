/* ========================================
   Excellence Girls Academy - Counter Module
   ======================================== */

(function () {
    'use strict';

    /**
     * Counter Module
     */
    const Counter = {
        init: function () {
            this.initCounters();
        },

        /**
         * Initialize animated counters
         */
        initCounters: function () {
            var counters = document.querySelectorAll('.stat-number[data-count]');

            if (!counters.length) return;

            var observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        this.animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                }.bind(this));
            }.bind(this), observerOptions);

            counters.forEach(function (counter) {
                observer.observe(counter);
            });
        },

        /**
         * Animate a single counter
         */
        animateCounter: function (element, options) {
            options = options || {};

            var target = parseInt(element.dataset.count) || 0;
            var suffix = element.dataset.suffix || '';
            var prefix = element.dataset.prefix || '';
            var duration = parseInt(element.dataset.duration) || 2000;
            var decimalPlaces = parseInt(element.dataset.decimals) || 0;

            var startTimestamp = null;
            var startValue = options.startValue || 0;
            var easingFunction = options.easing || this.easeOutQuart;

            var step = function (timestamp) {
                if (!startTimestamp) startTimestamp = timestamp;

                var progress = Math.min((timestamp - startTimestamp) / duration, 1);
                var easedProgress = easingFunction(progress);

                var current = this.formatNumber(
                    startValue + (target - startValue) * easedProgress,
                    decimalPlaces
                );

                element.textContent = prefix + current + suffix;

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    element.textContent = prefix + this.formatNumber(target, decimalPlaces) + suffix;
                }
            }.bind(this);

            window.requestAnimationFrame(step);
        },

        /**
         * Format number with decimal places
         */
        formatNumber: function (num, decimals) {
            return num.toFixed(decimals);
        },

        /**
         * Easing function - Ease Out Quart
         */
        easeOutQuart: function (x) {
            return 1 - Math.pow(1 - x, 4);
        },

        /**
         * Easing function - Ease Out Expo
         */
        easeOutExpo: function (x) {
            return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
        },

        /**
         * Easing function - Linear
         */
        linear: function (x) {
            return x;
        },

        /**
         * Count up from zero to target
         */
        countUp: function (element, target, options) {
            options = options || {};
            options.startValue = 0;
            this.animateCounter(element, options);
        },

        /**
         * Count down from target to zero
         */
        countDown: function (element, start, options) {
            options = options || {};
            options.startValue = start;
            this.animateCounter(element, options);
        },

        /**
         * Format currency counter
         */
        countCurrency: function (element, target, currency) {
            currency = currency || '$';
            element.dataset.count = target;
            element.dataset.suffix = '+';
            element.dataset.decimals = 0;
            this.animateCounter(element);
        },

        /**
         * Format percentage counter
         */
        countPercentage: function (element, target) {
            element.dataset.count = target;
            element.dataset.suffix = '%';
            element.dataset.decimals = 0;
            this.animateCounter(element);
        },

        /**
         * Format time counter (for events, etc.)
         */
        countTime: function (element, target, unit) {
            unit = unit || '';
            element.dataset.count = target;
            element.dataset.suffix = ' ' + unit;
            element.dataset.decimals = 0;
            this.animateCounter(element);
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            Counter.init();
        });
    } else {
        Counter.init();
    }

    // Export for external use
    window.Counter = Counter;
})();
