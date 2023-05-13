const elem=document.getElementById("hamburger");
const menuBar=document.getElementById("menuBar");
elem.addEventListener('click',function(){
    menuBar.classList.toggle("display");
    // menuBar.style.transition="height 4s ease-in";
})