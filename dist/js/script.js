navbarToggle = document.querySelector("#navbar-toggle");
navbarMenu = document.querySelectorAll(".navbar-menu");

navbarToggle.addEventListener("click", () => {
    navbarMenu.forEach((element) => {
        if (element.classList.contains("hidden")) {
            element.classList.add("flex");
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
            element.classList.remove("flex");
        }
    });
});
