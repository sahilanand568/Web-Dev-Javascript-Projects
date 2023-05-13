
let boxes=document.querySelectorAll(".miniBox");
console.log(boxes);
let triggerHeight=(window.innerHeight*4)/5;
window.addEventListener("scroll",checkBox);
checkBox();
function checkBox(){

    boxes.forEach(function(box){
          
        if(box.getBoundingClientRect().top<triggerHeight)
        box.classList.add("show");
        else{
            box.classList.remove("show");
        }

    });
}






















