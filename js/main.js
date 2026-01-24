function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        updateThemeButton();
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    updateThemeButton();
}

function updateThemeButton() {
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        if (document.body.classList.contains('dark')) {
            themeBtn.textContent = '☀️';
            themeBtn.title = 'Light theme';
        } else {
            themeBtn.textContent = '🌙';
            themeBtn.title = 'Dark theme';
        }
    }
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

function initMobileMenu() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.querySelector('.nav-links');
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });
    });
}

function initScrollAnimations() {
    const aboutSection = document.querySelector('.section-light-blue');
    const projectsSection = document.querySelector('.section-dark');
    const newsSection = document.querySelector('.news-section');

    if (aboutSection) {
        aboutSection.classList.add('about-section', 'animate-on-scroll');
    }

    if (projectsSection) {
        projectsSection.classList.add('projects-section', 'animate-on-scroll');
    }

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    if (aboutSection) observer.observe(aboutSection);
    if (projectsSection) observer.observe(projectsSection);
    if (newsSection) observer.observe(newsSection);
}

document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initMobileMenu();
    initScrollAnimations();
    initProjectsSlider();
    initNewsSlider();
});

function initProjectsSlider() {
    const sliders = document.querySelectorAll('.projects-slider');
    if (!sliders.length) return;

    sliders.forEach((element) => {
        const slider = element.querySelector('.swiper');
        const prevEl = element.querySelector('.slider-nav__item_prev');
        const nextEl = element.querySelector('.slider-nav__item_next');
        const pagination = element.querySelector('.slider-pagination');

        new Swiper(slider, {
            slidesPerView: 1.2,
            centeredSlides: true,
            spaceBetween: 15,
            speed: 300,
            observer: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            grabCursor: true,
            initialSlide: 1,
            loop: false,
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
                disabledClass: 'disabled'
            },
            pagination: {
                el: pagination,
                type: 'bullets',
                modifierClass: 'slider-pagination',
                bulletClass: 'slider-pagination__item',
                bulletActiveClass: 'active',
                clickable: true
            },
            breakpoints: {
                480: {
                    slidesPerView: 1.3,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 25
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 40
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }
        });
    });
}

function initNewsSlider() {
    const sliders = document.querySelectorAll('.news-slider');
    if (!sliders.length) return;

    sliders.forEach((element) => {
        const slider = element.querySelector('.swiper');
        const prevEl = element.querySelector('.slider-nav__item_prev');
        const nextEl = element.querySelector('.slider-nav__item_next');
        const pagination = element.querySelector('.slider-pagination');

        new Swiper(slider, {
            slidesPerView: 1.2,
            centeredSlides: true,
            spaceBetween: 30,
            speed: 600,
            observer: true,
            watchOverflow: true,
            watchSlidesProgress: true,
            centeredSlides: true,
            initialSlide: 1,
            loop: false,
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
                disabledClass: 'disabled'
            },
            pagination: {
                el: pagination,
                type: 'bullets',
                modifierClass: 'slider-pagination',
                bulletClass: 'slider-pagination__item',
                bulletActiveClass: 'active',
                clickable: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 2.2,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 40
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }
        });
    });
}