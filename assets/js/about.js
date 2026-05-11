// ABOUT HERO SIMPLE ANIMATION

window.addEventListener('load', () => {

    const heroContent =
        document.querySelector('.about-hero-content');

    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(40px)';

    setTimeout(() => {

        heroContent.style.transition =
            'all 1s ease';

        heroContent.style.opacity = '1';
        heroContent.style.transform =
            'translateY(0)';

    }, 200);

});

// ==============================================
// ================= SIMPLE SCROLL ANIMATION =================

const cards = document.querySelectorAll(
    '.feature-card, .service-item'
);

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const cardTop =
            card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 80) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

// INITIAL STATE

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";

});

// ========================================
// ================= ABOUT CARD ANIMATION =================

const aboutCards = document.querySelectorAll(
    '.about-feature-card'
);

window.addEventListener('scroll', () => {

    aboutCards.forEach((card, index) => {

        const cardTop =
            card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 50) {

            setTimeout(() => {

                card.style.opacity = "1";
                card.style.transform = "translateY(0)";

            }, index * 150);

        }

    });

});

// INITIAL STATE

aboutCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.7s ease";

});

// ================= VISION MISSION ANIMATION =================

const vmCards = document.querySelectorAll('.vm-card');

window.addEventListener('scroll', () => {

    vmCards.forEach((card, index) => {

        const cardTop =
            card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 50) {

            setTimeout(() => {

                card.style.opacity = "1";
                card.style.transform = "translateY(0)";

            }, index * 200);

        }

    });

});

// INITIAL STATE

vmCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";

});

// SIMPLE CARD ANIMATION

const whyCards =
    document.querySelectorAll('.why-card');

window.addEventListener('scroll', () => {

    whyCards.forEach((card, index) => {

        const top =
            card.getBoundingClientRect().top;

        if(top < window.innerHeight - 50) {

            setTimeout(() => {

                card.style.opacity = "1";
                card.style.transform =
                    "translateY(0)";

            }, index * 150);

        }

    });

});

// INITIAL

whyCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "all 0.7s ease";

});