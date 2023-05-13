let target = document.getElementById("btn");
let tag = document.querySelectorAll(".item");
target.addEventListener('click', box);

function box() {
    let count = 0;
    let sint = setInterval(function () {
        if (count >= tag.length)
            clearInterval(sint);
        else {
            tag[count].classList.add("anim");
            count++;
        }
    }, 200)
}

