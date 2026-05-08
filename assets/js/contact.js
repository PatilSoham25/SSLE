const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {

    e.preventDefault();

    formMessage.innerHTML =
        "Your message has been sent successfully!";

    formMessage.style.color = "green";

    contactForm.reset();

});