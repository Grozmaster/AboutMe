// import { langMap } from "../js/lang";
const smoothLinks = document.querySelectorAll("a[href^='.']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const block = smoothLink.getAttribute("href");

        document.querySelector(block).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};


mybutton = document.getElementsByClassName('up__button');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton[0].style = "display: block";
    } else {
        mybutton[0].style = "display: none";
    }
};

const pop = document.querySelector('.popup');

function popup() {
    pop.classList.add('active');
};

function popdown() {
    pop.classList.remove('active');

};





const langMap = new Map([
    ["Hi, I'm Denis – UX/UI designer from Ukraine.I'm interested in design and everything connected with it.", "Привіт, я Денис – UX/UI дизайнер з України. Мене цікавить дизайн і все, що з ним пов'язано."],
    ["I'm studying at courses \"Web and mobile design interfaces\" in IT-Academy.", "Навчаюся на курсах \"Інтерфейси веб- та мобільного дизайну\" в IT-Academy."],
    ["Ready to implement excellent projects with wonderful people.", "Готовий реалізовувати відмінні проекти з чудовими людьми."],
    ["огурец", "500"],
    ["огурец", "500"],
    ["огурец", "500"],
    ["огурец", "500"],
    ["огурец", "500"]
]);


function setLang(text) {
    location.href = window.location.pathname + '#' + text;
    location.reload();

}


let hash = window.location.hash.substring(1)
// console.log(hash)


if (hash === 'ua') {
    let arr = document.querySelectorAll('*');
    // console.log(langMap.keys)
    for (const item of arr) {
        for (const map of langMap.keys()) {
            if (item.textContent === map) {
                item.innerHTML = langMap.get(map)
            }

        }

        // let name = document.querySelector('.portfolio')
        // name.innerText = 'FFF'



    }
}

