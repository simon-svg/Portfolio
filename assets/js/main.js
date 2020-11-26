// section education content margines
const microsoft = document.querySelectorAll(".educ-exper__cont_head_left")[0];
const college = document.querySelectorAll(".educ-exper__cont_head_left")[1];
const ugeek = document.querySelectorAll(".educ-exper__cont_head_right")[0];
const university = document.querySelectorAll(".educ-exper__cont_head_right")[1];

const ugeekHeight = ugeek.clientHeight
microsoft.style["margin-top"] = ugeekHeight + 30 + "px";
const microHeight = microsoft.clientHeight
university.style["margin-top"] = microHeight + 60 + "px";
const univerHeight = university.clientHeight
college.style["margin-top"] = univerHeight + 90 + "px";



// section experience content margines
const fotonWork = document.querySelectorAll(".educ-exper__cont_head_left")[2]
const foton = document.querySelectorAll(".educ-exper__cont_head_right")[2];
const haytech = document.querySelectorAll(".educ-exper__cont_head_left")[3];
const lucky = document.querySelectorAll(".educ-exper__cont_head_right")[3];

const fotonWorkHeight = fotonWork.clientHeight;
foton.style["margin-top"] = fotonWorkHeight + 30 + "px";
const fotonHeight = foton.clientHeight;
haytech.style["margin-top"] = fotonHeight + 60 + "px";
const haytechHeight = haytech.clientHeight;
lucky.style["margin-top"] = haytechHeight + 90 + "px";




// scrollTop function

const headerLinks = document.querySelectorAll(".header__link");
const headerMobileLinks = document.querySelectorAll(".header__mobile-link");
const homeLogo = document.querySelector(".home__logo");
const homeInfoItem = document.querySelectorAll(".home__info_item");
const homeContLink = document.querySelector(".home__cont_link");
const skillsTitle = document.querySelector(".skills__title");
const educationTitle = document.querySelector(".education__title");
const certificateTitle = document.querySelector(".certificate__title");
const experienceTitle = document.querySelector(".experience__title");
const projectsTitle = document.querySelector(".projects__title");
const projectsBot = document.querySelector(".projects__bot");
const projectsReact = document.querySelector(".projects-react__title");
const projectsReactItems = document.querySelectorAll(".projects-react__item");
const projectsReactBot = document.querySelector(".projects-react__bot");
const skillsItemLine = document.querySelectorAll(".skills__item_line");
const educatExpContHead = document.querySelectorAll(".educ-exper__cont_head")
const CertificProjectsItem = document.querySelectorAll(".certific-projects__item");
const educExperMobCont = document.querySelectorAll(".educ-exper-mob__cont");
const arrInfo = ["Y", "e", "a", "r", " ", "o", "f", " ", "b", "i", "r", "t", "h", " ", "-", " ", "F", "e", "b", "r", "u", "a", "r", "y", "1", "7", ",", "2", "0", "0", "0", '<span class="green">.</span>'];
let indexInfo = 0;
let indexInfoBool = true;
const arrEmail = ["E", "-", "m", "a", "i", "l", " ", "-", " ", "s", "i", "m", "o", "n", " ", "k", "a", "r", "a", "p", "e", "t", "y", "a", "n", ".", "2", "0", "0", "0", "@", 'm', "a", "i", "l", ".", "r", "u", '<span class="green">.</span>'];
let indexEmail = 0;
const arrPhone = ["P", "h", "o", "n", "e", " ", "N", "u", "m", "b", "e", "r", " ", "+", "(", "3", "7", "4", ")", "5", "5", "-", "3", "2", "-", "1", "4", "-", "1", "3", '<span class="green">.</span>'];
let indexPhone = 0;


