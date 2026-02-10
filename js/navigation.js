/* ========================================
   Excellence Girls Academy - Navigation Module
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');

    if (navToggle && navMenu) {
        // Toggle mobile menu
        navToggle.addEventListener('click', function (e) {
            e.preventDefault();
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (navMenu.classList.contains('active') &&
                !navMenu.contains(e.target) &&
                !navToggle.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';

                // Close any open mega menus
                const openMenus = document.querySelectorAll('.mega-menu.active');
                openMenus.forEach(function (menu) {
                    menu.classList.remove('active');
                });
            }
        });

        // Close menu on resize to desktop
        window.addEventListener('resize', function () {
            if (window.innerWidth > 1024) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Mega menu toggle for mobile
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(function (item) {
            const link = item.querySelector('.nav-link');
            const megaMenu = item.querySelector('.mega-menu');

            if (megaMenu && link) {
                link.addEventListener('click', function (e) {
                    if (window.innerWidth <= 1024) {
                        e.preventDefault();

                        // Close other open menus
                        const openMenus = document.querySelectorAll('.mega-menu.active');
                        openMenus.forEach(function (openMenu) {
                            if (openMenu !== megaMenu) {
                                openMenu.classList.remove('active');
                            }
                        });

                        // Toggle current menu
                        megaMenu.classList.toggle('active');

                        // Rotate arrow
                        const arrow = link.querySelector('.nav-arrow');
                        if (arrow) {
                            arrow.style.transform = megaMenu.classList.contains('active')
                                ? 'rotate(180deg)'
                                : '';
                        }
                    }
                });
            }
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});
