// ================= GALLERY ANIMATION =================

const galleryItems =
    document.querySelectorAll('.gallery-item');

window.addEventListener('scroll', () => {

    galleryItems.forEach((item, index) => {

        const itemTop =
            item.getBoundingClientRect().top;

        if(itemTop < window.innerHeight - 50) {

            setTimeout(() => {

                item.style.opacity = "1";

                item.style.transform =
                    "translateY(0)";

            }, index * 120);

        }

    });

});

// INITIAL STATE

galleryItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(40px)";

    item.style.transition =
        "all 0.7s ease";

});