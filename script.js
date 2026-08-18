// ==========================
// HAMBURGER MENU
// ==========================

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu a");


// Open and close the menu

menuButton.addEventListener("click", function () {

    menu.classList.toggle("show");

    menuButton.classList.toggle("active");

});


// Close menu after clicking a link

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("show");

        menuButton.classList.remove("active");

    });

});


// Close menu when clicking outside

document.addEventListener("click", function (event) {

    if (
        !menuButton.contains(event.target) &&
        !menu.contains(event.target)
    ) {

        menu.classList.remove("show");

        menuButton.classList.remove("active");

    }

});


// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get visitor information

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;


    // Create email subject

    const subject = `Message from ${name}`;


    // Create email content

    const body =
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`;


    // Your email address

    const yourEmail = "catimbangjonie@gmail.com";


    // Open email application

    const mailtoLink =
        `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


    window.location.href = mailtoLink;


    // Reset form

    contactForm.reset();

});