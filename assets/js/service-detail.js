// ================= SCROLL ANIMATION =================

const animatedCards = document.querySelectorAll(
    '.feature-box, .capability-card'
);

window.addEventListener('scroll', () => {

    animatedCards.forEach((card, index) => {

        const cardTop =
            card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 50) {

            setTimeout(() => {

                card.style.opacity = '1';

                card.style.transform =
                    'translateY(0)';

            }, index * 120);

        }

    });

});

// INITIAL STATE

animatedCards.forEach(card => {

    card.style.opacity = '0';

    card.style.transform =
        'translateY(40px)';

    card.style.transition =
        'all 0.7s ease';

});
