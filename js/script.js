




const burgerMenu = document.querySelector(".header__burger");
if(burgerMenu) {
    const headerNav = document.querySelector(".header__nav");
    burgerMenu.addEventListener("click", function(e) {
        document.body.classList.toggle("_lock");
        burgerMenu.classList.toggle("_active");
        headerNav.classList.toggle("_active");
    })
}