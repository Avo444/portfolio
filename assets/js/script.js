let navItems = document.getElementById("nav__items");
let burger = document.getElementById("burger");

if (burger && navItems) {
    burger.addEventListener("click", () => {
        navItems.classList.toggle("active");
    });
}