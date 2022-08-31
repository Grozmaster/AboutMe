// const smoothLinks = document.querySelectorAll("a[href^='.']");
// for (let smoothLink of smoothLinks) {
//     smoothLink.addEventListener("click", function (e) {
//         e.preventDefault();
//         const block = smoothLink.getAttribute("href");

//         document.querySelector(block).scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         });
//     });
// };


// mybutton = document.getElementsByClassName('up__button');

// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         mybutton[0].style = "display: block";
//     } else {
//         mybutton[0].style = "display: none";
//     }
// };

// const pop = document.querySelector('.popup');

// function popup() {
//     pop.classList.add('active');
// };

// function popdown() {
//     pop.classList.remove('active');

// };







function setLang(text) {
    location.href = window.location.pathname + '#' + text;
    location.reload();
}


