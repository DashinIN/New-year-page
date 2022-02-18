
const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },

    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },

    Windows: function() {
     return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()); 
        
    }
}


const Main = document.querySelector(".main");
const Articles = document.querySelector(".articles");

document.addEventListener('DOMContentLoaded', function() {

    if(!isMobile.any()) {
  
    Main.classList.add("_pc");
    Articles.classList.add("_pc");

    }
});




//Открывает - закрывает меню

const burgerMenu = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
if(burgerMenu) {
    burgerMenu.addEventListener("click", function(e) {
        document.body.classList.toggle("_lock");
        burgerMenu.classList.toggle("_active");
        headerNav.classList.toggle("_active");
    })
}

// Переход по ссылкам

const menuLinks = document.querySelectorAll(".header__nav-link[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    })
}

function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
    if (burgerMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        burgerMenu.classList.remove("_active");
        headerNav.classList.remove("_active");
    }
    window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
    });
    }
    e.preventDefault();
}