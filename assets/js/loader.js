// ================= LOADER =================

window.addEventListener('load', () => {

    const loader = document.getElementById('site-loader');

    setTimeout(() => {

        loader.classList.add('hide-loader');

    }, 1200);

});

// ================= WAIT FOR PAGE =================

window.addEventListener('DOMContentLoaded', () => {

    // ================= AOS =================

    AOS.init({

        duration: 1200,
        once: true,
        offset: 100

    });

    // ================= HERO PARALLAX =================

    window.addEventListener('scroll', () => {

        const heroImage = document.querySelector('.hero-image img');

        if(heroImage){

            let scrollValue = window.scrollY;

            heroImage.style.transform =
                `translateY(${scrollValue * 0.05}px)`;

        }

    });

    // ================= SERVICE ANIMATION =================

    const serviceCards =
        document.querySelectorAll('.service-card');

    serviceCards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.8s ease";

    });

    window.addEventListener('scroll', () => {

        serviceCards.forEach((card) => {

            const cardTop =
                card.getBoundingClientRect().top;

            if(cardTop < window.innerHeight - 100){

                card.style.opacity = "1";
                card.style.transform = "translateY(0)";

            }

        });

    });

    // ================= GALLERY =================

    const galleryItems =
        document.querySelectorAll('.gallery-item');

    galleryItems.forEach((item) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";
        item.style.transition = "all 0.8s ease";

    });

    window.addEventListener('scroll', () => {

        galleryItems.forEach((item) => {

            const itemTop =
                item.getBoundingClientRect().top;

            if(itemTop < window.innerHeight - 100){

                item.style.opacity = "1";
                item.style.transform = "translateY(0)";

            }

        });

    });

});

