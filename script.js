const clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", function () {
    alert("Welcome to Jonie Catimbang's Personal Profile!");

    clickButton.textContent = "Thank You!";

    setTimeout(function () {
        clickButton.textContent = "Click Me";
    }, 2000);
});

