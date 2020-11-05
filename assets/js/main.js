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
window.addEventListener("scroll", () => {
    const position = window.innerHeight / 1.10;

    if (homeLogo.getBoundingClientRect().top < position) {
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[0].style.color = "#00D646";
        headerMobileLinks[0].style.color = "#00D646";
    }

    const homeContLink = document.querySelector(".home__cont_link");
    if (homeContLink.getBoundingClientRect().top < position) {
        homeContLink.classList.add("show");
    }

    const skillsTitle = document.querySelector(".skills__title");
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

    const certificateTitle = document.querySelector(".certificate__title");
    if (certificateTitle.getBoundingClientRect().top < position) {
        certificateTitle.classList.add("show");
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[3].style.color = "#00D646";
        headerMobileLinks[3].style.color = "#00D646";
    }

    const experienceTitle = document.querySelector(".experience__title");
    if (experienceTitle.getBoundingClientRect().top < position) {
        experienceTitle.classList.add("show");
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[4].style.color = "#00D646";
        headerMobileLinks[4].style.color = "#00D646";
    }

    const projectsTitle = document.querySelector(".projects__title");
    if (projectsTitle.getBoundingClientRect().top < position) {
        projectsTitle.classList.add("show");
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[5].style.color = "#00D646";
        headerMobileLinks[5].style.color = "#00D646";
    }

    const projectsBot = document.querySelector(".projects__bot");
    if (projectsBot.getBoundingClientRect().top < position) {
        projectsBot.classList.add("show");
    }

    const projectsReact = document.querySelector(".projects-react__title");
    if (projectsReact.getBoundingClientRect().top < position) {
        projectsReact.classList.add("show");
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[6].style.color = "#00D646";
        headerMobileLinks[6].style.color = "#00D646";
    }

    const projectsReactItems = document.querySelectorAll(".projects-react__item");
    if (projectsReactItems[0].getBoundingClientRect().top < position) {
        projectsReactItems[0].classList.add("show");
    }

    const projectsReactBot = document.querySelector(".projects-react__bot");
    if (projectsReactBot.getBoundingClientRect().top < position) {
        projectsReactBot.classList.add("show");
    }

    const skillsItemLine = document.querySelectorAll(".skills__item_line");
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
    else if(skillsItemLine[0].getBoundingClientRect().top < position && window.innerWidth <= 450){
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

    const educatExpContHead = document.querySelectorAll(".educ-exper__cont_head")
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

    const CertificProjectsItem = document.querySelectorAll(".certific-projects__item");
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

    const educExperMobCont = document.querySelectorAll(".educ-exper-mob__cont");
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
for (let i = 0; i < 4; i++) {
    educExper[i].addEventListener("click", function educExperAdd(e) {
        e.stopPropagation()
        for (let j = 0; j < 4; j++) {
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
    })
}

// for experience
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
    })
}






// document
document.addEventListener("mousedown", () => {
    for (let i = 0; i < educExper.length; i++) {
        educExperInside[i].style.height = "0";
        educExper[i].style.backgroundColor = "rgb(62, 65, 68)";
        educExperArrow[i].style.backgroundColor = "rgb(72, 74, 77)";
        educExperIcon[i].style.transform = "rotate(0deg)";
    }
})