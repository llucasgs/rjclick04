var linkMobileMenu = document.querySelector(".link-mobile-menu");
var linkCloseMenu = document.querySelector(".close-menu");
var overlay = document.querySelector(".overlay");

function openMenu(event) {
    event.preventDefault();

    document.body.classList.add("open");
}

function closeMenu(event) {
    event.preventDefault();

    document.body.classList.remove("open");
}

linkMobileMenu.addEventListener("click", openMenu);
linkCloseMenu.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);