window.addEventListener("scroll", () => {
    const position = window.innerHeight / 1.10;

    if (homeInfoItem[0].getBoundingClientRect().top < window.innerHeight) {
        if (indexInfoBool) {
            indexInfoBool = false;
            setTimeout(() => {
                const infoInterval = setInterval(() => {
                    homeInfoItem[0].innerHTML += arrInfo[indexInfo++];
                    if (indexInfo === arrInfo.length) {
                        clearInterval(infoInterval)
                    }
                }, 70);
                setTimeout(() => {
                    const emailInterval = setInterval(() => {
                        homeInfoItem[1].innerHTML += arrEmail[indexEmail++];
                        if (indexEmail === arrEmail.length) {
                            clearInterval(emailInterval)
                        }
                    }, 70);
                    setTimeout(() => {
                        const phoneInterval = setInterval(() => {
                            homeInfoItem[2].innerHTML += arrPhone[indexPhone++];
                            if (indexPhone === arrPhone.length) {
                                clearInterval(phoneInterval)
                            }
                        }, 70);
                    }, 3000);
                }, 2500);
            }, 100)
        }
    }


    if (homeLogo.getBoundingClientRect().top < position) {
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[0].style.color = "#00D646";
        headerMobileLinks[0].style.color = "#00D646";
    }

    if (homeContLink.getBoundingClientRect().top < position) {
        homeContLink.classList.add("show");
    }

    if (skillsTitle.getBoundingClientRect().top < position) {
        skillsTitle.classList.add("show");
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[1].style.color = "#00D646";
        headerMobileLinks[1].style.color = "#00D646";
    }

    const educationTitle = document.querySelector(".education__title");
    if (educationTitle.getBoundingClientRect().top < position) {
        educationTitle.classList.add("show");
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[2].style.color = "#00D646";
        headerMobileLinks[2].style.color = "#00D646";
    }

    if (certificateTitle.getBoundingClientRect().top < position) {
        certificateTitle.classList.add("show");
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[3].style.color = "#00D646";
        headerMobileLinks[3].style.color = "#00D646";
    }

    if (experienceTitle.getBoundingClientRect().top < position) {
        experienceTitle.classList.add("show");
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[4].style.color = "#00D646";
        headerMobileLinks[4].style.color = "#00D646";
    }

    if (projectsTitle.getBoundingClientRect().top < position) {
        projectsTitle.classList.add("show");
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[5].style.color = "#00D646";
        headerMobileLinks[5].style.color = "#00D646";
    }

    if (projectsBot.getBoundingClientRect().top < position) {
        projectsBot.classList.add("show");
    }

    if (projectsReact.getBoundingClientRect().top < position) {
        projectsReact.classList.add("show");
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[6].style.color = "#00D646";
        headerMobileLinks[6].style.color = "#00D646";
    }

    if (projectsReactItems[0].getBoundingClientRect().top < position) {
        projectsReactItems[0].classList.add("show");
    }

    if (projectsReactBot.getBoundingClientRect().top < position) {
        projectsReactBot.classList.add("show");
    }

    if (skillsItemLine[0].getBoundingClientRect().top < position && window.innerWidth > 450) {
        skillsItemLine[0].style.width = "50%";
        setTimeout(() => {
            skillsItemLine[1].style.width = "45%";
        }, 50)
        setTimeout(() => {
            skillsItemLine[2].style.width = "39%";
        }, 100)
        setTimeout(() => {
            skillsItemLine[3].style.width = "39%";
        }, 150)
        setTimeout(() => {
            skillsItemLine[4].style.width = "45%";
        }, 200)
        setTimeout(() => {
            skillsItemLine[5].style.width = "47%";
        }, 250)
        setTimeout(() => {
            skillsItemLine[6].style.width = "36%";
        }, 300)
        setTimeout(() => {
            skillsItemLine[7].style.width = "39%";
        }, 350)
        setTimeout(() => {
            skillsItemLine[8].style.width = "45%";
        }, 400)
    }
    else if (skillsItemLine[0].getBoundingClientRect().top < position && window.innerWidth <= 450) {
        skillsItemLine[0].style.width = "75%";
        setTimeout(() => {
            skillsItemLine[1].style.width = "70%";
        }, 50)
        setTimeout(() => {
            skillsItemLine[2].style.width = "64%";
        }, 100)
        setTimeout(() => {
            skillsItemLine[3].style.width = "64%";
        }, 150)
        setTimeout(() => {
            skillsItemLine[4].style.width = "70%";
        }, 200)
        setTimeout(() => {
            skillsItemLine[5].style.width = "72%";
        }, 250)
        setTimeout(() => {
            skillsItemLine[6].style.width = "61%";
        }, 300)
        setTimeout(() => {
            skillsItemLine[7].style.width = "64%";
        }, 350)
        setTimeout(() => {
            skillsItemLine[8].style.width = "70%";
        }, 400)
    }

    if (educatExpContHead[0].getBoundingClientRect().top < position) {
        educatExpContHead[0].classList.add("show");
        setTimeout(() => {
            educatExpContHead[2].classList.add("show");
        }, 50)
        setTimeout(() => {
            educatExpContHead[1].classList.add("show");
        }, 100)
        setTimeout(() => {
            educatExpContHead[3].classList.add("show");
        }, 150)
    }

    if (educatExpContHead[4].getBoundingClientRect().top < position) {
        educatExpContHead[4].classList.add("show");
        setTimeout(() => {
            educatExpContHead[6].classList.add("show");
        }, 50)
        setTimeout(() => {
            educatExpContHead[5].classList.add("show");
        }, 100)
        setTimeout(() => {
            educatExpContHead[7].classList.add("show");
        }, 150)
    }

    if (CertificProjectsItem[0].getBoundingClientRect().top < position) {
        CertificProjectsItem[0].classList.add("show");
        setTimeout(() => {
            CertificProjectsItem[1].classList.add("show");
        }, 50)
    }

    if (CertificProjectsItem[2].getBoundingClientRect().top < position) {
        CertificProjectsItem[2].classList.add("show");
        setTimeout(() => {
            CertificProjectsItem[3].classList.add("show");
        }, 50)
        setTimeout(() => {
            CertificProjectsItem[4].classList.add("show");
        }, 100)
        setTimeout(() => {
            CertificProjectsItem[5].classList.add("show");
        }, 150)
    }

    if (educExperMobCont[0].getBoundingClientRect().top < position) {
        educExperMobCont[0].classList.add("show");
    }

    if (educExperMobCont[1].getBoundingClientRect().top < position) {
        educExperMobCont[1].classList.add("show");
    }
})





