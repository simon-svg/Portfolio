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




// buttons animation
function create(what, where, classname) {
    const item = document.createElement(what);
    item.setAttribute("class", classname);
    where.append(item)
    return item;
}
const btns = document.querySelectorAll(".btn");
btns.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
        const Dot = create("span", item, "btn__dot");
        Dot.style.top = e.offsetY + "px";
        Dot.style.left = e.offsetX + "px";
        item.addEventListener("mouseleave", (e) => {
            Dot.style.top = e.offsetY + "px";
            Dot.style.left = e.offsetX + "px";
            Dot.style.animation = "btnDotAnimNone linear .3s forwards";
            setTimeout(() => {
                item.querySelectorAll(".btn__dot").forEach((item2) => {
                    item2.remove();
                })
            }, 300)
        })
    })
})






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
const contactTitle = document.querySelector(".contact__title");
const arrInfo = ["Y", "e", "a", "r", " ", "o", "f", " ", "b", "i", "r", "t", "h", " ", "-", " ", "F", "e", "b", "r", "u", "a", "r", "y", " ", "1", "7", ".", " ", "2", "0", "0", "0", '<span class="green">.</span>'];
let indexInfo = 0;
let indexInfoBool = true;
const arrEmail = ["G", "m", "a", "i", "l", " ", "-", " ", "s", "i", "m", "o", "n", "k", "a", "r", "a", "p", "e", "t", "y", "a", "n", "6", "0", "5", "@", "g", 'm', "a", "i", "l", ".", "c", "o", "m", '<span class="green">.</span>'];
let indexEmail = 0;
const arrPhone = ["P", "h", "o", "n", "e", " ", "N", "u", "m", "b", "e", "r", " ", "+", "(", "3", "7", "4", ")", "5", "5", "-", "3", "2", "-", "1", "4", "-", "1", "3", '<span class="green">.</span>'];
let indexPhone = 0;


window.addEventListener("scroll", (e) => {
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
            skillsItemLine[6].style.width = "17%";
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



    if (contactTitle.getBoundingClientRect().top < position) {
        contactTitle.classList.add("show");
        for (let i = 0; i < headerLinks.length; i++) {
            headerLinks[i].style.color = "rgb(160, 183, 202)";
            headerMobileLinks[i].style.color = "rgb(160, 183, 202)";
        }
        headerLinks[7].style.color = "#00D646";
        headerMobileLinks[7].style.color = "#00D646";
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
                educExper[j].style.backgroundColor = "var(--inside-item)";
                educExperArrow[j].style.backgroundColor = "var(--responseColor)";
                educExperIcon[j].style.transform = "rotate(0deg)";
            } else {
                educExperInside[i].style.height = "110px";
                educExper[i].style.backgroundColor = "var(--responseColor)";
                educExperArrow[i].style.backgroundColor = "var(--inside-item)";
                educExperIcon[i].style.transform = "rotate(180deg)";
            }
        }
        if (selectedElem === educExper[i]) {
            educExperInside[i].style.height = "0";
            educExper[i].style.backgroundColor = "var(--inside-item)";
            educExperArrow[i].style.backgroundColor = "var(--responseColor)";
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
                educExper[j].style.backgroundColor = "var(--inside-item)";
                educExperArrow[j].style.backgroundColor = "var(--responseColor)";
                educExperIcon[j].style.transform = "rotate(0deg)";
            }
            else {
                educExperInside[i].style.height = "110px";
                educExper[i].style.backgroundColor = "var(--responseColor)";
                educExperArrow[i].style.backgroundColor = "var(--inside-item)";
                educExperIcon[i].style.transform = "rotate(180deg)";
            }
        }
        if (selectedElem2 === educExper[i]) {
            educExperInside[i].style.height = "0";
            educExper[i].style.backgroundColor = "var(--inside-item)";
            educExperArrow[i].style.backgroundColor = "var(--responseColor)";
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
        educExper[i].style.backgroundColor = "var(--inside-item)";
        educExperArrow[i].style.backgroundColor = "var(--responseColor)";
        educExperIcon[i].style.transform = "rotate(0deg)";
    }
    selectedElem = null;
    selectedElem2 = null;
})





