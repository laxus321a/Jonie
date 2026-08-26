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