// education experience mobile slide
const educExper = document.querySelectorAll(".educ-exper-mob__item_title");
const educExperInside = document.querySelectorAll(".educ-exper-mob__item_inside");
const educExperArrow = document.querySelectorAll(".educ-exper-mob__item_arrow");
const educExperIcon = document.querySelectorAll(".educ-exper-mob__item_icon");

// for education
let selectedElem = null;
for (let i = 0; i < 4; i++) {
    educExper[i].addEventListener("click", function educExperAdd(e) {
        e.stopPropagation();
        for (let j = 0; j < 4; j++) {
            if (i !== j) {
                educExperInside[j].style.height = "0";
                educExper[j].style.backgroundColor = "rgb(62, 65, 68)";
                educExperArrow[j].style.backgroundColor = "rgb(72, 74, 77)";
                educExperIcon[j].style.transform = "rotate(0deg)";
            } else {
                educExperInside[i].style.height = "110px";
                educExper[i].style.backgroundColor = "rgb(72, 74, 77)";
                educExperArrow[i].style.backgroundColor = "rgb(62, 65, 68)";
                educExperIcon[i].style.transform = "rotate(180deg)";
            }
        }
        if (selectedElem === educExper[i]) {
            educExperInside[i].style.height = "0";
            educExper[i].style.backgroundColor = "rgb(62, 65, 68)";
            educExperArrow[i].style.backgroundColor = "rgb(72, 74, 77)";
            educExperIcon[i].style.transform = "rotate(0deg)";
            selectedElem = null;
        } else {
            selectedElem = educExper[i];
        }
    })
}

// for experience
let selectedElem2 = null;
for (let i = 4; i < educExper.length; i++) {
    educExper[i].addEventListener("click", function educExperAdd(e) {
        e.stopPropagation()
        for (let j = 4; j < educExper.length; j++) {
            if (i !== j) {
                educExperInside[j].style.height = "0";
                educExper[j].style.backgroundColor = "rgb(62, 65, 68)";
                educExperArrow[j].style.backgroundColor = "rgb(72, 74, 77)";
                educExperIcon[j].style.transform = "rotate(0deg)";
            }
            else {
                educExperInside[i].style.height = "110px";
                educExper[i].style.backgroundColor = "rgb(72, 74, 77)";
                educExperArrow[i].style.backgroundColor = "rgb(62, 65, 68)";
                educExperIcon[i].style.transform = "rotate(180deg)";
            }
        }
        if (selectedElem2 === educExper[i]) {
            educExperInside[i].style.height = "0";
            educExper[i].style.backgroundColor = "rgb(62, 65, 68)";
            educExperArrow[i].style.backgroundColor = "rgb(72, 74, 77)";
            educExperIcon[i].style.transform = "rotate(0deg)";
            selectedElem2 = null;
        } else {
            selectedElem2 = educExper[i];
        }
    })
}



// document
document.addEventListener("click", () => {
    for (let i = 0; i < educExper.length; i++) {
        educExperInside[i].style.height = "0";
        educExper[i].style.backgroundColor = "rgb(62, 65, 68)";
        educExperArrow[i].style.backgroundColor = "rgb(72, 74, 77)";
        educExperIcon[i].style.transform = "rotate(0deg)";
    }
    selectedElem = null;
    selectedElem2 = null;
})