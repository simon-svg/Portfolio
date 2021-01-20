// loader
const loader = document.querySelector(".loader");
const body = document.querySelector("body");

const homeSubtitle = document.querySelector(".home__subtitle");
let homeSubtitleInner = "";
const arrFront = ["f", "r", "o", "n", "t", "-", "e", "n", "d", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r"];
let index = 0;

body.style["overflow-y"] = "hidden";
document.body.onload = () => {
    loader.style.opacity = "0";
    setTimeout(() => {
        body.style["overflow-y"] = "scroll";
        loader.style.display = "none";
        document.querySelector(".loader__infinity").style.display = "none";
    }, 500)

    if (document.title === "Portfolio") {
        setTimeout(() => {
            const frontInterval = setInterval(() => {
                homeSubtitle.innerHTML += arrFront[index++];
                if (index === arrFront.length) {
                    clearInterval(frontInterval)
                }
            }, 70);
        }, 1000)
    }
}






// header items hover
const headerItem = document.querySelectorAll(".header__item");
headerItem.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.classList.remove("header__item_leave")
        item.classList.add("header__item_enter")
    })
    item.addEventListener("mouseleave", () => {
        item.classList.remove("header__item_enter")
        item.classList.add("header__item_leave")
        setTimeout(() => {
            item.classList.remove("header__item_leave")
        }, 500)
    })
})







// header panel 
const header = document.querySelector(".header");
const headerPanel = document.querySelector(".header__panel");
const headerPanel_icon = document.querySelector(".header__panel_icon");
const projectsPage = document.querySelector(".projects-page");
let headerBool = true;

headerPanel.addEventListener("click", () => {
    if (headerBool) {
        headerPanel_icon.style.transform = "rotate(180deg)";
        header.style.height = 0;
        if (projectsPage) {
            projectsPage.style["padding-top"] = "0px"
        }
    }
    else {
        headerPanel_icon.style.transform = "rotate(0deg)";
        header.style.height = "70px";
        if (projectsPage) {
            projectsPage.style["padding-top"] = "70px"
        }
    }
    headerBool = !headerBool
})




// scroll top
const scrollTop = document.querySelector(".scroll-top");

window.onscroll = (e) => {
    const scrollT = document.documentElement.scrollTop;
    if (scrollT > 0) {
        scrollTop.style.display = "block";
    }
    else {
        scrollTop.style.display = "none";
    }
}






// burger menu slide
const headerBurgerMenu = document.querySelector(".header__burger-menu");
const headertMobileCont = document.querySelector(".headert__mobile-cont");
const headerBurgerMenuLine = document.querySelectorAll(".header__burger-menu_item");
let headertBurgerBool = true;


function mobileNavOpen() {
    headertMobileCont.style.height = "auto";
    headertMobileCont.style.padding = "20px 0";
    headerBurgerMenuLine[0].style.margin = "0 0 0 0";
    headerBurgerMenuLine[2].style.margin = "0 0 0 0";
    headerBurgerMenuLine[0].style.backgroundColor = "#00D646";
    headerBurgerMenuLine[2].style.backgroundColor = "#00D646";
    headerBurgerMenuLine[1].style.display = "none";
    setTimeout(() => {
        headerBurgerMenuLine[0].style.transform = "rotate(-45deg)";
        headerBurgerMenuLine[2].style.transform = "rotate(45deg)";
        headerBurgerMenuLine[2].style.marginTop = "-3px";
    }, 100)
}

function mobileNavClose() {
    headertMobileCont.style.height = "0";
    headertMobileCont.style.padding = "0";
    headerBurgerMenuLine[0].style.transform = "rotate(0deg)";
    headerBurgerMenuLine[2].style.transform = "rotate(0deg)";
    headerBurgerMenuLine[0].style.backgroundColor = "rgb(160, 183, 202)";
    headerBurgerMenuLine[2].style.backgroundColor = "rgb(160, 183, 202)";
    setTimeout(() => {
        headerBurgerMenuLine[1].style.marginTop = "5px";
        headerBurgerMenuLine[2].style.marginTop = "5px";
        headerBurgerMenuLine[1].style.display = "flex";
    }, 100)
}

headerBurgerMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    if (headertBurgerBool) {
        mobileNavOpen();
    }
    else {
        mobileNavClose();
    }
    headertBurgerBool = !headertBurgerBool;
})





// document onclick
document.addEventListener("click", () => {
    mobileNavClose();
    headertBurgerBool = true;
})




// header light button
const html = document.querySelector("html");
const homeTitle = document.querySelector(".home__title");
const footerInside = document.querySelector(".footer__inside");
const headerBtnSpan = document.querySelector(".header__btn_span");
const headerLight = document.querySelector(".header__light_cont");
const headerLightIcon = document.querySelector(".header__light_icon");
const sections = document.querySelectorAll("section");
let headerLightBool = true;


function light(){
    html.style.setProperty("--dark-gray", "#ffffff");
    html.style.setProperty("--gray-hover", "#cccccc");
    html.style.setProperty("--inside-item", "#979797");
    html.style.setProperty("--responseColor", "#a8a8a8");
    footerInside.style["background-image"] = "linear-gradient(to right, var(--green), var(--green) 49%, var(--inside-item) 50%)";
}
function dark(){
    html.style.setProperty("--dark-gray", "#46484A");
    html.style.setProperty("--gray-hover", "#565758");
    html.style.setProperty("--inside-item", "#3e4144");
}


if (localStorage.getItem("portfolioLight") == "sun") {
    dark();
}
else if (localStorage.getItem("portfolioLight") == "moon") {
    light();
}