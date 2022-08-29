const smoothLinks = document.querySelectorAll("a[href^='.']");
console.log(smoothLinks);
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