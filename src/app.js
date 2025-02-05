const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu-section");
const filter = document.querySelector(".grey-filter");


openBtn.addEventListener("click", ()=> {
    filter.classList.add("bg-Dark-grayish-blue");
    filter.classList.add("opacity-80");
    menu.style.width = "256px"
})

closeBtn.addEventListener("click", ()=> {
    filter.classList.remove("bg-Dark-grayish-blue");
    filter.classList.remove("opacity-80");
    menu.style.width = "0px"
})
