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
        document.querySelector(".loader__infinity").remove()
    }, 500)

    if (document.title === "Portfolio") {
        setTimeout(() => {
            const frontInterval = setInterval(() => {
                homeSubtitle.innerHTML += arrFront[index++];
                if (index === arrFront.length) {
                    clearInterval(frontInterval)
                }
            }, 70);
        }, 1500)
    }
}

//     setTimeout(() => {
//         const pop = setInterval(() => {
//             titleAnim.innerHTML = titleAnim.innerHTML.slice(0, titleAnim.innerHTML.length - 1);
//             if (titleAnim.innerHTML.length === 0) {
//                 clearInterval(pop);
//                 index = 0;
//                 setTimeout(() => {
//                     const showInterval = setInterval(() => {
//                         titleAnim.innerHTML += arrProjects[index++];
//                         if (index === arrProjects.length) {
//                             clearInterval(showInterval)
//                         }
//                     }, 70);
//                 }, 1000)
//             }
//         }, 50);
//     }, 2000);




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