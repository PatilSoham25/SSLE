// ================= HERO ANIMATION =================

const heroContent =
    document.querySelector('.services-hero-content');

window.addEventListener('load', () => {

    heroContent.style.opacity = "1";

    heroContent.style.transform =
        "translateY(0)";

});

// INITIAL STATE

heroContent.style.opacity = "0";

heroContent.style.transform =
    "translateY(40px)";

heroContent.style.transition =
    "all 1s ease";

// ================= SCROLL ANIMATION =================

const introCards =
    document.querySelectorAll('.intro-feature-card');

window.addEventListener('scroll', () => {

    introCards.forEach((card, index) => {

        const cardTop =
            card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 50) {

            setTimeout(() => {

                card.style.opacity = "1";

                card.style.transform =
                    "translateY(0)";

            }, index * 150);

        }

    });

});

// INITIAL STATE

introCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "all 0.7s ease";

});

// ================= SERVICES ANIMATION =================

const serviceCards =
    document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {

    serviceCards.forEach((card, index) => {

        const cardTop =
            card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 50) {

            setTimeout(() => {

                card.style.opacity = "1";

                card.style.transform =
                    "translateY(0)";

            }, index * 120);

        }

    });

});

// INITIAL STATE

serviceCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "all 0.7s ease";

});