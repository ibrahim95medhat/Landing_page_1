let sections = document.querySelectorAll(".sec");
let navBarList = document.getElementById("navlist");
let fragment = document.createDocumentFragment();
let navBar = document.getElementById("navbar");



// building nav bar dynamically for each section.
sections.forEach((element, index) => {
    let list = document.createElement("li");
    list.textContent = `section${index+1}`;
    navBarList.appendChild(list);
    list.classList.add("list");
    list.setAttribute("data-link", `cl${index+1}`);

});
let lists = document.querySelectorAll('[data-link]');

// on scroll each section title is highlighted also link releated to it in nav_bar is highlighted too.
window.onscroll = function() {
    sections.forEach(element => {
        if ((element.getBoundingClientRect().top + element.getBoundingClientRect().top * 2 / 3) < window.innerHeight) {
            element.children[1].style.cssText = "background-color:gray;";
            navBar.classList.add("snav_bar");
            lists.forEach(element1 => {
                if (element1.getAttribute("data-link") === element.getAttribute("id")) {
                    element1.style.cssText = "background-color:gray;";

                } else {
                    element1.style.cssText = "background-color:rgba(0, 119, 255, 0.41);";
                }
            });
        } else {
            element.children[1].style.cssText = "background-color:rgba(0, 119, 255, 0.41);";
        }

    });
};

// on mouse enter for each link in nav_bar ,the section related to it will be scrolled into view.

lists.forEach(element => {

    element.onclick = function() {

        let section = document.getElementById(element.getAttribute("data-link"))
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

});