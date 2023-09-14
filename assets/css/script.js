const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
const inicioLink = document.querySelector("li.page1 a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current) && li !== inicioLink.parentNode) {
            li.classList.add("active");
        }
    });
});

inicioLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});