// form validation 
const data = {
    name: {
        value: "",
        valid: false,
        touched: false,
    },
    email: {
        value: "",
        valid: false,
        touched: false,
    },
    message: {
        value: "",
        valid: false,
        touched: false,
    },
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const form = document.querySelector('.form');
const fields = form.querySelectorAll('.form__input');
const formBtn = document.querySelector(".form__btn");

function validete(field) {
    switch (field.name) {
        case "name":
            return field.value.length > 0;
        case "email":
            return validateEmail(field.value);
        case "message":
            return 0 < field.value.length && field.value.length < 300;
    }
}

fields.forEach((field) => {
    field.addEventListener('input', (e) => {
        data[e.target.name].value = e.target.value;
        if (data[e.target.name].touched === false) {
            data[e.target.name].touched = true;
        }
        data[e.target.name].valid = validete(e.target);
    });
});

fields.forEach((field, i) => {
    field.addEventListener("input", (e) => {
        if (data[field.name].touched) {
            if (data[field.name].valid === false) {
                field.style["border-bottom"] = "5px inset red";
            }
            else {
                field.style["border-bottom"] = "5px inset #00D646";
            }
        }
        if (data.name.valid && data.email.valid && data.message.valid) {
            formBtn.setAttribute("class", "form__btn adjective")
            formBtn.removeAttribute("disabled", "false")
        }
        else {
            formBtn.setAttribute("class", "form__btn disabled")
            formBtn.setAttribute("disabled", "true")
        }
    })
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { name, email, message } = data;

    const body = {
        name: name.value,
        email: email.value,
        message: message.value
    };

    createMessage(body)
})

function createMessage(message) {
    return fetch('https://portfolio-66dac.firebaseio.com/messages.json', {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            formBtn.setAttribute("class", "form__btn disabled")
            formBtn.setAttribute("disabled", "true")
            return response.json()
        })
        .then((response) => {
            message.id = response.name;
            return message;
        })
        .then(() => {
            fields.forEach((field) => {
                field.value = '';
                data[field.name].touched = false;
                data[field.name].valid = false;
                data[field.name].value = '';
                field.style["border-bottom"] = "5px inset #ffffff";
            });
        })
}



// paralax mouse move
const dots = document.querySelectorAll(".home__cont_img");
document.addEventListener("mousemove", (e) => {
    dots.forEach(layer => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerHeight - e.pageY * speed) / 120;

        layer.style.transform = `translate(${x}px, ${y}px)`
    })
})











// header navigation button
const headerBtn = document.querySelector(".header__btn");
const recognizer = new webkitSpeechRecognition();
recognizer.interimResults = true;
recognizer.lang = 'en-US';
let all = "";
const synth = window.speechSynthesis;


recognizer.onresult = function (event) {
    let result = event.results[event.resultIndex];
    all = result[0].transcript;
    if (result.isFinal) {
        if (result[0].transcript == "Home" || result[0].transcript == "home" || result[0].transcript == "HOME") {
            document.querySelector(".home__title").scrollIntoView()
        }
        else if (result[0].transcript == "Skills" || result[0].transcript == "skills" || result[0].transcript == "kids" || result[0].transcript == "he's" || result[0].transcript == "Chiefs" || result[0].transcript == "keys" || result[0].transcript == "cheese" || result[0].transcript == "chief" || result[0].transcript == "Kansas" || result[0].transcript == "cuse" || result[0].transcript == "excuse") {
            skillsTitle.scrollIntoView()
        }
        else if (result[0].transcript == "education" || result[0].transcript == "Education") {
            educationTitle.scrollIntoView()
        }
        else if (result[0].transcript == "certificate" || result[0].transcript == "Certificate" || result[0].transcript == "certification") {
            certificateTitle.scrollIntoView()
        }
        else if (result[0].transcript == "experience" || result[0].transcript == "Experience" || result[0].transcript == "aspasians") {
            experienceTitle.scrollIntoView()
        }
        else if (result[0].transcript == "projects" || result[0].transcript == "Projects" || result[0].transcript == "project") {
            projectsTitle.scrollIntoView()
        }
        else if (result[0].transcript == "project react" || result[0].transcript == "Projects React" || result[0].transcript == "projects react") {
            projectsReact.scrollIntoView()
        }
        else if (result[0].transcript == "contact" || result[0].transcript == "Contact" || result[0].transcript == "contacts") {
            contactTitle.scrollIntoView()
        }
        else {
            const utterance1 = new SpeechSynthesisUtterance(`sorry you say ${all}`);
            synth.speak(utterance1);
        }
    }
    else {
        console.log('result ', result[0].transcript);
    }
};
headerBtn.addEventListener("click", () => {
    recognizer.start();
})








