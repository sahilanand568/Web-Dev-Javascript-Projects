const x=document.querySelectorAll(".active");

x.forEach((y)=>{
    y.addEventListener("click",function(){
    removeClass();
    y.classList.add('selected');
})
});

function removeClass(){
    x.forEach((y)=>{
        y.classList.remove('selected');
    })
console.log(x);
}