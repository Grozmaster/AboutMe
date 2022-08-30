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
}
const button = document.getElementsByClassName('popup');
function popup() {
    button[0].style = "display: block";
}

function popdown() {
    button[0].style = "display: none";
}