function light() {
    sections[0].setAttribute("data-image-src", "assets/media/img/bg/lightMode/2.png")
    sections[1].setAttribute("data-image-src", "assets/media/img/bg/lightMode/1.png")
    sections[2].setAttribute("data-image-src", "assets/media/img/bg/lightMode/4.png")
    sections[3].setAttribute("data-image-src", "assets/media/img/bg/lightMode/3.png")
    sections[4].setAttribute("data-image-src", "assets/media/img/bg/lightMode/6.png")
    sections[5].setAttribute("data-image-src", "assets/media/img/bg/lightMode/5.png")
    sections[6].setAttribute("data-image-src", "assets/media/img/bg/lightMode/7.png")
    sections[7].setAttribute("data-image-src", "assets/media/img/bg/lightMode/8.png")
    html.style.setProperty("--dark-gray", "#ffffff");
    html.style.setProperty("--gray-hover", "#cccccc");
    html.style.setProperty("--inside-item", "#979797");
    html.style.setProperty("--responseColor", "#a8a8a8");
    educExperArrow.forEach((item, i) => {
        item.style.backgroundColor = "#ffffff";
        educExperIcon[i].style.color = "#000000";
    })
    footerInside.style["background-image"] = "linear-gradient(to right, var(--green), var(--green) 49%, var(--inside-item) 50%)";
}
function dark() {
    sections[0].setAttribute("data-image-src", "assets/media/img/bg/2.jpg")
    sections[1].setAttribute("data-image-src", "assets/media/img/bg/4.jpg")
    sections[2].setAttribute("data-image-src", "assets/media/img/bg/7.jpg")
    sections[3].setAttribute("data-image-src", "assets/media/img/bg/3.jpg")
    sections[4].setAttribute("data-image-src", "assets/media/img/bg/9.jpg")
    sections[5].setAttribute("data-image-src", "assets/media/img/bg/1.jpg")
    sections[6].setAttribute("data-image-src", "assets/media/img/bg/8.jpg")
    sections[7].setAttribute("data-image-src", "assets/media/img/bg/6.jpg")
    html.style.setProperty("--dark-gray", "#46484A");
    html.style.setProperty("--gray-hover", "#565758");
    html.style.setProperty("--inside-item", "#3e4144");
    educExperArrow.forEach((item) => {
        item.style.backgroundColor = "var(--responseColor) !important";
    })
}



headerLight.addEventListener("click", () => {
    loader.style.opacity = "1";
    loader.style.display = "flex";
    document.querySelector(".loader__infinity").style.display = "block";
    if (headerLightBool) {
        headerLightIcon.setAttribute("class", "header__light_icon fas fa-moon");
        localStorage.setItem("portfolioLight", "moon");
        light();
    }
    else {
        headerLightIcon.setAttribute("class", "header__light_icon fas fa-sun");
        localStorage.setItem("portfolioLight", "sun");
        dark();
    }
    headerLightBool = !headerLightBool;
    location.reload();
})

if (localStorage.getItem("portfolioLight") == "sun") {
    headerLightIcon.setAttribute("class", "header__light_icon fas fa-sun");
    headerLightBool = true;
    dark();
}
else if (localStorage.getItem("portfolioLight") == "moon") {
    headerLightIcon.setAttribute("class", "header__light_icon fas fa-moon");
    headerLightBool = false;
    light();
}