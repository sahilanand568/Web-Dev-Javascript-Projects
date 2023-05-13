const elem = document.getElementById("hamburger");
const list = document.getElementById("listItems");

elem.addEventListener('click', function () {
    list.classList.toggle("display");
})