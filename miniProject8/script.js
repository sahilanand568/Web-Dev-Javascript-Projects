const Elements = document.querySelectorAll(".commonfeat");
const btnplay1 = document.getElementById("playbtn1");
const btnplay2 = document.getElementById("playbtn2");
const btnplay3 = document.getElementById("playbtn3");
const btnplay4 = document.getElementById("playbtn4");
const btnplay5 = document.getElementById("playbtn5");
const btnplay6 = document.getElementById("playbtn6");
const btnstop = document.getElementById("stopbtn");

btnplay1.addEventListener('click', playSong);
btnplay2.addEventListener('click', playSong);
btnplay3.addEventListener('click', playSong);
btnplay4.addEventListener('click', playSong);
btnplay5.addEventListener('click', playSong);
btnplay6.addEventListener('click', playSong);
btnstop.addEventListener('click', stopAll);

function playSong() {
    stopAll();
    this.children[0].play();
}

function stopAll() {
    Elements.forEach((element) =>{
         element.pause();
         element.currentTime="0";
    });
}
