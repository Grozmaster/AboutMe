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
    button[0].style.visibility = "visible";
    button[0].style.opacity = "1";
    button[0].style.transition = "visibility 0s linear 0s, opacity 500ms";

}

function popdown() {
    button[0].style.visibility = "hidden";
    button[0].style.opacity = "0";
    button[0].style.transition = " visibility 0s linear 300ms, opacity 500ms;";



}
