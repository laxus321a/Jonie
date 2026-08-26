const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu a");

menuButton.addEventListener("click", function () {

    menu.classList.toggle("show");

    menuButton.classList.toggle("active");

});

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("show");

        menuButton.classList.remove("active");

    });

});

document.addEventListener("click", function (event) {

    if (
        !menuButton.contains(event.target) &&
        !menu.contains(event.target)
    ) {

        menu.classList.remove("show");

        menuButton.classList.remove("active");

    }

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;


    // Create email subject

    const subject = `Message from ${name}`;


    const body =
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`;


    const yourEmail = "catimbangjonie@gmail.com";


    const mailtoLink =
        `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


    window.location.href = mailtoLink;


    contactForm.reset();

});
