let bitems1=document.querySelectorAll(".item1");
let bitems2=document.querySelectorAll(".item2");

const box1=document.getElementById("box1");
const box2=document.getElementById("box2");
box1.addEventListener('click',waveForm);

function waveForm(){
let count=0;
const sint=setInterval(function(){
    if(count==bitems1.length)
    clearInterval(sint);
    else{
        bitems1[count].classList.add("move");
        console.log(bitems1[count]);
        count++;
    }

},1000);

}