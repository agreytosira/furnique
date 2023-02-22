// Catalog Filter
$(document).ready(function () {
    $(".list").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".itemBox").show("1000");
        } else {
            $(".itemBox")
                .not("." + value)
                .hide("1000");
            $(".itemBox")
                .filter("." + value)
                .show("1000");
        }
    });

    $(".list").click(function () {
        $(this).addClass("filter-active").siblings().removeClass("filter-active");
    });
});

const navbarToggle = document.querySelector("#navbar-toggle");
const navbarMenu = document.querySelectorAll(".navbar-menu");

// Toggle Mobile Navbar
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

const navbar = document.querySelector("#navbar");
const jumbotron = document.querySelector("#jumbotron");

// Navbar on scroll effect
window.addEventListener("scroll", function () {
    navbar.classList.toggle("lg:bg-body", window.scrollY > 0);
    if (window.scrollY > 0) {
        navbar.classList.add("lg:bg-white", "lg:py-2", "lg:shadow-md");
        navbar.classList.remove("lg:bg-body", "lg:py-8");
    } else {
        navbar.classList.add("lg:bg-body", "lg:py-8");
        navbar.classList.remove("lg:bg-white", "lg:py-2", "lg:shadow-md");
    }
});
