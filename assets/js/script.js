// Load Header
fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// ======================================== hero

window.addEventListener('scroll', () => {

    const heroImage = document.querySelector('.hero-image img');

    let scrollValue = window.scrollY;

    // heroImage.style.transform =
    //     `translateY(${scrollValue * 0.05}px)`;

});

// ======================================== services
 const serviceCards = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {

    serviceCards.forEach((card) => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

// ======================================== gallery
 const galleryItems = document.querySelectorAll('.gallery-item');

window.addEventListener('scroll', () => {

    galleryItems.forEach((item) => {

        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < window.innerHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

});

// ======================================== clients
//  const logoTrack = document.querySelector('.logo-track');

//     logoTrack.addEventListener('mouseenter', () => {

//         logoTrack.style.animationPlayState = 'paused';

//     });

//     logoTrack.addEventListener('mouseleave', () => {

//         logoTrack.style.animationPlayState = 'running';

// });
   
// ======================================== Contact CTA
const ctaSection = document.querySelector('.cta-section');

    window.addEventListener('scroll', () => {

        const scrollValue = window.scrollY;

    });

// ========================================

// LOAD COMMON FOOTER

fetch('footer.html')

.then(response => response.text())

.then(data => {

    document.getElementById('footer').innerHTML = data;

});

// ================= TOP SCROLLER =================

window.addEventListener('DOMContentLoaded', () => {

    const scrollTopBtn =
        document.getElementById('scrollTopBtn');

    if(scrollTopBtn){

        window.addEventListener('scroll', () => {

            if(window.scrollY > 300){

                scrollTopBtn.classList.add('show-scroll');

            }

            else {

                scrollTopBtn.classList.remove('show-scroll');

            }

        });

        scrollTopBtn.addEventListener('click', () => {

            window.scrollTo({

                top: 0,
                behavior: 'smooth'

            });

        });

    }

});