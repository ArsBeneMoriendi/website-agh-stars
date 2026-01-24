const moduleCards = document.querySelectorAll('.module-card');
moduleCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

const imageCards = document.querySelectorAll('.image-card');
imageCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05) translateY(-10px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

const achievementCards = document.querySelectorAll('.achievement-card');
achievementCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0px 15px 40px rgba(15, 36, 52, 0.3)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

const teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach(member => {
    member.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
    });

    member.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

const ambulanceBox = document.querySelector('.ambulance-box');
if (ambulanceBox) {
    ambulanceBox.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    });

    ambulanceBox.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
}

const conferenceImage = document.querySelector('.conference-image');
if (conferenceImage) {
    conferenceImage.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.02)';
    });

    conferenceImage.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0px 15px 50px 0px rgba(0, 0, 0, 0.4)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0px 10px 40px 0px rgba(0, 0, 0, 0.3)';
    });
});

const tags = document.querySelectorAll('.tag');
tags.forEach(tag => {
    tag.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = '#1a4d6e';
    });

    tag.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = '#0f2434';
    });
});

if ('ontouchstart' in window) {
    const touchElements = document.querySelectorAll('.module-card, .image-card, .achievement-card, .team-member, .card');

    touchElements.forEach(element => {
        element.addEventListener('touchstart', function () {
            this.style.opacity = '0.8';
        });

        element.addEventListener('touchend', function () {
            this.style.opacity = '1';
        });
    });
}

window.addEventListener('load', () => {
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        const heroLine = document.querySelector('.hero-line');
        const heroSubtitle = document.querySelector('.hero-subtitle');

        if (heroTitle) heroTitle.style.animation = 'fadeIn 0.8s ease 0.2s forwards';
        if (heroLine) heroLine.style.animation = 'expandWidth 0.8s ease 0.5s forwards';
        if (heroSubtitle) heroSubtitle.style.animation = 'fadeIn 0.8s ease 0.7s forwards';
    }, 100);
});

document.documentElement.style.scrollBehavior = 'smooth';

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 1024 && mobileMenuOpen) {
            mobileMenu.classList.remove('open');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            mobileMenuOpen = false;
        }
    }, 250);
});

mobileMenu.addEventListener('transitionend', () => {
    if (mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});


if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img');
    images.forEach(img => imageObserver.observe(img));
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

console.log('Ambulance Access - AGH STARS Project loaded successfully!');
console.log('All animations and interactions are ready.');